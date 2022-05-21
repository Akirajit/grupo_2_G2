// llamando a express y a router
let express= require ('express');
let router = express.Router();

//importando
let productosController = require('../controllers/productoController')
/*let multerDiskStorage = multer.diskStorage({
    destination: (req, file, callback) => {
    callback(null,'../../public/imagenes/productos');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
    })
    
    const fotoProducto = multer({storage: multerDiskStorage})*/
    
//rutas
router.get ('/', productosController.todos);

router.get('/cargaProducto', productosController.cargaProducto); 
router.post('/',productosController.guardaProducto);



module.exports = router