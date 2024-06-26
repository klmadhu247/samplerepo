import React, {Component} from "react";
import thnk from './assets/thnk.png'

class Frm extends Component{

state ={
    title:'',
    fname:'',
    lname:'',
    dob:'',
    email:'',
    pwrd:'',
    cpwrd:'',
    chck:false,
    onSubmit:false,
    onReset:false
}

handleChange =(e)=>
    {
        this.setState({[e.target.name]:e.target.value})
    }

    handleRegister =()=>
        {
            if(this.state.chck ===false)
                {
                    alert ('Please Check the terms and conditions')
                }
                else if (this.state.pwrd!==this.state.cpwrd)
                    {
                        alert('Password entered not match')

                    }
                    else if (this.state.pwrd==''||this.state.cpwrd=='')
                        {
                            alert('Please fill both Password fields')

                        }
                        else{
                            this.setState({onSubmit:true})
                        }
        }
        handleReset =()=>
            {
                this.setState({fname:'',lname:'',dob:'',email:''})
            }


    render (){
        return (
            <div> 

               {!this.state.onSubmit && <from class='row g-3 p-5'>

                    <div class="col-md-2">
                        <label class='form-label'>Title</label>
                        <select class='form-select ' name="title" value={this.state.title} onChange={this.handleChange} style={{width:'100px'}}  >
                            <option></option>
                            <option>Mr</option>
                            <option>Mrs</option>
                            <option>Miss</option>
                        </select>

                    </div>


                    <div class='col-md-5 col-12 col-sm-6'>
                        <label class='form-label' >First Name</label>
                        <input type="text" name="fname" value={this.state.fname} onChange={this.handleChange} class='form-control' />

                    </div>

                    <div class='col-md-5 col-12 col-sm-6'>
                        <label class='form-label' >Last Name</label>
                        <input type="text"  name="lname" value={this.state.lname} onChange={this.handleChange}  class='form-control'/>

                    </div>

                    <div class='col-12 col-md-6 col-lg-6'>
                        <label> Date of Birth</label>
                        <input type="date" name="dob" value={this.state.dob} onChange={this.handleChange} class='form-control'/>
                    </div>

                    <div class='col-12 col-md-6 col-lg-6'>
                        <label> Email</label>
                        <input type="email" name="email" value={this.state.email} onChange={this.handleChange} class='form-control'/>
                    </div>
                    <div class='col-12 col-md-6 col-lg-6'>
                        <label> Password</label>
                        <input type="password" value={this.state.pwrd} name="pwrd" onChange={this.handleChange} class='form-control'/>
                    </div>
                    <div class='col-12 col-md-6 col-lg-6'>
                        <label> Confirm Password</label>
                        <input type="password" value={this.state.cpwrd} name="cpwrd" onChange={this.handleChange} class='form-control'/>
                    </div>

                    <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" name="chck" value={this.state.chck} onChange={this.handleChange} />
      <label class="form-check-label" >
        Accept Terms and Conditions
      </label>
    </div>
  </div>

  
  <div class='row g-3'>
    <button class='btn btn-primary col-md-1 col-12 ' onClick={this.handleRegister}>Register</button>
    <button class='btn btn-secondary ms-2 col-md-1 col-12 ' onClick={this.handleReset}>Reset</button>
</div>

  </from> }


              { this.state.onSubmit && <div class='card col-12 col-md-6 col-lg-12'>
                <div class='card-body'>
                <div class='col-md-6'>
                   <p> Name: {this.state.title} .  {this.state.fname} {this.state.lname} </p>
                    <p> Email: {this.state.email} </p>
                    <p> DOB:  {this.state.dob} </p>
                    <img src={thnk}/> for Registering with us 

                </div>

                </div>
                
                 
                </div> }



            </div>
        )
    }
}
export default Frm