import * as types from '../actions/types.js';

const initialState = {
	authenticated: false,
};

export default function (state = initialState, action) {
	switch(action.type) {
		case types.USER_LOGIN:
			return {...state, authenticated: true};

			default:
			return initialState;

	}

	return initialState;
}
