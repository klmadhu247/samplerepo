import React,{useState} from "react";

function ToggleAge (){

    const [Name,setName] = useState("Madhu")
    const [age,setAge] = useState(34)
    const[submit,setSubmit] = useState(false)

    const handlButton =()=>
        {
            setSubmit(true)
        }
        const hideagebutton =()=>
            {
                setSubmit(false)
            }

    return(
        <div>

            <div>Name is: {Name}</div>

           { submit && <div>Age is: {age}</div>}  

            <button onClick={handlButton} class="btn btn-primary">SHow Age</button>

            <button onClick={hideagebutton}>HIdeAGe</button>





        </div>
    )
}
export default ToggleAge