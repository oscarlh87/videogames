import React from 'react'
import sonic from '../../../images/sonic.png'
import { useSelector } from 'react-redux'
import './index.css'

function Formtwo(props) {
  
  const genres=useSelector((state)=>state.genres)
  const platforms=useSelector((state)=>state.platforms)
  
  const formValue=(event)=>{
    if (event.target.name==='genrer') {
        return props.set({
          ...props.form,
          [event.target.name]:[...props.form.genrer,event.target.value]
        })
    }

    if (event.target.name==='platforms') {
      return props.set({
        ...props.form,
        [event.target.name]:[...props.form.platforms,event.target.value]
      })
  }

     props.set({
      ...props.form,
      [event.target.name]:event.target.value
    })

  } 

  

  return (
    <div className='formcontainer'>
    <div className='form-image'>
          <div><img src={sonic} alt="" /></div>

    </div>
    <div className='form-data'>
          
          <label htmlFor="genrer">Genero</label>
          <select name="genrer" id="genrer" onChange={formValue}>
           <option value="">Seleccione un genero</option>
           {genres?.map((g)=><option>{g.name}</option>)}
          </select>      

          <label htmlFor="platforms">Plataforma</label>
          <select name="platforms" id="platforms" onChange={formValue}>
          <option value="">Seleccione una plataforma</option>
          {platforms?.map((p)=><option>{p.name}</option>)}
          </select>

        
          <label htmlFor="rating">Rating:</label>
          <input type="range" name='rating' min='1' max='5' onChange={formValue} value={props.form.rating}/>
          <span>{props.form.rating}</span>
    </div>

</div>
 
  )
  }

export default Formtwo