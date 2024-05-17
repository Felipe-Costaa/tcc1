'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('reservas', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            hora_reservada: {
                type: Sequelize.DATE
            },
            id_pista_reservada: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: { model: 'pistas', key: 'id' }
            },
            nome_cliente: {
                type: Sequelize.STRING
            },
            wpp_cliente: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('reservas');
    }
};