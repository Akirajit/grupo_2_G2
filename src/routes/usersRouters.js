// llamando a express y a router y path
const express= require ('express');
const router = express.Router();
const multer = require ('multer'); 
const path = require ('path');
const {body} = require('express-validator')

//controllers import 
const userController = require('../controllers/userController');

//middlewares import
const guestMiddleware = require('../middlewares/guestMiddleware')
const authMiddleware = require('../middlewares/authMiddleware')

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
        // .isLength({ min: 8, max:20 }).withMessage("La contraseña debe tener 8 caracteres como mínimo y 20 como máximo")
]
const validacionesRegistro = [
    body('nombre').trim()
        .notEmpty().withMessage("Debes ingresar un nombre").bail(),
    body('apellido').trim()
        .notEmpty().withMessage("Debes ingresar un apllido").bail(),
    body('email').trim()
        .notEmpty().withMessage("El campo email no puede estar vacío.").bail()
        .isEmail().withMessage("Debe ser un email válido"),
    body('password').trim()
        .notEmpty().withMessage("El campo password no puede estar vacío.").bail()
        .isLength({ min: 8, max:20 }).withMessage("La contraseña debe tener 8 caracteres como mínimo y 20 como máximo"),
    body('password2').trim()
        .notEmpty().withMessage("El campo password no puede estar vacío.").bail()
        .custom((value,{req})=> {
            if(value != req.body.password){
                throw new Error("Las contraseñas deben coincidir")
            }
            return true;
        }),
]
//Rutas
router.get ('/registro' , userController.cargaUsuario);
router.post('/',fotoUsuario.single('foto'), validacionesRegistro, userController.guardaUsuario);
router.get ('/login', userController.login);
router.post('/login', validacionesLogin,  guestMiddleware, userController.procesarLogin)
router.get ("/perfil/:id", authMiddleware ,userController.perfil);
//editar usuario
router.get ("/editar/:id", userController.editarUsuario)
router.put('/editar/:id/', fotoUsuario.single('foto'), userController.procesarEditarUsuario);

//borrar usuario
router.delete("/:id", userController.borrar)

//logout
router.get("/logout" ,userController.logout)





module.exports = router;