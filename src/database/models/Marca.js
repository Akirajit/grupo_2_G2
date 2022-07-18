module.exports = (sequelize, dataTypes) => {
  let alias = "Marca";

  let columnas = {
    idmarca: {
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
  };

  let configuracion = {
    tableName: "marcas",
    timestamps: false,
  };

  const Marca = sequelize.define(alias, columnas, configuracion);

  Marca.associate = function (models) {
    Marca.hasMany(models.Producto, {
      as: "productos",
      foreignKey: "marcas_idmarca",
    });
  };

  return Marca;
};
