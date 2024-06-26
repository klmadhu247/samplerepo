import React, {Component} from "react";


class Form_Password extends Component{

    state ={
        title:'',
        fname:'',
        lname:'',
        dob:'',
        mail:'',
        pword:'',
        cpword:'',
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
                if(this.state.onCheck===false)
                    {
                        alert ('Please read the Terms and Condition and Check ')
                    }

                     else if(this.state.pword !== this.state.cpword )
                        {
                            alert('Password Confiramtion does not match ')
                        }
                        else if (this.state.pword=='' && this.state.cpword=='')
                            {
                                alert('Please Fill Both Password Boxes')

                            }
                        else{
                            this.setState({onSubmit:true})

                        
                            
                        }
                       
            }


    render(){
        return(
            <div>
                <form >
                    
                        <div class='form-group'>
                        <label class="col-md-2">Title</label> <br></br>
                        <select class="form-control" style={{width:'20'}} onChange={this.handleChange}>
                        <option></option>
        <option>Mr</option>
        <option>Miss</option>
        <option>Mrs</option>
      </select> </div>
      
      <div class="col-md-4">
        <label  class="form-group col-4">First Name</label>
    <input type="text" name="fname" value={this.state.fname} onChange={this.handleChange} class="form-control" ></input> </div>
    <div class="col-md-4">
        <label  >Last Name</label>
    <input type="text" name="lname" value={this.state.lname} onChange={this.handleChange} class="form-control" ></input> </div>
    
    <div class='form-group'>
    <label class="form-label"> Date of Birth</label>
    <input type="date" name="dob" value={this.state.dob} onChange={this.handleChange} class ='form-control' />

    </div>
    <div class='form-group '>
    <label class="form-label"> Email</label>
    <input type="email" name="mail" value={this.state.mail} onChange={this.handleChange} class="form-control" /><br/>

    </div>

    <div class='form-group'>
    <label class="form-label"> Password</label> 
    <input type="password" name="pword" value={this.state.pword} onChange={this.handleChange} class="fomr-control" />

    </div>
    <div class='form-group'>
    <label class="form-label"> Confirm Password</label>
    <input type="password" name="cpword" value={this.state.cpword} onChange={this.handleChange} class="form-control" /> <br/>
    

    </div>

    <input type="checkbox" name="onCheck" value={this.state.onCheck} onChange={this.handleCheck}/>
    
    <label>Accept Terms & Conditions</label> <br/>

    
    
    
    
    <button class='btn btn-primary' onClick={this.handleRegister}>Register</button> 
    <button class='btn btn-secondary' onClick={this.handleRest}>Reset</button>


    
                    

                    { this.state.onSubmit && <div>  Title: {this.state.title}
               <span> First Name: {this.state.fname}</span>  Last Name: {this.state.lname} <br></br>
              
                Date of Birth: {this.state.dob}    Email: {this.state.mail} </div> }
                    
                </form>

                
            </div>
        )
    }
}
export default Form_Password