import React,{Component} from 'react'

class CollegeStudentForm extends Component
{
    state ={
        fname:'',
        lname:'',
        age:0,
        gender:'',
        onsubmitted:false
    }
    // Instead of WRiting Function for each field on change we can use below simple way to minimize the code length
    //for that we have to give the attribute called name for each field with the same state name fname,lname,age,gender

    handleChange = (e)=>
        {
            this.setState({[e.target.name]:e.target.value})
        }
    /* handlefname=(e)=>
        {
            this.setState({fname:e.target.value})

        }
        handlelname=(e)=>
            {
                this.setState({lname:e.target.value})
    
            }
            handleage=(e)=>
                {
                    this.setState({age:e.target.value})
        
                }
                handlegender=(e)=>
                    {
                        this.setState({gender:e.target.value})
            
                    } */
                    handlebtn =()=>
                        {
                            this.setState({onsubmitted:true})
                        }




    render(){
        return(
            <div>
                <h1>Student Registration Form</h1>

                <label>FIrstName</label>
                <input type='text' name='fname' value={this.state.fname} onChange={this.handleChange}></input>
                <br/>
                <label>LastName</label>
                <input type='text' name='lname' value={this.state.lname} onChange={this.handleChange}></input>
                <label>Age</label>
                <input type='number' name='age' value={this.state.age} onChange={this.handleChange}></input>
                <br/>
                <label>Gender</label>
                <select name='gender'  value={this.state.gender}   onChange={this.handleChange}>
                    <option >Male</option>
                    <option >Female</option>
                    <option >Others</option>
                </select>

                <button onClick={this.handlebtn}>Submit</button>

                <div>
                    <h3>Name: {this.state.onsubmitted? `${this.state.fname} ${this.state.lname}`:''}</h3>
                    <h3>AGE: {this.state.onsubmitted? this.state.age :''}</h3>
                    <h3> Gender: {this.state.onsubmitted? this.state.gender:''}</h3>



                </div>


            </div>
        )
    }
}
export default CollegeStudentForm