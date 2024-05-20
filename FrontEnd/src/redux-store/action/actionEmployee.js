import Api from "../../api";
import {actionGetListJobtitle} from "./actionJobtitle";

export function updateData(data) {
    return {
        type: 'UPDATE_DATA_EMPLOYEE_REDUCER',
        data
    }
}

export function actionLogin (username, password, nextToScreen) {
    return async (dispatch, getState) => {
        try {
            const response = await Api().getTokenLogin(username, password);
            console.log(response.data);
            if (response && response.data){
                dispatch(updateData({
                    isLogin: true,
                    token: response.data.accessToken,
                }))

                alert("Đăng nhập thành công!");
                nextToScreen("/screen/UserInformationScreen/UserInformationScreen");
            } else {
                dispatch(updateData({
                    isLogin: false,
                    token: '',
                }))
                alert("Đăng nhập thất bại!");
            }
        } catch (error) {
            alert("Lỗi mạng Xin vui lòng kiểm tra lại kết nối internet");
            dispatch(updateData({
                token: '',
            }))
        }
    };
}

export function actionGetListEmployee () {
    return async (dispatch, getState) => {
        try {
            dispatch(updateData({
                isGetListEmployee: true,
            }))
            const response = await Api().getListEmployee();
            if(response.data && response.data.status==200){
                dispatch(updateData({
                    dataListEmployee: response.data?.dataListEmployee
                }))
            }
            dispatch(updateData({
                isGetListEmployee: false,
            }))
        } catch (error) {
            dispatch(updateData({
                isGetListEmployee: false,
            }))
            alert("Lỗi mạng Xin vui lòng kiểm tra lại kết nối internet");
        }
    };
}
export function actionEditEmployee(body) {
    return async (dispatch, getState) => {
        try {
            const response = await Api(true).editUser(body);
            console.log(response.data)
            if(response.data && response.data.status){
                alert(response.data?.message);
                dispatch(actionGetListEmployee())
            }else{
                alert("Đã xảy ra lỗi vui lòng thử lại sau");
            }
        } catch (error) {

            alert("Lỗi mạng Xin vui lòng kiểm tra lại kết nối internet");
        }
    };
}


