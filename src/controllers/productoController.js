//modulos
const fs=require('fs');
const path= require('path')

//leyendo el json de productos
const rutaProductos = path.join(__dirname,'../data/productos.json');
let productos = JSON.parse(fs.readFileSync(rutaProductos,'utf-8'));



const productoController = {
    todos: function(req,res){
        res.render('products/nbirras', {productos})
    },
    producto: function (req, res){
        res.render('products/producto');
    },
    carrito: function (req, res){
        res.render('products/carrito');
    },
    cargaProducto: function (req, res){
        res.render('products/cargaProducto');
    },
    guardaProducto: function (req, res){
        const nuevaBirra = {
            nombre: req.body.nombre,
            marca: req.body.marca,
            ABV: req.body.ABV,
            IBU: req.body.IBU,
            contenido: req.body.contenido,
            precio: req.body.precio,
            stock: req.body.stock,
        }
        productos.push(nuevaBirra)
        const birraJSON = JSON.stringify(productos)
        fs.writeFileSync(rutaProductos, birraJSON)
        res.redirect('/products');
    },
    
    editarProducto: function (req, res){
        res.render('products/editarProducto');

} }
module.exports = productoController;