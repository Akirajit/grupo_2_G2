module.exports = (sequelize, dataTypes) => {
  let alias = "Tipo";

  let columnas = {
    idtipo: {
      type: dataTypes.INT,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    // created_at: dataTypes.TIMESTAMP,
    // updated_at: dataTypes.TIMESTAMP,
    sabor: {
      type: dataTypes.VARCHAR(45),
      allowNull: false,
    },
  };

  let configuracion = {
    tableName: "tipos",
    timestamps: false,
  };

  const Tipo = sequelize.define(alias, columnas, configuracion);

  Tipo.associate = function (models) {
    Tipo.hasMany(models.Producto, {
      as: "productos",
      foreignKey: "tipos_idtipo",
    });
  };

  return Tipo;
};
