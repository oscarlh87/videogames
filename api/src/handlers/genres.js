const getAllGenres = require("../controllers/genres");


const getGenres= async (req,res)=>{
    
    const genres= await getAllGenres();
    
    try {

                res.status(200).json(genres);
        
        } catch (error) {

                res.status(400).json({error:error.message})     
        
            }
}

module.exports=getGenres;