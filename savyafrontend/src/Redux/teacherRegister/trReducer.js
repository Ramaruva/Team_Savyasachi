import { getData, storeData } from "../../Utlis/localStorage";
import { REGISTERFAILURE, REGISTERLOADING, REGISTERSUCCESS } from "./tractionTypes";

const initstate={
    tloading:false,
    tsuccess:false,
    tfailure:false,
    trdata:getData("trdata")||{},
    trToken:getData("trToken")||""
}

export const trReducer =(state=initstate,{type,payload})=>{
    switch (type) {
        case REGISTERLOADING:
            return {
                ...state,
                tloading:true
            }
        case REGISTERFAILURE:
            return{
                ...state,
                tloading:false,
                tfailure:true
            }
        case REGISTERSUCCESS:
            storeData("trdata",payload.data)
            storeData("trToken",payload.token)
            return{
                ...state,
                tloading:false,
                tsuccess:true,
                data:payload.data,
                trToken:payload.token
            }    
        default:
            return state
    }
}