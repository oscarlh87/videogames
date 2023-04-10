require('dotenv').config();
const { Sequelize } = require('sequelize');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;
const gameModel = require("./models/Videogame");
const genreModel = require("./models/Genres");
const plataformModel = require("./models/Plataform");

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/videogames`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});

//Create models
gameModel(sequelize);
genreModel(sequelize);
plataformModel(sequelize);

//import models
const {Videogame} = sequelize.models;
const {Genre}=sequelize.models;
const {Plataform}=sequelize.models;


//Relacion
Videogame.belongsToMany(Genre,{through:"relacion"})
Genre.belongsToMany(Videogame,{through:"relacion"})

Videogame.belongsToMany(Plataform,{through:"platavideo"})
Plataform.belongsToMany(Videogame,{through:"platavideo"})



module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
