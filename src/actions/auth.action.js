import  {types}  from "../reducers/duck/reducer.auth";
import api from '../services/communUser.service'


export const loginUser = (username,password) => {
    console.log('*** dados login***', username,password);

    return async  (dispatch) => {
        console.log('****** entrou *****');

        dispatch({
            type: types.submit_login
        });       

        const response = await api.login(username,password)
            .then(rsp => {   
                console.log('rsp data',rsp.data);  
                return rsp;
            })
            .catch(error => {
                console.log(error);                      
                dispatch({
                    type: types.failed_login,
                    payload: 'Email ou senha errados'                    
                });
                return error;
            });

            return response
    }
}
