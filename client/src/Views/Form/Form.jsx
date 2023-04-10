import React, { useState } from 'react'
import { useGlobalContext } from '../../Components/context';
import style from './Form.module.css'
import Formone from './Components/Formone';
import Formtwo from './Components/Formtwo';
import Formthree from './Components/Formthree';

function Form() {
    const { isFormOpen, closeForm } = useGlobalContext();
    const [formVideoGame,setFormVideoGame] = useState(() =>(
           {name:"",date:"",description:"",rating:"",genrer:[],platforms:[]}))
    
    const [formNumber,setFormNumber]=useState(1);

    const close=()=>{
      closeForm();
      setFormNumber(1)
      setFormVideoGame({name:"",date:"",description:"",rating:"",genrer:[],platforms:[]})  
      
    }
  
  return (
    <div className={isFormOpen ? style.showform : style.formoverlay}>

<div className={style.formcontainer}>
        <div>
         {formNumber===1?
         <div><Formone set={setFormVideoGame} form={formVideoGame}/></div>
         :
         formNumber===2?<div><Formtwo set={setFormVideoGame} form={formVideoGame}/></div>:
         <div><Formthree set={setFormVideoGame} form={formVideoGame}/></div>
         }
         
        
        </div>
        
       
        <div className={style.formbuttons}>
            {formNumber===1?
            <div><button onClick={close}><span>Home</span></button></div>:
            formNumber===2?
            <div><button onClick={()=>setFormNumber(1)}><span>Anterior</span></button></div>:
            <div><button onClick={()=>setFormNumber(2)}><span>Anterior</span></button></div>
            }
            
            {formNumber===1?
            <div><button onClick={()=>setFormNumber(2)}><span>Siguiente</span></button></div>:
            formNumber===2?
            <div><button onClick={()=>setFormNumber(3)}><span>Siguiente</span></button></div>:
            <div><button onClick={()=>console.log(formVideoGame)}><span>Crear</span></button></div>
            }
        </div>
      </div>
        
    </div>
  )
}

export default Form