'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.addColumn('reservas', 'status', {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: 'aberta'
        });
    },

    down: async(queryInterface, Sequelize) => {
        await queryInterface.removeColumn('reservas', 'status');
    }
};