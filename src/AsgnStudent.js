import React, {Component} from 'react'
import './style.css'

class AsgnStudent extends Component
{

    state = {
        Name:'Madhu',
        Age:33
    }

render(){
    return (
        <div>
            <h3>My Name is  <span className='underline'>{this.state.Name}</span>  and my age is  {this.state.Age}</h3>
            <p/>
            
        </div>
    )
}
}
export default AsgnStudent