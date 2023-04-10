const { Router } = require('express');
const gameRouter=require('./videogame');
const genresRouter=require('./genres');
const plataformRouter=require('./plataform');



const router = Router();
    
            router.use('/videogames',gameRouter);
            router.use('/genres',genresRouter);
            router.use('/plataform',plataformRouter);


module.exports = router;
