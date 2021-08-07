import {applyMiddleware, combineReducers, createStore,compose} from "redux" 
import thunk from "redux-thunk"
import { quizReducer } from "./Quiz/reducer";
import { tlReducer } from "./teacherLogin/tlReducer";
import { trReducer } from "./teacherRegister/trReducer";

export const rootReducer = combineReducers({
   quiz:quizReducer,
   tRegister:trReducer,
   tLogin:tlReducer

})

const composeEnhancers = (typeof window !== 'undefined' 
&& window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

 const enhancer = composeEnhancers(applyMiddleware(thunk))   

export const store = createStore(rootReducer,enhancer)