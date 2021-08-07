import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./LoginactionType";

const logindata = {
	isLoading: false,
	isError: false,
	token: "",
	isAuth: false,
	username: "",
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
			return {
				...state,
				isLoading: false,
				isAuth: true,
				token: payload,
				username: username,
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
