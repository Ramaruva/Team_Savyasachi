import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./LoginactionType";
import axios from "axios";
export const loginRequest = (payload) => {
	return {
		type: LOGIN_REQUEST,
		payload,
	};
};
export const loginSuccess = (payload) => {
	return {
		type: LOGIN_SUCCESS,
		payload,

		
	};
};

export const loginFailure = (er) => {
	return {
		type: LOGIN_FAILURE,
		payload: er,
	};
};

export const loginUser = (payload) => (dispatch) => {
	const requestAction = loginRequest();

	// console.log(email, password);
	dispatch(requestAction);
	return axios
		.post("http://localhost:8000/user/signin", payload)
		.then((res) => {
			
			const successAction = loginSuccess(res.data);
			// console.log(email);
			dispatch(successAction);
			console.log(res.data.token);
		})
		.catch((err) => {
			const failureAction = loginFailure(err.message);
			dispatch(failureAction);
		});
};