import {GET_ALL_GENRES, GET_ALL_PLATAFORMS, GET_ALL_VIDEOGAMES,GET_GAME_BYID,CLEAN_GAME,PAGINATION} from "../Actions/actions";

const initialState={
    videogames:"",
    gameselect:"",
    platforms:"",
    genres:"",
    pagination:{
      actual:1,
      total:9,
      cardinit:0,
      cardend:12,
    }
}

const reducer=(state=initialState,action)=>{
 
  switch(action.type){

   case GET_ALL_VIDEOGAMES:
   return {...state,videogames:action.payload} 

   case GET_ALL_PLATAFORMS:
   return {...state,platforms:action.payload} 

   case GET_ALL_GENRES:
   return {...state,genres:action.payload}
   
   case GET_GAME_BYID:
   return {...state,gameselect:action.payload} 

   case CLEAN_GAME:
   return {...state,gameselect:""}

   case PAGINATION:
   if (action.payload){
       return {...state,pagination:{actual:state.pagination.actual+1,total:state.pagination.total,cardinit:state.pagination.cardinit+12,cardend:state.pagination.cardend+12}}
   }else{
    return {...state,pagination:{actual:state.pagination.actual-1,total:state.pagination.total,cardinit:state.pagination.cardinit-12,cardend:state.pagination.cardend-12}}
   }

   default:
    return state

 }

}

export default reducer;