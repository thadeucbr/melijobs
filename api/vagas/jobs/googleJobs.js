const vagaModel = require('../models/vagasModel');
const { default: axios } = require('axios');

const URL = 'https://careers.google.com/api/v3/search/?distance=50&employment_type=FULL_TIME&has_remote=true&location=Brazil&q=&skills=Developer'

const googleSaveJobs = async () => {
  const response = await axios.get(URL).catch(err => console.log(err.message));

  const jobs = response.data.jobs.map(({ id, publish_date, title, apply_url, locations }) => ({
    id,
    company: 'Google(BR)',
    name: title,
    sent: false,
    url: apply_url,
    date: publish_date,
    location: locations[0]?.display
  }));

  await Promise.all(jobs.map(async (job) => {
    const jobExist = await vagaModel.findOne({ id: job.id })
    if(jobExist) return;
    vagaModel.create(job);
  }));

  console.log(Date())
  console.log('Google(BR): Busca por vaga realizada.')
};

module.exports = googleSaveJobs;