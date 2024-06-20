import React, {Component} from 'react'

import Age from './Age'
import Counter from './CounterUsing_Function'
import NameChange from './NameChange'
import ToggleAge from './ToggleAge'
import ToggelButton from './Show_Hide_button'







class App extends Component{
  
  render(){
    return(
      
      <div>
     
       <Counter/>
       <NameChange/>
       <ToggleAge/>
       <br/>
       <ToggelButton/>
      </div>
    )
  }
}
export default App