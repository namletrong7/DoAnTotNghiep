const reducerAuth = (state = {
    token: null,
    getTokenLoading: null,
    listComment :[],
}, action) => {
    let newState = { ...state };
    switch (action.type) {
        case 'AUTH_UPDATE_DATA': {
            let data = action.data || {};
            return { ...newState, ...data };
        }
        case 'ADD_COMMENT': {
           // lấy ra danh sách ban đầu
            let listCommentOld = [...state.listComment]
            // thêm vào danh sách ban đầu comment người đung gửi để tạo ra lisrt comment mới
            let listCommentNew = [...listCommentOld,action.comment]
            return{
                ...state,
                listComment: listCommentNew
            }
        }
        default:
            return state
    }

}
export default reducerAuth
