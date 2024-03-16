import Api from "../../../api/Api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { showMessage } from "react-native-flash-message";
import { randomKeyComment } from "../../../utils/RandomKeyComment";
import { getNewDate } from "../../../utils/ConverPickerDate";

/**
 * Created by NamLTC on 29/01/2024
 * khai báo các action thực hiện liên quan đến project
 */
export function updateData(data) {
    return {
        type: 'PROJECT_UPDATE_DATA',
        data
    }
}
export function actionGetAllProject() {
    return async (dispatch, getState) => {
        let userId=getState().auth.dataCurrentUser.userId

        await   dispatch({
            type: "START_GET_PROJECT",
        });
        try {
            const response = await Api(false).getAllProject(userId);



            if(response.data && response.data.status==200){
                dispatch({
                    type: "GET_ALL_PROJECT",
                    data:response.data.dataAllProject
                });
                showMessage({
                    message: response.data.message,
                    type: "success",
                    duration: 1000,
                    icon: { icon: "success", position: 'left' }
                });
            }
            dispatch({
                type: "END_GET_PROJECT",
            });

        } catch (error) {

            await   dispatch({
                type: "END_GET_PROJECT",
            });
            showMessage({
                message: "Lỗi mạng",
                type: "danger",
                duration: 1000,
                icon: { icon: "danger", position: 'left' }
            });
        }

    };
}
export function actionGetDetailProject(projectId) {
    return async (dispatch, getState) => {
        dispatch(updateData({
            isGetDetailProject:true

        }))
        try {
            const response = await Api(false).getDetailProject(projectId);

            if(response.data && response.data.status==200){
                dispatch(updateData({
                    dataDetailProject:response.data.dataDetailProject

                }))
            }
            dispatch(updateData({
                isGetDetailProject:false

            }))

        } catch (error) {

            dispatch(updateData({
                isGetDetailProject:false

            }))
            showMessage({
                message: "Lỗi mạng",
                type: "danger",
                duration: 1000,
                icon: { icon: "danger", position: 'left' }
            });
        }

    };
}
//



export default {
    actionGetAllProject

};
