export const types = {
    submit_login:"auth/submit_login",
    sucess_login: "auth/sucess_login",
    failed_login: "auth/sucess_login",    
    sucess_logout: "auth/sucess_logout",
    failed_logout: "auth/failed_logout",
};

const initialState = {
    user: {
        isLoggedIn: false,
        error:null,
        isLoading:false
    }
};

export default function auth(state = initialState, action) {
    console.log('**** REDUCER STATE****',state);
    console.log('**** REDUCER Action****',action);
    
    switch (action.type) {
        case types.submit_login:
            return {  
                user: {                            
                isLoggedIn: false,
                isLoading: true,
                error:'',
                }
              }
        case types.sucess_login:
            return {                
                user: {                            
                    isLoggedIn: true,
                    isLoading: false,
                    error:'',
                    }
            };
            case types.failed_login:
            return {                
                user: {                            
                    isLoggedIn: false,
                    isLoading: false,
                    error:action.payload,
                    }
            };
        case types.sucess_logout:
            return {                
                user: {                            
                    isLoggedIn: false,
                    isLoading: true,
                    error:'',
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