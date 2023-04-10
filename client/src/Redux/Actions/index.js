import axios from 'axios';
import { GET_ALL_VIDEOGAMES,GET_ALL_PLATAFORMS,GET_ALL_GENRES,GET_GAME_BYID,CLEAN_GAME,PAGINATION } from './actions';


export const getAllVideogames=()=>{

    return async function(dispatch){

        await axios('http://localhost:3001/videogames')
        .then((res) =>dispatch({type:GET_ALL_VIDEOGAMES,payload:res.data}))

    }
}

export const getAllPlataform=()=>{

    return async function(dispatch){

        await axios('http://localhost:3001/plataform')
        .then((res) =>dispatch({type:GET_ALL_PLATAFORMS,payload:res.data}))

    }
}

export const getAllGenres=()=>{

    return async function(dispatch){

        await axios('http://localhost:3001/genres')
        .then((res) =>dispatch({type:GET_ALL_GENRES,payload:res.data}))

    }
}

export const gameById=(id)=>{
  
    return  async function(dispatch){

    await axios('http://localhost:3001/videogames/'+id)
    .then((res) =>dispatch({type:GET_GAME_BYID,payload:res.data}))
}
}

export const cleanGame=()=>({type:CLEAN_GAME})

export const pagNextPrev=(next)=>({type:PAGINATION,payload:next})

