module.exports = (sequelize, dataTypes) => {
    let alias = "Usuario";

    let columnas = {
    id_usuario: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },

    nombre: {
        type: dataTypes.STRING(45),
        allowNull: false,
    },
    
    email: {
        type: dataTypes.STRING(999),
        allowNull: false,
    },
    
    password: {
        type: dataTypes.STRING(70),
        allowNull: false,
    },
    
    apellido: {
        type: dataTypes.STRING(45),
        allowNull: false,
    },

    isadmin: {
        type: dataTypes.TINYINT(1),
        allowNull: false,
    },

    foto: {
        type: dataTypes.STRING(255),
        allowNull: true,
    },
    
    direccion: {
        type: dataTypes.STRING(255),
        allowNull: false,
    },
    
    codigopostal: {
        type: dataTypes.INTEGER(11),
        allowNull: false,
    },
    };

    let configuracion = {
        tableName: "usuarios",
        timestamps: false,
    };

    const Usuario = sequelize.define(alias, columnas, configuracion);
    return Usuario;
};