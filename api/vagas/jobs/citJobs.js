const puppeteer = require('puppeteer');
const vagaModel = require('../models/vagasModel');

const citSaveJobs = async () => {
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
  await page.goto('https://ciandt.com/br/pt-br/carreiras/oportunidades');
  await page.waitForSelector('.opprtunity-item');

const jobs = await page.evaluate(() => {
    const arrObj = [];
    document.querySelectorAll('.opprtunity-item:not(hidden)').forEach((vaga) =>
      arrObj.push({
        name: vaga.querySelector('h2').innerText,
        company: 'CI&T',
        url: vaga.querySelector('a').href,
        date: '',
        location: '',
        sent: false,
        id: vaga.querySelector('a').href,
      })
    );
    return arrObj.filter(
      (vaga) =>
        vaga.name.toLowerCase().includes('bootcamp') ||
        vaga.name.toLowerCase().includes('node') ||
        vaga.name.toLowerCase().includes('javascript')
    );
  });

  await browser.close();

  await Promise.all(
    jobs.map(async (job) => {
      const jobExist = await vagaModel.findOne({ url: job.url });
      if (jobExist) return;
      vagaModel.create(job);
    })
  );
  console.log('CI&T: Busca por vaga realizada.')
};

module.exports = citSaveJobs;
