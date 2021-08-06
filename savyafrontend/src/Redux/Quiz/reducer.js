import { QUIZ_FAILURE, QUIZ_REQUEST, QUIZ_SUCCESS } from "./actionTypes"

const initState = {
    isLoading:false,
    isError:false,
    data:[]
}
export const quizReducer = (state=initState,{type,payload}) =>{
    switch(type){
        case QUIZ_REQUEST:
            return{
                ...state,
                isLoading:true,
                isError:false,
            }
        case QUIZ_SUCCESS:
            return{
                ...state,
                isLoading:false,
                isError:false,
                data:payload
            }    
        case QUIZ_FAILURE:
            return{
                ...state,
                isLoading:false,
                isError:true,
            }
        default:
        return state    
    }
}