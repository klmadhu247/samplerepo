import React, {useState,useEffect} from "react";

function FetchUsingAsyncAwait (){

    const [todos,setTodos] = useState([])

//     //we need use effect to fetch data from api
// //we have to pass an arrow function inside the useEffect
//     useEffect (()=> {
//         fetch("https://jsonplaceholder.typicode.com/todos")
//         .then(response => response.json())
//         .then(data=>setTodos(data))
//     },[])

    //we can also call the fetch in separate state and call that state element inside useEffect as below


    //API call 
    const getData =()=> fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(data=>setTodos(data))


    useEffect(()=> {getData(), []})

    // Fetching using async and await, we have to prefix the async before arrow function
    //await will tell the java script engin to wait till the task is completed 
    // because in RT it takes 50sec to 1 min to fetch data from api so till then it will wait to execute remaining code
    const fetchDataUsingAsync = async() => {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos")
        const data = await response.json()
        setTodos(data)
    }

    





    return(
        <div>

            
           
        </div>
    )
}
export default FetchUsingAsyncAwait