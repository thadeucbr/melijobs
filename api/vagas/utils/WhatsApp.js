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

    async sendMessage(to, message) {
        await wa.create(this._whatsConfig).then(async (client) => {
            if(amigo) client.sendText(to, message);
        });
    }
}

export default Whatsapp;