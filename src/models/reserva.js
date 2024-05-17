'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Reserva extends Model {
        static associate(models) {
            Reserva.belongsTo(models.Pista, {
                foreignKey: 'id_pista_reservada'
            });
        }
    }
    Reserva.init({
        hora_reservada: DataTypes.DATE,
        id_pista_reservada: DataTypes.INTEGER,
        nome_cliente: DataTypes.STRING,
        wpp_cliente: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Reserva',
        tableName: 'reservas'
    });
    return Reserva;
};