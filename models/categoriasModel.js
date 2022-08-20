const mongoose = require("../config/mongodb");

//Creo el Schema
const categorySchema = new mongoose.Schema({
    categorias_name: String
});
module.exports = mongoose.model("categorias", categorySchema)