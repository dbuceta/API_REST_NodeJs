const usuariosModel = require("../models/usuariosModel")
const jwt = require("jsonwebtoken") 
const bcrypt = require("bcrypt")

module.exports={
    create: async function(req, res, next) {
        try{
            const user = new usuariosModel({
                nombre:req.body.nombre,
                email:req.body.email,
                password:req.body.password
            })
            const document = await user.save()
            res.status(201).json(document)
        }catch(error){
            res.json(error.message)
            next(error)
        }        
        
    },
    login: async function(req, res, next) {
        try{
            const user = await usuariosModel.findOne({email:req.body.email})
            if(!user){
                res.json({message:"Email Incorrecto"})
                return
            }
            if(bcrypt.compareSync(req.body.password,user.password)){
                const token = jwt.sign({userId:user._id},req.app.get("secret_key"),{expiresIn:"2h"})
                res.status(201).json({token})
            }else{
                res.json({message:"Password Incorrecto"})
                return
            }
            
        }catch(error){
            console.log(error)
            next(error)
        }
    }
}