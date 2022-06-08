const { default: axios } = require('axios');

const fs = require('fs');

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

  const savedJobs = JSON.parse(fs.readFileSync('jobs.json'));
  
  jobs.filter(newJob => {
    const exist = savedJobs.find(oldJob => newJob.id === oldJob.id)
    if(exist) return
    savedJobs.push(newJob)
  })

  fs.writeFileSync('jobs.json', JSON.stringify(savedJobs));

  console.log(Date())
  console.log('Gupy: Busca por vaga realizada.')
};

module.exports = gupySaveJobs;