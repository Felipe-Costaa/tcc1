const { Router } = require('express');
const PistaController = require('../controllers/PistaController.js');

const pistaController = new PistaController();

const router = Router();

router.get('/pistas', (req, res) => pistaController.pegaTodos(req, res));
router.get('/pistas/:id', (req, res) => pistaController.pegaUmPorId(req, res));
router.post('/pistas', (req, res) => pistaController.criaNovo(req, res));
router.put('/pistas/:id', (req, res) => pistaController.atualiza(req, res));
router.delete('/pistas/:id', (req, res) => pistaController.exclui(req, res));




module.exports = router;