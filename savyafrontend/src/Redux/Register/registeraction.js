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

export const postRegdata = (payload) => (dispatch) => {
	dispatch(registerRequest());
	// console.log(payload);
	return axios
		.post("https://masai-api-mocker.herokuapp.com/auth/register", payload)
		.then((res) => {
			console.log(res);
			dispatch(registerSuccess(res.data));
			console.log(res.data.message);
			alert("Registered Successfully");
		})
		.catch((res) => {
			alert(res.data.message);
			dispatch(registerFailure(res.data.message));
		});
};
