const categoriasModel = require("../models/categoriasModel")

module.exports={

  get_All:async function(req, res, next) {
      try{
        const cat = await categoriasModel.find()
        res.json(cat)
      }catch(error){
        next(error)
      }
    },

    create:async function(req, res, next) {
        try{
          const document = new categoriasModel({
            categorias_name:req.body.categorias_name
          })
          const resp = await document.save()
          res.json(resp)
        }catch(error){
          error.status=200
          next(error)
        }        
    },
}