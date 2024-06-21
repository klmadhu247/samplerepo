Explaining about useFunction fucntion and fetching data from API end point using fetch function, saving data to the state and rendering the retrieved data 

To Fetch Json form the internet or server we have to use two hooks namely
useState  & useEffect



useState:
the useState hook is a built-in function that allows you to manage state within the component. State represents data that can change over time, 

we can also say 
The useState hook is used to initialize a state variable called data . This variable will store the data retrieved from an API endpoint

useEffect:
useEffect hook is used to request data from the API endpoint

The useEffect Hook allows us to perform side effects on the components. fetching data, directly updating the DOM and timers are some side effects. It is called every time any state if the dependency array is modified or updated.