import React,{Component} from 'react'

class ThumbnailChild extends Component{
    render(){
        return(
            <div>
                <img src={this.props.image} width='100px'></img>
                <span>{this.props.name}</span>
                <p>{this.props.age} years</p>

            </div>
        )
    }
}
export default ThumbnailChild