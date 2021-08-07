import axios from "axios";
import { REGISTERFAILURE, REGISTERLOADING, REGISTERSUCCESS } from "./tractionTypes";

export const registerLoading =()=>(
    {
        type:REGISTERLOADING
    }
)

export const registerFailure =()=>(
    {
        type:REGISTERFAILURE
    }
)
export const registerSuccess =(payload)=>(
    {
        type:REGISTERSUCCESS,
        payload
    }
)

export const register =(payload)=>async(dispatch)=>{
  try {
        dispatch(registerLoading())
        const res= await axios.post('http://localhost:8000/teacher/register',payload)
        dispatch(registerSuccess(res.data))
  } catch (error) {
       dispatch(registerFailure())
  }
}