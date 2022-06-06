const { default: axios } = require('axios');

const fs = require('fs');

const saveJobs = async () => {
  const response = await axios.get(
    'https://mercadolibre.eightfold.ai/api/apply/v2/jobs?domain=mercadolibre.com&profile=&query=bootcamp&location=Brazil&domain=mercadolibre.com&triggerGoButton=false&triggerGoButton=true'
  ).catch(err => console.log(err.message));

  const jobs = response.data.positions.map(({ id, name, location, t_create }) => ({
    id,
    date: t_create,
    name,
    location,
    sent: false,
    url: `https://mercadolibre.eightfold.ai/careers?query=bootcamp&location=Sudeste%2CBrazil&pid=${id}&domain=mercadolibre.com&triggerGoButton=false&triggerGoButton=true`,
  }));

  const savedJobs = JSON.parse(fs.readFileSync('jobs.json'));
  
  jobs.filter(newJob => {
    const exist = savedJobs.find(oldJob => newJob.id === oldJob.id)
    if(exist) return
    savedJobs.push(newJob)
  })

  fs.writeFileSync('jobs.json', JSON.stringify(savedJobs));

  console.log(Date())
  console.log('MercadoLivre: Busca por vaga realizada.')
};

module.exports = saveJobs;