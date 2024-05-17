'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.bulkInsert('reservas', [{
            hora_reservada: new Date(),
            id_pista_reservada: 1,
            nome_cliente: 'Felipe Costa',
            wpp_cliente: '35999185634',
            createdAt: new Date(),
            updatedAt: new Date()
        }], {});

    },

    async down(queryInterface, Sequelize) {

        await queryInterface.bulkDelete('reservas', null, {});

    }
};