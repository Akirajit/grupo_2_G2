//modulos
const fs=require('fs');
const path= require('path')

//leyendo el json de productos
const rutaProductos = path.join(__dirname,'../data/productos.json');
let productos = JSON.parse(fs.readFileSync(rutaProductos,'utf-8'));

const indexController = {
    home: function (req, res){
        res.render('home' , {productos});
    },
    quienes: function (req, res){
        res.render('quienes');
    },
    home2: function (req, res){
        res.render('home2');
    },
    admin: function(req,res){
        res.render('admin' , {productos})
    }
}
module.exports= indexController;
