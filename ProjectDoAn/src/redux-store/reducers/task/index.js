import { actionGetTargetTaskByEndDay } from "../../actions/task";

const initialState = {
    isLoadingAddTask: false ,
    isGetDetailTask:false,
    detailTask :{},
    isGetFileAttach: false ,
    dataFileAttach:[],
    isGetComment: false ,
    dataCommentTask: [],
    isGetMoreComment: false ,
    isGetTaskProjectTodo :false ,
    dataListTaskProjectTodo:[],
    isGetTaskProjectDoing :false ,
    dataListTaskProjectDoing:[],
    isGetTaskProjectDone :true,
    dataListTaskProjectDone:[],
    isGetAllTask:false,
    dataAllTask:[],
    isGetMoreAllTask:false,
    isGetAssignTask:false,
    dataAssignTask:[],
    isGetTargetTask:false,
    dataTargetTask:[],
    isGetTaskDone:false,
    dataTaskDone:[],
    isGetMoreAssignTask:false,
    isSearchTask:false,
    dataSearchTask:false,
    dataTargetTaskByEndDay:[],
    isFilterTask:false,
    dataCheckList:[],
    dataListNotify:[],
    isGetNotify:false,
    isGetMoreNotify:false ,
    isAddComment:false,
}
const reducerTask = (state =initialState , action) => {
    switch (action.type) {
        case 'AUTH_UPDATE_TASK': {
            let data = action.data || {};
            return { ...state, ...data };
        }
        case "RESET_TASK":{
            return initialState;
        }
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
                detailTask: action.data.dataDetailTask,
                dataCheckList:action.data.dataDetailTask.dataCheckList,
                isGetDetailTask:false
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
                dataFileAttach: action.data.fileAttach,
                isGetFileAttach:false
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
            const updatedComments = [...state.dataCommentTask,action.data];
            return { ...state,
                dataCommentTask:  updatedComments
            };
        }
      // bắt đầu lấy todo task project
        case 'START_GET_TASK_PROJECT_TODO': {
            return { ...state,
                isGetTaskProjectTodo: true
            };
        }
      //  lấy  dc todo task project
        case 'GET_TASK_PROJECT_TODO': {
            return { ...state,
                dataListTaskProjectTodo: action.data,
                isGetTaskProjectTodo: false
            };
        }
      // ket thuc lấy todo task project
        case 'END_GET_TASK_PROJECT_TODO': {
            return { ...state,
                isGetTaskProjectTodo: false
            };
        }
        case 'GET_MORE_ALL_TASK': {
            return { ...state,
                dataAllTask:  [...state.dataAllTask, ...action.data],
                isGetMoreAllTask:false
            };
        }
        // laasy danh sach task mik giao
        case 'GET_ASSIGN_TASK': {
            return { ...state,
                dataAssignTask: action.data,
                isGetAssignTask: false
            };
        }
        //lasy danh sahsc task mik xu ly
        case 'GET_TARGET_TASK': {
            return { ...state,
                dataTargetTask: action.data,
                isGetTargetTask: false
            };
        }
        //Lay ds cv da hoan thanh
        case 'GET_TASK_DONE': {
            return { ...state,
                dataTaskDone: action.data,
                isGetTaskDone: false
            };
        }
        case 'GET_MORE_ASSIGN_TASK': {
            return { ...state,
                dataAssignTask: [...state.dataAssignTask, ...action.data],
                isGetMoreAssignTask: false
            };
        }
        case 'EDIT_COMMENT': {
            return { ...state,
                dataCommentTask: state.dataCommentTask.map(comment =>
                  comment.commentId === action.data.commentId
                    ? { ...comment, content: action.data.content }
                    : comment
                ),
            };
        }
        case 'DELETE_COMMENT': {
            return { ...state,
                dataCommentTask:state.dataCommentTask.filter(comment =>
                  comment.commentId !== action.data.commentId
                ),

            };
        }
        case 'GET_SEARCH_TASK': {
            return { ...state,
                dataSearchTask: action?.data
            };
        }
        case 'RESET_SEARCH_TASK': {
            return { ...state,
                dataSearchTask: []
            };
        }
        case 'GET_TARGET_TASK_BY_END': {
            return { ...state,
                dataTargetTaskByEndDay: action?.data
            };
        }
        case 'ADD_CHECKLIST': {
            const updatedCheckList = [action.data,...state.dataCheckList ];
            return { ...state,
                dataCheckList:  updatedCheckList
            };
        }
        case 'SET_CHECK_LIST': {
            return { ...state,
                dataCheckList: state.dataCheckList.map(item =>
                    item.checkId === action.data.checkId
                        ? { ...item, status: action.data?.status }
                        : item
                ),
            };
        }
        case 'SET_IS_READ_NOTIFY': {
            return { ...state,
                dataListNotify: state.dataListNotify.map(item =>
                  item.notifyUserId === action.data.notifyUserId
                    ? { ...item, isRead: 1 }
                    : item
                ),
            };
        }
        case 'GET_MORE_NOTIFY': {
            return { ...state,
                dataListNotify: [...state.dataListNotify, ...action.data],
            };
        }
        default:
            return state
    }
    return state

}
export default reducerTask
