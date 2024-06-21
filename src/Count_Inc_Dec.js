import React, {Component} from "react";

class Counters extends Component{

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
            const n = parseInt(this.state.inputValue)
            const c = parseInt(this.state.count)
            const r = n+c
            

            
            this.setState({count:r})
            

        }

        handleDec = ()=>
            {

                const n = parseInt(this.state.inputValue)
            const c = parseInt(this.state.count)
            const r = c-n
            this.setState({count:r})


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
export default Counters