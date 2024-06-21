import React, {Component} from "react";

class Counter_2 extends Component{

    state = {
        inputValue:0,
        count:5,
        number:5
    }

    handleChange =(e)=>
        {
            this.setState({inputValue:e.target.value})
            
        }
    handleInc =()=>
        {
            this.setState({count:parseInt(this.state.count)+parseInt(this.state.inputValue)})
            

        }

        handleDec = ()=>
            {

                
            this.setState({count:parseInt(this.state.count)-parseInt(this.state.inputValue)})


            }


    render(){
        return(
            <div>
                Counter:{this.state.count}
                <input type='number'  value={this.state.inputValue} onChange={this.handleChange}/>
                <button onClick={this.handleInc} class='btn btn-primary'>Increment</button>
                <button onClick={this.handleDec} class='btn btn-warning'>Decrement</button>
                

                


            </div>
        )
    }
}
export default Counter_2