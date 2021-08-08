import { deleteData, getData, storeData } from "../../Utlis/localStorage";
import { LOGINFAILURE, LOGINLOADING, LOGINSUCCESS, LOGOUTSUCCESS } from "./tlactionTypes";

const initstate ={
    tlLoading:false,
    tlFailure:false,
    tlSuccess:getData("tlSuccess")||false,
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
            storeData("tldata",payload.data)
            storeData("tlToken",payload.token)
            storeData("tlSuccess",true)
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
            deleteData("tlSuccess")
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