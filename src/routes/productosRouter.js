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
router.get("/", productosController.todos);

router.get("/cargaProducto", authMiddleware, productosController.cargaProducto);
router.post(
  "/",
  fotoProducto.single("foto"),
  productosController.guardaProducto
);

router.get("/:id/editar", authMiddleware, productosController.editarProducto);
router.put(
  "/editarProducto/:id/",
  fotoProducto.single("foto"),
  productosController.birraEditada
);

router.get("/:id", productosController.producto);

router.get("/borrarProducto/:id", authMiddleware, productosController.borrar);
router.delete(
  "/borrarProducto/:id",
  authMiddleware,
  productosController.destroy
);

module.exports = router;
