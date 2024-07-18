


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
        case 'INCREMENT_AGE':
            return {...state, AGe:state.AGe+1}
        default: return state
    }
}

export default reducer