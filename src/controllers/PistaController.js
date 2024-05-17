const Controller = require('./Controller.js');
const PistaServices = require('../services/PistaServices.js');

const pistaServices = new PistaServices();

class PistaController extends Controller {

    constructor() {
        super(pistaServices)
    }

}

module.exports = PistaController