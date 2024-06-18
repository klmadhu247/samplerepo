import React,{Component} from 'react'

class Form extends Component{

    state ={
        firstName:'',
        lastName:'',
        age:20,
        address:'',
        gender:'',
        singing:false,
        dancing:false,
        painting:false,
        dept:'',
        agreement:false,
        date:'',
        submit:false

    }
    handleChange =(e)=>
        {
            this.setState({[e.target.name]:e.target.value})
           
        }
        handleSubmit = ()=>
        {
            this.setState({submit:true})

        }


    render(){
        return(
            
                <div>Registration Form
                   <div>
                    

                  {!this.state.submit &&  (<div>
                <label>FirsatName: </label>
                    <input type='text' name='firstName' value={this.state.firstName} onChange={this.handleChange}/>
                    <br/>
                    <label >LastName: </label>
                    <input type='text' name='lastName' value={this.state.lastName} onChange={this.handleChange}/>
                    <br/>
                    <label style={{marginLeft:'30px'}}>Age: </label>
                    <input type='number' name='age' value={this.state.age} onChange={this.handleChange}/>
                    <br/><br/>
                    
                    <textarea name='address' value={this.state.address} onChange={this.handleChange} placeholder='Enter your address' style={{marginLeft:'35px'}}/>
                   <br/>
                    
                 <label >Department: </label>
                    <select  name='dept' value={this.state.dept} onChange={this.handleChange}> 
                        <option value="">Select your Dept</option>
                        <option value="cse">Computer Science</option>
                        <option value="ece">E communincation </option>
                        <option value="it">Info Tect</option>
                        <option value="eee">EEE</option>
                    </select>
                    <br/>
                    <label >Gender</label>
                    <input type='radio' name='gender' value="Male" onChange={this.handleChange}></input>
                    <label>Male</label>
                    <input type='radio' name='gender' value='Female' onChange={this.handleChange}></input>
                    <label>Female</label>
                    <br/>
                    <label>Date of Birth: </label>
                    <input type='date' name='date' value={this.state.date} onChange={this.handleChange}/>
                    <br/>
                    <label>Hobbies: </label>
                    <input type='checkbox' name='dancing'  checked={this.state.dancing} onChange={this.handleChange}/> 
                    <label>Dancing</label>
                    <input type='checkbox' name='singing'  checked={this.state.singing} onChange={this.handleChange}/>
                    <label>Singing</label>
                    <input type='checkbox' name='painting'  checked={this.state.painting} onChange={this.handleChange}/>
                    <label>Painting</label>
                
                    <br/>
                    <label>AGree</label>

                    <input type='checkbox' name='agreement' value={this.state.agreement} onChange={this.handleChange}/>

                   <br/> {this.state.gender}
                   
                   <button onClick={this.handleSubmit} class="btn btn-primary">Submit</button>
                   <p>Lorem <a href="https://www.google.com/" target="_blank">  Google poga venduma</a>  cipsum, dolor sit amet consectetur adipisicing elit. Minus dolore veniam dolorem doloribus nobis consequuntur, ducimus voluptates nesciunt exercitationem minima?</p>

                   </div>)}
                   
                   
                  
                   

            

           {this.state.submit && (        <div> 
                    <div>Name:{this.state.firstName} {this.state.lastName}</div>
                    <div>Age: {this.state.age}</div>
                    <div>DOB {this.state.date}</div>
                    <div>YOur address is : {this.state.address}</div>
                    <div>Selectd Department is: {this.state.dept}</div>
                    <div>Gender selected is: {this.state.gender}</div>
                    <div>YOur Hobbies are: {this.state.dancing && 'dancing'} {this.state.painting && 'painting'} {this.state.singing && 'singing'}</div>
                    </div>
                    )}

                    </div>  </div>
           
        )
    }

   

}
export default Form