//modulos
const fs = require("fs");
const path = require("path");
const multer = require ('multer'); 
const bcrypt = require ("bcryptjs")
const {validationResult} = require('express-validator')

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
function searchEmail(email) {
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
  procesarLogin:  function (req, res) {
    const resultValidation = validationResult(req)

    if (resultValidation.errors.length > 0){
      return res.render('users/login', {
        errors: resultValidation.mapped(),
        oldData: req.body,

      })
    }
    
    let encontrado = searchEmail(req.body.email) 

    
    if(encontrado.id != undefined && bcrypt.compareSync(req.body.password, encontrado.password)==true  ){
      req.session.usuarioLogueado=encontrado;
      delete encontrado.password;
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
        res.render("users/perfil", { encontrado });
    },
      
/*
    birraEditada: function (req, res){
      // aca traemos lo que pusimos en el cuerpo del formulario
        let lataeditada = {
            nombre: req.body.nombre,
            marca: req.body.marca,
            descripcion: req.body.descripcion,
            abv: parseInt (req.body.abv),
            ibu: parseInt(req.body.ibu),
            contenido: req.body.contenido,
            precio: parseInt (req.body.precio),
            stock: parseInt (req.body.stock),
            foto: '/imagenes/productos/'+req.file.filename,
            id: req.params.id,
            descuento: parseInt(req.body.descuento),
            }    
        
       //aca hay que hacer la funcion para quitar el viejo id y pushear el nuevo
       //     (birraid - encontrado) + lataeditada
       let productosmenosuno = productos.filter (encontrado => encontrado.id != req.params.id);
         productosmenosuno.push (lataeditada)
           productos = productosmenosuno
        

       const arrayeditado = JSON.stringify(productos)
       fs.writeFileSync(rutaProductos, arrayeditado)


       res.redirect('/products', );
       
        }

        
        

} */}
module.exports = usuariosController;
