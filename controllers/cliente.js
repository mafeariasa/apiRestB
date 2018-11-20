'use strict'

const Cliente = require ('../models/cliente')

function getCliente(req, res) {
    let clienteId =  req.params.clienteId

    Cliente.findById(clienteId, (err, cliente) => {
        if (err) return res.status(500).send({ message:`error al realizar la peticion: ${err} `}) 
        if(!cliente) return res.status(404).send({ message:'el cliente no existe'})
        
        res.status(200).send({ cliente })
    })

}


function getClientes(req, res) {
    Cliente.find({}, (err, clientes) => {
        if(err) return res.status(500).send({message: `error al realizar la peticion: ${err} `})
        if(!clientes) return res.status(404).send({message:'no existen clientes'})

        res.send(200,{ clientes })
    })
}

function saveCliente(req, res) {
    console.log('POST /api/cliente')
    console.log(req.body)

    let cliente = new Cliente()
    cliente.correo = req.body.correo
    cliente.nombre = req.body.nombre
    cliente.apellido = req.body.apellido
    cliente.genero = req.body.genero
   

    cliente.save((err,clienteStored) =>{
        if (err) res.status(500).send({message: `error al salvar en la base de datos: ${err} `})
        
        res.status(200).send({cliente: clienteStored})
    }) 
}

function updateCliente (req, res) {
    let clienteId = req.params.clienteId
    let update = req.body

    Cliente.findByAndUpdate(clienteId, update, (err, clienteUpdate) => {
        if (err) res.status(500).send({message: `error al actualizar el cliente: ${err} ` })

        res.status(200).send({ cliente: clienteUpdated })
    } )
}

function deleteCliente(req, res) {
    let clientetId =  req.params.clienteId 

    Cliente.findById(clientetId, (err, cliente) => {
        if (err) res.status(500).send({message:`error al borrar el cliente: ${err} `})
    
        cliente.remove(err => {
         if (err) res.status(500).send({message:`error al borrar el cliente: ${err} `})
         res.status(200).send({message:'el cliente ha sido eliminado'})
        })
     })    
}

module.exports = {
    getCliente,
    getClientes,
    saveCliente,
    updateCliente,
    deleteCliente
}