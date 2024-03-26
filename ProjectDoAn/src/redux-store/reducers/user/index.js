const initialState ={
  isGetProfileUser: false ,
  dataProfileUser:{},
  isSearchUser:false,
    dataUserSearch:[],
    isEditUserProject:false,

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
                dataProfileUser: action.data.dataProfileUser,
                isGetProfileUser:false
            };
        }
        case 'END_GET_PROFILE_USER': {
            return { ...state,
                isGetProfileUser:  false
            };
        }
        case 'START_SEARCH_USER': {
            return { ...state,
                isSearchUser: true
            };
        }
        case 'SEARCH_USER': {
            return { ...state,
                dataUserSearch: action.data,
                isSearchUser:false
            };
        }
        case 'END_SEARCH_USER': {
            return { ...state,
                isSearchUser:  false
            };
        }
        case 'START_EDIT_USER_PROJECT': {
            return { ...state,
                isEditUserProject:  false
            };
        }
        case 'END_EDIT_USER_PROJECT': {
            return { ...state,
                isEditUserProject:  false
            };
        }

        default:
            return state
    }

}
export default reducerUser
