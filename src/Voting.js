import React, {Component} from 'react'
import './table.css' 

class Voting extends Component{
state={
    c:{count:0},
    html:{count:0},
    python:{count:0}
   
}
handleC =()=>
    {
        this.setState({c:{...this.state.c,count:this.state.c.count+1}})
    }
    handlePy=()=>
        {
            this.setState({python:{...this.state.python,count:this.state.python.count+1}})
        }
        
        handlehtml =()=>
            {
                this.setState({html:{...this.state.html,count:this.state.html.count+1}})
            }
    

    

    render(){
        return(
            <div>
                <h1>Language</h1>
                <table className='tablest'>
                    <thead>
                        <tr>
                            <th>Language</th> <br/>
                            <th>COunt</th>
                            <th>Cast Your Vote</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td >C</td>
                            <td>{this.state.c.count}</td>
                            <td><button onClick={this.handleC}>Vote</button></td>
                        </tr>
                         <tr>
                            <td>HTML</td>
                            <td>{this.state.html.count}</td>
                            <td><button onClick={this.handlehtml}>Vote</button></td>
                        </tr>
                        <tr>
                            <td>PY</td>
                            <td>{this.state.python.count}</td>
                            <td><button onClick={this.handlePy}>Vote</button></td>
                        </tr> 
                    </tbody>
                </table>
                
            </div>
        )
    }
}
export default Voting