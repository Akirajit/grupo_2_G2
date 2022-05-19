// llamando a express y a router
let express= require ('express');
let router = express.Router();

//importando
let productosController = require('../controllers/productoController')

//rutas
router.get ('/', productosController.todos);


module.exports = router