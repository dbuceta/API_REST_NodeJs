var express = require('express');
var router = express.Router();
const productosController = require("../controllers/productosController")

// GET , PUT, DELETE listing. 
router.get('/', productosController.get_All);
router.get('/:id', productosController.get_byId);
router.post('/', productosController.create);
router.put('/:id', productosController.update_Doc);
router.delete('/:id', productosController.delete_Doc);

module.exports = router;