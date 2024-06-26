import React, {Component} from "react";

class Travel extends Component {


    state ={
        name:'',
        age:'',
        gender:'',
        from:'',
        to:'',
        check:false,
        onSubmit:false,
        yes:false,
    }

    handleCheck =()=>
        {
            this.setState({check:true})
        }

    handleChange =(e)=>
        {
            this.setState({[e.target.name]:e.target.value})
        }
        handleSubmit=(e)=>
            {
                e.preventDefault()
                if(this.state.check===false)
                    {
                        alert('Please Check the Terms and conditions')
                        
                       

                    }
                    else {
                        this.setState({onSubmit:true})
                        
                       

                    }

                
            }
            handleYes =()=>
                {
                    this.setState({yes:true})

                }
    render(){
        return(
            <div>
               {!this.state.onSubmit && <form class='my-3 p-4'>
                    <div class='form-group row'>
                    <label class="col-12 col-md-3 col-sm-4 ms-5 col-form-label">Name of the passenger: </label>
    <div class="col-12 col-md-6 col-sm-6 me-5">
      <input type="text" name="name" value={this.state.name} onChange={this.handleChange} class=" form-control me-5" />
    </div>

    <div class='row mt-2'> 
        <label class='col-form-label col-md-3 col-sm-3 col-4 ms-5'>Age: </label>
    <div class="col-4 col-md-1 col-sm-3 me-5">
        <input type="number" name="age" value={this.state.age} onChange={this.handleChange} class='form-control'/>
    </div>
    </div>

    <div class='row mt-2'> 
        <label class='col-form-label col-md-3 col-sm-3 col-4 ms-5'>Gender: </label>
    <div class="form-check col-md-2 col-2 ">
        <input type="radio" name='gender' value='Male' onChange={this.handleChange} class='form-check-input'/>
        <label>Male</label>
        
    </div>
    <div class="form-check col-md-2 col-2 ">
        <input type="radio" name='gender' value='Female' onChange={this.handleChange} class='form-check-input'/>
        <label>Female</label>
        
    </div>
    <div class="form-check col-md-2 col-2 ">
        <input type="radio" name='gender' value='Others' onChange={this.handleChange} class='form-check-input'/>
        <label>Others</label>
        
    </div>
    </div>

    <div class='row mt-2'>
        <label class='col-form-label col-3 col-md-3 ms-5'>Source</label>
        <div class='col-md3 col-6'>
            <select class='form-select' name='from' value={this.state.from} onChange={this.handleChange} >
                <option ></option>
                <option>Chennai</option>
                <option>Hyderabad</option>
                <option>Lucknow</option>

            </select>

        </div>

    </div>

    <div class='row mt-2'>
        <label class='col-form-label col-3 col-md-3 ms-5'>Destination</label>
        <div class='col-md3 col-6'>
            <select class='form-select' name='to' value={this.state.to} onChange={this.handleChange}  >
                <option></option>
                <option>Delhi</option>
                <option>Mumbai</option>
                <option>Banglore</option>

            </select>

        </div>

    </div>

    <div class="form-check mt-3 ms-3">
      <input class="form-check-input" type="checkbox" name="check" value={this.state.check} onChange={this.handleCheck} />
      <label class="form-check-label" >
        Accept Terms and Conditions
      </label>
    </div>

   
   <center class='mt-2'> <button onClick={this.handleSubmit} class='form-button btn btn-primary col-md-1 col-1 mt-2 '>Submit</button> </center> 
        


    
                    </div>
                </form>}

             {!this.state.yes && this.state.onSubmit&&  <div class='p-5'><form>
                    <p> Name of the Passenger: {this.state.name}</p>
                    <p> Age is: {this.state.age}</p>
                    <p> Gender: {this.state.gender}</p>
                    <p> Traveling from  {this.state.from} to {this.state.to}</p>
                    <p><a href="#" onClick={this.handleYes}>Yes</a> agreed all the terms and conditions</p>

                </form> </div> }

              { this.state.yes&& <div class='row p-2'>
                   <center> <img src="https://cdn.dribbble.com/users/576253/screenshots/7268435/media/c123dd0bcb44534d9f9338fdd86cbb8a.gif" class="rounded-circle"  style={{width:'400px'}}/>
                    <p> Your travel has been confirmed </p>
                    <h4> Have a nice journey </h4>
                    </center>
                </div>
                }

               





            </div>
        )
    }
}
export default Travel