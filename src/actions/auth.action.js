import { types } from "../reducers/duck/reducer.auth";
import React from "react";
import api from '../services/communUser.service'
import { Redirect } from "react-router";

export const loginUser = (username, password) => {

    return async (dispatch) => {
        dispatch({
            type: types.submit_login
        });
        const response = await api.login(username, password)
            .then(rsp => {
                console.log('*RSP OK*', rsp);
                dispatch({
                    type: types.sucess_login,
                    payload: rsp.data.user
                })
                return <Redirect to="/" />
            })
            .catch(error => {
                console.log('*RSP catch !!!!!!!!!*', error);
                dispatch({
                    type: types.failed_login,
                    payload: error.response.data.error
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