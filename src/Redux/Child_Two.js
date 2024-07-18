
import React, { useState } from "react";
import decrement from "./decrement";
import { connect } from "react-redux";

function Child_Two ({Year,decrement})
{
  const [click,setClick] = useState(false);

  const handleclick =()=>
  {
    decrement()
    setClick(true)
  }

    return(
        <div>
            <h4>From Child 2</h4>

         { click &&   <p>Year Decreasing from Child 2: {Year}</p> }

            <button onClick={handleclick}>Decrement_By_4</button>

        </div>
    )
}

const mapStateToProps = (state)=>
{
    return{
        Year: state.Year
    }
}

const mapDispatchToProps = (dispatch)=>
{
    return{
        decrement:()=> dispatch(decrement())
    }
}
export default connect (mapStateToProps,mapDispatchToProps) (Child_Two)