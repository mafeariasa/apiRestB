'use strict'

const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const SugerenciaSchema = Schema({
    id_sugerencia: String,
    descripcion: String,
    titulo: String,
    sugerencia_parametro: String,
    imagen: String
    
})
 
module.exports = mongoose.model('sugerencia', SugerenciaSchema)