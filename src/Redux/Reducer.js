
const initialState = {
    Year:2000
}


const reducer = (state=initialState,action)=>
{
    
        switch(action.type)
        {
            case 'INCREMENTBY4':
            return {...state, Year:state.Year+4}

            case 'DECREMENTBY4':
                return {...state, Year:state.Year-4}

            default: 
            return state

        }
       
        
    

}
export default reducer