'use strict'

const Credencial = require('../models/credencial')
const service = require('../services')

function signUp(req, res) {
    const credencial = new Credencial({
        usuario: req.body.usuario,
        password: req.body.password
    })

    credencial.avatar = credencial.gravatar()

    credencial.save((err) => {
        if (err) return res.status(500).send({ message: `Error al crear el usuario: ${err}` })
        return res.status(201).send({ token: service.createToken(credencial) })
    })
}

function signIn(req, res) {
    Credencial.findOne({ usuario: req.body.usuario }, (err, credencial) => {
        if (err) return res.status(500).send({ message: `Error al ingresar: ${err}` })
        if (!credencial) return res.status(404).send({ message: `No existe el usuario: ${req.body.usuario}` })
        return credencial.comparePassword(req.body.password, (err, isMatch) => {
            if (err) return res.status(500).send({ message: `Error al ingresar: ${err}` })
            if (!isMatch) return res.status(404).send({ message: `Error de contraseña: ${req.body.password}` })
            req.credencial = credencial
            return res.status(200).send({ message: 'Te has logueado correctamente', token: service.createToken(credencial) })
        })
    }).select('_id usuario password')
}

module.exports = {
    signUp,
    signIn
}