import React, {Component} from 'react'

import Toggle from './Toggle_D8'
import Voting from './Voting'
import Counters from './Count_Inc_Dec'
import Counter_2 from './Counter_2'
import Form_Password from './Form_PW_D8'






class App extends Component{
  
  render(){
    return(
      
      <div>
       {/* <Toggle/>
       <Voting/>
       <Counters/>
       <b/>
       <div>Counter_2</div>
       <Counter_2/> */}

       <Form_Password/>

       
      </div>
    )
  }
}
export default App