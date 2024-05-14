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

