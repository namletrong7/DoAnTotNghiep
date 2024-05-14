const INITIAL_STATE = {
    isGetListJobtitle: false ,
    dataListJobtitle:[]
};

const reducerJobtitle = (state = INITIAL_STATE, action) => {
    let newState = { ...state };
    switch (action.type) {
        case 'UPDATE_DATA_JOBTITLE_REDUCER': {
            let data = action.data || {};
            return { ...newState, ...data };
        }
        case 'RESET_REDUCER_JOBTITLE':{
            return INITIAL_STATE;
        }
        default:
            return state
    }
};

export default reducerJobtitle;
