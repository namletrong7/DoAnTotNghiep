import Api from "../../../api/Api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { showMessage } from "react-native-flash-message";

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
    showMessage({
        message: "Thêm comment thành công",
        type: "success",
        duration: 1000,
        icon: { icon: "success", position: 'left' }
    });
    return async (dispatch, getState) => {
     await   dispatch({
            type: "ADD_COMMENT",
            comment: comment,
        });
    };
}
export function actionLoadMoreComment() {
    const comment = {
        commentId: Math.random().toString(36).substr(2, 9),
        userId: "1",
        avatarUser: "https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg",
        fullName: "Vũ đình tuán anh",
        content: "jregjbvvvv",
        createdDate: "10/1/2023"
    };
    return async (dispatch, getState) => {
        await   dispatch({
            type: "LOAD_COMMENT",
            comment: comment,
        });
    };
}
export default {
    getTemPlate,
    actionLogin,
    actionLogout,
    actionAddComment,
    actionLoadMoreComment
};
