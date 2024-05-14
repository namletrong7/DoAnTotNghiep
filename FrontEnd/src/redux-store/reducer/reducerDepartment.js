const INITIAL_STATE = {
   isGetDepartment: false ,
    dataListDepartment: [],

};

const reducerDepartment = (state = INITIAL_STATE, action) => {
    let newState = { ...state };
    switch (action.type) {
        case 'UPDATE_DATA_DEPARTMENT_REDUCER': {
            let data = action.data || {};
            return { ...newState, ...data };
        }
        case 'RESET_REDUCER_DEPARTMENT':{
            return INITIAL_STATE;
        }
        default:
            return state;
    }
    return state
};

export default reducerDepartment;
