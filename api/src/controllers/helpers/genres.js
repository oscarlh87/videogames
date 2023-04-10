const {Genre} = require('../../db');

const createOr=(arr)=>{

   arr.forEach(async (e)=>{
     
            await Genre.findOrCreate({
            where:{name:e.name,Imagen:e.image_background}
         }); 
         
   });    

   }

const bddGenres=async()=>{
      
      const allGen=await Genre.findAll();
      
      return allGen;
}

module.exports={
createOr,
bddGenres
};

