import Api from "../../api";
import {ISLOGIN} from "../../unitl/constant";

export function updateData(data) {
    return {
        type: 'UPDATE_DATA_AUTH_REDUCER',
        data
    }
}

export function actionLogin (userName, password) {
    return async (dispatch, getState) => {
        try {
            dispatch(updateData({
                isLogin: true,
            }))
            window.localStorage.setItem(ISLOGIN,true)
        } catch (error) {
            alert("Lỗi mạng Xin vui lòng kiểm tra lại kết nối internet");
        }
    };
}

export function actionCheckLogged () {
    return async (dispatch, getState) => {
        try {
            const checkLogged = await window.localStorage.getItem(ISLOGIN);
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
            dispatch(updateData({
                isLogin: false,
            }))
            window.localStorage.setItem(ISLOGIN,false)
        } catch (error) {
            alert("Lỗi mạng Xin vui lòng kiểm tra lại kết nối internet");
        }
    };
}
