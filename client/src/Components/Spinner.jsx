import React from 'react'
import style from './Spinner.module.css'

function Spinner() {
  return (
     
<div className={style.container}>
  <div className={style.cargando}>
    <div  className={style.pelotas}></div>
    <div  className={style.pelotas}></div>
    <div  className={style.pelotas}></div>
    <span class={style['texto-cargando']}>Cargando...</span>
  </div>
</div>




  )
}

export default Spinner