const getAllPlataforms = require("../controllers/plataform");


const getPlataform= async (req,res)=>{
    
    const genres= await getAllPlataforms();
    
    try {

                res.status(200).json(genres);
        
        } catch (error) {

                res.status(400).json({error:error.message})     
        
            }
}

module.exports=getPlataform;