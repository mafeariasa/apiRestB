'use strict'

const express = require ('express')
const clienteCtrl = require('../controllers/cliente')
const api = express.Router()
const productoCtrl = require('../controllers/producto')
const facturaCtrl = require('../controllers/factura')
const credencialCtrl = require('../controllers/credencial')

api.get('/cliente', clienteCtrl.getClientes)   
api.get('/cliente/:clienteId', clienteCtrl.getCliente)
api.post('/cliente', clienteCtrl.saveCliente)
api.put('/cliente/:clienteId', clienteCtrl.updateCliente)
api.delete('/cliente/:clienteId', clienteCtrl.deleteCliente)

    


api.get('/producto', productoCtrl.getProductos)   
api.get('/producto/:productoId', productoCtrl.getProducto)
api.post('/producto', productoCtrl.saveProducto)
api.put('/producto/:productoId', productoCtrl.updateProducto)
api.delete('/producto/:productoId', productoCtrl.deleteProducto)




api.get('/factura', facturaCtrl.getFacturas)   
api.get('/factura/:facturaId', facturaCtrl.getFactura)
api.post('/factura', facturaCtrl.saveFactura)
api.put('/factura/:facturaId', facturaCtrl.updateFactura)
api.delete('/factura/:facturaId', facturaCtrl.deleteFactura)



api.post('/signin', credencialCtrl.signIn)   
api.post('/signup', credencialCtrl.signUp)


module.exports = api
    