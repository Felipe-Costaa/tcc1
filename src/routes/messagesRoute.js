const { Router } = require('express');
const MessageController = require('../controllers/MessageController.js');

const messageController = new MessageController();


const router = Router();

router.post('/send-message', (req, res) => messageController.sendMessage(req, res));


module.exports = router;