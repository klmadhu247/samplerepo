import React, { useState } from "react";
import { connect } from "react-redux";
import increment from "./increment_Age";
import decrement from "./decrement_Age";
import update_Fname from "./Update_Name";



function Personal_Details ({Fn,Ln,Age,Gender,Add,Email,increment,decrement,update_Fname})
{

    const [newFirstName,setNewFirstName] = useState('')


const handleChange =(e)=>
{
    setNewFirstName(e.target.value)
    
}


const handleUpdate = ()=>
{
    if (newFirstName) {
        update_Fname(newFirstName);
        setNewFirstName(''); 
    }
}


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

            <div style={{display:'flex',justifyContent:'center',marginTop:'20px'}}>
                <button onClick={decrement} >Decrement_Age</button>
            </div>
            
            <div style={{display:'flex', justifyContent:'center',marginTop:'20px',padding:'10px'}}>
            <input type="text" value={newFirstName} onChange={handleChange}  placeholder="Edit FirstName" />

            <button onClick={handleUpdate} >Update FirstName</button>   

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
        increment:()=> dispatch(increment()),
        decrement:()=> dispatch(decrement()),
        update_Fname: (newFirstName)=>dispatch(update_Fname(newFirstName))
    }
}
export default connect (mapStateToProps,mapDispatchToProps) (Personal_Details)