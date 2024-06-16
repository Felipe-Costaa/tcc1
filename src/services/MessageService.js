const Twilio = require('twilio');
const Services = require('./Services.js');
const dataSource = require('../models');



class MessageService extends Services {
    constructor(accountSid, authToken) {
        super('Mensagem')
        this.client = new Twilio(accountSid, authToken);
    }

    async todasMensagensDaReserva(idReserva) {
        return dataSource['Mensagem'].findAll({
            where: {
                reserva_id: idReserva
            }
        })
    }

    async sendMessage(to, from, body) {
        try {
            const message = await this.client.messages.create({
                to: `whatsapp:${to}`,
                from,
                body
            });
            console.log(message);
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
}

module.exports = MessageService;