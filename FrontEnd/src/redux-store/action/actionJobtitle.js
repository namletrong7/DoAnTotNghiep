import Api from "../../api";

export function updateData(data) {
    return {
        type: 'UPDATE_DATA_JOBTITLE_REDUCER',
        data
    }
}


export function actionGetListJobtitle () {
    return async (dispatch, getState) => {
        try {
            dispatch(updateData({
                isGetListJobtitle: true,
            }))
            const response = await Api().getJobtitle();
            if(response.data && response.data.status==200){
                dispatch(updateData({
                    dataListJobtitle: response.data?.dataListJobtitle
                }))
            }
            dispatch(updateData({
                isGetListJobtitle: false,
            }))
        } catch (error) {
            dispatch(updateData({
                isGetListJobtitle: false,
            }))
            alert("Lỗi mạng Xin vui lòng kiểm tra lại kết nối internet");
        }
    };
}
export function actionEditJobtitle (content, jobtitleId) {
    return async (dispatch, getState) => {
        try {
            const response = await Api().editJobtitle(content, jobtitleId);
            if(response.data && response.data.status){
                alert(response.data?.message);
                dispatch(actionGetListJobtitle())
            }else{
                alert("Đã xảy ra lỗi vui lòng thử lại sau");
            }
        } catch (error) {

            alert("Lỗi mạng Xin vui lòng kiểm tra lại kết nối internet");
        }
    };
}
export function actionAddJobtitle (content) {
    return async (dispatch, getState) => {
        try {
            const response = await Api().addJobtitle(content);
            if(response.data && response.data.status){
                alert(response.data?.message);
                dispatch(actionGetListJobtitle())
            }else{
                alert("Đã xảy ra lỗi vui lòng thử lại sau");
            }
        } catch (error) {
            alert("Lỗi mạng Xin vui lòng kiểm tra lại kết nối internet");
        }
    };
}

