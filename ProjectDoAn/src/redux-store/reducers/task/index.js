const reducerTask = (state = {
    isLoadingAddTask: false ,
    isGetDetailTask:false,
    detailTask :{},
    isGetFileAttach: false ,
    dataFileAttach:[],
    isGetComment: false ,
    dataCommentTask: [],
    isGetMoreComment: false ,
}, action) => {
    switch (action.type) {
        // khi bắt đầu thêm task mới thì sẽ loading
        case 'START_ADD_TASK': {
            return { ...state,
                isLoadingAddTask: true
            };
        }
        // khi kết thúc loading khi add task mới
        case 'END_ADD_TASK': {
            return { ...state,
                isLoadingAddTask: false
            };
        }
        // bắt đầu load detail task
        case 'START_GET_DETAIL_TASK': {
            return { ...state,
                isGetDetailTask: true
            };
        }
        // láy dc detailtask
        case 'GET_DETAIL_TASK': {
            return { ...state,
                detailTask: action.data.dataDetailTask
            };
        }
        // kết thúc detailtask
        case 'END_GET_DETAIL_TASK': {
            return { ...state,
                isGetDetailTask: false
            };
        }

      // bắt đầu lấy file đính kèm
        case 'START_GET_FILE_ATTACH': {
            return { ...state,
                isGetFileAttach: true
            };
        }
      // láy dc file đính kèm
        case 'GET_FILE_ATTACH': {
            return { ...state,
                dataFileAttach: action.data.fileAttach
            };
        }
      // kết thúc lấy file đính kèm
        case 'END_GET_FILE_ATTACH': {
            return { ...state,
                isGetFileAttach: false
            };
        }
      // bắt đầu lấy comment
        case 'START_GET_COMMENT': {
            return { ...state,
                isGetComment: true
            };
        }
      // láy dc comment
        case 'GET_COMMENT': {
            return { ...state,
                dataCommentTask: action.data.commentTask,
                isGetComment: false
            };
        }
      // kết thúc lấy comment task
        case 'END_GET_COMMENT': {
            return { ...state,
                isGetComment: false
            };
        }
      // bắt đầu lấy comment
        case 'START_GET_MORE_COMMENT': {
            return { ...state,
                isGetMoreComment: true
            };
        }
      // láy dc comment
        case 'GET_MORE_COMMENT': {
            return { ...state,
                dataCommentTask: [...state.dataCommentTask, ...action.data.commentTask],
                isGetMoreComment: false
            };
        }
      // kết thúc lấy comment task
        case 'END_GET_MORE_COMMENT': {
            return { ...state,
                isGetMoreComment: false
            };
        }
      // kết thúc lấy comment task
        case 'ADD_COMMENT_TASK': {
            const updatedComments = [action.data, ...state.dataCommentTask];
            return { ...state,
                dataCommentTask:  updatedComments
            };
        }
        default:
            return state
    }

}
export default reducerTask
