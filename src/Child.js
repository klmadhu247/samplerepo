import React , {Component} from 'react'
class Child extends Component{
    render(){
        return(
            <div>
                The Name is: {this.props.nm} and the age is : {this.props.ag}
            </div>
        )
    }
}
export default Child