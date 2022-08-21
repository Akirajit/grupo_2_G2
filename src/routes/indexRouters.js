let express= require ('express');

let router = express.Router();

const indexController = require ('../controllers/indexController');
const productoController = require('../controllers/productoController');



//middlewares import

const authMiddleware = require('../middlewares/authMiddleware')
const adminMiddleware = require('../middlewares/adminMiddleware')
//rutas
router.get ('/', indexController.home);
router.get ('/admin', authMiddleware,adminMiddleware, indexController.admin);
router.get ('/admin/usrs', authMiddleware, adminMiddleware,indexController.usuarios);
router.get ('/quienes', indexController.quienes);
router.get ('/carrito', productoController.carrito);





module.exports = router