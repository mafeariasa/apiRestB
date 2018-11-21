'use strict'

const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const ClienteSchema = Schema({
    correo: {type: String, unique: true,lowercase:true},
    nombre: { type: String, require: true},
    apellido: {type: String, require: true },
    genero: {type: String, require: true },
    password: {type: String, require: true }
    
   
})

module.exports = mongoose.model('cliente', ClienteSchema)