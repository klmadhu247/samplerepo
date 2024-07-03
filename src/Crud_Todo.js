import React,{useState,useEffect} from "react";
import data from "./data";
import { v4 as uuidv4 } from 'uuid';

function Crud_Todo (){

    const [todoList,setTodoList] = useState(data)

    const [reserveData,setReserveData] = useState(data)

const [input ,setInput] = useState('')

const handleChange =(e)=>
    {
        setInput(e.target.value)
        

    }

    const handleAdd = ()=>
        {
            setReserveData([...reserveData,{id:uuidv4(),Task:input}])
            setInput('')

        }

        const handleDelete =(id) =>
            {
                setReserveData(reserveData.filter(rd=>rd.id!==id))
            }

            //Updated using id 

            const handleUpdate =(id)=>
                {
                   const newTask = prompt('UPdate your task ')

                if(newTask)
                    {
                        setReserveData(reserveData.map(rd=>rd.id===id? {...rd,Task:newTask} :rd))
                    }

                

                }



    return (
        <div>
            <input type="text" name="input" value={input} placeholder="Add your task here" onChange={handleChange}/>

            <button type="button" className="btn btn-primary" onClick={handleAdd}>ADD</button>
           

            <div className="for Update">

                {reserveData.map(rd=> <div> {rd.Task} <button className="btn btn-danger" onClick={()=>handleDelete(rd.id)}>X</button> 
                <button onClick={()=>handleUpdate(rd.id)}>Update</button>   </div>)}

            </div>
            
        </div>
    )
}
export default Crud_Todo