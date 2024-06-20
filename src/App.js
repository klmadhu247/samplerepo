import React, {useState} from 'react'
import { GrMailOption } from "react-icons/gr";
import { BiPhone } from "react-icons/bi";
import './App.css'
import vks from  './assets/vks.png'
import vk from './assets/vk.jpg'
function App (){
  return(
    <div>
      <div className='navbar_new'>
        <span className='title'> VK Gallery </span>
      </div>


      Hello <GrMailOption className='gmail' size='40px' color='#73f1e9'/> <br/>
      Phone <BiPhone/>

      <img src={vks} style={{opacity:0.5}}></img>
      <img src={vk} width='400px'/>

    </div>
  )
}
export default App