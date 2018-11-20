'use strict'

const Cliente = require('../models/cliente')
const service = require('../services')



function signUp (req, res) {
  let cliente = new Cliente()
    cliente.correo = req.body.correo
    cliente.nombre = req.body.nombre
    cliente.apellido = req.body.apellido
    cliente.genero = req.body.genero
    cliente.password = req.body.password
    cliente.signupDate = req.body.signupDate
    

    cliente.save((err, clienteStored) =>{
        if (err) res.status(500).send({message: `Error al salvar en la base de datos: ${err}`})

        return res.status(200).send({ token: service.createToken(clienteStored) })
    })
}

function signIn (req, res) {

  console.log(req.body.email + " - " + req.body.password)

 Cliente.findOne({ correo: req.body.email }, (err, cliente) => {

      if (err) return res.status(500).send({ message: 
        `Error al ingresar: ${err}` })
      if (!cliente) return res.status(404).send({ message: 
        `No existe el cliente: ${req.body.email}` })
  
      return cliente.comparePassword(req.body.password,
         (err, isMatch) => {
        if (err) return res.status(500).send(
          { message: `Error al ingresar: ${err}` })
        if (!isMatch) return res.status(404).send(
          { message: `Error de contraseña: ${req.body.email}` })
  
        req.cliente = cliente
        return res.status(200).send({ message: 
          'Te has logueado correctamente', 
          token: service.createToken(cliente) })
      });      
    }).select('_id email password');
}

module.exports = {
  signUp,
  signIn
}