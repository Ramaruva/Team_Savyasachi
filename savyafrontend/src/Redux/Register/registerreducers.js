import {
	REGISTER_FAILURE,
	REGISTER_REQUEST,
	REGISTER_SUCCESS,
} from "./registeractionType";
import {getData,storeData} from "../../Utlis/localStorage"

const regdata = {
	isLoading: false,
	isError: false,
	isRegister: false,
	istoken:getData("student_reg_token")||"",
	user:getData("student_reg_data")||{}

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
			storeData("student_reg_token",payload.token)
			storeData("student_reg_data",payload.userData)
			return {
				...state,
				isLoading: false,
				isRegister: true,
				token:payload.token,
			    user:payload.userData,
			};
		case REGISTER_FAILURE:
			return {
				...state,
				isRegister: false,
				isLoading: false,
				isError: true,
			};
		default:
			return state;
	}
};
