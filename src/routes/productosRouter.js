// llamando a express y a router y path
const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const productosController = require("../controllers/productoController");

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

//RUTAS

// listar todos los productos
router.get("/", productosController.todos);

//crear producto
router.get("/cargaProducto", authMiddleware, productosController.cargaProducto);
router.post(
  "/",
  fotoProducto.single("foto"),
  productosController.guardaProducto
);

//editar producto
router.get("/:id/editar", authMiddleware, productosController.editarProducto);
router.put(
  "/editarProducto/:id/",
  fotoProducto.single("foto"),
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
