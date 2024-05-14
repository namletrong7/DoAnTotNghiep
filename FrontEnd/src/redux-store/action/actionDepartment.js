import Api from "../../api";

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





