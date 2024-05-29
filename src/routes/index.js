const express = require('express');
const pistas = require('./pistasRoute.js');
const reservas = require('./reservasRoute.js')
const usuarios = require('./usuariosRoute.js')
const messages = require('./messagesRoute.js')

const app = require('../app.js');

module.exports = app => {
    app.use(express.json(), pistas, reservas, usuarios, messages);
}