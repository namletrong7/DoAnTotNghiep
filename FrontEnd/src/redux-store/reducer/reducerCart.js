const INITIAL_STATE = {
    listCart: [],
    quantityCart: 0,
};

const reducerCart = (state = INITIAL_STATE, action) => {
    let newState = { ...state };
    switch (action.type) {
        case 'UPDATE_DATA': {
            let data = action.data || {};
            return { ...newState, ...data };
        }
        case 'RESET_CART':{
            return INITIAL_STATE;
        }
        default:
            return state
    }
};

export default reducerCart;
