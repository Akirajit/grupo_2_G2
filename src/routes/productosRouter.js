// llamando a express y a router y path
const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const productosController = require("../controllers/productoController");
const { body } = require("express-validator");
//middlewares import
const authMiddleware = require("../middlewares/authMiddleware");

//Configuracion de Multer

const multerDiskStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../public/imagenes/productos"));
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const fotoProducto = multer({ storage: multerDiskStorage });
const validacionesCrearProducto = [
  //entre parentesis se toma el Name
  body("nombre")
    .trim()
    .notEmpty()
    .withMessage("Debes ingresar un nombre")
    .bail()
    .isLength({ min: 1 })
    .withMessage("El nombre debe contener al menos 1 caracter."),
  body("descripcion")
    .trim()
    .notEmpty()
    .withMessage("debes ingresar una descripción")
    .bail()
    .isLength({ min: 20})
    .withMessage("La descripción debe contener al menos 20 caracteres."),
  body('foto')
    .custom((value, {req}) => {
      let file = req.file
      let extensionesValidas = ['.jpg','.jpeg','.png','.gif','.tiff']

      if(!file){
        throw new Error('Tenes que subir una imagen.')
      } else {
        let fileExtension = path.extname(file.originalname).toLowerCase()
        if(!extensionesValidas.includes(fileExtension)) {
          throw new Error(`Las extensiones de archivo permitidas son: ${extensionesValidas.join(', ')}`)
        }
      }
      return true
    })
];

const validacionesEditarProducto = [
  //entre parentesis se toma el Name
  body("nombre")
    .trim()
    .notEmpty()
    .withMessage("Debes ingresar un nombre")
    .bail()
    .isLength({ min: 1 })
    .withMessage("El nombre debe contener al menos 1 caracter."),
  body("descripcion")
    .trim()
    .notEmpty()
    .withMessage("debes ingresar una descripción")
    .bail()
    .isLength({ min: 20})
    .withMessage("La descripción debe contener al menos 20 caracteres."),
  body('foto')
    .custom((value, {req}) => {
      let file = req.file
      let extensionesValidas = ['.jpg','.jpeg','.png','.gif','.tiff']

      if(!file){
        throw new Error('Tenes que subir una imagen.')
      } else {
        let fileExtension = path.extname(file.originalname).toLowerCase()
        if(!extensionesValidas.includes(fileExtension)) {
          throw new Error(`Las extensiones de archivo permitidas son: ${extensionesValidas.join(', ')}`)
        }
      }
      return true
    })
];

//RUTAS

// listar todos los productos
router.get("/", productosController.todos);

//crear producto
router.get("/cargaProducto", authMiddleware, productosController.cargaProducto);
router.post(
  "/",
  fotoProducto.single("foto"),
  validacionesCrearProducto,
  productosController.guardaProducto
);

//editar producto
router.get("/:id/editar", authMiddleware, productosController.editarProducto);
router.put(
  "/editarProducto/:id/",
  fotoProducto.single("foto"),
  validacionesEditarProducto,
  productosController.birraEditada
);

//detalle de producto
router.get("/:id", productosController.producto);

//borrar producto
router.get("/borrarProducto/:id", authMiddleware, productosController.borrar);
router.delete(
  "/borrarProducto/:id",
  authMiddleware,
  productosController.destroy
);

module.exports = router;
