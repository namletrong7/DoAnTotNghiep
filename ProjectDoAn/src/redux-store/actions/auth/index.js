import Api from "../../../api/Api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { showMessage } from "react-native-flash-message";
import { randomKeyComment } from "../../../utils/RandomKeyComment";


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
            setTimeout(() => {
                dispatch(updateData({
                    token: 'asdasdasdasdasdasd',
                    isLoginSuccess: false,

                }))
            }, 3000);
        }
            else{
                dispatch(updateData({
                    token: null,
                    isLoginSuccess: false,
                }))
                showMessage({
                    message: "Đăng nhập thất bại vui lòng kiểm tra lại tên đăng nhập hoặc mật khẩu ",
                    type: "danger",
                    duration: 3000,
                    icon: { icon: "danger", position: 'left' }
                });
            }
        } catch (error) {
            dispatch(updateData({
                token: null,
                isLoginSuccess: false,
            }))
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
