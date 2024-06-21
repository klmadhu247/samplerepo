import React, {useState} from "react";
import './ReFilter.css'

function ReFilter (){

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
//First we have to collect the Dept List 
const [DeptList,setDepList] = useState(datas.map(data=>data.dept))

//NOw we have to remove the duplicates in DeptList by usig the set method
const DistinctDept = [... new Set(DeptList)]
// our Requirement is to get the list like   All IT   ITI  MS MMA but we have no All in the Dept List so we have to push that in the list
//to push the element at the begining of the array list we have to use unSwift so as shown below
DistinctDept.unshift('ALL');

//To show the filtered data we have to create another state component like RenderedData
const[DataCopy,setDataCopy] = useState(datas)

//To Filter data based on click and to save it within render data here it is called DataCopy
const handleClick =(d)=>
    {
        if(d==="ALL")
            {
                setDataCopy(datas)
                return
            }



        const FilteredData = datas.filter(datacp=>datacp.dept===d)
        setDataCopy(FilteredData)

    }





    return (
        <div className="Container_Filter">
            <h1 className="heading">Recreated Filter</h1> <br/>

            <div className="tabContainer">{DistinctDept.map(d=><span className="tabs" onClick={()=>handleClick(d)}>{d}</span>)}</div>



  {DataCopy.map((data,id)=> <div key={id}>{data.name}   {data.dept}</div>)}

  
  
  



        </div>
    )
}
export default ReFilter