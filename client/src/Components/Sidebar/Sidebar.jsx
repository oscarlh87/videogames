import React from 'react';
import { useGlobalContext } from '../context';
import './index.css'


const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
      <div className={'sidebar-header'}>
      <div>
        <button onClick={closeSidebar}>X</button>
      </div>
        
      <div>
        <p>Origen:</p>  
        <select className={'select'} name="Generes" id="">
                <option value="">Escoja una:</option>
                <option value="opcion-1">Opción 1</option>
                <option value="opcion-2">Opción 2</option>
                <option value="opcion-x">Opción X</option>
        </select>
        </div>
        
        <div>
        <p>Genero:</p>  
        <select className={'select'} name="Generes" id="">
                <option value="">Escoja una:</option>
                <option value="opcion-1">Opción 1</option>
                <option value="opcion-2">Opción 2</option>
                <option value="opcion-x">Opción X</option>
        </select>
        </div>
        <div>
        <p>Plataforma:</p>   
        <select className={'select'} name="Generes" id="">
                <option value="">Escoja una:</option>
                <option value="opcion-1">Opción 1</option>
                <option value="opcion-2">Opción 2</option>
                <option value="opcion-x">Opción X</option>
        </select>
        </div>
        <div>
        <p>Orden:</p>  
        <select className={'select'} name="Generes" id="">
                <option value="">Escoja una:</option>
                <option value="opcion-1">Opción 1</option>
                <option value="opcion-2">Opción 2</option>
                <option value="opcion-x">Opción X</option>
        </select>
        </div>

      </div>

    </aside>
  );
};

export default Sidebar;
