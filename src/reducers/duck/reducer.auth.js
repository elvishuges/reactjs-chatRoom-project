export const types = {
    submit_login: "auth/submit_login",
    sucess_login: "auth/sucess_login",
    failed_login: "auth/failed_login",
    submit_logout: "auth/submit_logout",
    sucess_logout: "auth/sucess_logout",
};

const initialState = {
    user: {
        username: null,
        email: null,
        role: null,
        isLoggedIn: false,
        isLoadingLogin: false,
        errorLogin: false,
        errorMessage: "",
        id: "",
    },
};

export default function auth(state = initialState, action) {
    console.log('action', action, state);

    switch (action.type) {
        case types.submit_login:
            return {
                user: {
                    username: null,
                    email: null,
                    role: null,
                    isLoggedIn: false,
                    isLoadingLogin: true,
                    errorLogin: false,
                    errorMessage: "",
                    id: "",
                },
            }
        case types.sucess_login:
            return {
                user: {
                    username: action.payload.username,
                    email: action.payload.email,
                    role: action.payload.role,
                    isLoggedIn: true,
                    isLoadingLogin: false,
                    errorLogin: false,
                    errorMessage: "",
                    id: action.payload._id,
                },
            };
        case types.failed_login:
            return {
                user: {
                    username: null,
                    email: null,
                    role: null,
                    isLoggedIn: false,
                    isLoadingLogin: false,
                    errorLogin: false,
                    errorMessage: action.payload,
                    id: "",
                },
            };
        case types.submit_logout:
            return {
                user: {
                    username: null,
                    email: null,
                    role: null,
                    isLoggedIn: false,
                    isLoadingLogin: false,
                    errorLogin: false,
                    errorMessage: "",
                    id: "",
                },
            };
        case types.sucess_logout:
            return {
                user: {
                    username: null,
                    email: null,
                    role: null,
                    isLoggedIn: false,
                    isLoadingLogin: false,
                    errorLogin: false,
                    errorMessage: "",
                    id: "",
                },
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