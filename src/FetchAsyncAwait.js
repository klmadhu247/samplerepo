import React, {useState,useEffect} from "react";

function FetchAsynAwait (){

    const [todos,setTodos] = useState([])
//
//API Call
//Fetching using .then()
  const fetchData =()=>
    {
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(Response => Response.json())
        .then(data=> setTodos(data)) 

    }

    //Fetching using async and await

    //to use await we should prefix the function with async keyword
    //await will tell the java script engine to wait until the given task is completed.
    const getData = async ()=>
        {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos')
            const data = await response.json()
            setTodos(data)

        }

    useEffect(()=> {
        fetchData();
        
    },[])
    return(
        <div>
            FetchAwaitASynch

            {todos.map(todo=><div> {todo.title}</div>)}

        </div>
    )
}export default FetchAsynAwait