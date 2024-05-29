const Twilio = require('twilio');

class MessageService {
    constructor(accountSid, authToken) {
        this.client = new Twilio(accountSid, authToken);
    }

    async sendMessage(to, from, body) {
        try {
            const message = await this.client.messages.create({
                to: `whatsapp:${to}`,
                from,
                body
            });
            message => console.log(message.sid);
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
}

module.exports = MessageService;