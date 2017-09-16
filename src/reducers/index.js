import { combineReducers } from 'redux';

import login from './login';

const rootReducer = combineReducers({
	auth: login,
});

export default rootReducer;
