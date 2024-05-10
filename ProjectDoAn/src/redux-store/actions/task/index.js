import Api from "../../../api/Api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { showMessage } from "react-native-flash-message";
import { randomKeyComment } from "../../../utils/RandomKeyComment";
import {getNewDate} from "../../../utils/ConverPickerDate";


/**
 * Created by NamLTC on 29/01/2024
 * khai báo các action thực hiện liên quan đến task
 */
// action call api addTask
export function updateData(data) {
    return {
        type: 'AUTH_UPDATE_TASK',
        data
    }
}
export function actionAddTask(body) {
    return async (dispatch, getState) => {
        await   dispatch({
            type: "START_ADD_TASK",
        });
        try {
            const response = await Api(true).addTask(body);

            if(response.data && response.data.status==200){
                showMessage({
                    message: response.data.message,
                    type: "success",
                    duration: 1000,
                    icon: { icon: "success", position: 'left' }
                });

            }
                dispatch({
                    type: "END_ADD_TASK",
                });




        } catch (error) {

            await   dispatch({
                type: "END_ADD_TASK",
            });
            showMessage({
                message: "Lỗi mạng",
                type: "danger",
                duration: 1000,
                icon: { icon: "danger", position: 'left' }
            });
        }

    };
}
// action call api lấy chi tết task
export function actionGetDetailTask(taskId) {
    return async (dispatch, getState) => {
           dispatch({  // bắt đầu
            type: "START_GET_DETAIL_TASK",
        });
        try {
            const response = await Api(false).getDetailTask(taskId);

        //  console.log(response.data)


            if(response.data && response.data.status==200){
                await   dispatch({
                    type: "GET_DETAIL_TASK",
                    data:response.data
                });
            }
            else{
                await   dispatch({ // kết thúc sự kiện load detail task
                    type: "END_GET_DETAIL_TASK",
                });
            }


        } catch (error) {

            await   dispatch({
                type: "END_GET_DETAIL_TASK",
            });
            showMessage({
                message: "Lỗi mạng",
                type: "danger",
                duration: 1000,
                icon: { icon: "danger", position: 'left' }
            });
        }

    };
}
export function actionGetFileAttach(taskId) {
    return async (dispatch, getState) => {
        await   dispatch({  // bắt đầu
            type: "START_GET_FILE_ATTACH",
        });
        try {
            const response = await Api(false).getFileAttach(taskId);
            console.log(response.data)
            if(response.data && response.data.status==200){
                await   dispatch({
                    type: "GET_FILE_ATTACH",
                    data:response.data
                });
            }
            else{
                await   dispatch({ // kết thúc sự kiện load detail task
                    type: "END_GET_FILE_ATTACH",
                });

            }

        } catch (error) {

            await   dispatch({
                type: "END_GET_FILE_ATTACH",
            });
            showMessage({
                message: "Lỗi mạng",
                type: "danger",
                duration: 1000,
                icon: { icon: "danger", position: 'left' }
            });
        }

    };
}
export function actionGetCommentTask(taskId,offset) {
    return async (dispatch, getState) => {
        await   dispatch({  // bắt đầu
            type: "START_GET_COMMENT",
        });
        await   dispatch({  // bắt đầu
            type: "START_GET_FILE_ATTACH",
        });
        try {

            const response = await Api(false).getCommentTask(taskId,offset);


            if(response.data && response.data.status==200){
                await   dispatch({
                    type: "GET_COMMENT",
                    data:response.data
                });
            }
            await   dispatch({ // kết thúc sự kiện load detail task
                type: "END_GET_COMMENT",
            });

        } catch (error) {

            await   dispatch({
                type: "END_GET_COMMENT",
            });
            showMessage({
                message: "Lỗi mạng",
                type: "danger",
                duration: 1000,
                icon: { icon: "danger", position: 'left' }
            });
        }

    };
}
export function actionGetMoreCommentTask(taskId,offset) {
    return async (dispatch, getState) => {
        if (!getState().task.isGetMoreComment && !getState().task.isGetComment) {
        await   dispatch({  // bắt đầu
            type: "START_GET_MORE_COMMENT",
        });
        try {

            const response = await Api(false).getCommentTask(taskId,offset);

            if(response.data && response.data.status==200){
                if(response.data.commentTask.length>0){
                    await   dispatch({
                        type: "GET_MORE_COMMENT",
                        data:response.data
                    });

                }else{
                    showMessage({
                        message: "Đã load hết tất cả bình luận",
                        type: "warning",
                        duration: 3000,
                        icon: { icon: "warning", position: 'left' }
                    });
                    await   dispatch({ // kết thúc sự kiện load detail task
                        type: "END_GET_MORE_COMMENT",
                    });
                }


            }else {
                await   dispatch({ // kết thúc sự kiện load detail task
                    type: "END_GET_MORE_COMMENT",
                });
            }


        } catch (error) {
            await   dispatch({
                type: "END_GET_MORE_COMMENT",
            });
            showMessage({
                message: "Lỗi mạng",
                type: "danger",
                duration: 1000,
                icon: { icon: "danger", position: 'left' }
            });
        }

    }else{
        //    console.log("dang thuc hien load them comment roi")
            return ;
        }
    }
}
export function actionAddCommentTask(taskId,content) {
    return async (dispatch, getState) => {
        let userId= getState().auth.dataCurrentUser?.userId
        let avatar=getState().auth.dataCurrentUser?.avatarUser
        let fullName=getState().auth.dataCurrentUser?.fullName
        dispatch(updateData({
            isAddComment :true
        }))
        try {
            const response = await Api(false).addCommentTask(taskId,content,userId);
            if(response.data && response.data.status==200){
                await   dispatch({
                    type: "ADD_COMMENT_TASK",
                    data:{
                        "commentId": response.data?.lastCommentId,
                        "createUser":userId,
                        "taskId": taskId,
                        "content": content,
                        "createdDate":getNewDate(),
                        "avatarUser": avatar,
                        "fullName": fullName
                    }
                });
                showMessage({
                    message: response.data.message,
                    type: "success",
                    duration: 1000,
                    icon: { icon: "success", position: 'left' }
                });
            }
            dispatch(updateData({
                isAddComment :false
            }))
        } catch (error) {
            dispatch(updateData({
                isAddComment :false
            }))
            showMessage({
                message: "Lỗi mạng",
                type: "danger",
                duration: 1000,
                icon: { icon: "danger", position: 'left' }
            });
        }

    };
}
//láy toàn bộ danh sách công việc của PROJECT ở trạng thái todo
export function actionGetTaskToDoProject(projectId) {
    return async (dispatch, getState) => {
        await   dispatch({  // bắt đầu
            type: "START_GET_TASK_PROJECT_TODO",
        });
        try {
            const response = await Api(false).getListTaskProject(projectId,0);


            if(response.data && response.data.status==200){
                await   dispatch({
                    type: "GET_TASK_PROJECT_TODO",
                    data:response.data.dataListTask
                });
            }
            await   dispatch({  // bắt đầu
                type: "END_GET_TASK_PROJECT_TODO",
            });
        } catch (error) {


            await   dispatch({  // bắt đầu
                type: "END_GET_TASK_PROJECT_TODO",
            });
            showMessage({
                message: "Lỗi mạng",
                type: "danger",
                duration: 1000,
                icon: { icon: "danger", position: 'left' }
            });
        }

    };
}
export function actionGetTaskDoingProject(projectId) {
    return async (dispatch, getState) => {
        dispatch(updateData({
            isGetTaskProjectDoing :true
        }))
        try {
            const response = await Api(false).getListTaskProject(projectId,1);

            if(response.data && response.data.status==200){
                dispatch(updateData({
                    dataListTaskProjectDoing: response.data.dataListTask,
                    isGetTaskProjectDoing:false,
                }))
            }else {
                dispatch(updateData({
                    isGetTaskProjectDoing: false

                }))
            }
        } catch (error) {

            dispatch(updateData({
                isGetTaskProjectDoing :false

            }))
            showMessage({
                message: "Lỗi mạng",
                type: "danger",
                duration: 1000,
                icon: { icon: "danger", position: 'left' }
            });
        }

    };
}
export function actionGetTaskDoneProject(projectId) {
    return async (dispatch, getState) => {
        dispatch(updateData({
            isGetTaskProjectDone :true
        }))
        try {
            const response = await Api(false).getListTaskProject(projectId,2);


            if(response.data && response.data.status==200){
                dispatch(updateData({
                    dataListTaskProjectDone: response.data.dataListTask
                }))
            }
            dispatch(updateData({
                isGetTaskProjectDone :false

            }))
        } catch (error) {

            dispatch(updateData({
                isGetTaskProjectDone :false

            }))
            showMessage({
                message: "Lỗi mạng",
                type: "danger",
                duration: 1000,
                icon: { icon: "danger", position: 'left' }
            });
        }

    };
}
export function actionGetAllTask(offset) {
    return async (dispatch, getState) => {
        dispatch(updateData({
            isGetAllTask :true
        }))
        try {
            const response = await Api(false).getAllTask(offset);
            if(response.data && response.data.status==200){
                dispatch(updateData({
                    dataAllTask: response.data.dataListTask
                }))
            }
            dispatch(updateData({
                isGetAllTask :false
            }))
        } catch (error) {
            dispatch(updateData({
                isGetAllTask :false

            }))
            showMessage({
                message: "Lỗi mạng",
                type: "danger",
                duration: 1000,
                icon: { icon: "danger", position: 'left' }
            });
        }

    };
}
export function actionGetMoreAllTask() {
    return async (dispatch, getState) => {
        dispatch(updateData({
            isGetMoreAllTask :true
        }))
        try {
            const response = await Api(false).getAllTask(getState().task.dataAllTask.length)

            if(response.data && response.data.status==200){
                await   dispatch({
                    type: "GET_MORE_ALL_TASK",
                    data:response.data.dataListTask
                });

            }
            dispatch(updateData({
                isGetMoreAllTask :false

            }))
        } catch (error) {

            dispatch(updateData({
                isGetMoreAllTask :false

            }))
            showMessage({
                message: "Lỗi mạng",
                type: "danger",
                duration: 1000,
                icon: { icon: "danger", position: 'left' }
            });
        }

    };
}
export function actionGetAssignTask() {  // action lấy ds cv mình giao
    return async (dispatch, getState) => {
        dispatch(updateData({
            isGetAssignTask :true
        }))
        try {
            const response = await Api(false).getAssignTask(getState().auth.dataCurrentUser.userId,0)
      //      console.log(response.data)
            if(response.data && response.data.status==200){
                await   dispatch({
                    type: "GET_ASSIGN_TASK",
                    data:response.data.dataListTask
                });

            }else {
                dispatch(updateData({
                    isGetAssignTask: false

                }))
            }
        } catch (error) {

            dispatch(updateData({
                isGetAssignTask :false

            }))
            showMessage({
                message: "Lỗi mạng",
                type: "danger",
                duration: 1000,
                icon: { icon: "danger", position: 'left' }
            });
        }

    };
}
export function actionGetMoreAssignTask(offset) {  // action lấy ds cv mình giao
    return async (dispatch, getState) => {
        if(!getState().task.isGetMoreAssignTask && !getState().task.isGetAssignTask) {
   //         console.log("bat dau goi api")
            dispatch(updateData({
                isGetMoreAssignTask: true,

            }))
            try {
                const response = await Api(false).getAssignTask(getState().auth.dataCurrentUser.userId, offset)
                if (response.data && response.data.status == 200) {
          //      console.log(response.data?.dataListTask.length)
                    if(response.data?.dataListTask?.length>0){
                        await dispatch({
                            type: "GET_MORE_ASSIGN_TASK",
                            data: response.data.dataListTask
                        });
                    }else{
                        dispatch(updateData({
                            isGetMoreAssignTask: false

                        }))
                        showMessage({
                            message: "Đã load hết công việc bạn đã giao",
                            type: "warning",
                            duration: 1500,
                            icon: { icon: "warning", position: 'left' }
                        });
                    }


                }else{
                    dispatch(updateData({
                        isGetMoreAssignTask: false

                    }))
                }

            } catch (error) {

                dispatch(updateData({
                    isGetMoreAssignTask: false

                }))
                showMessage({
                    message: "Lỗi mạng",
                    type: "danger",
                    duration: 1000,
                    icon: {icon: "danger", position: 'left'}
                });
            }
        }else{
        //    console.log(getState().task.isGetMoreAssignTask ,getState().task.isGetAssignTask)
        //     dispatch(updateData({
        //         isGetMoreAssignTask: false
        //     }))
            return;
        }

    };
}
export function actionGetTargetTask() {  // action lấy ds cv mình cần xử lý
    return async (dispatch, getState) => {
        dispatch(updateData({
            isGetTargetTask :true
        }))
        try {
            const response = await Api(false).getTargetTask(getState().auth.dataCurrentUser.userId,0)
      //      console.log(response.data)
        //    console.log("thuc hien cong viec khac")
            if(response.data && response.data.status==200){
                await   dispatch({
                    type: "GET_TARGET_TASK",
                    data:response.data.dataListTask
                });
            }else {
                dispatch(updateData({
                    isGetTargetTask: false

                }))
            }
        } catch (error) {

            dispatch(updateData({
                isGetTargetTask :false

            }))
            showMessage({
                message: "Lỗi mạng",
                type: "danger",
                duration: 1000,
                icon: { icon: "danger", position: 'left' }
            });
        }

    };
}
export function actionGetTaskDone() {
    return async (dispatch, getState) => {
   //     console.log("call task done")
        dispatch(updateData({
            isGetTaskDone :true
        }))
        try {
            const response = await Api(false).getTaskDone(getState().auth.dataCurrentUser.userId,0)
    //        console.log("task done:")
     //       console.log(response.data)
            if(response.data && response.data.status==200){
                await   dispatch({
                    type: "GET_TASK_DONE",
                    data:response.data.dataListTask
                });

            }else{
                dispatch(updateData({
                    isGetTaskDone :false

                }))
            }

        } catch (error) {

            dispatch(updateData({
                isGetTaskDone :false

            }))
            showMessage({
                message: "Lỗi mạng",
                type: "danger",
                duration: 1000,
                icon: { icon: "danger", position: 'left' }
            });
        }

    };
}
export function actionChangePriorityTask(priority,taskId) {  // action lấy ds cv mình giao
    return async (dispatch, getState) => {
        const userId=getState().auth.dataCurrentUser?.userId


        try {
            const response = await Api(false).changePriorityTask(priority,taskId,userId)
      //      console.log(response)
            if(response.data && response.data.status==200){
                showMessage({
                    message: response.data.message,
                    type: "success",
                    duration: 2000,
                    icon: { icon: "success", position: 'left' }
                });

            }else{
                showMessage({
                    message: "Xảy ra lỗi vui lòng thử lại sau",
                    type: "danger",
                    duration: 2000,
                    icon: { icon: "danger", position: 'left' }
                });
            }

        } catch (error) {
            showMessage({
                message: "Lỗi mạng",
                type: "danger",
                duration: 1000,
                icon: { icon: "danger", position: 'left' }
            });
        }

    };
}
export function actionChangeProgressTask(progress,taskId) {
    return async (dispatch, getState) => {
        const userId=getState().auth.dataCurrentUser?.userId
        try {
            const response = await Api(false).changeProgressTask(progress,taskId,userId)
       //     console.log(response)
            if(response.data && response.data.status==200){
                showMessage({
                    message: response.data.message,
                    type: "success",
                    duration: 2000,
                    icon: { icon: "success", position: 'left' }
                });

            }else{
                showMessage({
                    message: "Xảy ra lỗi vui lòng thử lại sau",
                    type: "danger",
                    duration: 2000,
                    icon: { icon: "danger", position: 'left' }
                });
            }

        } catch (error) {
            showMessage({
                message: "Lỗi mạng",
                type: "danger",
                duration: 1000,
                icon: { icon: "danger", position: 'left' }
            });
        }

    };
}
export function actionReportTask(body) {
    return async (dispatch, getState) => {
        try {
            const response = await Api(false).reportTask(body)
          //  console.log(response.data)
            if(response.data && response.data.status==200){
                showMessage({
                    message: response.data.message,
                    type: "success",
                    duration: 2000,
                    icon: { icon: "success", position: 'left' }
                });

            }else{
                showMessage({
                    message: "Xảy ra lỗi vui lòng thử lại sau",
                    type: "danger",
                    duration: 2000,
                    icon: { icon: "danger", position: 'left' }
                });
            }

        } catch (error) {
            showMessage({
                message: "Lỗi mạng",
                type: "danger",
                duration: 1000,
                icon: { icon: "danger", position: 'left' }
            });
        }

    };
}
export function actionEditComment(commentId, content) {
    return async (dispatch, getState) => {
        await dispatch({
            type: "EDIT_COMMENT",
            data: {
                commentId:commentId,
                content:content
            }
        });
    };
}
export function actionDeleteComment(commentId) {
    return async (dispatch, getState) => {
        await dispatch({
            type: "DELETE_COMMENT",
            data: {
                commentId:commentId,
            }
        });
    };
}
export function actionSearchTask(text) {
    return async (dispatch, getState) => {
        //     console.log("call task done")
        dispatch(updateData({
            isSearchTask :true
        }))
        try {
            const response = await Api(false).searchTask(text)
            if(response.data && response.data.status==200) {
                await dispatch({
                    type: "GET_SEARCH_TASK",
                    data: response.data?.dataSearchTask
                });
            }
                dispatch(updateData({
                    isSearchTask :false
                }))


        } catch (error) {

            dispatch(updateData({
                isSearchTask :false

            }))
            showMessage({
                message: "Lỗi mạng",
                type: "danger",
                duration: 1000,
                icon: { icon: "danger", position: 'left' }
            });
        }

    };
}
export function actionGetTargetTaskByEndDay(offset,startDay , endDay) {
    return async (dispatch, getState) => {
        const userId=getState().auth.dataCurrentUser?.userId
        dispatch(updateData({
            isFilterTask :true
        }))
        try {
            const response = await Api(false).getTargetTaskByEndDay(offset,userId,startDay,endDay)
        //    console.log(response.data.dataListTask?.length)
            if(response.data && response.data.status==200) {
                await dispatch({
                    type: "GET_TARGET_TASK_BY_END",
                    data: response.data?.dataListTask
                });
            }
            dispatch(updateData({
                isFilterTask :false
            }))


        } catch (error) {

            dispatch(updateData({
                isFilterTask :false

            }))
            showMessage({
                message: "Lỗi mạng",
                type: "danger",
                duration: 1000,
                icon: { icon: "danger", position: 'left' }
            });
        }

    };
}
/// action them checkList cho task
export function actionAddCheckList(taskId,content) {
    return async (dispatch, getState) => {
        let userId= getState().auth.dataCurrentUser?.userId
        let avatar=getState().auth.dataCurrentUser?.avatarUser
        try {
            const response = await Api(false).addCheckList(taskId,content,userId);
            if(response.data && response.data.status==200){
                await      dispatch({
                    type: "ADD_CHECKLIST",
                    data:
                      {
                          "checkId":response.data?.lastCheckId,
                          "taskId": taskId,
                          "creatUser": userId,
                          "status": 0,
                          "content":content,
                          "avatarUser": avatar
                      }

                });
                showMessage({
                    message: response.data.message,
                    type: "success",
                    duration: 1000,
                    icon: { icon: "success", position: 'left' }
                });
            }
        } catch (error) {
        //    console.log(error)
            showMessage({
                message: "Lỗi mạng",
                type: "danger",
                duration: 1000,
                icon: { icon: "danger", position: 'left' }
            });
        }


    };
}
// set trạng thái checklist
export function actionSetStatusCheckList(status,checkId) {
    return async (dispatch, getState) => {
         dispatch({
            type: "SET_CHECK_LIST",
            data: {
                checkId:checkId,
                status:status,
            }
        });
        try {
            const response = await Api(false).setStatusCheckList(status,checkId);
            if(response.data && response.data.status==200){
                showMessage({
                    message: response.data.message,
                    type: "success",
                    duration: 1000,
                    icon: { icon: "success", position: 'left' }
                });
            }
        } catch (error) {
        //    console.log(error)
            showMessage({
                message: "Lỗi mạng",
                type: "danger",
                duration: 1000,
                icon: { icon: "danger", position: 'left' }
            });
        }


    };
}

