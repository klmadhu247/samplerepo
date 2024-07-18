import { UPDATENAME } from "./Constants"

const updateName = (newName)=>
{
    return{
        type:UPDATENAME,
        payload:newName
    }
}
export default updateName