const { default: axios } = require('axios')

const fs = require('fs')

const verifyJobs = async () => {
  const jobs = JSON.parse(fs.readFileSync('jobs.json'))
  const sentJobs = await Promise.all(jobs.map(async (job) => {
    if(job.sent === false) {
      await sendText(job);
      console.log('Vaga enviada')
      job.sent = true;
      return job;
    }
  }));
  fs.writeFileSync('jobs.json', JSON.stringify(sentJobs))
}

const sendText = async (content) => {
  await axios.post('http://localhost:8002/sendText', {
    "args": {
      "to": "120363025308814807@g.us",
      "content": `
      Empresa: ${content.company}
      Vaga: ${content.name}
      Local: ${content.location}
      Url: ${content.url}
      Publicada em: ${content.date}
      `
    }
  }).catch((err) => console.log(err))
}

module.exports = verifyJobs;