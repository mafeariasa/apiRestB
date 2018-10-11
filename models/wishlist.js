'use strict'

const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const WishlistSchema = Schema({
    id_cliente: String,
    id_producto: String
   
    
})

module.exports = mongoose.model('wishlist', WishlistSchema)