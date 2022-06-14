const vagaModel = require('../models/vagasModel');
const { default: axios } = require('axios');

const URL = 'https://portal.api.gupy.io/api/job?name=Desenvolvedor%20back-end&offset=0&limit=20'

const gupySaveJobs = async () => {
  const response = await axios.get(URL).catch(err => console.log(err.message));

  const jobs = response.data.data.map(({ id, name, careerPageName, publishedDate, isRemoteWork, jobUrl, city, state }) => isRemoteWork && ({
    id,
    company: careerPageName,
    name,
    sent: false,
    url: jobUrl,
    isRemoteWork,
    date: publishedDate,
    location: `${city} - ${state}`
  }));

  const filteredJobs = jobs.filter(job => job !== false);

    await Promise.all(filteredJobs.map(async (job) => {
      const jobExist = await vagaModel.findOne({ id: job.id })
      if(jobExist) return;
      vagaModel.create(job);
    }));

  console.log(Date())
  console.log('Gupy: Busca por vaga realizada.')
};

module.exports = gupySaveJobs;