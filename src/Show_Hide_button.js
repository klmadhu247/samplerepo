import React,{useState} from "react";

function ToggelButton (){

    const [Name,setName] = useState("Madhu")
    const [age,setAge] = useState(34)
    const[showAge,setShowAge] = useState(false)

    const handlButton =()=>
        {
            setShowAge(!showAge )
        }
        

    return(
        <div>

            <div>Name is: {Name}</div>

           { showAge && <div>Age is: {age}</div>}  

            <button onClick={handlButton} class="btn btn-primary">{showAge? 'HIde AGe':'Show AGe'}</button>

            





        </div>
    )
}
export default ToggelButton