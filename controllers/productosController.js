const { find } = require("../models/productosModel")
const productosModel = require("../models/productosModel")

module.exports={

    create: async function(req, res, next) {
        try{
            const producto = new productosModel({
                name:req.body.name,
                precio:req.body.precio,
                descripcion:req.body.descripcion,
                destacado:req.body.destacado,
                category:req.body.category
            })
            const document = await producto.save()
            res.status(201).json(document)
        }catch(error){
            console.log(error)
            next(error)
        }
    },

    // Inluyo condicion para que si /?destacados=1 retorne solo los que tienen el campo destacado en True.
    get_All: async function(req, res, next) {
        try{
            let queryFind={}
            if(req.query.buscar){
                queryFind = {name:{$regex:".*"+req.query.buscar+".*",$options:"i"}}
            }
            else{
                if(req.query.destacados == 1){
                    queryFind = {"destacado":true}
                }
            }
            const productos = await productosModel.find(queryFind)
            res.status(200).json(productos)
        }catch(error){
            console.log(error)
        } 
    },

    get_byId: async function(req, res, next) {
        console.log(req.params.id)
        try{
            const product = await productosModel.findById(req.params.id)
            res.status(200).json(product)
        }catch(error){
            console.log(error)
        }
        
    },

    update_Doc: async function(req, res, next) {
        console.log(req.body)
        try{
            const document = await productosModel.updateOne({_id:req.params.id},req.body)
            res.status(200).json(document)
        }catch(error){
            console.log(error)
        }
    },

    delete_Doc: async function(req, res, next) {
        console.log(req.params.id)
        try{
            const document = await productosModel.deleteOne({_id:req.params.id})
            res.status(200).json(document)
        }catch(error){
            console.log(error)
        }
    }
}