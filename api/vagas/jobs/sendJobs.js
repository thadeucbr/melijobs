const vagaModel = require('../models/vagasModel');

const verifyJobs = async () => {
  const jobs = await vagaModel.find();
  await Promise.all(jobs.map(async (job) => {
    if(job.sent === false) {
      await sendText(job);
      console.log('Vaga enviada')
    }
    await vagaModel.findOneAndUpdate({ _id: job._id }, { sent: true })
  }));
}

const sendText = async (content) => {
  await axios.post('http://whatsapp:3339/sendText', {
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