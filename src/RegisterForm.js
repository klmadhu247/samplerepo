import React, {Component} from "react";
import './register.css'

class Register extends Component
{
    render(){
        return (
            <div className="Register__Container mb-5">

                <h3 className="h3 mt-4 ml-2">Register New Account</h3>

                <form>
                    <div className="row py-2">
                        <div className="form-group col-sm-6 d-flex flex-column mt-5 px-4 ">
                            <input className="form-control" type="text" placeholder="First Name"/>
                            

                        </div >

                        <div className="form-group col-sm-6 d-felx flex-column mt-5 px-4"> 
                            <input className="form-control" type="text" placeholder="Last Name"/>

                        </div>

                        <div className="form-group mt-4 px-4" >
                            <input type="text" className="form-control" placeholder="Name"/>
                        </div>

                        <div className="form-group mt-4 px-4" >
                            <input type="text" className="form-control" placeholder="City"/>
                        </div>

                        <div className="form-group mt-4 px-4" >
                            <input type="text" className="form-control" placeholder="Phone Number"/>
                        </div>

                        <div className="form-group mt-4 px-4" >
                            <input type="text" className="form-control" placeholder="Email"/>
                        </div>
                        
                        

                        <div>
                            <button className="bb"> Create Account</button>
                        </div>

                        
                    </div>
                </form>

            </div>
        )
    }
}
export default Register