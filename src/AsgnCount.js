import React,{Component} from 'react'
import './style.css'


class AsgnCount extends Component{

    state ={
        Count:1
    }
    handleinc =()=>{
        this.setState({Count:this.state.Count+1})
    }
    handleDec =()=>{
        this.setState({Count:this.state.Count-1})
    }

    render()
    {
        return(
            <div>
                <h2>Count {this.state.Count}</h2>
                <button onClick={this.handleinc} className='blue'>Increment</button>
                
                <button onClick={this.handleDec} className='red'>Decrement</button>


            </div>
        )
    }
}
export default AsgnCount