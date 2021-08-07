import {
	REGISTER_FAILURE,
	REGISTER_REQUEST,
	REGISTER_SUCCESS,
} from "./registeractionType";
import axios from "axios";
export const registerRequest = (payload) => {
	return {
		type: REGISTER_REQUEST,
		payload,
	};
};
export const registerSuccess = (payload) => {
	return {
		type: REGISTER_SUCCESS,
		payload,
	};
};

export const registerFailure = (er) => {
	return {
		type: REGISTER_FAILURE,
		payload: er,
	};
};

export const Studentsignup = (payload) => (dispatch) => {
	dispatch(registerRequest());
	// console.log(payload);
	return axios
		.post("http://localhost:8000/user/signup", payload)
		.then((res) => {
			console.log(res.data);
			dispatch(registerSuccess(res.data));
			console.log(res.data.token);
			alert("Registered Successfully");
		})
		.catch((res) => {
			
			dispatch(registerFailure(res.data.message));
		});
};