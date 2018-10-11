'use strict'

const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const FacturaSchema = Schema({
    id_factura: String,
    id_cliente: String,
    
    
})

module.exports = mongoose.model('factura', FacturaSchema)