const INITIAL_STATE = {
    isGetListEmployee:false,
    dataListEmployee:[],

};

const reducerEmployee = (state = INITIAL_STATE, action) => {
    let newState = { ...state };
    switch (action.type) {
        case 'UPDATE_DATA_EMPLOYEE_REDUCER': {
            let data = action.data || {};
            return { ...newState, ...data };
        }
        case 'RESET_REDUCER_EMPLOYEE':{
            return INITIAL_STATE;
        }
        default:
            return state
    }
    return state;
};

export default reducerEmployee;
