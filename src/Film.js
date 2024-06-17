import React,{Component} from 'react'

class Film extends Component{

    state ={
        Collection:1000
    }
    handlecollection =()=>{
        this.setState({Collection:this.state.Collection+1})
    }
    render(){
        return(
            <div>
                <h1>Film</h1>
                Film Name: {this.props.Name}
                <h2>Collection: {this.state.Collection}</h2>

                <button onClick={this.handlecollection}>IncrementCollection</button>
                




            </div>
        )
    }
}
export default Film