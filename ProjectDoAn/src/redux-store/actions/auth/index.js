import Api from "../../../api/Api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { showMessage } from "react-native-flash-message";
import { randomKeyComment } from "../../../utils/RandomKeyComment";
import messaging, {firebase} from "@react-native-firebase/messaging";


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
            if (response.data.status==200 && response.data.data == 1){
                dispatch(updateData({
                    isLoginSuccess: true,
                    dataCurrentUser:response.data.dataCurrentUser
                }))
             await   dispatch(actionGetOverView(response.data.dataCurrentUser?.userId))
            setTimeout(() => {
                dispatch(updateData({
                    token: 'asdasdasdasdasdasd',
                }))
            }, 3000);
                const token = await messaging().getToken();
                if (token){
                     console.log(token)
                    dispatch(updateData({
                    tokenFCM: token,
                }))
                }
                else{
                    console.log("không láy dc token")
                }
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
// lấy thông tin overView
export function actionGetOverView(userId) {
    return async (dispatch, getState) => {
        try {
            const response = await Api(false).getOverView(userId);
            console.log(response.data)
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


    };
}
export default {
    actionLogin,
    actionLogout


};
