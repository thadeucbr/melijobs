const express = require('express');
// import { schedule } from 'node-cron';
// import execute from './schedules';
// import verifyJobs from './jobs/sendJobs';
// import { access, writeFileSync } from 'fs';
// import sayHello from './utils/helloWhatsapp';
const mongoConnection = require('./database/mongoose');
const amazonSaveJobs = require('./jobs/amazonJobs');

const app = express();

mongoConnection();

amazonSaveJobs()
// access('jobs.json', (error) => {
//   error && writeFileSync('jobs.json', '[]')
// })

// schedule('58 23 * * *', () => execute(), {
//   scheduled: true,
//   timezone: 'America/Sao_Paulo',
// });

// schedule('59 23 * * *', () => verifyJobs(), {
//   scheduled: true,
//   timezone: 'America/Sao_Paulo',
// });

// schedule('0 6 * * *', () => execute(), {
//   scheduled: true,
//   timezone: 'America/Sao_Paulo',
// });

// schedule('1 6 * * *', () => verifyJobs(), {
//   scheduled: true,
//   timezone: 'America/Sao_Paulo',
// });

// schedule('0 12 * * *', () => execute(), {
//   scheduled: true,
//   timezone: 'America/Sao_Paulo',
// });

// schedule('1 12 * * *', () => verifyJobs(), {
//   scheduled: true,
//   timezone: 'America/Sao_Paulo',
// });

// schedule('0 18 * * *', () => execute(), {
//   scheduled: true,
//   timezone: 'America/Sao_Paulo',
// });

// schedule('1 18 * * *', () => verifyJobs(), {
//   scheduled: true,
//   timezone: 'America/Sao_Paulo',
// });

// execute()
// setTimeout(() => sayHello(), 120000)
// setTimeout(() => verifyJobs(), 130000)

app.listen(3334, () => console.log('API rodando na porta 3334'));

// https://github.com/tryber/sd-016-a-live-lectures/tree/lecture/27.3/praticalExemple/src