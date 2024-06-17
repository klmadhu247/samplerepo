import React,{Component} from 'react'

class Banner extends Component{
    
    render(){
        return(
        
        
        <div>
            Banner {this.props.film}
           <h2>Titile:  {this.props.Title}  Count: {this.props.Count}</h2>
           <button onClick={this.props.handleIncrement}>IncrementFromBanner</button> 
           <button onClick={this.props.handleDecrement}>DecrementFRomBanner</button>
        </div>

        )
        
    
}
}
export default Banner