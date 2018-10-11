'use strict'

const express = require ('express')
const clienteCtrl = require('../controllers/cliente')
const api = express.Router()

api.get('/cliente', clienteCtrl.getClientes)   
api.get('/cliente/:clienteId', clienteCtrl.getCliente)
api.post('/cliente', clienteCtrl.saveCliente)
api.put('/cliente/:clienteId', clienteCtrl.updateCliente)
api.delete('/cliente/:clienteId', clienteCtrl.deleteCliente)

    
const productoCtrl = require('../controllers/producto')

api.get('/producto', productoCtrl.getProductos)   
api.get('/producto/:productoId', productoCtrl.getProducto)
api.post('/producto', productoCtrl.saveProducto)
api.put('/producto/:productoId', productoCtrl.updateProducto)
api.delete('/producto/:productoId', productoCtrl.deleteProducto)


const facturaCtrl = require('../controllers/factura')

api.get('/factura', facturaCtrl.getFacturas)   
api.get('/factura/:facturaId', facturaCtrl.getFactura)
api.post('/factura', facturaCtrl.saveFactura)
api.put('/factura/:facturaId', facturaCtrl.updateFactura)
api.delete('/factura/:facturaId', facturaCtrl.deleteFactura)


const detalleCtrl = require('../controllers/detalle')

api.get('/detalle', detalleCtrl.getDetalles)   
api.get('/detalle/:detalleId', detalleCtrl.getDetalle)
api.post('/detalle', detalleCtrl.saveDetalle)
api.put('/detalle/:detalleId', detalleCtrl.updateDetalle)
api.delete('/detalle/:detalleId', detalleCtrl.deleteDetalle)

    
const wishlistCtrl = require('../controllers/wishlist')

api.get('/wishlist', wishlistCtrl.getWishlists)   
api.get('/wishlist/:wishlistId', wishlistCtrl.getWishlist)
api.post('/wishlist', wishlistCtrl.saveWishlist)
api.put('/wishlist/:wishlistId', wishlistCtrl.updateWishlist)
api.delete('/wishlist/:wishlistId', wishlistCtrl.deleteWishlist)

const sugerenciaCtrl = require('../controllers/sugerencia')

api.get('/sugerencia', sugerenciaCtrl.getSugerencias)   
api.get('/sugerencia/:sugerenciaId', sugerenciaCtrl.getSugerencia)
api.post('/sugerencia', sugerenciaCtrl.saveSugerencia)
api.put('/sugerencia/:sugerenciaId', sugerenciaCtrl.updateSugerencia)
api.delete('/sugerencia/:sugerenciaId', sugerenciaCtrl.deleteSugerencia)


const parametroCtrl = require('../controllers/parametro')

api.get('/parametro', parametroCtrl.getParametros)   
api.get('/parametro/:parametroId', parametroCtrl.getParametro)
api.post('/parametro', parametroCtrl.saveParametro)
api.put('/parametro/:parametroId', parametroCtrl.updateParametro)
api.delete('/parametro/:parametroId', parametroCtrl.deleteParametro)

const parametroproductoCtrl = require('../controllers/parametroproducto')

api.get('/parametroproducto', parametroproductoCtrl.getParametroproductos)   
api.get('/parametroproducto/:parametroproductoId', parametroproductoCtrl.getParametroproducto)
api.post('/parametroproducto', parametroproductoCtrl.saveParametroproducto)
api.put('/parametroproducto/:parametroproductoId', parametroproductoCtrl.updateParametroproducto)
api.delete('/parametroproducto/:parametroproductoId', parametroproductoCtrl.deleteParametroproducto)

const credencialCtrl = require('../controllers/credencial')

api.post('/signin', credencialCtrl.signIn)   
api.post('/signup', credencialCtrl.signUp)


module.exports = api
    