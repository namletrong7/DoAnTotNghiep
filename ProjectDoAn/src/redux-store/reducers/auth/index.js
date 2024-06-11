
const initialState = {
    token:null,
    isLoginSuccess: false,
    dataCurrentUser:{},
    dataNumProject:{},
    dataNumTask:{}
};
const reducerAuth = (state = initialState, action) => {
    let newState = { ...state };
    switch (action.type) {
        case "RESET_AUTH": {
            return initialState;
        }
        case 'AUTH_UPDATE_DATA': {
            let data = action.data || {};
            return { ...newState, ...data };
        }

        case 'EDIT_INFOR_USER': {
            return{
                ...state,
                dataCurrentUser: {
                    ...state.dataCurrentUser,
                    fullName: action.data.fullName,
                    phoneNumber:  action.data.phoneNumber,
                    birthDay:  action.data.birthDay,
                    email:  action.data.email,

                }
            }
        }
        default:
            return state
    }
    return state
}
export default reducerAuth
