import * as types from './types';

/*import axios from 'axios';*/

/*export function func() {
  return dispatch => {
  	dispatch({ type: types. });
  	return axios.get().then((data) => {
  		dispatch({ type: types., payload: data });
  	}).catch(error => {
  		dispatch({ type: types., payload: error });
  	});
  };
}*/

export const loginUser = () => {
  return {
    type: types.USER_LOGIN,
  }
}
