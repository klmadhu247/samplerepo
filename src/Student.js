import React, {Component} from 'react'

class Student extends Component{
    render(){
        return(
            <div>
                <h1>Student</h1>
                <h2>The student name in school is: {this.props.name}</h2>
            </div>
        )
    }
}
export default Student