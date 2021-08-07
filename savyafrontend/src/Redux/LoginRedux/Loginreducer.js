import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./LoginactionType";
import {deleteData, getData,storeData} from "../../Utlis/localStorage"

const logindata = {
	isLoading: false,
	isError: false,
	token: getData("student_token")||"",
	isAuth: getData("student_auth")||false,
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
			storeData("student_auth",true)
			return {
				...state,
				isLoading: false,
				isAuth: true,
				token: payload.token,
				userdata:payload.userData
			};
			case LOGOUT_SUCCESS:
				deleteData("student_token")
				deleteData("student_data")
				deleteData("student_auth")
				return {
					...state,
					isLoading: false,
					isAuth: false,
					token:"",
					userdata:{}
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