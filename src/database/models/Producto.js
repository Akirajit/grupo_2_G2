module.exports = (sequelize, dataTypes) =>{

    let alias = producto 

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
       




      
     
     /* `marcas_idmarca` INT NOT NULL,
      `centimetros_cubicos_idcontenido` INT NOT NULL,
      `tipos_idtipo` INT NOT NULL,
      PRIMARY KEY (`idProductos`, `marcas_idmarca`, `centimetros_cubicos_idcontenido`, `tipos_idtipo`),
      INDEX `fk_productos_marcas1_idx` (`marcas_idmarca` ASC),
      INDEX `fk_productos_centimetros_cubicos1_idx` (`centimetros_cubicos_idcontenido` ASC),
      INDEX `fk_productos_tipos1_idx` (`tipos_idtipo` ASC),
      CONSTRAINT `fk_productos_marcas1`
        FOREIGN KEY (`marcas_idmarca`)
        REFERENCES `mydb`.`marcas` (`idmarca`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
      CONSTRAINT `fk_productos_centimetros_cubicos1`
        FOREIGN KEY (`centimetros_cubicos_idcontenido`)
        REFERENCES `mydb`.`centimetros_cubicos` (`idcontenido`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
      CONSTRAINT `fk_productos_tipos1`
        FOREIGN KEY (`tipos_idtipo`)
        REFERENCES `mydb`.`tipos` (`idtipo`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION)
    ENGINE = InnoDB;*/
    







}}