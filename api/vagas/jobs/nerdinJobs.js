const puppeteer = require('puppeteer');
const vagaModel = require('../models/vagasModel');
const validJob = require('../utils/validJob');

const nerdinSaveJobs = async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: [
        "--disable-gpu",
        "--disable-dev-shm-usage",
        "--disable-setuid-sandbox",
        "--no-sandbox",
    ]
});
  const page = await browser.newPage();
  await page.goto(
    'https://www.nerdin.com.br/vagas?CodigoCidade=0&CodigoEspecialidade=31,25&CodigoVaga=&CodigoEmpresa=0'
  );
  const jobs = await page.evaluate(() => {
    const arrObj = [];
    document.querySelectorAll('#divListaVagas .container').forEach((vaga) =>
      arrObj.push({
        name: vaga.querySelectorAll('span')[0].innerText,
        company: vaga.querySelectorAll('span')[1].innerText,
        url: vaga.querySelector('a').href,
        date: vaga.querySelectorAll('span')[3].innerText,
        location: vaga.querySelectorAll('span')[2].innerText,
        sent: false,
        id: '',
      })
    );
    return arrObj;
  });
  await browser.close();

  await Promise.all(
    jobs.map(async (job) => {
      if(validJob(job.name)) {
        const jobExist = await vagaModel.findOne({ url: job.url });
        if (jobExist) return;
        vagaModel.create(job);
      }
    })
  );
  console.log('Nerdin: Busca por vaga realizada.')
};

module.exports = nerdinSaveJobs;
