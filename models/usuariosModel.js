const mongoose = require("../config/mongodb")
const errorMessage = require("../utiles/msg_Error")
const validators = require("../utiles/validaciones")
const bcrypt = require("bcrypt")

//Creo el Schema
const userSchema = mongoose.Schema({
    nombre:{
        type:String,
        required:true
    },
    email:{
        type: String,
        required:[true,errorMessage.GENERAL.campo_obligatorio],
        unique:true
    },
    password:{
        type: String,
        validate:{
            validator:function(value){
                return validators.okPassword(value)
            },
            message:errorMessage.USERS.passwordIncorrect
        }
    }
})
userSchema.pre("save",function(next){
    this.password = bcrypt.hashSync(this.password,12)
    next()
})

module.exports = mongoose.model("usuarios",userSchema)