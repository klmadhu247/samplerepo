import React, {useState,useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'


function Todo (){

    var id = uuidv4();
    

    const [input,setInput] = useState('')

    const [todoList,setTodoList] = useState([])

    const fetchData = async () => {
        
          const response = await axios.get('http://localhost:3031/tasks');
          setTodoList(response.data);
         
      }
    
      useEffect(() => {
        fetchData();
      }, []);

      console.log(todoList)




const handlChange = (e) =>
    {
        setInput(e.target.value)
    }

 const handleAdd = async ()=>
    {

        await axios.post('http://localhost:3031/tasks',{'id':uuidv4,'task':input})
        fetchData();

        setInput('') // to make the input field empty after pressing add button
    }
    const handleDel = async (id)=>
        {

            await axios.delete(`http://localhost:3031/tasks/${id}`);
            fetchData();

            

            

        }

        const handleupdate = async (index)=>
            {

                const updatedTask = prompt ('UPdate your Task', todoList[index].Task)
                await axios.put(`http://localhost:3031/tasks/${todoList[index].id}`,{id:todoList[index].id, 'task':updatedTask})
                fetchData();

               

               

            }

        
    
    return (
        <div>Todo
            <label>Task: </label>

            <input type="text"  value={input} onChange={handlChange} />
            <button onClick={handleAdd}>Add TODO</button>

            {todoList.map((td,index)=><div key={td.id}><span >{td.task} </span> <button onClick={()=>handleDel(td.id)} > X</button> <button onClick={()=>handleupdate(index)}>UPdate</button></div>  )}
             
             
            </div>


            

            

           
        
    )
}
export default Todo