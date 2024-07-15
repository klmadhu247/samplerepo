
import React, {useState,useEffect} from "react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';



function CheckJson (){



    const [data,setData] = useState([])
    
    const [input,setInput] = useState('') 
    var id = uuidv4();

    const fetchDetails= async()=>
    {
        

        const response = await axios.get('http://localhost:3031/tasks')
        setData(response.data)
    }

useEffect(()=> {fetchDetails()},[])

const handleChange =(e)=>
{
    setInput(e.target.value)

}

const handleAdd = async()=>
{
    await axios.post('http://localhost:3031/tasks',{'id':id,'task':input})
    fetchDetails();

}

const handleDelete = async (id_from_delete)=>
{
 await axios.delete(`http://localhost:3031/tasks/${id_from_delete}`)
 fetchDetails();

}

const handleUpdate = async(index_from_update) =>
{
    const updatedTask = prompt ('UPdate your Task', data[index_from_update].task)
    await axios.put(`http://localhost:3031/tasks/${data[index_from_update].id}`,{'id':data[index_from_update].id,'task':updatedTask})
    fetchDetails();
}






return (
    <div className="d-flex justify-content-center">
    <div className=" d-flex justify-content-center col-12 col-md-6  flex-column  p-2 m-2">
       <div className=" col-12 col-md-6">  <input type="text" value={input} onChange={handleChange} placeholder="Enter your New Task"/> 
       <button className="btn btn-success" onClick={handleAdd}  >Add</button> </div>
        {data.map((dt,index) => <div key={dt.id} >
           
            <article className=" d-flex m-3 ">
            
            {dt.task} 
            <button className="btn btn-danger ms-2" onClick={()=>handleDelete(dt.id)}>X</button>
            <button className="btn btn-primary ms-2" onClick={()=>handleUpdate(index)}>Update</button></article></div>)}
            
    </div>
    </div>
);
}

export default CheckJson