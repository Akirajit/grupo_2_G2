// llamando a express y a router y path
const express= require ('express');
const router = express.Router();
const multer = require ('multer'); 
const path = require ('path');
const userController = require('../controllers/userController');

//Configuracion de Multer

const multerDiskStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/imagenes/usuarios'));
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
});
    
    const fotoUsuario = multer({storage: multerDiskStorage}); 

router.get ('/registro', userController.cargaUsuario);
router.post('/',fotoUsuario.single('foto'), userController.guardaUsuario);
router.get ('/login', userController.login);
router.get ("/perfil/:id", userController.perfil);
router.get ("/editar/:id", userController.editarUsuario)




module.exports = router;