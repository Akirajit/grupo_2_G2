module.exports = (sequelize, dataTypes) => {
  let alias = "Producto";

  let columnas = {
    idProductos: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    // created_at: dataTypes.TIMESTAMP,
    // updated_at: dataTypes.TIMESTAMP,
    nombre: {
      type: dataTypes.STRING(45),
      allowNull: false,
    },
    descripcion: {
      type: dataTypes.STRING(999),
      allowNull: false,
    },
    abv: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    ibu: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    precio: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    descuento: {
      type: dataTypes.INTEGER,
      allowNull: true,
    },
    foto: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },
    stock: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    rating: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    activo: {
      type: dataTypes.TINYINT(1),
      allowNull: true,
    },
    marcas_idmarca: {
      type: dataTypes.INTEGER
    },
    contenido_idcontenido: {
      type: dataTypes.INTEGER
    },
    tipos_idtipo: {
      type: dataTypes.INTEGER
    }
  };

  let configuracion = {
    tableName: "productos",
    timestamps: false,
  };

  const Producto = sequelize.define(alias, columnas, configuracion);

  Producto.associate = function (models) {
    Producto.belongsTo(models.Marca, {
      as: "marcas",
      foreignKey: "marcas_idmarca",
    });

    Producto.belongsTo(models.Tipo, {
      as: "tipos",
      foreignKey: "tipos_idtipo",
    });

    Producto.belongsTo(models.Contenido, {
      as: "contenido",
      foreignKey: "contenido_idcontenido",
    });

  };

  return Producto;
};
