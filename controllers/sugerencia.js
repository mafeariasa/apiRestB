'use strict'

const Sugerencia = require ('../models/sugerencia')

function getSugerencia(req, res) {
    let sugerenciaId =  req.params.sugerenciaId

    Sugerencia.findById(sugerenciaId, (err, sugerencia) => {
        if (err) return res.status(500).send({ message:`error al realizar la peticion: ${err} `}) 
        if(!sugerencia) return res.status(404).send({ message:'la sugerencia  no existe'})
        
        res.status(200).send({ sugerencia })
    })

}

function getSugerencias(req, res) {
    Sugerencia.find({}, (err, sugerencias) => {
        if(err) return res.status(500).send({message: `error al realizar la peticion: ${err} `})
        if(!sugerencias) return res.status(404).send({message:'no existen sugerencias'})

        res.send(200,{ sugerencias })
    })
}

function saveSugerencia(req, res) {
    console.log('POST /api/sugerencia')
    console.log(req.body)

    let sugerencia = new Sugerencia()
    sugerencia.id_sugerencia = req.body.id_sugerencia
    sugerencia.descripcion = req.body.descripcion
    sugerencia.titulo = req.body.titulo
    sugerencia.sugerencia_parametro= req.body.sugerencia_parametro
    sugerencia.imagen = req.body.imagen 

    sugerencia.save((err,sugerenciaStored) =>{
        if (err) res.status(500).send({message: `error al salvar en la base de datos: ${err} `})
        
        res.status(200).send({sugerencia: sugerenciaStored})
    }) 
}

function updateSugerencia (req, res) {
    let sugerenciaId = req.params.sugerenciaId
    let update = req.body

    Sugerencia.findByAndUpdate(sugerenciaId, update, (err,sugerenciaUpdate) => {
        if (err) res.status(500).send({message: `error al actualizar la sugerencia: ${err} ` })

        res.status(200).send({ detalle: sugerenciaUpdated })
    } )
}

function deleteSugerencia(req, res) {
    let sugerenciaId =  req.params.sugerenciaId 

    Sugerencia.findById(sugerenciaId, (err, sugerencia) => {
        if (err) res.status(500).send({message:`error al borrar la suegerencia: ${err} `})
    
        sugerencia.remove(err => {
         if (err) res.status(500).send({message:`error al borrar la sugerencia: ${err} `})
         res.status(200).send({message:'la sugerencia ha sido eliminado'})
        })
     })    
}

module.exports = {
    getSugerencia,
    getSugerencias,
    saveSugerencia,
    updateSugerencia,
    deleteSugerencia 
}