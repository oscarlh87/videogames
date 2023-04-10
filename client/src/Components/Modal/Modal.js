import React, { useState } from 'react';
import { useGlobalContext } from '../context';
import style from './Modal.module.css'
import {cleanGame} from '../../Redux/Actions/index'
import { useDispatch, useSelector } from 'react-redux';
import Youtube from './Youtube';
import Spinner from '../Spinner'

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();
  
  const dispatch=useDispatch()
  
  const game=useSelector((state)=>state.gameselect);
  
  const [content,setContent]=useState(true);
  
  const close=()=>{
  dispatch(cleanGame());
  setContent(true);
  closeModal();
  }
  
  return (
    <div
      className={
        isModalOpen ? style.showmodal : style.modaloverlay
      }
    >
      <div className={style.modalcontainer}>
        
        {content?(game?<div className={style.modalcontent}>
              <div className={style.image}>
                      
                   <img className={style.img}src={game.Imagen} alt="" />
  
            </div>
            <div>
              {game.Nombre}
              {game.Descripcion}

            </div>
        </div>:<Spinner/>):<Youtube id={game.idYoutube}/>}
  
        
       
        <div className={style.modalbuttons}>
            <div><button onClick={close}><span>Home</span></button></div>
            <div><button onClick={()=>setContent(!content)}><span>{content?"Video":"Detalles"}</span></button></div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
