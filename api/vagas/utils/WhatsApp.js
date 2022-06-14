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

    async sendZap(from, to, subject, message) {
        await wa.create(this._whatsConfig).then(async (client) => {
            const contacts = await client.getAllContacts(); // get all contacts
            const amigo = contacts.find((c) => c.name && c.name === to); // filter the contacts
            if(amigo) client.sendText(amigo?.id, `${subject}\n${message}`);
        });
    }
}

module.exports =  Whatsapp;