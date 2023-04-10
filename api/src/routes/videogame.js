const { Router } = require('express');
const { getAllGames, newGame,gameId } = require('../handlers/videogame');

const gameRouter=Router();

gameRouter.get('/',getAllGames);
gameRouter.post('/',newGame);
gameRouter.get('/:id',gameId);

module.exports= gameRouter;

