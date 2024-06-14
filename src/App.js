import React, {Component} from 'react'
import Student from './Student'
import College from './College'

class App extends Component{
  state = {
    name:'Madhu'
  }
  handleName =()=>{
    this.setState({name:'MadhuSudhanan KL'})
  }
  render(){
    return(
      <div>
        <h1>App</h1>
        <Student name={this.state.name}/>
        <College name={this.state.name}/>
        <button onClick={this.handleName}> Change Name</button>
      </div>
    ) 
  }
}
export default App