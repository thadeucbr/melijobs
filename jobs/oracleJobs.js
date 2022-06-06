const { default: axios } = require('axios');

const fs = require('fs');

const URL = 'https://oracle.taleo.net/careersection/rest/jobboard/searchjobs?lang=en&portal=101430233'

const oracleSaveJobs = async () => {
  const response = await axios.get(URL).catch(err => console.log(err.message));

  const jobs = response.data.jobs.map(({ jobId, column }) => ({
    id: jobId,
    company: 'Oracle(BR)',
    name: column[0],
    sent: false,
    url: 'https://oracle.taleo.net/careersection/2/jobsearch.ftl?f=LOCATION(362940031553)',
    date: 'Não divulgado',
    location: column[3]
  }));

  const savedJobs = JSON.parse(fs.readFileSync('jobs.json'));
  
  jobs.filter(newJob => {
    const exist = savedJobs.find(oldJob => newJob.id === oldJob.id)
    if(exist) return
    savedJobs.push(newJob)
  })

  fs.writeFileSync('jobs.json', JSON.stringify(savedJobs));

  console.log(Date())
  console.log('Oracle(BR): Busca por vaga realizada.')
};

module.exports = oracleSaveJobs;