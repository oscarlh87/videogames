const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Videogame', {
    ID : {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },

    Descripcion:{
      type:DataTypes.STRING,
    },

    Imagen:{
      type:DataTypes.STRING,
      defaultValue: "https://serviciopad.es/wp-content/uploads/estudio-revela-que-estadounidenses-gastan-cada-vez-mas-en-videojuegos-02-e1445888221548.jpeg"
    },

    Fecha:{
      type:DataTypes.DATEONLY,
    },

    Rating:{
      type:DataTypes.FLOAT,
    },

    Bdd:{
      type:DataTypes.BOOLEAN,
      defaultValue: true
    },
 
  },{timestamps:false});
};
