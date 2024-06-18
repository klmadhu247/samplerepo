import { computeHeadingLevel } from '@testing-library/react';
import React,{Component} from 'react'

class Count extends Component {

state ={
    
    Count:0,
    submit:false
   
}
handle =(e)=>{
    this.setState({Count:this.state.Count+1})
}


    render(){
        return(
            <div>
                Count: {this.state.Count}
                <button  name='sbumit' onClick={this.handle}>SUbmit</button>
                
            </div>
        )
    }
}
export default Count