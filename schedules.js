const amazonJobs = require('./jobs/amazonJobs');
const mercadoLivreJobs = require('./jobs/mercadoLivreJobs');
const googleJobs = require('./jobs/googleJobs');
const oracleJobs = require('./jobs/oracleJobs');
const sendJobs = require('./jobs/sendJobs')

const execute = () => {
  oracleJobs()
  setTimeout(() => amazonJobs(), 10000);
  setTimeout(() => mercadoLivreJobs(), 20000);
  setTimeout(() => googleJobs, 30000)
  setTimeout(() => sendJobs(), 40000)
}

module.exports = execute;