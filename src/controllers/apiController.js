// IMPORTANDO MODULOS
const db = require("../database/models");
const Op = db.Sequelize.Op;

//METODOS DE LA API
const apiController = {

  listarUsuarios: function (req, res) {
    db.Usuario.findAll({
      attributes: {
        exclude: ["password", "isadmin", "foto", "direccion", "codigopostal"],
      },
    })
      .then((usuarios) => {
        usuarios.forEach((usuario) => {
          usuario.dataValues.detail = `http://localhost:4000/users/perfil/${usuario.id_usuario}`;
        });
        return res.json({
          total_usuarios: usuarios.length,
          usuarios: usuarios,
        });
      })
      .catch((error) => res.send(error));
  },
  detalleUsuario: function (req, res) {
    db.Usuario.findByPk(req.params.id, {
      attributes: { exclude: ["password", "isadmin"] },
    })
      .then((usuario) => {
        usuario.dataValues.urlFoto = `http://localhost:4000/IMAGENES/usuarios/${usuario.foto}`;
        return res.json({
          datos: usuario,
        });
      })
      .catch((error) => res.send(error));
  },
  listarProductos: function (req, res) {
    let totalPorMarca = {};
    db.Producto.findAll({
      include: ["marcas", "tipos", "contenido"]
    })
      .then((productos) => {
        productos.forEach((producto) => {
          let nombre_marca = producto.marcas.nombre;
          totalPorMarca[nombre_marca] = productos.filter((birra) => {
            return nombre_marca == birra.marcas.nombre;
          }).length;
        });

        return res.json({
          total_productos: productos.length,
          totalPorMarca: totalPorMarca,
          productos: productos,
        });
      })
      .catch((error) => res.send(error));
  },
  detalleProducto: function (req, res) {
    db.Producto.findByPk(req.params.id, {
      include: ["marcas", "tipos", "contenido"]
    })
      .then((producto) => {
        producto.dataValues.urlFoto = `http://localhost:4000/imagenes/productos/${producto.foto}`;
        return res.json({
          datos: producto,
        });
      })
      .catch((error) => res.send(error));
  },
  listarMarcas: function(req,res){
    db.Marca.findAll()
    .then((data)=> {
      res.send(data)
    })

  }
};
module.exports = apiController;

