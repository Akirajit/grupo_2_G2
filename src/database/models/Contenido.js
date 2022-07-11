module.exports = (sequelize, dataTypes) => {
    let alias = "Contenido";
  
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
      tableName: "contenido",
      timestamps: false,
    };
  
    const Contenido = sequelize.define(alias, columnas, configuracion);
  
    Contenido.associate = function (models) {
      Contenido.hasMany(models.Producto, {
        as: "productos",
        foreignKey: "contenido_idcontenido",
      });
    };
  
    return Marca;
  };
  