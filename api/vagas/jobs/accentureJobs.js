const puppeteer = require('puppeteer');
const vagaModel = require('../models/vagasModel');

const accentureSaveJobs = async () => {
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
  await page.goto(
    'https://www.accenture.com/br-pt/careers/jobsearch?c=car_glb_brandexpressiongoogle_12743634&n=psgs_1221&gclid=EAIaIQobChMIj9_tkvC0-AIVC-mRCh2JbgB4EAAYASABEgLD3PD_BwE&gclsrc=aw.ds&jk=software&sb=0&pg=1&vw=1&is_rj=0&pd=past%20week'
  );
  const jobs = await page.evaluate(() => {
    const arrObj = [];
    document.querySelectorAll('.job-listing-content').forEach((vaga) =>
      arrObj.push({
        name: vaga.querySelector('a h3').innerText,
        company: 'Accenture',
        url: vaga.querySelector('a').href,
        date: '',
        location: vaga.querySelector('p').innerText,
        sent: false,
        id: '',
      })
    );
    return arrObj;
  });
  await browser.close();

  await Promise.all(
    jobs.map(async (job) => {
      const jobExist = await vagaModel.findOne({ url: job.url });
      if (jobExist) return;
      vagaModel.create(job);
    })
  );
  console.log('Vagas da accenture atualizadas com sucesso.');
};

module.exports = accentureSaveJobs;
