import Api from "../../../api/Api";
import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * Created by NamLTC on 29/01/2024
 * action auth gọi api xác thực
 */

export function updateData(data) {
    return {
        type: 'AUTH_UPDATE_DATA',
        data
    }
}
export function getTemPlate() {
    return async (dispatch, getState) => {
        const response = await Api("https://egovbeta.tayninh.gov.vn").getTemplateComment();
        console.log("RESPONSE: ", response.data);
    };
}
// api login
export function actionLogin(baseURL,body) {
    return async (dispatch, getState) => {
        await AsyncStorage.setItem('assetToken', 'asdasdasdasdasdasd');
        dispatch(updateData({
            getTokenLoading: false,
            token: 'asdasdasdasdasdasd',
        }))
        // const response = await Api(baseURL).login(body);
        // console.log("RESPONSE: ", response.data);
        // if(response.data.status===200){
        //     await AsyncStorage.setItem('assetToken', response.data.data.token);
        //     dispatch(updateData({
        //         getTokenLoading: false ,
        //         token: response.data.data.token
        //     }))
        // }
    };
}

export function actionLogout(baseURL,body) {
    return async (dispatch, getState) => {
        await AsyncStorage.clear();
        dispatch(updateData({
            getTokenLoading: false,
            token: null,
        }))
    };
}
export function actionAddComment(comment) {
    return async (dispatch, getState) => {
     await   dispatch({
            type: "ADD_COMMENT",
            comment: comment,
        });
    };
}
export default {
    getTemPlate,
    actionLogin,
    actionLogout,
    actionAddComment
};
