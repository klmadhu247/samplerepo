import React,{Component} from 'react'

class College extends Component{
    render(){
        return(
        <div>
            <h1>College</h1>
            <h2>THe Student Name is  {this.props.name}</h2>
        </div>
        )
    }
}
export default College