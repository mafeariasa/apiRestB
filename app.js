'use strict'

const express = require ('express')
const bodyParser = require ('body-parser')
const hbs = require('express-handlebars')
const app = express()   
const api = require('./routes')
const cors = require('cors')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.engine('.hbs',hbs({
    defaultLayout: 'default',
    extname: '.hbs'
}))

app.set('vew engine','.hbs')
app.use('/api', api) 

app.get('/cliente',(req,res)=>{
    res.render('cliente')
})

app.get('/factura',(req,res)=>{
    res.render('factura')
})

app.get('/login',(req,res)=>{
    res.render('login')
})

app.get('/producto',(req,res)=>{
    res.render('producto')
})
module.exports = app

