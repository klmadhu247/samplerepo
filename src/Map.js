import { computeHeadingLevel } from '@testing-library/react';
import React,{Component} from 'react'

class Map extends Component {

state ={
    numbers:[1,2,3,4,5],
    fruits:["apple",'mango','grapes','banana']
}


    render(){
        return(
            <div>
                {this.state.numbers.map((n,index)=><h3 key={index}>The index value for {n} is : {index}</h3>)}
                {this.state.fruits.map((fruit,index)=><h3 key={index}>I love {fruit}</h3>)}
                
            </div>
        )
    }
}
export default Map