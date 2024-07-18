import React from "react";
import { connect } from "react-redux";
import increment from "./increment_Age";



function Personal_Details ({Fn,Ln,Age,Gender,Add,Email,increment})
{
    return(
        <div>
            <h2 style={{textAlign:'center',marginTop:'50px',textDecoration:'underline'}}>Personal Details From Redux</h2>

            <p style={{display:'flex',justifyContent:'space-around'}}>FirstName: {Fn}     LastName: {Ln} </p> <br/>
            <p style={{display:'flex',justifyContent:'space-around'}}>Age: {Age}    </p>  <br/>
            <p style={{display:'flex',justifyContent:'space-around'}}>   Gender: {Gender} </p>  <br/>
            <p style={{display:'flex',justifyContent:'space-around'}}>  Email: {Email}</p> <br/>
            <p style={{display:'flex',justifyContent:'space-around'}}>Address: {Add}  </p>

           <div style={{display:'flex',justifyContent:'center',marginTop:'20px'}}>
           <button onClick={increment} >Increment_Age</button>
            </div>

        </div>
    )
}

const mapStateToProps = (state)=>
{
    return{ 
        Fn:state.FirstName,
        Ln:state.LastName,
        Age:state.AGe,
        Gender:state.Gender,
        Add:state.Address,
        Email:state.Email,
    }
}

const mapDispatchToProps = (dispatch)=>
{
    return{
        increment:()=> dispatch(increment())
    }
}
export default connect (mapStateToProps,mapDispatchToProps) (Personal_Details)