import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./LoginactionType";
import {getData,storeData} from "../../Utlis/localStorage"

const logindata = {
	isLoading: false,
	isError: false,
	token: getData("student_token")||"",
	isAuth: false,
	userdata: getData("student_data")||{},
	
};
export const loginReducer = (state = logindata, { type, payload ,username}) => {
	// const { username, token } = payload;
	switch (type) {
		case LOGIN_REQUEST:
			return {
				...state,
				isLoading: true,
				isError: false,
			};
		case LOGIN_SUCCESS:
			storeData("student_token",payload.token)
			storeData("student_data",payload.userData)
			return {
				...state,
				isLoading: false,
				isAuth: true,
				token: payload.token,
				userdata:payload.userData
			};
		case LOGIN_FAILURE:
			return {
				...state,
				isAuth: false,
				isLoading: false,
				isError: true,
			};
		default:
			return state;
	}
};