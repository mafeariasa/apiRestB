'use strict'

const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const ClienteSchema = Schema({
    id_cliente: String,
    user: String,
    nombre: String,
    apellido: String,
    genero:{type: String, enum: ['mujer','hombre']},
    fecha_de_nacimiento: String
   
})

module.exports = mongoose.model('cliente', ClienteSchema)