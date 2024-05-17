const express = require('express');
const pistas = require('./pistasRoute.js');
const reservas = require('./reservasRoute.js')
const usuarios = require('./usuariosRoute.js')

module.exports = app => {
    app.use(express.json(), pistas, reservas, usuarios);
}