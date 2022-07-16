const amazonJobs = require('./jobs/amazonJobs');
const mercadoLivreJobs = require('./jobs/mercadoLivreJobs');
const googleJobs = require('./jobs/googleJobs');
const gupySaveJobs = require('./jobs/gupyJobs');
const verifyJobs = require('./jobs/sendJobs');
const nerdinSaveJobs = require('./jobs/nerdinJobs');
const accentureSaveJobs = require('./jobs/accentureJobs');
const itJobs = require('./jobs/itJobs');
const apinfoSaveJobs = require('./jobs/apinfo');
const citSaveJobs = require('./jobs/citJobs');
const linkedinJobs = require('./jobs/linkedinJobs');

const execute = async () => {
  await Promise.all([
    amazonJobs(),
    mercadoLivreJobs(),
    googleJobs(),
    gupySaveJobs(),
    nerdinSaveJobs(),
    accentureSaveJobs(),
    itJobs(),
    apinfoSaveJobs(),
    citSaveJobs(),
    linkedinJobs()
  ]
  );
  console.log('Busca de vagas finalizada.')
  verifyJobs()
};

module.exports = execute;
