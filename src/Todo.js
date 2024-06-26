import React, {useState,useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';


function Todo (){

    var id = uuidv4();
    

    const [input,setInput] = useState('')

    const [todoList,setTodoList] = useState([
        {
        id:1 ,Task:'TO learn React'
        },
        {
            id:2 ,Task:'TO Do Assignments'
            },
            {
                id:3 ,Task:'TO Review Code'
                },
                {
                    id:4 ,Task:'TO Select Students for project'
                    },
])

const [reserveTodo,setReserveTodo] = useState([
    {
    id:1 ,Task:'TO learn React'
    },
    {
        id:2 ,Task:'TO Do Assignments'
        },
        {
            id:3 ,Task:'TO Review Code'
            },
            {
                id:4 ,Task:'TO Select Students for project'
                },
])


const handlChange = (e) =>
    {
        setInput(e.target.value)
    }

 const handleAdd = ()=>
    {
        setTodoList([...todoList,{id:uuidv4,Task:input}])
        setInput('')
    }
    const handleDel =(id)=>
        {

            //const filteredTodo = todoList.filter(td=>td.id!==id)
            //setTodoList(filterdTodo)

            //or


            setTodoList(todoList.filter(td=>td.id!==id))

        }

        const handleupdate =(index)=>
            {

                const updatedTask = prompt ('UPdate your Task', todoList[index].Task)

                const copiedTodoList = [...todoList]
                copiedTodoList[index].Task = updatedTask;
                setTodoList(copiedTodoList)

            }

        const handleREfresh =()=>
            {
                setTodoList(reserveTodo)
            }
    
    return (
        <div>Todo
            <label>Task: </label>

            <input type="text"  value={input} onChange={handlChange} />
            <button onClick={handleAdd}>Add TODO</button>

            {todoList.map((td,index)=><div key={td.id}><span >{td.Task} </span> <button onClick={()=>handleDel(td.id)} > X</button> <button onClick={()=>handleupdate(index)}>UPdate</button></div>  )}
             
             <button onClick={handleREfresh}>Refresh</button>
            </div>


            

            

           
        
    )
}
export default Todo