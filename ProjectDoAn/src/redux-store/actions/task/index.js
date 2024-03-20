import Api from "../../../api/Api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { showMessage } from "react-native-flash-message";
import { randomKeyComment } from "../../../utils/RandomKeyComment";
import { getNewDate } from "../../../utils/ConverPickerDate";

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




            if(response.data && response.data.status==200){
                await   dispatch({
                    type: "GET_DETAIL_TASK",
                    data:response.data
                });
            }
            await   dispatch({ // kết thúc sự kiện load detail task
                type: "END_GET_DETAIL_TASK",
            });

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



            if(response.data && response.data.status==200){
                await   dispatch({
                    type: "GET_FILE_ATTACH",
                    data:response.data
                });
            }
            await   dispatch({ // kết thúc sự kiện load detail task
                type: "END_GET_FILE_ATTACH",
            });

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
            // in ra response trả về


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
        await   dispatch({  // bắt đầu
            type: "START_GET_MORE_COMMENT",
        });
        await   dispatch({  // bắt đầu
            type: "START_GET_FILE_ATTACH",
        });
        try {

            const response = await Api(false).getCommentTask(taskId,offset);


            if(response.data && response.data.status==200){
                if(response.data.commentTask.length==0){
                    showMessage({
                        message: "Đã load hết tất cả bình luận",
                        type: "warning",
                        duration: 3000,
                        icon: { icon: "warning", position: 'left' }
                    });
                }else{
                    await   dispatch({
                        type: "GET_MORE_COMMENT",
                        data:response.data
                    });
                }

            }
            await   dispatch({ // kết thúc sự kiện load detail task
                type: "END_GET_MORE_COMMENT",
            });

        } catch (error) {
            // Xử lý lỗi ở đây
            //console.log(error)
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

    };
}
export function actionAddCommentTask(taskId,content) {
    return async (dispatch, getState) => {
        let userId= getState().auth.dataCurrentUser.userId
        let avatar=getState().auth.dataCurrentUser.avatarUser
        try {
            const response = await Api(false).addCommentTask(taskId,content,userId);
            //console.log(response?.data)

            if(response.data && response.data.status==200){
                await   dispatch({
                    type: "ADD_COMMENT_TASK",
                    data:{
                        "commentId": randomKeyComment(),
                        "createUser":userId,
                        "taskId": taskId,
                        "content": content,
                        "createdDate":getNewDate(),
                        "avatarUser": avatar,
                        "fullName": "John Doe"
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
            // Xử lý lỗi ở đây

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
                    dataListTaskProjectDoing: response.data.dataListTask
                }))
            }
            dispatch(updateData({
                isGetTaskProjectDoing :false

            }))
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
//--------------------------------------nghiêm túc



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
