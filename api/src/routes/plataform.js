const { Router } = require('express');
const getPlataform=require('../handlers/plataform');


const plataformRouter=Router();

            plataformRouter.get('/',getPlataform);

module.exports=plataformRouter;