import { DECREMENT, INCREMENT, UPDATENAME } from "./Constants"

//reducer consisting  a state and action here we are creating a state called initialstate
const initialState = {
    Name:'Madhu',
    Year:1989
}

//creating reducer

const reducer = (state=initialState,action)=>
{
    switch(action.type)
    {
        case INCREMENT:
            return {...state, Year:state.Year+1}
        
        case DECREMENT:
            return {...state, Year:state.Year-1} 
        case UPDATENAME:
            return {...state, Name:action.payload}        
        default:
            return state
    }
}

export default reducer

