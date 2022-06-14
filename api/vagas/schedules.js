const amazonJobs = require('./jobs/amazonJobs').default;
const mercadoLivreJobs = require('./jobs/mercadoLivreJobs');
const googleJobs = require('./jobs/googleJobs');
const gupySaveJobs = require('./jobs/gupyJobs');

const execute = () => {
  googleJobs()
  setTimeout(() => amazonJobs(), 10000);
  setTimeout(() => mercadoLivreJobs(), 20000);
  setTimeout(() => gupySaveJobs(), 30000)
}

module.exports = execute;