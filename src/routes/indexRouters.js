let express= require ('express');

let router = express.Router();

const indexController = require ('../controllers/indexController');
const productoController = require('../controllers/productoController');
const registerController = require('../controllers/registerController');
const error404Controller = require('../controllers/error404Controller');


//rutas
router.get ('/', indexController.home);
router.get ('/admin', indexController.admin);
router.get ('/admin/usrs', indexController.usuarios);
router.get ('/quienes', indexController.quienes);
router.get ('/carrito', productoController.carrito);

router.get ('/registro', registerController.registro);
router.get ('/login', registerController.login);




module.exports = router