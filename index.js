'use strict'

const mongoose = require ('mongoose')
const app = require('./app')
const config = require('./config')




mongoose.connect(config.db,(err,res) =>{
    if(err) {
        return console.log(`error al conectar a la base de datos: ${err}`)  
    }
    //console.log(`cosa 1${res}`)
    console.log('conexion a la base de datos establecida...')
   
    app.listen(config.port, () =>{
        console.log(`API REST corriendo en el http://localhost:${config.port}`)      
    }) 
})



