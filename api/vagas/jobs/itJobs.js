const vagaModel = require('../models/vagasModel');
const { default: axios } = require('axios');


const URL = 'https://api.itjobs.pt/job/search.json?api_key=b50429fee8f3f990c64f6054f0a6390a&q=nodejs&limit=30'

const itJobs = async () => {
  const response = await axios.get(URL).catch(err => console.log(err.message));

  const jobs = response.data.results.map((job) => ({
    id: job.id,
    company: job.company.name,
    name: job.title,
    sent: false,
    url: `https://www.itjobs.pt/oferta/${job.id}`,
    date: job.publishedAt,
    location: `${job.company.address} (Remoto)`
  }));

  await Promise.all(jobs.map(async (job) => {
    const jobExist = await vagaModel.findOne({ id: job.id })
    if(jobExist) return;
    vagaModel.create(job);
  }));
  
  console.log(Date())
  console.log('itJobs: Busca por vaga realizada.')
};

module.exports = itJobs;
