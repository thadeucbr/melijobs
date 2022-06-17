const amazonJobs = require('./jobs/amazonJobs');
const mercadoLivreJobs = require('./jobs/mercadoLivreJobs');
const googleJobs = require('./jobs/googleJobs');
const gupySaveJobs = require('./jobs/gupyJobs');
const verifyJobs = require('./jobs/sendJobs');
const nerdinSaveJobs = require('./jobs/nerdinJobs');
const accentureSaveJobs = require('./jobs/accentureJobs');

const execute = () => {
  googleJobs()
  setTimeout(() => amazonJobs(), 10*1000);
  setTimeout(() => mercadoLivreJobs(), 20*1000);
  setTimeout(() => gupySaveJobs(), 30*1000);
  setTimeout(() => nerdinSaveJobs(), 40*1000)
  setTimeout(() => accentureSaveJobs(), 60*1000)
  setTimeout(() => verifyJobs(), 90*1000)
}

module.exports = execute;