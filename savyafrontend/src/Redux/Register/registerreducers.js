import {
	REGISTER_FAILURE,
	REGISTER_REQUEST,
	REGISTER_SUCCESS,
} from "./registeractionType";

const regdata = {
	isLoading: false,
	isError: false,
	isAuth: false,
	istoken: "",

};
export const registerReducer = (state = regdata, { type, payload }) => {
	switch (type) {
		case REGISTER_REQUEST:
			return {
				...state,
				isLoading: true,
				isError: false,
			};
		case REGISTER_SUCCESS:
			return {
				...state,
				isLoading: false,
				isAuth: true,
			    payload,
			};
		case REGISTER_FAILURE:
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
