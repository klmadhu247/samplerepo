import React, {useState} from "react";
import './accord.css'
import{AiOutlineMinus,AiOutlinePlus} from 'react-icons/ai'

function Child_Accord (props){

    

    const [click,setClick] = useState(false)

    const handleClick = ()=>
        {
            setClick(!click)
            

            
        }


    return(
       
       

            

           <article className="question_List">
              <h5>{props.title} </h5>  <button  className="symbol" onClick={()=>handleClick()}> {click? <AiOutlineMinus/>:<AiOutlinePlus/>} </button>  
             {click && <p>{props.info}</p>} 
             </article>

        

        
    )
}
export default Child_Accord