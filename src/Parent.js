import React, {Component} from 'react'
import Child from './Child'

class Parent extends Component{

    state = {
        Name:'Madhi',age:22
    }
    render(){
        return(
            <div>
                <Child ag={this.state.age}  nm={this.state.Name}/>
                    
                



            </div>
        )
    }
}
export default Parent