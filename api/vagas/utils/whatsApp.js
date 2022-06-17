const wa = require('@open-wa/wa-automate');

class Whatsapp {
    _whatsConfig; 
    constructor() {
        this._whatsConfig = {
            sessionId: "COVID_HELPER",
            multiDevice: true,
            authTimeout: 60,
            logConsole: true,
        };
    }

    async sendText(to, message) {
        await wa.create(this._whatsConfig).then(async (client) => {
          client.sendText(to, message);
        });
    }
}

module.exports = Whatsapp;