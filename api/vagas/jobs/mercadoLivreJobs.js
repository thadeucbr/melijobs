const vagaModel = require('../models/vagasModel');
const { default: axios } = require('axios');

const mercadoLivreJobs = async () => {
  const response = await axios.get(
    'https://mercadolibre.eightfold.ai/api/apply/v2/jobs?domain=mercadolibre.com&profile=&query=bootcamp&location=Brazil&domain=mercadolibre.com&triggerGoButton=false&triggerGoButton=true'
  ).catch(err => console.log(err.message));

  const jobs = response.data.positions.map(({ id, name, location, t_create }) => ({
    id,
    company: 'MercadoLivre',
    date: t_create,
    name,
    location,
    sent: false,
    url: `https://mercadolibre.eightfold.ai/careers?query=bootcamp&location=Sudeste%2CBrazil&pid=${id}&domain=mercadolibre.com&triggerGoButton=false&triggerGoButton=true`,
  }));

  await Promise.all(jobs.map(async (job) => {
    const jobExist = await vagaModel.findOne({ id: job.id })
    if(jobExist) return;
    vagaModel.create(job);
  }));

  console.log(Date())
  console.log('MercadoLivre: Busca por vaga realizada.')
};

module.exports = mercadoLivreJobs;