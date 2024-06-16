const MessageService = require('../services/MessageService.js');
const Controller = require('./Controller.js');

const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_TOKEN;
const fromNumber = process.env.TWILIO_NUMBER;


const messageService = new MessageService(accountSid, authToken);

class MessageController extends Controller {

    constructor() {
        super(messageService)

    }

    async pegaTodasMensagens(req, res) {
        try {
            const idReserva = req.params.id;
            const mensagens = await messageService.todasMensagensDaReserva(idReserva)
            return res.json(mensagens);
            //return res.status(500).json({ error: 'oi' });

        } catch (error) {
            console.error('Erro ao buscar mensagens da reserva:', error);
            return res.status(500).json({ error: 'Erro ao buscar mensagens da reserva' });
        }
    }

    async sendMessage(req, res) {
        const { to, body } = req.body;
        try {
            await messageService.sendMessage(to, fromNumber, body);
            res.status(200).send('Message sent successfully');
        } catch (err) {
            res.status(500).send('Failed to send message');
        }
    };

}
module.exports = MessageController;