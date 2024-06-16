const Services = require('./Services.js');
const { Reserva } = require('../models');


class ReservaServices extends Services {
    constructor() {
        super('Reserva')
    }


}



module.exports = ReservaServices;