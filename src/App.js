import React,{Component} from 'react'
import Banner from'./Banner'
import Film from './Film'

//all  opening tag should have a closed tag in React


class  App extends Component {

  state = {
    Count:0,
    title:"IceCreamCount"
  }
  handleInc =()=>
    {
      this.setState ({Count:this.state.Count+1})
    }
    handlDec=()=>
      {
        this.setState({Count:this.state.Count-1})
      }
  
  render() 
  {
  return (
    <div >
   <Banner  Title = {this.state.title}  Count={this.state.Count} handleIncrement={this.handleInc}
    handleDecrement={this.handlDec}
   
   />

      <br></br>
      <button onClick={this.handleInc}>Increment</button>
      <br></br>
      <Film Name='Beast'/>
      <Film Name='Valimai'/>



      
    
    </div>
  );
}
}

export default App;
