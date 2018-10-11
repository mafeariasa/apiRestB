'use strict'

const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const ProductSchema = Schema({
    id_prducto: String,
    descripcion: String,
    nombre: String,
    precio: { type: Number, default: 0},
    
})

module.exports = mongoose.model('product', ProductSchema)