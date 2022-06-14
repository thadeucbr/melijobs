const amazonJobs = require('./jobs/amazonJobs');
const mercadoLivreJobs = require('./jobs/mercadoLivreJobs');
const googleJobs = require('./jobs/googleJobs');
const gupySaveJobs = require('./jobs/gupyJobs');
const verifyJobs = require('./jobs/sendJobs');

const execute = () => {
  googleJobs()
  setTimeout(() => amazonJobs(), 10000);
  setTimeout(() => mercadoLivreJobs(), 20000);
  setTimeout(() => gupySaveJobs(), 30000)
  setTimeout(() => verifyJobs(), 40000)
}

module.exports = execute;