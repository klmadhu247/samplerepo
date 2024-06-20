//React Hooks
//No Need of this keyword in Functional Component
import React ,{useState} from "react"

function Function(){
    const [name,setName]=useState("Madhu")
    return (
        <div>
            Fucntional Component {name}
        </div>

    )
}
export default Function;