export function actionGetListNotify() {
    return async (dispatch, getState) => {
        dispatch(updateData({
            isGetNotify: true
        }))
        let userId = getState().auth.dataCurrentUser?.userId
        try {
            const response = await Api(false).getListNotify(userId);

        //  console.log(response.data?.dataListNotify)
            if (response.data && response.data.status == 200) {
                dispatch(updateData({
                    dataListNotify: response.data?.dataListNotify,
                }))

            }
            dispatch(updateData({
                isGetNotify: false
            }))
        } catch (error) {
            dispatch(updateData({
                isGetNotify: false
            }))
            showMessage({
                message: "Lỗi mạng",
                type: "danger",
                duration: 1000,
                icon: { icon: "danger", position: 'left' }
            });
        }


    }
}
export function actionSetIsReadNotify(notifyUserId) {
    return async (dispatch, getState) => {
        await dispatch({
            type: "SET_IS_READ_NOTIFY",
            data: {
                notifyUserId:notifyUserId,
            }
        });

        try {
   await Api(false).setHasReadNotify(notifyUserId);
       //     /(response.data)
        } catch (error) {
           // console.log(error)
            showMessage({
                message: "Lỗi mạng",
                type: "danger",
                duration: 1000,
                icon: { icon: "danger", position: 'left' }
            });
        }

    }
}

export function actionChangeDayTask(taskId,type, day) {
  //  console.log(taskId,type,day)
    return async (dispatch, getState) => {
   //     console.log(taskId,type,day)
        let userId = getState().auth.dataCurrentUser?.userId
        try {
            const response = await Api(false).changeDayTask(taskId,type,userId,day);
            if (response.data && response.data.status == 200) {
                showMessage({
                    message: response.data?.message,
                    type: "success",
                    duration: 1000,
                    icon: { icon: "success", position: 'left' }
                });
            }

        } catch (error) {
            // console.log(error)
            showMessage({
                message: "Lỗi mạng",
                type: "danger",
                duration: 1000,
                icon: { icon: "danger", position: 'left' }
            });
        }

    }
}
export default {
    actionAddTask,
    actionGetDetailTask,
    actionGetFileAttach,
    actionGetCommentTask,
    actionAddCommentTask,
    actionGetTaskToDoProject,
    actionGetTaskDoingProject,
    actionGetTaskDoneProject,
    actionGetAllTask
};
