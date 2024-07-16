import React from "react";

function Football (props)
{

    console.log("Props from Football : ",props)
    const handleClick = ()=>
    {
        props.history.push('/cricket')

    }

    const handleTennis = ()=>
    {
        props.history.push('/tennis')
    }


    const hanldeHome = ()=>
    {
        props.history.push('/')
    }

    const handleBack =()=>
    {
        props.history.goBack();
    }

    const handleForward =()=>
    {
        props.history.goForward();
        
    }

    return(   
        <div>
Football
<button onClick={handleClick}> Go to Cricket</button>

<button onClick={handleTennis}>Go to Tennis</button>  <br/>
<button onClick={hanldeHome}>HOme</button>

<br/>
<button onClick={handleBack}>Back</button>
<button onClick={handleForward}>Forward</button>
        </div>
    )
}
export default Football