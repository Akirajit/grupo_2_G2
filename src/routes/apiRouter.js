//IMPORTANDO MODULOS
let express= require ('express');
let router = express.Router();

//IMPORTANDO CONTROLADORES
const apiController = require ('../controllers/apiController');




//DEFINIENDO RUTAS
router.get ('/usuarios', apiController.listarUsuarios);
router.get ('/usuarios/:id', apiController.detalleUsuario);
router.get ('/productos', apiController.listarProductos);
// router.get ('/productos/:id', apiController.detalleProducto);




module.exports = router