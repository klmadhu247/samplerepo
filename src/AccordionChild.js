import React,{Component} from "react";
class AccordionChild extends Component{
    state={
        showInfo:false
    }

    handleClick =()=>
        {
            this.setState({showInfo:!this.state.showInfo})
        }
    render(){
        return(
            <div>
                <div>
                    <h3 style={{fontWeight:'bold'}}>{this.props.title}</h3> <button onClick={this.handleClick}>{this.state.showInfo? '-':'+'}</button>
                  {  this.state.showInfo &&<div> {this.props.info}</div> }
                </div>
            </div>
        )
    }
}
export default AccordionChild