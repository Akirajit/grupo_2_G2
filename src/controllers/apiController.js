// IMPORTANDO MODULOS
const db = require("../database/models");

//METODOS DE LA API
const apiController = {
    listarUsuarios: function (req, res){
        db.Usuario.findAll({
            attributes: {exclude:['password','isadmin','foto','direccion','codigopostal']}
        })
        .then(usuarios => {
            usuarios.forEach(usuario => {
                usuario.dataValues.detail = `http://localhost:4000/users/perfil/${usuario.id_usuario}`
            });
            return res.json({
                count:usuarios.length,
                users: usuarios 
            })
        })
        .catch((error) => res.send(error));
    },
    detalleUsuario: function (req, res) {
        db.Usuario.findByPk(req.params.id, {
            attributes: {exclude:['password','isadmin']}
        })
          .then((usuario) => {
            usuario.dataValues.urlFoto=`http://localhost:5500/public/IMAGENES/usuarios/${usuario.foto}`
            return res.json({
                datos: usuario 
            })
          })
          .catch((error) => res.send(error));
      },
      listarProductos: function (req, res){
        db.Producto.findAll({
            include: ["marcas", "tipos", "contenido"],
          })
        .then(productos => {

           //consultar lo del findByCategory
           
            return res.json({
                count:productos.length,
                //consultar esta parte
                countByMarca:{"pirulo":1, "otro":2},
                products: productos 
            })
        })
        .catch((error) => res.send(error));
    },


}
module.exports= apiController;