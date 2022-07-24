//modulos
const fs=require('fs');
const path= require('path')
const db= require("../database/models");
//leyendo el json de productos
// const rutaProductos = path.join(__dirname,'../data/productos.json');
// let productos = JSON.parse(fs.readFileSync(rutaProductos,'utf-8'));
// const rutaUsuarios = path.join(__dirname, "../data/usuarios.json");

// let usuarios = JSON.parse(fs.readFileSync(rutaUsuarios,'utf-8'));

const indexController = {
    home: function (req, res){
        db.Producto.findAll({
            include: ['marcas','tipos','contenido']
        })
        .then(productos => {
            res.render('home',{productos})
        })
},
    quienes: function (req, res){
        res.render('quienes');
    },
    // home2: function (req, res){
    //     res.render('home2');
    // },
    admin: function(req,res){
        db.Producto.findAll({
            include: ['marcas','tipos','contenido']
        })
        .then(productos => {
        res.render('admin' , {productos})
    })},

    usuarios: function(req,res){
        //hay que ver este controlador despues de hacer usuarios
        db.Usuario.findAll()
        .then(usuarios => {
        res.render('adminusr' , {usuarios})

    })
    }
}
module.exports= indexController;
