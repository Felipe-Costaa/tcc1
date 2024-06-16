'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Mensagem extends Model {
        static associate(models) {
            Mensagem.belongsTo(models.Reserva, {
                foreignKey: 'reserva_id',
                onDelete: 'CASCADE'
            })
        }
    }
    Mensagem.init({
        reserva_id: DataTypes.INTEGER,
        mensagem: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Mensagem',
        tableName: 'mensagens'
    });
    return Mensagem;
};