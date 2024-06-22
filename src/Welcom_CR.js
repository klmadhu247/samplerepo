import React,{Component} from "react";

class Welcome_Change extends Component {
    state ={
        input:'Welcom',
        onChange:false
    }

    handleChange =()=>
        {
            if(this.state.onChange==false)
                {
                    this.setState({onChange:true})
                }
                else{
                    this.setState({onChange:false})
                }
        }
    render(){
        return(
            <div>

            <div class='col-md-4'>  { !this.state.onChange && <span> Welcome</span> }

              { this.state.onChange && <span> Hello World </span> }


              
                <button onClick={this.handleChange} className="btn btn-primary">Change</button> </div>








            </div>
        )
    }
}
export default Welcome_Change