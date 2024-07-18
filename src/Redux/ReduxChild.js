import React from "react";
import { connect } from "react-redux";
import increment from './increment'

function ReduxChild ({year,increment}){
    return(
        <div>
            <h4>Year From ReduxChild</h4>
            <p>Year: {year}</p>
            <br/>
            <button onClick={increment}>Increment_By_4</button>

        </div>
    )
}

const mapStateToProps = (state)=>
{
    return{
        year: state.Year
    }
    
}

const mapDispatchToProps = (dispatch)=>
{
   return{
    increment:()=> dispatch(increment())

   } 
}

export default connect (mapStateToProps,mapDispatchToProps) (ReduxChild)