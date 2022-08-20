//MODULOS
// const fs = require("fs");
// const path = require("path");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const db = require("../database/models");


//leyendo el json de usuarios
// const rutaUsuarios = path.join(__dirname, "../data/usuarios.json");
// let usuarios = JSON.parse(fs.readFileSync(rutaUsuarios, "utf-8"));

// function userid(iduser) {
//   let user = {};
//   for (let i = 0; i < usuarios.length; i++) {
//     if (iduser == usuarios[i].id) {
//       user = usuarios[i];
//       break;
//     }
//   }
//   return user;
// }

// con esto buscamos por email los usuarios
// function searchByEmail(email) {
//   let user = {};
//   for (let i = 0; i < usuarios.length; i++) {
//     if (email == usuarios[i].email && email != undefined) {
//       user = usuarios[i];
//       break;
//     }
//   }
//   return user;
// }

const usuariosController = {
  //MUESTRA EL PERFIL DEL USUARIO
  perfil: function (req, res) {
    db.Usuario.findByPk(req.params.id)
      .then((encontrado) => {
        res.render("users/perfil", { encontrado });
      })
      .catch((error) => res.send(error));
  },
  //MUESTRA LA VISTA DE LOGIN
  login: function (req, res) {
    res.render("users/login");
  },

  //PROCESA EL LOGIN DE USUARIO
  procesarLogin: function (req, res) {
    //VALIDACION BACKEND
    const resultValidation = validationResult(req);

    if (resultValidation.errors.length > 0) {
      return res.render("users/login", {
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    }

    //sequelize ENCONTRAR USUARIO POR MAIL
    db.Usuario.findOne({
      where: { email: req.body.email },
    })
      .then((encontrado) => {
        //VALIDACION DEL MAIL CONTRA LA BASE
        if (encontrado == null) {
          let mensajeError = "El mail no está registrado";
          res.render("users/login", { mensajeError });
        } else if (
          encontrado.id_usuario != undefined &&
          bcrypt.compareSync(req.body.password, encontrado.password)
        ) {
          //LOGUEO EXITOSO
          req.session.usuarioLogueado = encontrado;
          // (si el checkbox de recordar usuario no está tildado, debería llegar como "undefined")
          if (req.body.recordarClave != undefined) {
            res.cookie('recordame',
            encontrado.id_usuario,
            {maxAge:6000000})
          }
          res.redirect("/");
        } else {
          // LOGUEO ERRONEO
          let mensajeError = "Usuario o clave incorrectos ";
          res.render("users/login", { mensajeError });
        }
      })
      .catch((error) => res.send(error));
  },

  //DESLOGUEA AL USUARIO
  logout: function (req, res) {
    res.clearCookie('recordame');
    req.session.destroy();
    return res.redirect("/");
  },



  // RENDERIZA LA VISTA DE CREAR UN USUARIO NUEVO
  cargaUsuario: function (req, res) {
    res.render("users/registro");
  },
  //PROCESA LA CREACION DE UN USUARIO NUEVO
  guardaUsuario: function (req, res) {
    const resultValidation = validationResult(req);

    if (resultValidation.errors.length > 0) {
      return res.render("users/registro", {
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    }

    db.Usuario.create({
      nombre: req.body.nombre,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
      apellido: req.body.apellido,
      isadmin: 0,
      foto: req.file.filename,
      direccion: req.body.direccion,
      codigopostal: req.body.cp,
    })
      .then(() => {
        return res.redirect("/products");
      })
      .catch((error) => res.send(error));
  },

  //MUESTRA LA VISTA DE EDICION DE USUARIO
  editarUsuario: function (req, res) {
    db.Usuario.findByPk(req.params.id)
      .then((encontrado) => {
        res.render("users/editarUsuario", { encontrado });
      })
      .catch((error) => res.send(error));
  },

  //PROCESA LA EDICION DE UN USUARIO NUEVO
  procesarEditarUsuario: function (req, res) {
    let idEditado = req.params.id;

    db.Usuario.findByPk(idEditado)
      .then((encontrado) => {
        //si el usuario seleccionó una foto nueva
        if (req.file != undefined) {
          db.Usuario.update(
            {
              nombre: req.body.nombre,
              apellido: req.body.apellido,
              email: req.body.email,
              direccion: req.body.direccion,
              password: bcrypt.hashSync(req.body.password, 10),
              codigopostal: req.body.cp,
              isadmin: req.body.isAdmin == "on" ? 1 : 0,
              foto: req.file.filename,
            },
            {
              where: { id_usuario: idEditado },
            }
          )
            .then(() => {
              res.redirect("/admin/usrs");
            })
            .catch((error) => res.send(error));
        }
        //si el usuario no seleccionó ninguna foto nueva
        else {
          db.Usuario.update(
            {
              nombre: req.body.nombre,
              apellido: req.body.apellido,
              email: req.body.email,
              direccion: req.body.direccion,
              password: bcrypt.hashSync(req.body.password, 10),
              codigopostal: req.body.cp,
              isadmin: req.body.isAdmin == "on" ? 1 : 0,
              foto: encontrado.foto,
            },
            {
              where: { id_usuario: idEditado },
            }
          )

            .then(() => {
              res.redirect("/admin/usrs");
            })
            .catch((error) => res.send(error));
        }
      })
      .catch((error) => res.send(error));
  },
  //REDIRIGE A LA PAGINA DE "ESTAS SEGURO DE BORRAR EL USUARIO???"
  kill: function (req, res) {
    let usuarioBorrado = req.params.id;
    db.Usuario.findByPk(usuarioBorrado)
      .then((Usuario) => {
        return res.render("users/killUser.ejs", { Usuario });
      })
      .catch((error) => res.send(error));
  },
  //PROCESA EL BORRADO DEL USUARIO 
  borrar: function (req, res) {
    let usuarioBorrado = req.params.id;
    db.Usuario.destroy({
      where: { id_usuario: usuarioBorrado },
      force: true,
    })
      .then(() => {
        return res.redirect("/admin/usrs");
      })
      .catch((error) => res.send(error));
  },
};
module.exports = usuariosController;
