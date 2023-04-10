import React from 'react'
import style from './Downmenu.module.css'
import { useSelector } from 'react-redux'
import { useGlobalContext } from '../../Components/context';
import Sidebar from '../../Components/Sidebar/Sidebar'

function Downmenu() {
  
  const pagRedux=useSelector((state)=>state.pagination.actual)
  const {openSidebar,openForm} = useGlobalContext();

  return (
    <>
    
   <Sidebar/>
    
    <div className={style.menu}>
          <div><button onClick={()=>openForm()}>button1</button></div>
          <div className={style.center}>
                <div className={style.pagination}><h1>{`0${pagRedux}:09`}</h1></div>
                <div className={style.search}><form action=""><input type="text" /></form></div>
          </div>
          <div><button onClick={()=>openSidebar()}>button2</button></div>
    </div>
    </> 
  )
}

export default Downmenu