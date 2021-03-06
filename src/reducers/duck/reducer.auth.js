export const types = {
    submit_login: "auth/submit_login",
    sucess_login: "auth/sucess_login",
    failed_login: "auth/sucess_login",
    submit_logout: "auth/submit_logout",
    sucess_logout: "auth/sucess_logout",
    failed_logout: "auth/failed_logout",
};

const initialState = {
    user: {
        isLoggedIn: false,
        username: null,
        email: false,
        token: '',
        userRole: null,
        error: false,
        id: ''
    }
};

export default function auth(state = initialState, action) {
    console.log('action', action);

    switch (action.type) {
        case types.submit_login:
            return {
                user: {
                    isLoggedIn: false,
                    isLoading: true,
                    error: false,
                }
            }
        case types.sucess_login:
            return {
                user: {
                    isLoggedIn: true,
                    isLoading: false,
                    username: action.payload.username,
                    email: action.payload.email,
                    error: false,
                    id: action.payload.id,
                    userRole: action.payload.userRole
                }
            };
        case types.failed_login:
            return {
                user: {
                    isLoggedIn: false,
                    isLoading: false,
                    error: true,
                }
            };
        case types.submit_logout:
            return {
                user: {
                    isLoggedIn: true,
                    isLoading: true,
                }
            };
        case types.sucess_logout:
            return {
                user: {
                    isLoggedIn: false,
                    isLoading: false,
                    error: '',
                }
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