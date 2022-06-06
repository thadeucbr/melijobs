const { default: axios } = require('axios');

const fs = require('fs');

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

  const savedJobs = JSON.parse(fs.readFileSync('jobs.json'));
  
  jobs.filter(newJob => {
    const exist = savedJobs.find(oldJob => newJob.id === oldJob.id)
    if(exist) return
    savedJobs.push(newJob)
  })

  fs.writeFileSync('jobs.json', JSON.stringify(savedJobs));

  console.log(Date())
  console.log('Google(BR): Busca por vaga realizada.')
};

module.exports = googleSaveJobs;