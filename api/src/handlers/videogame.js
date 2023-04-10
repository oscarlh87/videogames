const { getVideogames,postGame,gameByName,gameIdController } = require("../controllers/videogames");


const getAllGames=async (req,res)=>{
    
    const {name}=req.query;
    
    const allVideogames= await getVideogames();

    const videogame = await gameByName(name);

    
    if(name===undefined){
        try {
    
          res.status(200).json(allVideogames);
            
        } catch (error) {
          
          res.status(400).json({error:error.message})    
        } 
    
            
    }else {
        
        try {
    
            res.status(200).json(videogame);
            
        } catch (error) {
            res.status(400).json({error:error.message})    
        }        
    } 

}

const newGame=async(req,res)=>{
      
    const {Nombre,Descripcion,Plataformas,Imagen,Fecha,Rating,Genero}=req.body;

    try {
      res.status(201).json(await postGame(Nombre,Descripcion,Plataformas,Rating,Genero,Imagen,Fecha))
        
    } catch (error) {
        res.status(400).json({error:error.name})   
    }

}

const gameId=async (req,res)=>{
    const id =req.params.id;
try {
  res.status(200).json(await gameIdController(id))  
} catch (error) {
    res.status(400).json({error:error.message})   
}

}

module.exports = {
    getAllGames,
    newGame,
    gameId,
}