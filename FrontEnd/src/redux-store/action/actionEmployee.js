import Api from "../../api";
import {actionGetListJobtitle} from "./actionJobtitle";

export function updateData(data) {
    return {
        type: 'UPDATE_DATA_EMPLOYEE_REDUCER',
        data
    }
}



export function actionGetListEmployee () {
    return async (dispatch, getState) => {
        try {
            dispatch(updateData({
                isGetListEmployee: true,
            }))
            const response = await Api(false).getListEmployee();
         //   console.log(response.data?.dataListEmployee)
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
export function actionAddEmployee(body) {
    return async (dispatch, getState) => {
        try {
            const response = await Api(true).addUser(body);
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
