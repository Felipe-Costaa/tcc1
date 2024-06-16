'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Reserva extends Model {
        static associate(models) {
            Reserva.belongsTo(models.Pista, {
                foreignKey: 'id_pista_reservada'
            })
            Reserva.hasMany(models.Mensagem, {
                foreignKey: 'reserva_id'
            });
        }
    }
    Reserva.init({
        hora_reservada: DataTypes.DATE,
        id_pista_reservada: DataTypes.INTEGER,
        nome_cliente: DataTypes.STRING,
        wpp_cliente: DataTypes.STRING,
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'aberta'
        }
    }, {
        sequelize,
        modelName: 'Reserva',
        tableName: 'reservas'
    });
    return Reserva;
};