const amazonJobs = require('./jobs/amazonJobs');
const mercadoLivreJobs = require('./jobs/mercadoLivreJobs');
const googleJobs = require('./jobs/googleJobs');

const execute = () => {
  googleJobs()
  setTimeout(() => amazonJobs(), 10000);
  setTimeout(() => mercadoLivreJobs(), 20000);
}

module.exports = execute;