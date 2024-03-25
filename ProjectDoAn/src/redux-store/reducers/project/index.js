const initialState = {
    isGetProject: false,
    dataAllProject:[],
    isGetDetailProject:false,
    dataDetailProject:{},
    isAddProject:false,
    isTest:'nam'

}
const reducerProject = (state =initialState , action) => {
    switch (action.type) {
        case "PROJECT_UPDATE_DATA":{
            let data = action.data || {};
            return { ...state, ...data };

        }
        case "RESET_PROJECT":{
            return initialState;
        }

        case 'START_GET_PROJECT': {
            return { ...state,
                isGetProject: true
            };
        }
        case 'END_GET_PROJECT': {
            return { ...state,
                isGetProject: false
            };
        }
        case 'GET_ALL_PROJECT': {
            return { ...state,
                dataAllProject: action.data
            };
        }

        default:
            return state
    }
    return initialState
}
export default reducerProject
