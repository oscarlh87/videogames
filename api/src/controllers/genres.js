require('dotenv').config();
const {KEY} = process.env;
const axios=require('axios');
const {createOr,bddGenres} = require('./helpers/genres');

const getAllGenres=async ()=>{
      
      const genresRaw=(await axios('https://api.rawg.io/api/genres?key='+KEY)).data
      
      const create = createOr(genresRaw.results);
                              
      const allGenres=bddGenres();       

      return allGenres;
}

module.exports=getAllGenres;