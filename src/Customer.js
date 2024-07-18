import React, { useState } from "react";
import { connect } from "react-redux";// we need to import this to make the connection between the customer element and Props whcih we get from the store
import increment from "./Redux/increment";
import decrement from "./Redux/decrement";
import updateName from "./Redux/updateName";

function Customer ({Name,Year,increment,decrement,updateName}){

const [newName,setNewName] = useState('')

const handleChange = (e)=>
{
    setNewName(e.target.value)
}

const handleUpdate =()=>
{
    updateName(newName)
    setNewName('')
}



    return(
        <div>
            <h3>Accessing Data From Customer Page</h3>

            <div>
                <p>The Name is: {Name}</p><br/>
                <p>DOB Year: {Year}</p>
            </div>

            <button onClick={increment}>Increase_Year</button><br/>  {/*we Need to create increase action for this*/}
            <button onClick={decrement}>Decrease_Year</button>        {/*we Need to create decrease action for this*/}

            <div style={{display:'flex',justifyContent:'center',padding:'20px'}}>
                <input type="text" value={newName} onChange={handleChange} placeholder=" Edit the Name here" style={{ marginRight: '10px'}}/> 
                <button onClick={handleUpdate}>Update Name</button>   {/*we Need to create UpdateName action for this*/}
            </div>
        </div>
    )
}

//this page got its access to the store as it is mentioned inside the <Provider></Provider>
//now we have to convert the data in store to props so that we can access that 

const mapStateToProps = (state)=>
{
    return{
        Name:state.Name,
        Year:state.Year

    }
    
}

//on clicking the action as to dispatch
 const mapDispatchToProps = (dispatch)=>
 {
    return{
        increment:()=> dispatch(increment()),
        decrement:()=> dispatch(decrement()),
        updateName:(newName)=> dispatch(updateName(newName))

    }
 }




export default connect (mapStateToProps,mapDispatchToProps) (Customer)