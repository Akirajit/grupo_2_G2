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
    editarProducto: function (req, res){
        const idParam = req.productos.id;
        let idseleccionado = null
        productos.forEach(productos => {
            if (productos.id == idParam){
                return idseleccionado = productos
            }
            
        });






        //res.render('products/editarProducto');

} }
module.exports = productoController;