import { schedule } from 'node-cron';
import app from './app';
import db from './database/mongoose';
import updateGames from './services/UpdateGames';

const PORT = process.env.APP_PORT || 3331;

db().catch(err => console.log(err));

schedule('0 23 * * *', () => updateGames(), {
  scheduled: true,
  timezone: 'America/Sao_Paulo',
});

updateGames()

app.listen(PORT, () => console.log(`Server rodando na porta ${PORT}`));
