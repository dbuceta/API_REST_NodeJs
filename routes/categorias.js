var express = require('express');
var router = express.Router();
const categoriasController = require("../controllers/categoriasController")

// GET , POST Categorias listing. 
router.get('/', categoriasController.get_All);
router.post('/', categoriasController.create);
module.exports = router;