import React,{Component} from 'react'
import Banner from'./Banner'
import StudentForm from './StudentForm'
import CollegeStudentForm from './CollegeStudentForm'

//all  opening tag should have a closed tag in React


class  App extends Component {

  state = {
    Count:0,
    title:"IceCreamCount",
    flag:true
  }
  handleInc =()=>
    {
      this.setState ({Count:this.state.Count+1})
    }
    handlDec=()=>
      {
        this.setState({Count:this.state.Count-1})
      }
      handleToggle= ()=>{
        this.setState({flag:!this.state.flag})

      }
  
  render() 
  {
  return (
   <div >
    {/* <StudentForm/> */}
    <CollegeStudentForm/>









    
       {/* {
        this.state.flag && <p>Hello</p>
 
      }
      <button onClick={this.handleToggle}>Toggle</button> */}
   
   
   {/* <Banner  Title = {this.state.title}  Count={this.state.Count} handleIncrement={this.handleInc}
    handleDecrement={this.handlDec}
   
   />

      <br></br>
      <button onClick={this.handleInc}>Increment</button> */}


      
    
    </div>
  );
}
}

export default App;
