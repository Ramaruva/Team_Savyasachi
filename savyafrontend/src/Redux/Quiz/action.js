import axios from "axios"
import { QUIZ_FAILURE, QUIZ_REQUEST, QUIZ_SUCCESS } from "./actionTypes"


const quizRequest = () =>{
    return{
        type:QUIZ_REQUEST
    }
}
const quizSuccess =(payload)=>{
    return{
        type:QUIZ_SUCCESS,
        payload
    }
}
const quizFailure = (payload) =>{
    return{
        type:QUIZ_FAILURE,
        payload
    }
}

export const fetchQuestions = (category,difficulty) => (dispatch) =>{
    dispatch(quizRequest())

    return axios.get(`https://opentdb.com/api.php?
    amount=10${category && `&category=${category}`}${difficulty && `&difficulty=${difficulty}`}&type=multiple`)
    
    .then((res)=>{
        dispatch(quizSuccess(res.data.results))
    })
    .catch((err)=>{
        dispatch(quizFailure(err))
    })
}