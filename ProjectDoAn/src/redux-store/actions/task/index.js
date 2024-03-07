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
export function actionAddTask(body) {
    return async (dispatch, getState) => {
        await   dispatch({
            type: "START_ADD_TASK",
        });
        try {
            const response = await Api(true).addTask(body);
      // in ra response trả về
            console.log(response?.data);

            await   dispatch({
                type: "END_ADD_TASK",
            });

            if(response.data && response.data.status==200){
                showMessage({
                    message: response.data.message,
                    type: "success",
                    duration: 1000,
                    icon: { icon: "success", position: 'left' }
                });
            }

        } catch (error) {
            // Xử lý lỗi ở đây
              console.log(error);
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
        await   dispatch({  // bắt đầu
            type: "START_GET_DETAIL_TASK",
        });
        try {
            const response = await Api(false).getDetailTask(taskId);
            // in ra response trả về
            console.log(response?.data);



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
            // Xử lý lỗi ở đây
            console.log(error);
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
            // in ra response trả về
            console.log(response?.data);



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
            // Xử lý lỗi ở đây
            console.log(error);
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
            console.log("TaskId: "+ taskId);
            const response = await Api(false).getCommentTask(taskId,offset);
            // in ra response trả về
            console.log(response?.data);

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
            // Xử lý lỗi ở đây
            console.log(error);
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
            console.log("TaskId: "+ taskId);
            const response = await Api(false).getCommentTask(taskId,offset);
            // in ra response trả về
            console.log(response?.data);

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
            console.log(error);
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
export function actionAddCommentTask(taskId,content,createUser) {
    return async (dispatch, getState) => {
        await   dispatch({  // bắt đầu
            type: "START_GET_FILE_ATTACH",
        });
        try {
            const response = await Api(false).addCommentTask(taskId,content,createUser);
            console.log(response?.data);

            if(response.data && response.data.status==200){
                await   dispatch({
                    type: "ADD_COMMENT_TASK",
                    data:{
                        "commentId": randomKeyComment(),
                        "createUser":createUser,
                        "taskId": taskId,
                        "content": content,
                        "createdDate":getNewDate(),
                        "avatarUser": "avatar.jpg",
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
            // Xử lý lỗi ở đây
            console.log(error);
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
    actionAddCommentTask
};
