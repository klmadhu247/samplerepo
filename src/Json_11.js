import React, {Component} from 'react'
import {todos} from './data.js'    /* if it is a named export we have to use {} to import */
import {reviews} from './data.js'   /* if it is a named export we have to use {} to import */
class Json extends Component{

    state={
         users: todos

    }
    render(){
        return(
            <div>
                <h2>{this.state.users.map(user=>user.completed&& <h3>{user.title}</h3>)}</h2>

            </div>
        )
    }
}
export default Json