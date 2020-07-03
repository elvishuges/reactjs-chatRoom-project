export const types = {
    sucess_login: "auth/sucess_login",
    sucess_logout: "auth/sucess_logout"
};

const initialState = {
    user: {
        nome: "N Logado",
        role: 0
    }
};

export default function auth(state = initialState, action) {
    console.log('**** REDUCER ACTION****',action);
    
    switch (action.type) {
        case types.sucess_login:
            return {
                ...state,
                user: action.newValue
            };
        case types.sucess_logout:
            return {
                ...state,
                user: ""
            };
        default:
            return state
    }
}

export const Creators = {
    login: (value) => ({
        type: types.sucess_login,
        newValue: value
    }),

    logout: (value) => ({
        type: types.sucess_logout,
        newValue: value
    })
};