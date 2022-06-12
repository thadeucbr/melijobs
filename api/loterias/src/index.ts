import { schedule } from 'node-cron';
import app from './app';
import db from './database/mongoose';
import Database from './services/Database';

const PORT = process.env.APP_PORT || 3331;

db();

schedule('3 0 * * *', () => Database.update(), {
  scheduled: true,
  timezone: 'America/Sao_Paulo',
});

Database.update()
app.listen(PORT, () => console.log(`Server rodando na porta ${PORT}`));


`
{
  "success": true,
  "response": {
    "wid": {
      "server": "g.us",
      "user": "120363025308814807",
      "_serialized": "120363025308814807@g.us"
    },
    "subject": "Meli Vagas",
    "creator": {
      "server": "c.us",
      "user": "5511971704940",
      "_serialized": "5511971704940@c.us"
    },
    "ts": 1654471530,
    "participants": [
      {
        "wid": {
          "server": "c.us",
          "user": "5511971704940",
          "_serialized": "5511971704940@c.us"
        },
        "error": null,
        "invite_code": null,
        "invite_code_exp": null,
        "type": "superadmin"
      }
    ]
  }
}
`