import React, {useState,useEffect} from "react";
import axios from "axios";

function JsonTest ()
{

const [datas,setDatas] = useState([])

const retriveData = async ()=>{
    const response = await axios.get('http://localhost:3031/tasks');
    setDatas(response.data);
}

useEffect(()=> {retriveData()},[])

console.log(datas)

    return(
        <div>{datas.map(data=><p key={data.id}>{data.task}</p> )}</div>
    )

}
export default JsonTest

