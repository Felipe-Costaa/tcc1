'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.removeConstraint('mensagens', 'mensagens_reserva_id_fkey');
        await queryInterface.addConstraint('mensagens', {
            fields: ['reserva_id'],
            type: 'foreign key',
            name: 'mensagens_reserva_id_fkey',
            references: {
                table: 'reservas',
                field: 'id',
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        });
    },

    down: async(queryInterface, Sequelize) => {
        await queryInterface.removeConstraint('mensagens', 'mensagens_reserva_id_fkey');
        await queryInterface.addConstraint('mensagens', {
            fields: ['reserva_id'],
            type: 'foreign key',
            name: 'mensagens_reserva_id_fkey',
            references: {
                table: 'reservas',
                field: 'id',
            },
            onDelete: 'NO ACTION',
            onUpdate: 'NO ACTION',
        });
    }
};