import React,{useState} from "react";
import './filter.css'

function Filter (){

 const [datas,setDatas]= useState([
                {name:'Madhu',
                id:1,
                dept:'IT'

                },
                {name:'Karthi',
                id:2,
                dept:'MILL'

                }
                ,
                {name:'Ramesh',
                id:3,
                dept:'ITI'

                },
                {name:'Uma',
                id:5,
                dept:'MS'

                },
                {name:'Sathish',
                    id:5,
                    dept:'MMA'
        
                },
                {name:'Rao',
                    id:6,
                    dept:'IT'
        
                },
                {name:'Sudhan',
                    id:7,
                    dept:'IT'
        
                },
    
                {name:'Suren',
                    id:8,
                    dept:'ITI'

                },
                {name:'Saran',
                    id:9,
                    dept:'MMA'

                },
                {name:'Kumar',
                    id:10,
                    dept:'MS'

                },
                {name:'Ragav',
                    id:11,
                    dept:'MMA'

                }



    ])

    const [dataRender,setRenderData] = useState(datas);

    const [departments,setDepartments] = useState(datas.map(data=>data.dept))

    const UniqueDept =[ ...new Set(departments)]

    UniqueDept.unshift('All')

    const handleClick =(d)=>
        {
            console.log(d)
            const filterdData =datas.filter(data=>data.dept===d)
            setRenderData(filterdData)

        }




    return(
        <div className="Container_filter">
            <div className="tabContainer">{UniqueDept.map(d=><span className="tab" onClick={()=>handleClick(d)}>{d}</span>)}</div>





            <div>{dataRender.map(data=> <div> {data.name} {data.dept} </div>
        )}</div>
        <br/>

        Dept List:
        <h6> {departments}</h6>

        

        </div>
    )
}
export default Filter