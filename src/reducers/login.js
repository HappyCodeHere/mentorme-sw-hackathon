import * as types from '../actions/types.js';

const initialState = {
	authenticated: false,
	name: null
};

export default function (state = initialState, action) {
	switch(action.type) {
		case types.USER_LOGIN:
			return {...state, authenticated: true, name: action.payload.name};

			default:
			return initialState;

	}

	return initialState;
}
