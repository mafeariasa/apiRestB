'use strict'

const Factura = require ('../models/factura')
const Facturas = require ('../models/factura')
const Producto = require ('../models/producto')
const Cliente = require ('../models/cliente')

function getFactura(req, res) {
    let facturaId =  req.params.facturaId

    Factura.findById(facturaId, (err, factura) => {
        if (err) return res.status(500).send({ message:`error al realizar la peticion: ${err} `}) 
        if(!factura) return res.status(404).send({ message:'la factura no existe'})
        

        Producto.populate(factura, {path:"ProductoId"}, (err,factura)=>{
            Cliente.populate(factura,{path:"ProductoId"}, (err,factura)=>{ 
                res.status(200).send({ factura })
            })
        })

    })

}

function getFacturas(req, res) {
    Factura.find({}, (err, facturas) => {
        if(err) return res.status(500).send({message: `error al realizar la peticion: ${err} `})
        if(!facturas) return res.status(404).send({message:'no existen facturas'})

        res.send(200,{ facturas })
    })
}

function saveFactura(req, res) {
    console.log('POST /api/factura')
    console.log(req.body)

    let factura = new Factura()
    factura.id_factura = req.body.id_factura
    factura.id_cliente = req.body.id_cliente
   
    factura.save((err,facturaStored) =>{
        if (err) res.status(500).send({message: `error al salvar en la base de datos: ${err} `})
        
        res.status(200).send({factura: facturaStored})
    }) 
}

function updateFactura (req, res) {
    let facturaId = req.params.facturaId
    let update = req.body

    Factura.findByAndUpdate(facturaId, update, (err,facturaUpdate) => {
        if (err) res.status(500).send({message: `error al actualizar la factura: ${err} ` })

        res.status(200).send({ factura: facturaUpdated })
    } )
}

function deleteFactura(req, res) {
    let facturaId =  req.params.facturaId 

    Factura.findById(facturaId, (err, factura) => {
        if (err) res.status(500).send({message:`error al borrar la factura: ${err} `})
    
        factura.remove(err => {
         if (err) res.status(500).send({message:`error al borrar la factura: ${err} `})
         res.status(200).send({message:'la factura  ha sido eliminada'})
        })
     })    
}

module.exports = {
    getFactura,
    getFacturas,
    saveFactura,
    updateFactura,
    deleteFactura
}


