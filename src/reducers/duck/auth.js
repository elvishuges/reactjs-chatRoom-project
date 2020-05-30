export const types = {
    login: "auth/login",
    logout: "auth/logout"
};



const initialState = {
	user: {name:"",login:""}
  };

export default function auth(state = initialState, action) {
    
    switch (action.type) {
        case types.login:
            return {
                ...state,
                user: action.newValue
            };
        case types.logout:
            return {
                ...state,
                user: action.newValue
            };
        default:
            return state
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