require('dotenv').config();
const {KEY} = process.env;
const axios =require('axios');
const {helperGame,gameSlice,helperGameId,helperIdBdd} = require('./helpers/videogames');
const {Videogame,Genre,Plataform}=require('../db');
const {Op} = require('sequelize');

const postGame=async (Nombre,Descripcion,Plataformas,Rating,Genero,Imagen,Fecha)=>{
    
    const createVideoGame=await  Videogame.create({Nombre,Descripcion,Rating,Imagen,Fecha})
                          await createVideoGame.addGenres(Genero);
                          await createVideoGame.addPlataforms(Plataformas);
    
                          return createVideoGame

}


const getVideogames=async()=>{
    const gamesApi=[];
    
    
    for(let i=1;i<=5;i++){
        
        const data=(await axios(`https://api.rawg.io/api/games?key=${KEY}&page=${i}`)).data 
        gamesApi.push(data.results);
    }
   
    const videogames=gamesApi.flat();
    
    const dataApi=helperGame(videogames);

    const dataBdd=await Videogame.findAll({attributes:["ID","Nombre","Imagen","Rating","Bdd"],

    
        include:[{model: Genre,attributes:["name"],
                  through:{attributes:[],}},
                 
                {model: Plataform,attributes:["name"],
                through:{attributes:[],}}
                ]
     },);
    
    

    return [...dataBdd,...dataApi];
}


const gameByName=async(nombre)=>{
    
    const game=(await axios(`https://api.rawg.io/api/games?key=${KEY}&search=${nombre}`)).data
    
    const dataApi=helperGame(game.results);

    const gamesBdd = await Videogame.findAll({attributes:["ID","Nombre","Imagen","Rating","Bdd"],
    
    include:[
        {model: Genre,attributes:["name"],through:{attributes:[],}},
   
        {model: Plataform,attributes:["name"],through:{attributes:[],}}],
  
    where:{Nombre:{[Op.iLike]:`%%${nombre}%`}}});
    
    const joinApiBdd=[...gamesBdd,...dataApi]

    const results=gameSlice(joinApiBdd);

    return results;
}

const gameIdController=async(id)=>{
    
    const tipo= parseInt(id)
    
    if(tipo){
        
        const data=(await axios(`https://api.rawg.io/api/games/${id}?key=${KEY}`)).data
        
        const result = helperGameId(data);
        
        return result; 
    }

    
    const dataBdd=await Videogame.findByPk(id,
        {
            attributes:["Nombre","Descripcion","Imagen","Rating","Fecha"],
         
            include:[{model: Genre,attributes:["name"],
                      through:{attributes:[],}},
                 
                     {model: Plataform,attributes:["name"],
                      through:{attributes:[],}}]
        }
        );

    const res=helperIdBdd(dataBdd);
    
    return res;
      

}

module.exports = {
    getVideogames,
    postGame,
    gameByName,
    gameIdController,
};