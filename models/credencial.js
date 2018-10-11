'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')
const crypto = require('crypto')

const CredencialSchema = Schema({
    usuario: String,
    password: { type: String, select: false },
    avatar: String
})

CredencialSchema.pre('save', function (next) {
    var credencial = this
    bcrypt.genSalt(10, (err, salt) => {
        if (err) return next(err)
        bcrypt.hash(credencial.password, salt, null, (err, hash) => {
            if (err) return next(err)
            credencial.password = hash
            next()
        })
    })
})
CredencialSchema.methods.gravatar = function (size) {
    if (!size) {
        size = 200
    }
    if (!this.usuario) return `https://gravatar.com/avatar/?s=2005&d=retro`
    const md5 = crypto.createHash('md5').update(this.usuario).digest('hex')
    return `https://gravatar.com/avatar/${md5}?s=2005&d=retro`
}
CredencialSchema.methods.comparePassword = function (candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
        cb(err, isMatch)
    });
}

module.exports = mongoose.model('Credencial', CredencialSchema)