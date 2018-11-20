'use strict'

const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const ClienteSchema = Schema({
    correo: {type: String, unique: true,lowercase:true},
    nombre: { type: String, require: true},
    apellido: {type: String, require: true },
    genero:{type: String, enum: ['mujer','hombre']},
    
   
})

module.exports = mongoose.model('cliente', ClienteSchema)