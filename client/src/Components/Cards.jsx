import React from 'react'
import Card from './Card'
import style from './Cards.module.css'
import { useSelector } from 'react-redux'

function Cards() {
  const videogames=useSelector((state)=>state.videogames)
  
  const slice=useSelector((state)=>state.pagination)

  const gamesPagin= videogames.slice(slice.cardinit,slice.cardend)
  
  return (


    <div className={style.cardcontainer} >
    
    {gamesPagin.map((game)=><div><Card name={game.Nombre} image={game.Imagen} id={game.ID}/></div>)}
    
    </div>
  )
}

export default Cards