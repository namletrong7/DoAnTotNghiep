const reducerAuth = (state = {
    token: null,
    getTokenLoading: null,
}, action) => {
    let newState = { ...state };
    switch (action.type) {
        case 'AUTH_UPDATE_DATA': {
            let data = action.data || {};
            return { ...newState, ...data };
        }
        default:
            return state
    }

}
export default reducerAuth
