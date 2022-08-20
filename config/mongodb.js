const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/NODETP3",function(error){
    if(error){
        throw error
    }else{
        console.log("Conectado con MongoDB")
    }
})

module.exports = mongoose