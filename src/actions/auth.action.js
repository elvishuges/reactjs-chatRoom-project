import { types } from "../reducers/duck/reducer.auth";
import api from '../services/communUser.service'


export const loginUser = (username, password) => {

    return async (dispatch) => {
        dispatch({
            type: types.submit_login
        });
        const response = await api.login(username, password)
            .then(rsp => {
                if (rsp.status == 200) {
                    dispatch({
                        type: types.sucess_login,
                        payload: rsp.data.user
                    });
                    return rsp;
                }
                dispatch({
                    type: types.failed_logout
                })
            })
            .catch(error => {
                console.log('*catch*', error);
                dispatch({
                    type: types.failed_login
                });
                return error;
            });
        return response
    }
}


export const logoutUser = () => {
    return async (dispatch) => {
        dispatch({
            type: types.submit_logout
        });
        dispatch({
            type: types.sucess_logout
        });

    }
}