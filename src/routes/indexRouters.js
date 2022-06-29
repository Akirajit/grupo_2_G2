let express= require ('express');

let router = express.Router();

const indexController = require ('../controllers/indexController');
const productoController = require('../controllers/productoController');



//middlewares import

const authMiddleware = require('../middlewares/authMiddleware')

//rutas
router.get ('/', indexController.home);
router.get ('/admin', authMiddleware, indexController.admin);
router.get ('/admin/usrs', authMiddleware, indexController.usuarios);
router.get ('/quienes', indexController.quienes);
router.get ('/carrito', productoController.carrito);





module.exports = router