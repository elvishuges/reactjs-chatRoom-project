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
                dispatch({
                    type: types.sucess_login
                }); 
                return rsp;
            })
            .catch(error => {
                console.log('*catch*',error);                     
                
                return error;
            });

            return response
    }
}
