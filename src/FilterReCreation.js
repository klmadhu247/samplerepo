import React, {useState} from "react";

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
const DIistinctDept = [... new Set(DeptList)]
// our Requirement is to get the list like   All IT   ITI  MS MMA butwe have no All in




    return (
        <div>
            <h1>Recreated Filter</h1>

  {datas.map(data=> <div>{data.name}   {data.dept}</div>)}
  



        </div>
    )
}
export default ReFilter