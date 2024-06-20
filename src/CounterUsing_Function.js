import React,{useState} from "react";

function Counter (){

    const [count,setCount]=useState(0)
    const handleInc =()=>{
        setCount(count+1)

    }
    const handleDec=() =>{
        setCount(count-1)
    }

    
        
    return(
        <div>

            Count: {count} 
            <button onClick={handleInc}>  IncreaseCount</button>
            <button onClick={handleDec}>DecreaseCount</button>




        </div>
    )
}
export default Counter