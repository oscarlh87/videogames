const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  
  
  sequelize.define('Genre', {
    ID : {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    Imagen: {
      type: DataTypes.STRING,
    },    
},{timestamps:false});
}