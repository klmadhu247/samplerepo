import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';


function CRUD_In_Json (){

const [datas,setDatas] = useState([])

const [input,setInput] = useState('')// to add the input data for Creation
var id = uuidv4();// random id generator which helps to add the task with id

const fetchData = async ()=>
{
    const response = await axios.get('http://localhost:8000/tasks')
    setDatas(response.data)
}

useEffect(()=> {fetchData()},[])

const handleChange =(e)=>
{
    setInput(e.target.value)
}

const handleAdd =async()=>
{

    await axios.post('http://localhost:8000/tasks',{'id':id,'task':input})
    
    fetchData();
    setInput('')

}

const handleDelete = async (Id_From_Delete) =>
{
    await axios.delete(`http://localhost:8000/tasks/${Id_From_Delete}`)
    fetchData();
}

const handleUpdate =async (Index_From_Update)=>
{
    const updatedTask = prompt('Update the task', datas[Index_From_Update].task)
    await axios.put(`http://localhost:8000/tasks/${datas[Index_From_Update].id}`,{'id':datas[Index_From_Update].id,'task':updatedTask})
    fetchData();
}



    return(
        <div>
           <h4> CRUD OPERATION IN JSON </h4>

           <input type="text" value={input} onChange={handleChange} placeholder="add Task"/>
           <button onClick={handleAdd}>Add Task</button>

           {datas.map((data,index)=><div key={data.id}>
            <article style={{display:'flex',margin:'20px'}}>
            {data.task}
            <button onClick={()=>handleDelete(data.id)}>Delete</button>
            <button onClick={()=>handleUpdate(index)}>Update</button>
            </article></div>)}
        </div>
    )
}
export default CRUD_In_Json
