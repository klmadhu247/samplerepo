import React, {Component} from 'react'
class Increment extends Component
{

state = {
    age:20
}
handleAge =(e)=>
    {
        this.setState({age:e.target.value})
    }

    render(){
       return(
        <div>
           
            <input type='number' value={this.state.age} onChange={this.handleAge}/>
            {this.state.age+5} {/* to increase +5 to each value */}
        
        </div>
       )
    }
}
export default Increment