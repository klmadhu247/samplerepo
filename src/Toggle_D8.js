import React, {Component} from 'react'
import './Toggle.css'
import { IoIosHome } from "react-icons/io";
class Toggle extends Component
{

state={
    fname :'',
    lname:'',
    age:'',
    onSubmit:false,
    onShowAge:false,
    onHideAge:false,
    onRest:false,
    onHome:false
    
}

handleChange =(e)=>
    {
        this.setState({[e.target.name]:e.target.value})

    }

    handleSubmit =()=>
        {
            this.setState({onSubmit:true})

        }
        handleRest=()=>
            {
                this.setState({fname:'',lname:'',age:''})

                
            }

        handleShowAge=()=>
            {
                this.setState({onShowAge:true})

            }
            handleHideAge =()=>
                {
                    this.setState({onHideAge:true})
                    
                }

                handleHome =()=>
                    {
                        this.setState({onSubmit:false})
                        this.setState({onHome:true})
                        this.setState({fname:''})
                        this.setState({lname:''})
                        this.setState({age:''})
                        
                    }

render(){
    return(
        <div className='form'>
           {!this.state.onSubmit  && <div>
            <label className='col sm-2 col-form-label' >First Name </label>
            <input type='text' name='fname' value={this.state.fname} onChange={this.handleChange}  style={{width:'250px'}} placeholder="Enter First Name" className='col sm-4'/> <br/>
            <label  >Last Name</label>
            <input type='text' name='lname' value={this.state.lname} onChange={this.handleChange}  style={{width:'250px'}} placeholder="Enter Last Name"/> <br/>
            <label >Age</label>
            <input type='number' name='age' value={this.state.age} onChange={this.handleChange} style={{width:'100px'}}   placeholder="Enter Age" /* style={{display: 'flex',justifyContent:'flex-end'}} class="form-control" */ /> <br/>

            <button onClick={this.handleSubmit} class="btn btn-primary">Submit</button> <button onClick={this.handleRest} class="btn btn-warning">Reset</button>

            
            
            </div>}
            
           { !this.state.onShowAge && this.state.onSubmit && <div>
            <h4>Name: {this.state.fname} {this.state.lname}</h4>
            <button onClick={this.handleShowAge} class="btn btn-warning">SHow Age</button>


           </div> }

          { !this.state.onHome &&this.state.onShowAge &&<div>
           <h4>Name: {this.state.fname} {this.state.lname}</h4>
           {!this.state.onHideAge && <h5>Age: {this.state.age}</h5>}
           <button onClick={this.handleHideAge} class="btn btn-danger">Hide Age</button> <br/>
           <button onClick={this.handleHome} class="btn btn-primary"> <IoIosHome />Home</button>
            
           </div> }

        </div>
    )
}
}
export default Toggle