import React,{Component} from 'react'

class Form extends Component{
    state = {
        Uname:''
    }
    handleusername = (e)=>{
        this.setState({Uname:e.target.value})

    }
    render()
    {
        return(
            <div>
                <h2> Registration Form </h2>
                <label>Username</label>
                <input type='text' value={this.state.Uname} onChange={this.handleusername}/>

                <p></p>
                <h4>{this.state.Uname}</h4>
                
                </div>

        )
    }
}
export default Form