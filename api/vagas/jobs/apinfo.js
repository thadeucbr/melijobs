const puppeteer = require('puppeteer');
const vagaModel = require('../models/vagasModel');

const apinfoSaveJobs = async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--disable-gpu',
      '--disable-dev-shm-usage',
      '--disable-setuid-sandbox',
      '--no-sandbox',
    ],
  });
  const page = await browser.newPage();
  await page.goto('https://www.apinfo.com/apinfo/');

  await page.waitForSelector('input[name=keyw]');
  await page.$eval('input[name=keyw]', (el) => (el.value = 'nodejs'));
  await page.click('input[type="submit"]');
  await page.waitForSelector('#vagas');

  const jobs = await page.evaluate(() => {
    const arrObj = [];
    document.querySelectorAll('.box-vagas').forEach((vaga) =>
      arrObj.push({
        name: vaga.querySelector('.cargo').innerText,
        company: vaga
          .querySelectorAll('.texto p')[1]
          .innerText.split('\n', 1)[0]
          .replace('Empresa .....: ', ''),
        url: vaga.querySelector('a').href,
        date: vaga.querySelector('.info-data').innerText,
        location: '',
        sent: false,
        id: vaga
          .querySelectorAll('.texto p')[1]
          .innerText.split('\n', 2)[1]
          .replace('Código .......: ', ''),
      })
    );
    return arrObj;
  });
  await browser.close();

  await Promise.all(
    jobs.map(async (job) => {
      if(validJob(job.name)) {
        const jobExist = await vagaModel.findOne({ id: job.id });
        if (jobExist) return;
        vagaModel.create(job);
      }
    })
  );
  console.log('Apinfo: Busca por vaga realizada.');
};

module.exports = apinfoSaveJobs;
