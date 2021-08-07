import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./LoginactionType";
import axios from "axios";
export const loginRequest = (payload) => {
	return {
		type: LOGIN_REQUEST,
		payload,
	};
};
export const loginSuccess = (token, username) => {
	return {
		type: LOGIN_SUCCESS,
		payload: token,
		username: username,
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
	const { username, password } = payload;
	// console.log(username, password);
	dispatch(requestAction);
	return axios
		.post("https://masai-api-mocker.herokuapp.com/auth/login", payload)
		.then((res) => {
			const { username } = payload;
			const successAction = loginSuccess(res.data.token, username);
			// console.log(username);
			dispatch(successAction);
			// console.log(res.data.token);
		})
		.catch((err) => {
			const failureAction = loginFailure(err.message);
			dispatch(failureAction);
		});
};
