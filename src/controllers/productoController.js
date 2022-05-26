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
        let nuevaBirra = {
            NOMBRE: req.body.nombre,
            MARCA: req.body.marca,
            ABV: req.body.ABV,
            IBU: req.body.IBU,
            CONTENIDO: req.body.contenido,
            PRECIO: req.body.precio,
            STOCK: req.body.stock,
            IMAGEN: req.file.filename,
        }
        productos.push(nuevaBirra)
        const birraJSON = JSON.stringify(productos)
        fs.writeFileSync(rutaProductos, birraJSON)
        res.redirect('/products');
    },
    
    editarProducto: function (req, res){
        res.render('products/editarProducto');
            
        },






        //res.render('products/editarProducto');

} 
module.exports = productoController;