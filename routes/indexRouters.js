let express= require ('express');

let router = express.Router();

const indexController = require ('../controllers/indexController');
const productoController = require('../controllers/productoController');
const registerController = require('../controllers/registerController');
const error404Controller = require('../controllers/error404Controller');


//rutas
router.get ('/', indexController.home);
router.get ('/quienes', indexController.quienes);
router.get ('/carrito', productoController.carrito);
router.get ('/producto', productoController.producto);
router.get ('/producto/carga', productoController.cargaProducto);
router.get ('/registro', registerController.registro);
router.get ('/login', registerController.login);
router.get ('/home2', indexController.home2);
router.get ('/home', indexController.home);
router.get ('/nbirras', indexController.nbirras);
router.get ('/error404', error404Controller.error404);


module.exports = router