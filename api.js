const express = require('express');
const nodeCron = require('node-cron');
const saveJobs = require('./saveJobs');
const verifyJobs = require('./sendJobs');

const app = express();

nodeCron.schedule('0 8 * * *', () => saveJobs(), {
  scheduled: true,
  timezone: 'America/Sao_Paulo',
});

nodeCron.schedule('4 8 * * *', () => verifyJobs(), {
  scheduled: true,
  timezone: 'America/Sao_Paulo',
});

nodeCron.schedule('44 21 * * *', () => saveJobs(), {
  scheduled: true,
  timezone: 'America/Sao_Paulo',
});

nodeCron.schedule('45 21 * * *', () => verifyJobs(), {
  scheduled: true,
  timezone: 'America/Sao_Paulo',
});

app.listen(3005, () => console.log('API rodando na porta 3005'));