import React,{useState} from 'react'
import './center.css'
import vk from './assets/vk.jpg'

function Center (){
    return(
        <div className='container'>
            
            <div className='child'><img src={vk} width='250px' height='250px'/> </div>
        </div>
    )
}
export default Center