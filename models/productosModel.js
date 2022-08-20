const mongoose = require("../config/mongodb")

//Creao el Schema 
const productosSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"El campo name(nombre) es obligatorio"]
    },
    precio:Number,
    descripcion:String,
    destacado: Boolean,
    category: String
})
module.exports = mongoose.model("productos",productosSchema)