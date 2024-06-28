import React, {Component} from "react";
import './welcome.css'

class WelcomeForm extends Component{
    render (){
        return (
            <div className="container__Form row">
                <section >
                    <h1 className="h1 text-center mt-5">Welcome!</h1>
                    
                   <div className=" col-12 d-flex justify-content:center">
                    
                    
                        <form className="col-sm-6">
                        <h3 className="h3 d-flex text center">Already Registered?</h3>
                        <div className="form-group col-sm-6 d-flex flex-column">
                            <input type="eamil" className="form-control " placeholder="Email Address"/>
                        </div>

                        <div className="form-group col-sm-6 d-flex flex-column">
                            <input type="password" className="form-control " placeholder="Password"/>
                           
                        </div>
                        <a className="forgot" href="#"> i forgot password</a>

                        <div>
                            <button className="button">Signin</button>
                        </div>
                       <div className="remember"> <input type="radio"/>
                        <label>Remember</label> </div>

                        

                        </form>
                        <div class="verticalline col-sm-2">
                            <form>
                            </form>
                         </div>
                        <form className="col-sm-6">
                        <h3 className="h3 d-flex text center">New Customer?</h3>
                        <div className="form-group col-sm-6 d-flex flex-column">
                            <input type="eamil" className="form-control " placeholder="Email Address"/>
                        </div>

                        <div className="form-group col-sm-6 d-flex flex-column">
                            <input type="password" className="form-control " placeholder="Password"/>
                        </div>

                        <div>
                            <button className="button mt-5">Create Account</button>
                        </div>

                        

                        </form>
                        </div>

                        

                        
                </section>

            </div>
        )
    }
}
export default WelcomeForm