'use strict'

const mongoose = require ('mongoose')
const Schema = mongoose.Schema
const Cliente = require ('./cliente')

const ProductSchema = Schema({
    id_producto: {type:String, unique:true, require: true},
    descripcion: String,
    nombre: String,
    precio: String,

    clienteId: {type:Schema.Types.ObjectId, ref: Cliente, require: true}
    
})

module.exports = mongoose.model('product', ProductSchema)