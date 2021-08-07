import { getData, storeData } from "../../Utlis/localStorage";
import { VIDEO_FAILURE, VIDEO_LOADING, VIDEO_SUCCESS } from "./videoTypes";

const initstate={
    vloading:false,
    vsuccess:false,
    vfailure:false,
    vdata:getData("videodata")||{},
}

export const videoReducer =(state=initstate,{type,payload})=>{
    switch (type) {
        case VIDEO_LOADING:
            return {
                ...state,
                tloading:true
            }
        case VIDEO_FAILURE:
            return{
                ...state,
                tloading:false,
                tfailure:true
            }
        case VIDEO_SUCCESS:
            storeData("videodata",payload)
            return{
                ...state,
                tloading:false,
                tsuccess:true,
                vdata:payload,
            }    
        default:
            return state
    }
}