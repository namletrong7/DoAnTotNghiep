import Api from "../../../api/Api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { showMessage } from "react-native-flash-message";
import { randomKeyComment } from "../../../utils/RandomKeyComment";


/**
 * Created by NamLTC on 29/01/2024
 * khai báo các action thực hiện liên quan đến project
 */
export function updateData(data) {
    return {
        type: 'PROJECT_UPDATE_DATA',
        data
    }
}
export function actionGetAllProject() {
    return async (dispatch, getState) => {
        let userId=getState().auth.dataCurrentUser.userId;
        const token = getState().auth?.token
        //console.log(userId)
        await   dispatch({
            type: "START_GET_PROJECT",
        });
        try {
            const response = await Api(false,token).getAllProject(userId);



            if(response.data && response.data.status==200){
                dispatch({
                    type: "GET_ALL_PROJECT",
                    data:response.data.dataAllProject
                });
                showMessage({
                    message: response.data.message,
                    type: "success",
                    duration: 1000,
                    icon: { icon: "success", position: 'left' }
                });
            }
            dispatch({
                type: "END_GET_PROJECT",
            });

        } catch (error) {

            await   dispatch({
                type: "END_GET_PROJECT",
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

export function actionGetDetailProject(projectId) {
    return async (dispatch, getState) => {
        dispatch(updateData({
            isGetDetailProject:true
        }))
        const token = getState().auth?.token
        try {
            const response = await Api(false,token).getDetailProject(projectId,getState().auth.dataCurrentUser.userId);
    //          console.log(response.data.dataDetailProject)
            if(response.data && response.data.status==200){
                dispatch(updateData({
                    dataDetailProject:response.data.dataDetailProject

                }))
            }
            dispatch(updateData({
                isGetDetailProject:false

            }))

        } catch (error) {

            dispatch(updateData({
                isGetDetailProject:false

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
export function actionAddProject(body) {
    return async (dispatch, getState) => {
        dispatch(updateData({
            isAddProject:true
        }))
        const token = getState().auth?.token
        try {
            const response = await Api(false,token).addProject(body);
     //      console.log(response.data)
            if(response.data && response.data.status==200){
                showMessage({
                    message: response.data.message,
                    type: "success",
                    duration: 1500,
                    icon: { icon: "success", position: 'left' }
                });
                dispatch(updateData({
                    isAddProject:false
                }))
            }else{
                dispatch(updateData({
                    isAddProject:false
                }))
            }


        } catch (error) {

            dispatch(updateData({
                isAddProject:false
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

export function actionSearchProject(text) {
    return async (dispatch, getState) => {
        dispatch(updateData({
            isSearchProject :true,
            dataSearchProject:[]
        }))
        const token = getState().auth?.token
        try {
            const response = await Api(false,token).searchProject(text)
            if(response.data && response.data.status==200) {
                await dispatch({
                    type: "GET_SEARCH_PROJECT",
                    data: response.data?.dataProjectSearch
                });
            }
            dispatch(updateData({
                isSearchProject :false
            }))


        } catch (error) {

            dispatch(updateData({
                isSearchProject :false

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
export function actionChangeInforProject(content,type, projectId) {
    return async (dispatch, getState) => {
        let createUser = getState().auth.dataCurrentUser?.userId
        const token = getState().auth?.token
        try {
            const response = await Api(false,token).changeInforProject(content, type,projectId,createUser );
            if(response.data && response.data.status==200){
                showMessage({
                    message: response.data?.message,
                    type: "success",
                    duration: 1000,
                    icon: { icon: "success", position: 'left' }
                });

            }
            else{
                showMessage({
                    message: "Xảy ra lỗi vui lòng thử lại sau",
                    type: "warning",
                    duration: 1000,
                    icon: { icon: "warning", position: 'left' }
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
export function actionEditRoleProjecet(projectUserId, projectId,type,userSelectFullName) {
    return async (dispatch, getState) => {
        let createUser = getState().auth.dataCurrentUser?.userId
        const token = getState().auth?.token
        try {
            const response = await Api(false,token).editRoleProject( projectUserId,projectId,createUser,type,userSelectFullName);
       //     console.log(response.data)
            if(response.data && response.data.status==200){
                showMessage({
                    message: response.data?.message,
                    type: "success",
                    duration: 1000,
                    icon: { icon: "success", position: 'left' }
                });
                dispatch(actionGetDetailProject(projectId))

            }
            else{
                showMessage({
                    message: "Xảy ra lỗi vui lòng thử lại sau",
                    type: "warning",
                    duration: 1000,
                    icon: { icon: "warning", position: 'left' }
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
export default {
    actionGetAllProject

};
