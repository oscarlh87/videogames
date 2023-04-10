import React from 'react'
import style from './Card.module.css'
import { useGlobalContext } from '../Components/context';
import {gameById} from '../Redux/Actions/index'
import { useDispatch } from 'react-redux';

function Card(props) {
  
  const {openModal} = useGlobalContext();
  const dispatch=useDispatch()

  const detail=async(id)=>{
  dispatch(await gameById(id));
  openModal();
  }

  return (
    <div key={props.id} className={style.card} onClick={()=>detail(props.id)}>
    <div ><img className={style.image} src={props.image} alt="" /></div>  
    <div className={style.nombre}>
          <div>plataforma</div>
          <div>{props.name}</div>
          <div>generos</div>


    </div>  
    </div>
  )
}

export default Card