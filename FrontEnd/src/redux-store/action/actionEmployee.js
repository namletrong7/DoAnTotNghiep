import Api from "../../api";

export function updateData(data) {
    return {
        type: 'UPDATE_DATA_EMPLOYEE_REDUCER',
        data
    }
}
export  function actionLogout(){
    return async (dispatch, getState) => {
        dispatch({
            type:"RESET_EMPLOYEE_REDUCER"
        })
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

export function actionRegister (username, password, date) {
    return async (dispatch, getState) => {
        try {
            const response = await Api().getTokenLogin(username, password, date);
            console.log(response.data);
            if (response && response.data){
                alert("Đăng ký thành công!");
            } else {
                alert("Đăng ký thất bại!");
            }
        } catch (error) {
            alert("Lỗi mạng Xin vui lòng kiểm tra lại kết nối internet");
            dispatch(updateData({
                token: '',
            }))
        }
    };
}

// export function actionLogout () {
//     return (dispatch, getState) => {
//         try {
//             dispatch(updateData({
//                 isLogin: false,
//                 admin: false,
//                 userName: '',
//                 token: '',
//             }))
//         } catch (error) {
//             alert("Lỗi mạng Xin vui lòng kiểm tra lại kết nối internet");
//             dispatch(updateData({
//                 token: '',
//             }))
//         }
//     };
// }


