const { Router } = require('express');
const getGenres=require('../handlers/genres');


const genresRouter=Router();

      genresRouter.get('/',getGenres);

module.exports=genresRouter;

