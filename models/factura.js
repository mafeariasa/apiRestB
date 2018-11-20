'use strict'

const mongoose = require ('mongoose')
const Schema = mongoose.Schema
const Producto = require ('./producto')
const Cliente = require ('./cliente')

const FacturaSchema = Schema({
    id_factura: String,
    id_cliente: String,
    
    ProductoId: {type:Schema.Types.ObjectId, ref: Producto, require: true},
    ClienteId: {type:Schema.Types.ObjectId, ref:  Cliente, require: true}
})

module.exports = mongoose.model('factura', FacturaSchema)