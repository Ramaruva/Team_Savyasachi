import { deleteData, getData, storeData } from "../../Utlis/localStorage";
import { LOGINFAILURE, LOGINLOADING, LOGINSUCCESS, LOGOUTSUCCESS } from "./tlactionTypes";

const initstate ={
    tlLoading:false,
    tlFailure:false,
    tlSuccess:false,
    tlData:getData("tldata")||{},
    tlToken:getData("tlToken")||""
}

export const tlReducer =(state=initstate,{type,payload})=>{
    switch (type) {
        case LOGINLOADING:
            return{
                ...state,
                tlLoading:true
            }
        case LOGINFAILURE:
            return{
                ...state,
                tlFailure:true,
                tlLoading:false
            }
        case LOGINSUCCESS :
            storeData("tlData",payload.data)
            storeData("tlToken",payload.token)
            return{
                ...state,
                tlLoading:false,
                tlSuccess:true,
                tlData:payload.data,
                tlToken:payload.token
            }
        case LOGOUTSUCCESS :
            deleteData("tlData")
            deleteData("tlToken")
            return {
                ...state,
                tlSuccess:false,
                tlData:{},
                tlToken:""
            }        
        default:
            return state
    }
}