'use strict'

const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const DetalleSchema = Schema({
    num_detalle: String,
    id_factura: String,
    id_producto: String,
    cantidad: String
    
})

module.exports = mongoose.model('detalle', DetalleSchema)