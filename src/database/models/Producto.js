module.exports = (sequelize, dataTypes) => {
  let alias = "Producto";

  let columnas = {
    idProductos: {
      type: dataTypes.INT,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    // created_at: dataTypes.TIMESTAMP,
    // updated_at: dataTypes.TIMESTAMP,
    nombre: {
      type: dataTypes.VARCHAR(45),
      allowNull: false,
    },
    nombre: {
      type: dataTypes.VARCHAR(999),
      allowNull: false,
    },
    abv: {
      type: dataTypes.INT,
      allowNull: false,
    },
    ibu: {
      type: dataTypes.INT,
      allowNull: false,
    },
    precio: {
      type: dataTypes.INT,
      allowNull: false,
    },
    descuento: {
      type: dataTypes.INT,
      allowNull: true,
    },
    foto: {
      type: dataTypes.VARCHAR(100),
      allowNull: false,
    },
    stock: {
      type: dataTypes.INT,
      allowNull: false,
    },
    rating: {
      type: dataTypes.INT,
      allowNull: false,
    },
    activo: {
      type: dataTypes.TINYINT(1),
      allowNull: true,
    },
    marcas_idmarca: {
      type: dataTypes.INT
    },
    contenido_idcontenido: {
      type: dataTypes.INT
    },
    tipos_idtipo: {
      type: dataTypes.INT
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
      foreignKey: "idmarca",
    });

    Producto.belongsTo(models.Tipo, {
      as: "tipos",
      foreignKey: "tipos_idtipo",
    });

    Producto.belongsTo(models.Contenido, {
      as: "contenido",
      foreignKey: "idcontenido",
    });

  };

  return Producto;
};
