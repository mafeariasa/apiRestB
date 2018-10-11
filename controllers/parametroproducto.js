'use strict'

const Parametroproducto = require ('../models/parametroproducto')

function getParametroproducto(req, res) {
    let parametroproductoeId =  req.params.parametroproductoId

    Parametroproducto.findById(parametroproductoId, (err, parametroproducto) => {
        if (err) return res.status(500).send({ message:`error al realizar la peticion: ${err} `}) 
        if(!parametroproducto) return res.status(404).send({ message:'el parametro producto no existe'})
        
        res.status(200).send({ parametroproducto })
    })

}

function getParametroproductos(req, res) {
    Parametroproducto.find({}, (err, parametroproductos) => {
        if(err) return res.status(500).send({message: `error al realizar la peticion: ${err} `})
        if(!parametroproductos) return res.status(404).send({message:'no existen parametro producto'})


        Parametro.populate(parametroproductos, { path: "parametroId" }, function (err, parametro) {
            Producto.populate(parametroproductos, { path: "productoId" }, function (err, producto) {
                res.send(200).send({ parametroproductos })
            })         
        })
    })
}

function saveParametroproducto(req, res) {
    console.log('POST /api/parametroproducto')
    console.log(req.body)

    let parametroproducto = new Parametroproducto()
    parametroproducto.id_parametro = req.body.id_parametro
    parametroproducto.id_producto = req.body.id_producto
    


    parametroproducto.save((err,parametroproductoStored) =>{
        if (err) res.status(500).send({message: `error al salvar en la base de datos: ${err} `})
        
        res.status(200).send({parametroproducto: parametroproductoStored})
    }) 
}

function updateParametroproducto (req, res) {
    let parametroproductoeId = req.params.parametroproductoId
    let update = req.body

    Parametroproducto.findByAndUpdate(parametroproductoId, update, (err,parametroproductoUpdate) => {
        if (err) res.status(500).send({message: `error al actualizar el parametroproducto: ${err} ` })

        res.status(200).send({ parametroproducto: parametroproductoUpdated })
    } )
}

function deleteParametroproducto(req, res) {
    let parametroproductoId =  req.params.parametroproductoId 

    Parametroproducto.findById(parametroproductoId, (err, parametroproducto) => {
        if (err) res.status(500).send({message:`error al borrar el parametro producto: ${err} `})
    
        parametroproducto.remove(err => {
         if (err) res.status(500).send({message:`error al borrar el parametro producto: ${err} `})
         res.status(200).send({message:'el parametroproducto  ha sido eliminado'})
        })
     })    
}

module.exports = {
    getParametroproducto,
    getParametroproductos,
    saveParametroproducto,
    updateParametroproducto,
    deleteParametroproducto
}