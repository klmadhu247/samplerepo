import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";


class Form_Password extends Component{

    state ={
        title:'',
        fname:'',
        lname:'',
        dob:'',
        mail:'',
        pword:'',
        cpword:'',
        gender:'',
        onCheck:false,
        onSubmit:false,
        onReset:false

    }

    handleChange =(e)=>
        {
            this.setState({[e.target.name]:e.target.value})
        }

        handleCheck =()=>
            {
                this.setState({onCheck:true})
            }

        handleRegister =()=>
            {
               this.setState({onSubmit:true})
                       
            }


    render(){
        return(
            <div>
                <form name="RegForm"  class="row g-3">
                    <div>
                        <div>
                        <label for ='title' class="col-md-2">Title</label> <br></br>
                        <select class="form-label" style={{width:'20'}} onChange={this.handleChange}>
                        <option></option>
        <option>Mr</option>
        <option>Miss</option>
        <option>Mrs</option>
      </select>
      
      <div class="col-md-4">
        <label  class="form-label">First Name</label>
    <input type="text" name="fname" value={this.state.fname} onChange={this.handleChange} class="form-control" ></input> </div>
    <div class="col-md-4"><label  class="form-label">Last Name</label>
    <input type="text" name="lname" value={this.state.lname} onChange={this.handleChange} class="form-control" ></input> </div>
    </div>
    <label class="form-label"> Gender</label>: 
    <input type="radio" name="gender" value='Male' onChange={this.handleChange}  />
    <label>Male</label>
    <input type="radio" name="gender" value='Female' onChange={this.handleChange}/>
    <label>Female</label>
    <input type="radio" name="gender" value='Others' onChange={this.handleChange}/>
    <label>Others</label> <br/>
    <label class="form-label"> Date of Birth</label>
    <input type="date" name="dob" value={this.state.dob} onChange={this.handleChange} class="col-md-2" />
    <label class="form-label"> Email</label>
    <input type="email" name="mail" value={this.state.mail} onChange={this.handleChange} class="col-md-2" /><br/>
    <label class="form-label"> Password</label> 
    <input type="password" name="pword" value={this.state.pword} onChange={this.handleChange} class="col-md-2" />
    <label class="form-label"> Confirm Password</label>
    <input type="password" name="cpword" value={this.state.cpword} onChange={this.handleChange} class="col-md-2" /> <br/>
    <input type="checkbox" name="onCheck" value={this.state.onCheck} onChange={this.handleCheck}/><label>Accept Terms & Conditions</label> <br/>
    <button class='btn btn-primary' onClick={this.handleRegister}>Register</button> 
    <button class='btn btn-secondary' onClick={this.handleRest}>Reset</button>


    
                    </div>


                    { this.state.onSubmit && <div>  Title: {this.state.title}
               <span> First Name: {this.state.fname}</span>  Last Name: {this.state.lname} <br></br>
               Gender:{this.state.gender}
                Date of Birth: {this.state.dob}    Email: {this.state.mail} </div> }
                </form>

             



            </div>
        )
    }
}
export default Form_Password