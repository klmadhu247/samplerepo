import React, {useState} from "react";
import './assets'

function NextPrev (){

    const [users,setUsers]=useState([
        {id:1,
          name:'madhu',
         
        },
        {id:2,
          name:'Karthi',
        },
        {id:3,
          name:'Uma',
        },
        {id:4,
          name:'Ramesh',
        },
        {id:5,
          name:'Sathish',
        }
    
      ])
    
    
    const [index,setIndex]=useState(0)

    const  handleNext =()=>
        {
            
            
            if((index)==users.length-1)
                {
                    setIndex(0)
                }
                else{
                    setIndex(index+1)
                    
                }
        }
        const handlePrev =()=>
            {
                if(index==0){
                    setIndex(users.length-1)

                }
                else{
                    setIndex(index-1)

                }
                
                
            }




    return(
        <div>
            
            Name: {users[index].name}<br/>

            <button onClick={handlePrev}>Prev</button>
            <button onClick={handleNext}>Next</button>

        </div>
    )
}
export default NextPrev