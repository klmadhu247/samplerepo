import React,{Component} from "react";

class Welcome_HW extends Component {
    state ={
        input:'Welcom',
        onChange:false
    }

    handleChange =()=>
        {
            this.setState({onChange:!this.state.onChange})
        }
    render(){
        return(
            <div>

            <div class='col-md-4'>  

              { this.state.onChange? 'Hello WOrld':'Welcome' }


              
                <button onClick={this.handleChange} className="btn btn-primary">Change</button> </div>








            </div>
        )
    }
}
export default Welcome_HW