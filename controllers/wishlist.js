'use strict'

const Wishlist = require ('../models/wishlist')

function getWishlist(req, res) {
    let wishlistId =  req.params.wishlistId

    Wishlist.findById(wishlistId, (err, wishlist) => {
        if (err) return res.status(500).send({ message:`error al realizar la peticion: ${err} `}) 
        if(!detalle) return res.status(404).send({ message:'el wishlist no existe'})
        
        res.status(200).send({ wishlist })
    })

}

function getWishlists(req, res) {
    Wishlist.find({}, (err, wishlists) => {
        if(err) return res.status(500).send({message: `error al realizar la peticion: ${err} `})
        if(!wishlists) return res.status(404).send({message:'no existe el wishlist'})

        res.send(200,{ wishlists })
    })
}

function saveWishlist(req, res) {
    console.log('POST /api/wishlist')
    console.log(req.body)

    let wishlist = new Wishlist()
    wishlist.id_cliente = req.body.id_cliente
    wishlist.id_producto = req.body.id_producto
   


    wishlist.save((err,wishlistStored) =>{
        if (err) res.status(500).send({message: `error al salvar en la base de datos: ${err} `})
        
        res.status(200).send({wishlist: wishlistStored})
    }) 
}

function updateWishlist (req, res) {
    let wishlistId = req.params.detalleId
    let update = req.body

    Wishlist.findByAndUpdate(wishlistId, update, (err,wishlistUpdate) => {
        if (err) res.status(500).send({message: `error al actualizar la wishlist: ${err} ` })

        res.status(200).send({ wishlist: wishlistUpdated })
    } )
}

function deleteWishlist(req, res) {
    let wishlistId =  req.params.wishlistId 

    Wishlist.findById(wishlistId, (err, wishlist) => {
        if (err) res.status(500).send({message:`error al borrar la wishlist ${err} `})
    
        wishlist.remove(err => {
         if (err) res.status(500).send({message:`error al borrar la wishlist: ${err} `})
         res.status(200).send({message:'la wishlist ha sido eliminada'})
        })
     })    
}

module.exports = {
    getWishlist,
    getWishlists,
    saveWishlist,
    updateWishlist,
    deleteWishlist
}