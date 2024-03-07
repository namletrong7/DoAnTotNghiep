const reducerUser = (state = {
    isGetProfileUser: false ,
    dataProfileUser:{},


}, action) => {
    switch (action.type) {
        case 'START_GET_PROFILE_USER': {
            return { ...state,
                isGetProfileUser: true
            };
        }
        case 'GET_PROFILE_USER': {
            return { ...state,
                dataProfileUser: action.data.dataProfileUser
            };
        }
        case 'END_GET_PROFILE_USER': {
            return { ...state,
                isGetProfileUser:  false
            };
        }
        default:
            return state
    }

}
export default reducerUser
