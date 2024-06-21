import React, {useState,useEffect} from "react";  //To Fetch Json form the internet or server we have to use two hooks namely useState & useEffect


function FetchJson (){

const [todos,setTodos]= useState([]);

const fetchData =()=> {fetch('https://jsonplaceholder.typicode.com/todos/')
.then(Response => Response.json())
.then(data => setTodos(data.slice(0,10))) // FOr practicing purpose we are slicing the data to 10 
}


//componendDidMount in class based component here it is useEffect()
useEffect(()=> {

    fetchData()


},[])// [] ---> we use this to execute the useEffect only one time

const handleDelete=(idofTodo)=>
    {
        console.log('Click', idofTodo)
        
        let newList = todos.filter(td=>td.id!==idofTodo)
        setTodos(newList)
    }

    


    return(
        <div>
            FetchJson
           {todos.map(todo=><div key={todo.id}>{todo.title} {todo.id}  <button className="btn btn-danger" onClick={()=>handleDelete(todo.id)}>Delete</button></div>)}

           <button className="btn btn-primary" onClick={fetchData}>Refresh</button>

        </div>
    )
}
export default FetchJson