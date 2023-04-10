import React from 'react'

function Formthree(props) {
  const formValue=(event)=>{
    props.set({
      ...props.form,
      [event.target.name]:event.target.value
    })

  } 

  return (
    <div className='formcontainer'>
    <div className='form-image'>
          <div><img alt="" /></div>

    </div>
    <div className='form-data'>
          

          <div>
                <label htmlFor="imagen">Subir imagen</label>
                <input type="file" name='image' value={props.form.image} onChange={formValue} 
                 placeholder="subir imagen"/>
                <span>La imagen es opcional.</span>
          </div>
          <div>
                <h2>Datos del nuevo juego:</h2>
                <p>Nombre:{props.form.name}</p>
                <p>Descripcion:{props.form.description}</p>
                <p>Fecha de lanzamiento:{props.form.date}</p>
                <p>Genero:{props.form.genrer}</p>
                <p>Plataformas:{props.form.platforms}</p>
                <p>Imagen:{props.form.image?props.form.image:"Sin imagen"}</p>
          </div>
          
       

          
    </div>

</div>
 
  )
}

export default Formthree