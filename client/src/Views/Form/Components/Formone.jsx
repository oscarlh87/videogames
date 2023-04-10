import React from 'react'
import './index.css'
import luigi from '../../../images/luigi.png'

function Formone(props) {
  const formValue=(event)=>{
    props.set({
      ...props.form,
      [event.target.name]:event.target.value
    })

  } 

  return (
     <div className='formcontainer'>
        <div className='form-image'>
              <div><img src={luigi} alt="" /></div>

        </div>
        <div className='form-data'>
              
              <label htmlFor="nombre">Nombre</label>
              <input type="text" name='name' value={props.form.name} onChange={formValue} 
                     placeholder="Digite el nombre del juego"/>

              
              <label htmlFor="description">Descripcion</label>
              <textarea name='description' value={props.form.description} onChange={formValue} 
              cols="25" rows="5" placeholder="De una breve descripcion del juego"/>
            
              <label htmlFor="date">Fecha de Lanzamiento:</label>
              <input type="date" name='date' value={props.form.name} onChange={formValue}/>
        </div>
  
    </div>
 
  )
}

export default Formone