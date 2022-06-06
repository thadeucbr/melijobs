const express = require('express');
const nodeCron = require('node-cron');
const execute = require('./schedules');

const app = express();

nodeCron.schedule('59 23 * * *', () => execute(), {
  scheduled: true,
  timezone: 'America/Sao_Paulo',
});

nodeCron.schedule('0 6 * * *', () => execute(), {
  scheduled: true,
  timezone: 'America/Sao_Paulo',
});

nodeCron.schedule('0 12 * * *', () => execute(), {
  scheduled: true,
  timezone: 'America/Sao_Paulo',
});

nodeCron.schedule('0 18 * * *', () => execute(), {
  scheduled: true,
  timezone: 'America/Sao_Paulo',
});

execute()

app.listen(3005, () => console.log('API rodando na porta 3005'));


// https://github.com/tryber/sd-016-a-live-lectures/tree/lecture/27.3/praticalExemple/src