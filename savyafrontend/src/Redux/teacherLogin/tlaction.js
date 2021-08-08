import axios from "axios";
import { LOGINFAILURE, LOGINLOADING, LOGINSUCCESS, LOGOUTSUCCESS } from "./tlactionTypes";

export const  loginLoading =()=>(
    {
        type:LOGINLOADING
    }
)
export const loginFailure =()=>
(
    {
        type:LOGINFAILURE
    }
)
export const loginSuccess =(payload)=>
(
    {
        type:LOGINSUCCESS,
        payload
    }
)

export const tlogin =(payload)=>async(dispatch)=>{
    try {
        dispatch(loginLoading())
        const res = await axios.post('http://localhost:8000/teacher/login',payload)
        console.log(res.data ,"obj")
        dispatch(loginSuccess(res.data))
    } catch (error) {
         dispatch(loginFailure())
    }
}

export const tlogout =()=>(
    {
        type:LOGOUTSUCCESS
    }
)