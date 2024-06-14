import React, {Component} from 'react'
import Namee from './Namee'
import AsgnStudent from './AsgnStudent'
import AsgnCount from './AsgnCount'

class App extends Component{
  render(){
    return(
      <div>Assignments
        <Namee/>
        <br/>
        <AsgnStudent/>
        <br/>
        <br/>
        <AsgnCount/>

      </div>
    )
  }
}
export default App