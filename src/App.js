import React, {Component} from 'react'
import './Styles.css'

class App extends Component{

state ={
  Count:0
}
handleinc = () =>{
  this.setState({Count:this.state.Count+1})
}


  render(){
    return(
      <div>
        <h1>
          Hello
        </h1>
        <h2>Count: {this.state.Count}</h2>
        <button onClick={this.handleinc} className='buttoninc'>Increment</button>
      </div>
    )
  }
}
export default App