import React,{Component} from 'react'

class StudentForm extends Component{

    state ={
        fname:'',
        lname:'',
       
        age: 0,
        onSubmitted:false
    
    }
    
    
    
    handlefname =(e)=>
        {
            this.setState({fname:e.target.value})
        }

        handlelname=(e)=>
            {
                this.setState({lname:e.target.value})

            }
            handleage =(e)=>
                {
                    this.setState({age:e.target.value})
                }
                handlSubmit=()=>
                    {
                        this.setState({onSubmitted:true})
                    }


render(){
    return(
        <div>
            
            <h2>StudentForm</h2>
            <label>FIrstName</label>
            <input type='text' value={this.state.fname} onChange={this.handlefname}></input> <br></br>
            

            <label>LastName</label>
            <input type='text' value={this.state.lname} onChange={this.handlelname}></input> <br></br>
            <label>Age</label>
            <input type='number' value={this.state.age} onChange={this.handleage}></input>
            <br/>
            <button onClick={this.handlSubmit}>Submit</button>
            

          {this.state.onSubmitted &&  <div>
            <h2>Name: {this.state.fname} {this.state.lname}</h2> 
            <h2>Age: {this.state.age}</h2>
            </div>}
            
            

           









        </div>
    )
}

}
export default StudentForm