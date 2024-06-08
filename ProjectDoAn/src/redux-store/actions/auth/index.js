import Api from "../../../api/Api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { showMessage } from "react-native-flash-message";
import { randomKeyComment } from "../../../utils/RandomKeyComment";
import messaging, {firebase} from "@react-native-firebase/messaging";
import DeviceInfo from "react-native-device-info";


/**
 * Created by NamLTC on 29/01/2024
 * action auth gọi api xác thực
 */
export function updateData(data) {
    return {
        type: 'AUTH_UPDATE_DATA',
        data
    }
}

// api login
export function actionLogin(userName, passWord) {
    return async (dispatch, getState) => {
        try {
            const response = await Api(false).login(userName, passWord);
            if(response.data.status) {
                showMessage({
                    message: response.data?.message,
                    type:response.data.status==200?'success':'warning',
                    duration: 3000,
                    icon: { icon: response.data.status==200?'success':'warning', position: 'left' }
                });
                if (response.data.status == 200 && response.data.data == 1) {
                    dispatch(updateData({
                        token: response.data?.token,
                        isLoginSuccess: true,
                        dataCurrentUser: response.data.dataCurrentUser
                    }))
                    await dispatch(actionGetOverView(response.data.dataCurrentUser?.userId))
                    setTimeout(() => {
                        dispatch(updateData({
                            isLoginSuccess: false,
                        }))
                    }, 3000);
                    await messaging().registerDeviceForRemoteMessages()
                    await dispatch(actionRegisterTokenFCM(response.data.dataCurrentUser?.userId))
                }

            }
        } catch (error) {
       //     console.log(error)
            showMessage({
                message: "Lỗi mạng xin vui lòng kiểm tra lại kết nối internet ",
                type: "warning",
                duration: 3000,
                icon: {icon: "danger", position: 'left'}
            });
        }


    };
}
// lấy thông tin overView
export function actionGetOverView(userId) {
    return async (dispatch, getState) => {
        const token = getState().auth?.token
    //    console.log(token)
        try {
            const response = await Api(false,token).getOverView(userId);
    //     console.log(response.data)
            if (response.data.status==200 && response){
                dispatch(updateData({
                    dataNumProject: response.data?.dataNumProject,
                    dataNumTask:response.data?.dataNumTask
                }))
            }else{
                return ;
            }
        } catch (error) {
            showMessage({
                message: "Lỗi mạng xin vui lòng kiểm tra lại kết nối internet ",
                type: "warning",
                duration: 3000,
                icon: { icon: "danger", position: 'left' }
            });
        }


    };
}
// gọi Api đk token nhận thông báo
export function actionRegisterTokenFCM(user) {
    return async (dispatch, getState) => {
        try {
            const idDevice = await DeviceInfo.getUniqueId();
            const tokenFCM = await messaging().getToken();
      //      console.log(tokenFCM)
             await Api(false).registerDeviceTokenFCM(idDevice, user, tokenFCM);
        } catch (error) {
            showMessage({
                message: "Lỗi mạng xin vui lòng kiểm tra lại kết nối internet ",
                type: "warning",
                duration: 3000,
                icon: { icon: "danger", position: 'left' }
            });
        }


    };
}
// api login
export function actionLogout() {
    return async (dispatch, getState) => {
        await   dispatch({
            type: "RESET_AUTH",
        });
        await   dispatch({
            type: "RESET_TASK",
        });
        await   dispatch({
            type: "RESET_USER",
        });
        await   dispatch({
            type: "RESET_PROJECT",
        });
        await messaging().deleteToken();
        const idDevice = await DeviceInfo.getUniqueId();
        try {
            const response = await Api(false).deleteDevicetokenFCM(idDevice);
        } catch (error) {
            showMessage({
                message: "Lỗi mạng xin vui lòng kiểm tra lại kết nối internet ",
                type: "warning",
                duration: 3000,
                icon: { icon: "danger", position: 'left' }
            });
        }
    };
}
export default {
    actionLogin,
    actionLogout


};
