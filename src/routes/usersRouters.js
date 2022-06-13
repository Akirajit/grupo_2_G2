// llamando a express y a router y path
const express= require ('express');
const router = express.Router();
const multer = require ('multer'); 
const path = require ('path');
const {body} = require('express-validator')
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


//Express validator  
const validacionesLogin = [
    body('email').trim()
        .notEmpty().withMessage("El campo email no puede estar vacío.").bail()
        .isEmail().withMessage("Debe ser un email válido"),
    body('password').trim()
        .notEmpty().withMessage("El campo password no puede estar vacío.").bail()
        .isLength({ min: 8, max:20 }).withMessage("La contraseña debe tener 8 caracteres como mínimo y 20 como máximo")
]

router.get ('/registro', userController.cargaUsuario);
router.post('/',fotoUsuario.single('foto'), userController.guardaUsuario);
router.get ('/login', userController.login);
router.post('/login', validacionesLogin, userController.procesarLogin)
router.get ("/perfil/:id", userController.perfil);
router.get ("/editar/:id", userController.editarUsuario)




module.exports = router;