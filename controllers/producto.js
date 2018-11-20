'use strict'

const Producto = require ('../models/producto')
const Cliente = require ('../models/cliente')

function getProducto(req, res) {
    let productoId =  req.params.productoId

    Producto.findById(productoId, (err, producto) => {
        if (err) return res.status(500).send({ message:`error al realizar la peticion: ${err} `}) 
        if(!producto) return res.status(404).send({ message:'el producto no existe'})
        
        res.status(200).send({ producto })
    })

}

function getProductos(req, res) {
    Producto.find({}, (err, productos) => {
        if(err) return res.status(500).send({message: `error al realizar la peticion: ${err} `})
        if(!productos) return res.status(404).send({message:'no existen productos'})
 

        Cliente.populate(productos, {path:"clienteId"}, (err,productos)=>{
            res.status(200).send({ productos })
        })
        
    })
}

function saveProducto(req, res) {
    console.log('POST /api/producto')
    console.log(req.body)

    let producto = new Producto()
    producto.id_producto = req.body.id_producto
    producto.descripcion = req.body.descripcion
    producto.nombre = req.body.nombre
    producto.precio = req.body.precio
    

    producto.save((err,productoStored) =>{
        if (err) res.status(500).send({message: `error al salvar en la base de datos: ${err} `})
        
        res.status(200).send({producto: productoStored})
    }) 
}

function updateProducto (req, res) {
    let productoId = req.params.productoId
    let update = req.body

    Producto.findByAndUpdate(productoId, update, (err,productoUpdate) => {
        if (err) res.status(500).send({message: `error al actualizar el producto: ${err} ` })

        res.status(200).send({ producto: productoUpdated })
    } )
}

function deleteProducto(req, res) {
    let productoId =  req.params.productoId 

    Producto.findById(productoId, (err, producto) => {
        if (err) res.status(500).send({message:`error al borrar el producto: ${err} `})
    
        producto.remove(err => {
         if (err) res.status(500).send({message:`error al borrar el producto: ${err} `})
         res.status(200).send({message:'el producto ha sido eliminado'})
        })
     })    
}

module.exports = {
    getProducto,
    getProductos,
    saveProducto,
    updateProducto,
    deleteProducto
}