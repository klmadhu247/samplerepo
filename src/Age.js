import React,{useState} from "react";

function Age(props){
    const[age,setAge]=useState([22,22,33,44,55,66])
    const [name,setName]=useState(["Madhi","karthi","Ramesh","Uma"])



    return(
        <div>age:

            {age.map((a,i)=><div key={i}> {a}</div>)}

           Name: {name.map((n,i)=><p key={i}> {n}</p>)}
           Age is :{props.count}

        </div>
    )
}
export default Age;