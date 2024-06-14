import React,{Component} from 'react'
import './style.css'


class Form_Pract extends Component{
state = {
    FullName:''
}
handleName =(e)=> {
    this.setState({FullName:e.target.value})
}

    render(){   
        return(
            <div>
                <h2>Entry Form</h2>
                <label>User_Fullname</label>
                <input type='text'
                 value={this.state.FullName} onChange={this.handleName}></input>
                <p/>
                <h2 className='name'>{this.state.FullName}</h2>
            


            </div>
        )
    }
}
export default Form_Pract