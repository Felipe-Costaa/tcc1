const { Router } = require('express');
const MessageController = require('../controllers/MessageController.js');

const messageController = new MessageController();


const router = Router();

router.get('/reservas/:id/mensagens', (req, res) => messageController.pegaTodasMensagens(req, res));
router.post('/message', (req, res) => messageController.criaNovo(req, res));

router.post('/send-message', (req, res) => messageController.sendMessage(req, res));


module.exports = router;