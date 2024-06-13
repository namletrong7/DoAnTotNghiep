import Api from "../../api";
import {ISLOGIN, TOKEN} from "../../unitl/constant";

export function updateData(data) {
    return {
        type: 'UPDATE_DATA_AUTH_REDUCER',
        data
    }
}

export function actionLogin (userName, password) {
    return async (dispatch, getState) => {
        try {
            const response = await Api().login(userName,password);
            console.log(response)
                if ( response?.data &&response?.data?.status) {
                    alert(response.data?.message);
                       if (response.data.status == 200 && response.data.data == 1) {
                           dispatch(updateData({
                               isLogin: true,
                               token:response.data?.token,
                               dataCurrentUser:response.data?.dataCurrentUser
                           }))
                           window.localStorage.setItem(ISLOGIN,true)
                           window.localStorage.setItem(TOKEN,response.data?.token)
                         }

                }



        } catch (error) {
            alert("Lỗi mạng Xin vui lòng kiểm tra lại kết nối internet");
        }
    };
}

export function actionCheckLogged () {
    return async (dispatch, getState) => {
        try {
            console.log('gọi lai ham check logged')
            const checkLogged = await window.localStorage.getItem(ISLOGIN);
            console.log(checkLogged)
            dispatch(updateData({
                isLogin: checkLogged,
            }))
        } catch (error) {
            alert("Lỗi mạng Xin vui lòng kiểm tra lại kết nối internet");
        }
    };
}
export function actionLogout () {
    return async (dispatch, getState) => {
        try {
            dispatch({
                type:"RESET_DATA"
            })

        } catch (error) {
            alert("Lỗi mạng Xin vui lòng kiểm tra lại kết nối internet");
        }
    };
}
