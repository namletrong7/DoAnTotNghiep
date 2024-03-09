const initialState ={
  isGetProfileUser: false ,
  dataProfileUser:{},


}
const reducerUser = (state = initialState, action) => {
    switch (action.type) {
        case "RESET_USER":{
            return  initialState;
        }
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
