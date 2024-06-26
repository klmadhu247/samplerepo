Explaining how to show data and implementing previous and next button and fetching random value from an array, and expalined about edge cases to be checked for next and prev button click
How to fetch using ASync and Await in a function



Fetching using async and await

   to use await we should prefix the function with async keyword
    await will tell the java script engine to wait until the given task is completed.

    below is the example
     
    const getData = async ()=>
        {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos')
            const data = await response.json()
            setTodos(data)

        }