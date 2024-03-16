import Api from "../../../api/Api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { showMessage } from "react-native-flash-message";
import { randomKeyComment } from "../../../utils/RandomKeyComment";
import { getNewDate } from "../../../utils/ConverPickerDate";

/**
 * Created by NamLTC on 29/01/2024
 * khai báo các action thực hiện liên quan đến user như  lấy thông tin user, laasy user của project
 */
// action call api addTask
export function actionGetProfileUser(userId) {
  return async (dispatch, getState) => {
    await   dispatch({
      type: "START_GET_PROFILE_USER",
    });
    try {
      const response = await Api(true).getProfileUser(userId);



      if(response.data && response.data.status==200){
        await   dispatch({
          type: "GET_PROFILE_USER",
          data: response.data
        });

      }
      await   dispatch({
        type: "END_GET_PROFILE_USER",
      });

    } catch (error) {

      await   dispatch({
        type: "END_GET_PROFILE_USER",
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




export default {
  actionGetProfileUser
};
