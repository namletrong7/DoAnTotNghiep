const INITIAL_STATE = {
   isLogin: false ,
    token: null ,
};

const reducerAuth = (state = INITIAL_STATE, action) => {
    let newState = { ...state };
    switch (action.type) {
        case 'UPDATE_DATA_AUTH_REDUCER': {
            let data = action.data || {};
            return { ...newState, ...data };
        }
        case 'RESET_DATA':{
            return INITIAL_STATE;
        }
        default:
            return state
    }
    return state
};

export default reducerAuth;
