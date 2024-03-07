const reducerAuth = (state = {
    token: null,
    getTokenLoading: null,
    listComment :[],
    dataDetailTask:{},
}, action) => {
    let newState = { ...state };
    switch (action.type) {
        case 'AUTH_UPDATE_DATA': {
            let data = action.data || {};
            return { ...newState, ...data };
        }
        case 'CHANGE_TITLE_TASK': {
            return {
                ...state,
                dataDetailTask: {
                    ...state.dataDetailTask,
                    title: action.data  // Thay đổi giá trị title thành giá trị mới
                }
            }
        }
        // case 'ADD_COMMENT': {
        //    // lấy ra danh sách ban đầu
        //     let listCommentOld = [...state.dataDetailTask?.commentTask||[]]
        //     // thêm vào danh sách ban đầu comment người đung gửi để tạo ra lisrt comment mới
        //     let listCommentNew = [...listCommentOld,action.comment]
        //     return {
        //         ...state,
        //         dataDetailTask: {
        //             ...state.dataDetailTask,
        //             commentTask: listCommentNew
        //         }
        //     }
        // }
        case 'LOAD_COMMENT': {
            // lấy ra danh sách ban đầu
            let listCommentOld = [...state.listComment]
            // thêm vào danh sách ban đầu comment người đung gửi để tạo ra lisrt comment mới
            let listCommentNew = [...listCommentOld,action.comment]
            return{
                ...state,
                listComment: listCommentNew
            }
        }
        case 'ADD_DATA_FAKE': {
            // lấy ra detail ban đầu
            let ollDataDetail = {...state.dataDetailTask}
            let newDataDetail = {...ollDataDetail,...action.data}
            return{
                ...state,
                dataDetailTask: newDataDetail
            }
        }

        default:
            return state
    }

}
export default reducerAuth
