'use strict'

const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const ParametroSchema = Schema({
    id_parametro: String,
    nombre: String,
    descripcion: String


    
    
})

module.exports = mongoose.model('parametro', ParametroSchema)