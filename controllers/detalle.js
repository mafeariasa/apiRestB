'use strict'

const Detalle = require ('../models/detalle')

function getDetalle(req, res) {
    let detalleId =  req.params.detalleId

    Detalle.findById(detalleId, (err, detalle) => {
        if (err) return res.status(500).send({ message:`error al realizar la peticion: ${err} `}) 
        if(!detalle) return res.status(404).send({ message:'el detalle no existe'})
        
        res.status(200).send({ detalle })
    })

}

function getDetalles(req, res) {
    Detalle.find({}, (err, detalles) => {
        if(err) return res.status(500).send({message: `error al realizar la peticion: ${err} `})
        if(!detalles) return res.status(404).send({message:'no existen detalles'})

        res.send(200,{ detalles })
    })
}

function saveDetalle(req, res) {
    console.log('POST /api/detalle')
    console.log(req.body)

    let detalle = new Detalle()
    detalle.num_detalle = req.body.num_detalle
    detalle.id_factura = req.body.id_factura
    detalle.id_producto = req.body.id_producto
    detalle.cantidad = req.body.cantidad


    detalle.save((err,detalleStored) =>{
        if (err) res.status(500).send({message: `error al salvar en la base de datos: ${err} `})
        
        res.status(200).send({detalle: detalleStored})
    }) 
}

function updateDetalle (req, res) {
    let detalleId = req.params.detalleId
    let update = req.body

    Detalle.findByAndUpdate(detalleId, update, (err,detalleUpdate) => {
        if (err) res.status(500).send({message: `error al actualizar el detalle: ${err} ` })

        res.status(200).send({ detalle: detalleUpdated })
    } )
}

function deleteDetalle(req, res) {
    let detalleId =  req.params.detalleId 

    Detalle.findById(detalleId, (err, detalle) => {
        if (err) res.status(500).send({message:`error al borrar el detalle: ${err} `})
    
        detalle.remove(err => {
         if (err) res.status(500).send({message:`error al borrar el detalle: ${err} `})
         res.status(200).send({message:'el detalle ha sido eliminado'})
        })
     })    
}

module.exports = {
    getDetalle,
    getDetalles,
    saveDetalle,
    updateDetalle,
    deleteDetalle
}