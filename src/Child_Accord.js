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
       <body className="body_main"> 
       <main className="Acord_main" >

        <div className="container_box ">

            <div className="login_text "><h3>Qestions And Answers About Login </h3> </div>

           <article className="question_List">
               <h5>{props.title} </h5>  <button  className="symbol" onClick={()=>handleClick()}> {click? <AiOutlinePlus/>:<AiOutlineMinus/>} </button> 
             {click && <p>{props.info}</p>} 
             </article>

        </div>
        </main>

        </body>
    )
}
export default Child_Accord