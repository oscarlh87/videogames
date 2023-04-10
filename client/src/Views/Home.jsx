import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Cards from '../Components/Cards'
import Downmenu from '../Components/Downmenu/Downmenu'
import Spinner from '../Components/Spinner'
import {getAllGenres, getAllPlataform, getAllVideogames,pagNextPrev} from '../Redux/Actions/index'
import style from './Home.module.css'
import Modal from '../Components/Modal/Modal'
import flecha from '../../src/images/flecha.png'
import flechader from '../../src/images/flechader.png' 
import Form from '../Views/Form/Form'


function Home() {
  const dispatch=useDispatch()

  useEffect(()=>{
  dispatch(getAllPlataform()); 
  dispatch(getAllGenres()); 
  dispatch(getAllVideogames())
  },[dispatch])
  
  const games=useSelector((state)=>state.videogames)

  const gameSelect=useSelector((state)=>state.gameselect)
  
  const pagRedux=useSelector((state)=>state.pagination)
 
  const pagination=(next)=>{
  next ? dispatch (pagNextPrev(true)):dispatch (pagNextPrev(false))
  }

  return (
    <>
    
    <Modal id={gameSelect.ID}/>
    <Form/>

    {pagRedux.actual>=2?<img className={style.arrowLeft}  src={flecha} alt="" onClick={()=>pagination()} />:<></>}
    {pagRedux.actual===pagRedux.total?<></>:<img className={style.arrowRight} src={flechader} alt="" onClick={()=>pagination(true)}/>}
    
    

    
    <div className={style.content}>
        <div className={style.cards}>{games ?<Cards/>:<Spinner />} </div>
        <div><Downmenu/></div>
    </div>
    </>
  )
}

export default Home