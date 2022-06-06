const amazonJobs = require('./jobs/amazonJobs');
const mercadoLivreJobs = require('./jobs/mercadoLivreJobs');
const googleJobs = require('./jobs/googleJobs');
const verifyJobs = require('./jobs/sendJobs')

const execute = () => {
  setTimeout(() => amazonJobs(), 10000);
  setTimeout(() => mercadoLivreJobs(), 20000);
  setTimeout(() => googleJobs(), 30000)
  setTimeout(() => verifyJobs(), 40000)
}

module.exports = execute;