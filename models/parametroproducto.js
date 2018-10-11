'use strict'

const mongoose = require ('mongoose')
const Schema = mongoose.Schema
const Parametro = require('../models/parametro')
const Producto = require('../models/producto')

const ParametroproductoSchema = Schema({
    parametroId: { 
        type: Schema.Types.ObjectId, ref: Parametro
    },
    productoId: { 
        type: Schema.Types.ObjectId, ref: Producto
    }

    
})

module.exports = mongoose.model('Parametroproducto', ParametroproductoSchema)