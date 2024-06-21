import React, {useState,useEffect} from "react";  //To Fetch Json form the internet or server we have to use two hooks namely useState & useEffect


function FetchJson (){

const [todos,setTodos]= useState([]);

//componendDidMount in class based component here it is useEffect()
useEffect(()=> {

fetch('https://jsonplaceholder.typicode.com/todos/')
.then(Response => Response.json())
.then(data => setTodos(data))

},[])// [] we use this to execute the useEffect only one time


    return(
        <div>
            FetchJson
           {todos.map(todo=><div key={todo.id}>{todo.title} {todo.id} {todo.userId}</div>)}

        </div>
    )
}
export default FetchJson