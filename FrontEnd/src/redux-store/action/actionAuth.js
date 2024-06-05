import Api from "../../api";

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
        } catch (error) {
            alert("Lỗi mạng Xin vui lòng kiểm tra lại kết nối internet");
        }
    };
}


