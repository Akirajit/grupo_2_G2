// llamando a express y a router y path
const express= require ('express');
const router = express.Router();
const multer = require ('multer'); 
const path = require ('path');
const productosController = require('../controllers/productoController');

//Configuracion de Multer

const multerDiskStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/imagenes/productos'));
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
});
    
    const fotoProducto = multer({storage: multerDiskStorage});    
//rutas
router.get ('/', productosController.todos);

router.get('/cargaProducto', productosController.cargaProducto); 
router.post('/',fotoProducto.single('foto'), productosController.guardaProducto);



module.exports = router