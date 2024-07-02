import React, {Component} from 'react'
import Tours from './Tours'
import Review from './Review'
import Birthday from './Birthday'
import Form1 from './Form1'
import Register from './Register'
import Menu from './FoodMenu'
 import WelcomeForm from './welcomeForm'
 import Accordion from './Accordion'
import Accordion_2 from './Accordion_2'








class App extends Component{
  
  render(){
    return(
      
      <div>
        
      
       
       {/* <Menu/> */}
       {/* <Accordion/>
       <Menu/> */}

       <Accordion_2/>

       {/* <Accordion/> */}
       
       <Menu/>
       
      </div>
    )
  }
}
export default App