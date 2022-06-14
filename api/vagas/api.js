const express = require('express');
const { schedule } = require('node-cron');
const execute = require('./schedules');
const verifyJobs = require('./jobs/sendJobs');
const sayHello = require('./utils/helloWhatsapp');
const mongoConnection = require('./database/mongoose');

const app = express();

mongoConnection();

schedule('58 23 * * *', () => execute(), {
  scheduled: true,
  timezone: 'America/Sao_Paulo',
});

schedule('0 6 * * *', () => execute(), {
  scheduled: true,
  timezone: 'America/Sao_Paulo',
});

schedule('0 12 * * *', () => execute(), {
  scheduled: true,
  timezone: 'America/Sao_Paulo',
});

schedule('0 18 * * *', () => execute(), {
  scheduled: true,
  timezone: 'America/Sao_Paulo',
});

execute()
setTimeout(() => sayHello(), 120000)

app.listen(3334, () => console.log('API rodando na porta 3334'));

// https://github.com/tryber/sd-016-a-live-lectures/tree/lecture/27.3/praticalExemple/src