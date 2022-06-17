const amazonJobs = require('./jobs/amazonJobs');
const mercadoLivreJobs = require('./jobs/mercadoLivreJobs');
const googleJobs = require('./jobs/googleJobs');
const gupySaveJobs = require('./jobs/gupyJobs');
const verifyJobs = require('./jobs/sendJobs');
const nerdinSaveJobs = require('./jobs/nerdinJobs');

const execute = () => {
  googleJobs()
  setTimeout(() => amazonJobs(), 10000);
  setTimeout(() => mercadoLivreJobs(), 20000);
  setTimeout(() => gupySaveJobs(), 30000);
  setTimeout(() => nerdinSaveJobs(), 40000)
  setTimeout(() => verifyJobs(), 60000)
}

module.exports = execute;