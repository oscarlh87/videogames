require('dotenv').config();
const {KEYYOUTUBE} = process.env;
const axios =require('axios');


const helperGame=(arr)=>{
 
    
    const videogames=arr.map((item)=>{

        const genres=item.genres.map((genre)=>{
            return {name:genre.name}
        })
        
        const platforms=item.platforms.map(plat=>
            {
                return{
                    name:plat.platform.name
                }
            }
            
        )
    
    

    return{
        ID:item.id,
        Nombre: item.name,
        Imagen: item.background_image,
        Rating: item.rating,
        Bdd:false,
        Genres:genres,
        Plataforms:platforms,
    }

    })
    
    return videogames;

}

const helperGameId=async(game)=>{

    const youtube=(await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${game.name}&key=${KEYYOUTUBE}`)).data
    
    const idVideo=youtube.items[0].id;
    
    const genres=game.genres.map((genre)=>{
        return genre.name
    })
    
    const platforms=game.platforms.map(plat=>
        {
            return plat.platform.name
            
        }
        
    )

       return{
            Nombre: game.name,
            Imagen: game.background_image,
            Rating: game.rating,
            Descripcion: game.description_raw,
            Fecha:game.released,
            Genres:genres,
            Plataforms:platforms,
            idYoutube:idVideo.videoId,
            
        }

  

}

const helperIdBdd=async(game)=>{

    const youtube=(await axios.get`https://www.googleapis.com/youtube/v3/search?q=${game.Nombre}&key=${KEYYOUTUBE}`).data
    
    const idVideo=youtube.items[0].id;
    
    const genres=game.Genres.map((genre)=>genre.name)

    const platforms=game.Plataforms.map(plat=>
        {
            return plat.name
            
        }
        
    )
    


       return{
            Nombre: game.Nombre,
            Imagen: game.Imagen,
            Rating: game.Rating,
            Descripcion: game.Descripcion,
            Fecha:game.Fecha,
            Genres:genres,
            Plataforms:platforms,
            idYoutube:idVideo.videoId,
            
        }

  

}

const gameSlice=(arr)=>{
      
    const juegos=arr.slice(0,15)
    return juegos;
}


module.exports={
    helperGame,
    gameSlice,
    helperGameId,
    helperIdBdd
};