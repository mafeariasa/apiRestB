'use strict'

const Parametro = require ('../models/parametro')

function getParametro(req, res) {
    let parametroId =  req.params.parametroId

    Parametro.findById(parametroId, (err, parametro) => {
        if (err) return res.status(500).send({ message:`error al realizar la peticion: ${err} `}) 
        if(!parametro) return res.status(404).send({ message:'el parametro no existe'})
        
        res.status(200).send({ parametro })
    })

}

function getParametros(req, res) {
    Parametro.find({}, (err, parametros) => {
        if(err) return res.status(500).send({message: `error al realizar la peticion: ${err} `})
        if(!parametros) return res.status(404).send({message:'no existen parametros'})

        res.send(200,{ parametros })
    })
}

function saveParametro(req, res) {
    console.log('POST /api/parametro')
    console.log(req.body)

    let parametro = new Parametro()
    parametro.id_parametro = req.body.id_parametro
    parametro.nombre = req.body.nombre
    parametro.descripcion = req.body.descripcion
    


    parametro.save((err,parametroStored) =>{
        if (err) res.status(500).send({message: `error al salvar en la base de datos: ${err} `})
        
        res.status(200).send({parametro: parametroStored})
    }) 
}

function updateParametro (req, res) {
    let parametroId = req.params.parametroId
    let update = req.body

    Parametro.findByAndUpdate(parametroId, update, (err,parametroUpdate) => {
        if (err) res.status(500).send({message: `error al actualizar el parametro: ${err} ` })

        res.status(200).send({ parametro: parametroUpdated })
    } )
}

function deleteParametro(req, res) {
    let parametroId =  req.params.parametroId 

    Parametro.findById(parametroId, (err, parametro) => {
        if (err) res.status(500).send({message:`error al borrar el parametro: ${err} `})
    
        parametro.remove(err => {
         if (err) res.status(500).send({message:`error al borrar el parametro: ${err} `})
         res.status(200).send({message:'el parametro ha sido eliminado'})
        })
     })    
}

module.exports = {
    getParametro,
    getParametros,
    saveParametro,
    updateParametro,
    deleteParametro
}