import { INCREMENT } from "./Constants"
import { DECREMENT } from "./Constants"
import { UPDATEFIRSTNAME } from "./Constants"

const initialState = {
    FirstName: 'Advik',
    LastName: 'A',
    Gender:'M',
    Email:'advik@gmail.com',
    Address:'No.11, Chennai-600008',
    AGe:10
}

const reducer = (state=initialState,action) =>
{
    switch(action.type)
    {
        case INCREMENT:
            return {...state, AGe:state.AGe+1}

        case DECREMENT:
            return {...state,AGe:state.AGe-1}  

        case UPDATEFIRSTNAME:
            return {...state, FirstName:action.payload}

        default: 
        return state
    }
}

export default reducer