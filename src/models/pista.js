'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Pista extends Model {
        static associate(models) {
            Pista.hasMany(models.Reserva, {
                foreignKey: 'id_pista_reservada'
            });
        }
    }
    Pista.init({
        nome: DataTypes.STRING,
        status: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Pista',
        tableName: 'pistas'
    });
    return Pista;
};