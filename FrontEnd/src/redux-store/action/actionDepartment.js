import Api from "../../api";
import {actionGetListJobtitle} from "./actionJobtitle";

export function updateData(data) {
    return {
        type: 'UPDATE_DATA_DEPARTMENT_REDUCER',
        data
    }
}
// isGetDepartment: false ,
//     dataListDepartment: [],
export function actionGetListDepartment () {
    return async (dispatch, getState) => {
        dispatch(updateData({
            dataListDepartment: [],
        }))
        try {
            dispatch(updateData({
                isGetDepartment: true,
            }))
            const response = await Api().getDepartMent();
            if(response.data && response.data.status==200){
                dispatch(updateData({
                    dataListDepartment: response.data?.dataListDepartment
                }))
            }
            dispatch(updateData({
                isGetDepartment: false,
            }))
        } catch (error) {
            dispatch(updateData({
                isGetDepartment: false,
            }))
            alert("Lỗi mạng Xin vui lòng kiểm tra lại kết nối internet");
        }
    };
}

export function actionEditDepartment (content, departmentId) {
    return async (dispatch, getState) => {
        try {
            const response = await Api().editDepartment(content, departmentId);
            if(response.data && response.data.status){
                alert(response.data?.message);
                dispatch(actionGetListDepartment())
            }else{
                alert("Đã xảy ra lỗi vui lòng thử lại sau");
            }
        } catch (error) {

            alert("Lỗi mạng Xin vui lòng kiểm tra lại kết nối internet");
        }
    };
}
export function actionAddDepartment (content) {
    return async (dispatch, getState) => {
        try {
            const response = await Api().addDepartment(content);
            if(response.data && response.data.status){
                alert(response.data?.message);
                dispatch(actionGetListDepartment())
            }else{
                alert("Đã xảy ra lỗi vui lòng thử lại sau");
            }
        } catch (error) {

            alert("Lỗi mạng Xin vui lòng kiểm tra lại kết nối internet");
        }
    };
}


