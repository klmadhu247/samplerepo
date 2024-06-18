import { computeHeadingLevel } from '@testing-library/react';
import React,{Component} from 'react'

class Veg extends Component {

state ={
    
    vegetables:["Tomato",'Brinjal','Potato','Beans',"lady's finger"]
}


    render(){
        return(
            <div>
                <h1> <u>The Vegitabel List</u> </h1> <br/>     {/* to underline we have to use <u></u> */}
                {this.state.vegetables.map((veg,index)=><h3 key={index}>{veg}</h3>)}
                
            </div>
        )
    }
}
export default Veg