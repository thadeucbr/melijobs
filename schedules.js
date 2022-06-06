const amazonJobs = require('./jobs/amazonJobs');
const mercadoLivreJobs = require('./jobs/mercadoLivreJobs');
const googleJobs = require('./jobs/googleJobs');
const sendJobs = require('./jobs/sendJobs')

const execute = () => {
  setTimeout(() => amazonJobs(), 10000);
  setTimeout(() => mercadoLivreJobs(), 20000);
  setTimeout(() => googleJobs, 30000)
  // setTimeout(() => sendJobs(), 40000)
}

execute()
module.exports = execute;