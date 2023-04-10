const {Plataform} = require('../../db');

const createOr=(arr)=>{

   arr.forEach(async (e)=>{
     
            await Plataform.findOrCreate({
            where:{name:e.name,Imagen:e.image_background}
         }); 
         
   });    

   }

const bddPlataform=async()=>{
      
      const allPlat=await Plataform.findAll();
      
      return allPlat;
}

module.exports={
createOr,
bddPlataform,
};