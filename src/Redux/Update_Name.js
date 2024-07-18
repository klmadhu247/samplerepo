import { UPDATEFIRSTNAME } from "./Constants"

const update_Fname = (newFirstname)=>
{
    return{
        type:UPDATEFIRSTNAME,
        payload:newFirstname
    }
}
export default update_Fname