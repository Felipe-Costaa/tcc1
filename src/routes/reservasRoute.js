const { Router } = require('express');
const ReservaController = require('../controllers/ReservaController.js');

const reservaController = new ReservaController();

const router = Router();

router.get('/reservas', (req, res) => reservaController.pegaTodos(req, res));
router.get('/reservas/:id', (req, res) => reservaController.pegaUmPorId(req, res));
router.post('/reservas', (req, res) => reservaController.criaNovo(req, res));
router.put('/reservas/:id', (req, res) => reservaController.atualiza(req, res));
router.delete('/reservas/:id', (req, res) => reservaController.exclui(req, res));




module.exports = router;