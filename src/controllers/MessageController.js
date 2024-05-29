const MessageService = require('../services/MessageService.js');

const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_TOKEN;
const fromNumber = process.env.TWILIO_NUMBER;

const messageService = new MessageService(accountSid, authToken);

class MeesageController {

    sendMessage = async(req, res) => {
        const { to, body } = req.body;
        try {
            await messageService.sendMessage(to, fromNumber, body);
            res.status(200).send('Message sent successfully');
        } catch (err) {
            res.status(500).send('Failed to send message');
        }
    };

}
module.exports = MeesageController;