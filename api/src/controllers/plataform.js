require('dotenv').config();
const {KEY} = process.env;
const axios=require('axios');
const {createOr,bddPlataform} = require('./helpers/plataformas');

const getAllPlataforms=async ()=>{
      
      const plataformRaw=(await axios('https://api.rawg.io/api/platforms?key='+KEY)).data
      
      const create = createOr(plataformRaw.results);
                              
      const allPlat=bddPlataform();       

      return allPlat;
}

module.exports=getAllPlataforms;