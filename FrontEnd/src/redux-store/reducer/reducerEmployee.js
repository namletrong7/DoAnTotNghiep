const INITIAL_STATE = {
    dataListEmployee:[],

};

const reducerEmployee = (state = INITIAL_STATE, action) => {
    let newState = { ...state };
    switch (action.type) {
        case 'UPDATE_DATA': {
            let data = action.data || {};
            return { ...newState, ...data };
        }
        case 'RESET_EMPLOYEE_REDUCER':{
            return INITIAL_STATE;
        }
        default:
            return state
    }
    return state;
};

export default reducerEmployee;
