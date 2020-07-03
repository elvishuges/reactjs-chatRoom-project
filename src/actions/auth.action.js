import  {types}  from "../reducers/duck/reducer.auth";
import api from '../services/communUser.service'


export const loginUser = (username,password) => {
    console.log('*** dados login***', username,password);

    return async  (dispatch) => {
        console.log('****** entrou *****');

        dispatch({
            type: types.sucess_logout
        });        

        const response = await api.login(username,password)
            .then(rsp => {   
                console.log('rsp data',rsp.data);
                                 
                dispatch({
                    type: "LOGIN_USER_SUCCESS"
                });
                dispatch({
                    type: "AUTH_USER_SUCCESS",
                    token: rsp.data.token
                });

                return rsp;
            })
            .catch(error => {
                console.log(error);                      
                dispatch({
                    type: "LOGIN_USER_FAIL",
                    payload: 'Email ou senha errados'
                    
                });
                return error;
            });

            return response
    }
}

export const Creators = {
    login: (value) => ({
        type: types.login,
        newValue: value
    }),

    logout: (value) => ({
        type: types.logout,
        newValue: value
    })
};