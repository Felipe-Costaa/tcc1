'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.bulkInsert('usuarios', [{
            nome: 'Felipe Costa Moreira',
            email: 'felipe.costa.hlss@gmail.com',
            senha: '22876',
            createdAt: new Date(),
            updatedAt: new Date()
        }], {});

    },

    async down(queryInterface, Sequelize) {

        await queryInterface.bulkDelete('People', null, {});

    }
};