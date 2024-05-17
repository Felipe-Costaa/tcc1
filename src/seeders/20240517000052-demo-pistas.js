'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('pistas', [{
                nome: 'Pista de exemplo do seed - 1',
                status: 0,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                nome: 'Pista de exemplo do seed - 2',
                status: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                nome: 'Pista de exemplo do seed - 3',
                status: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});

    },

    async down(queryInterface, Sequelize) {

        await queryInterface.bulkDelete('pistas', null, {});

    }
};