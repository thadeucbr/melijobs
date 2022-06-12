const express = require('express');
const nodeCron = require('node-cron');
const execute = require('./schedules');
const verifyJobs = require('./jobs/sendJobs')
const fs = require('fs');
const sayHello = require('./utils/helloWhatsapp');

const app = express();

fs.access('jobs.json', () => fs.writeFileSync('jobs.json', '[]'))

nodeCron.schedule('58 23 * * *', () => execute(), {
  scheduled: true,
  timezone: 'America/Sao_Paulo',
});

nodeCron.schedule('59 23 * * *', () => verifyJobs(), {
  scheduled: true,
  timezone: 'America/Sao_Paulo',
});

nodeCron.schedule('0 6 * * *', () => execute(), {
  scheduled: true,
  timezone: 'America/Sao_Paulo',
});

nodeCron.schedule('1 6 * * *', () => verifyJobs(), {
  scheduled: true,
  timezone: 'America/Sao_Paulo',
});

nodeCron.schedule('0 12 * * *', () => execute(), {
  scheduled: true,
  timezone: 'America/Sao_Paulo',
});

nodeCron.schedule('1 12 * * *', () => verifyJobs(), {
  scheduled: true,
  timezone: 'America/Sao_Paulo',
});

nodeCron.schedule('0 18 * * *', () => execute(), {
  scheduled: true,
  timezone: 'America/Sao_Paulo',
});

nodeCron.schedule('1 18 * * *', () => verifyJobs(), {
  scheduled: true,
  timezone: 'America/Sao_Paulo',
});

execute()
setTimeout(() => sayHello(), 30000)
setTimeout(() => verifyJobs(), 60000)

app.listen(3334, () => console.log('API rodando na porta 3334'));

// https://github.com/tryber/sd-016-a-live-lectures/tree/lecture/27.3/praticalExemple/src