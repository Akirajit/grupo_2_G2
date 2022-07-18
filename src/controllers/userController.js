//modulos
const fs = require("fs");
const path = require("path");
const multer = require ('multer'); 
const bcrypt = require ("bcryptjs")
const {validationResult} = require('express-validator');
const db = require ("../database/models");

//leyendo el json de usuarios
const rutaUsuarios = path.join(__dirname, "../data/usuarios.json");
let usuarios = JSON.parse(fs.readFileSync(rutaUsuarios, "utf-8"));

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

// con esto buscamos por id los usuarios
function userid(iduser) {
  let user = {};
  for (let i = 0; i < usuarios.length; i++) {
    if (iduser == usuarios[i].id) {
      user = usuarios[i];
      break;
    }
  }
  return user;
}

// con esto buscamos por email los usuarios
function searchByEmail(email) {
  let user = {};
  for (let i = 0; i < usuarios.length; i++) {
    if (email == usuarios[i].email && email!= undefined) {
      user = usuarios[i];
      break;
    }
  }
  return user;
}

const usuariosController = {
  perfil: function (req, res) {
    let encontrado = userid(req.params.id);
    res.render("users/perfil", { encontrado });
  },
  login: function (req, res) {
    res.render("users/login");
  },
  logout: function (req,res){
    req.session.destroy();
    return res.redirect('/')
  },
  procesarLogin:  function (req, res) {
    const resultValidation = validationResult(req)

    if (resultValidation.errors.length > 0){
      return res.render('users/login', {
        errors: resultValidation.mapped(),
        oldData: req.body,
        

      })
    }
    
    let encontrado = searchByEmail(req.body.email) 

    
    if(encontrado.id != undefined && bcrypt.compareSync(req.body.password, encontrado.password)){
      req.session.usuarioLogueado=encontrado;
      res.redirect('/')
    } else {
      let mensajeError = "Usuario o clave incorrectos "
      res.render('users/login', {mensajeError} )
    }
    

  },
  cargaUsuario: function (req, res) {
    res.render("users/registro");
  },
  guardaUsuario: function (req, res){
        
      const resultValidation = validationResult(req)
  
      if (resultValidation.errors.length > 0){
        return res.render('users/registro', {
          errors: resultValidation.mapped(),
          oldData: req.body,
          
  
        })
      }
    
    let nuevoUsuario = {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            direccion: req.body.direccion,
            cp: req.body.cp,
            foto: req.file.filename,
            id: Date.now(),
            isAdmin: false,
            }
        usuarios.push(nuevoUsuario)
        const usuariosJSON = JSON.stringify(usuarios ,null, " ")
        fs.writeFileSync(rutaUsuarios, usuariosJSON)
        res.redirect('/');
    } ,
                    
    
    editarUsuario: function (req, res){
        let encontrado = userid(req.params.id);
        res.render("users/editarUsuario", { encontrado });
    },

    procesarEditarUsuario: function (req, res){
      console.log(req.body);
      let usuarioEditado = {
        "nombre": req.body.nombre,
        "apellido": req.body.apellido,
        "email": req.body.email,
        "direccion": req.body.direccion,
        "password": bcrypt.hashSync(req.body.password, 10),
        "cp": req.body.cp,
        "isAdmin": req.body.isAdmin=="on"?true:false,
        "foto": req.file.filename,
        "id": req.params.id
        }   

        let nuevoArray = usuarios.filter(usuario => usuario.id != req.params.id);
        nuevoArray.push(usuarioEditado)
        usuarios=nuevoArray;

        let arrayEditado = JSON.stringify(usuarios)
        fs.writeFileSync(rutaUsuarios,arrayEditado)

        res.redirect('/admin/usrs')
  },
    borrar: function(req, res){
    let usuarioParaBorrar = usuarios.find(usuario => usuario.id == req.params.id)
    let imagenPath = path.join('public/IMAGENES/usuarios', usuarioParaBorrar.foto)

     usuarios = usuarios.filter (encontrado => encontrado.id != req.params.id);
     const arrayeditado = JSON.stringify(usuarios, null, " ")
     //borro el usuario del json
     fs.writeFileSync(rutaUsuarios, arrayeditado)

     //borra la imagen del producto
     fs.unlink(imagenPath, (err) => {
         if (err) {
           console.error(err)
           return
         }
       
         //file removed
       })
     
     //redirige a a la vista de productos
     res.redirect("/")
     

 },
} 
module.exports = usuariosController;
