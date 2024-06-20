import React, {useState} from "react";

function NameChange (){
    const [Name,setName]= useState("Madhu")

    const handleName =()=>
        {
            setName("KIng KOHLI")
        }

    return(
        <div>
            Name is: {Name}
            <button onClick={handleName}>ChangeName</button>
        </div>
    )
}
export default NameChange