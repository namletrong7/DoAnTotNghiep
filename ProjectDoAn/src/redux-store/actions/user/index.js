import Api from "../../../api/Api";
;
import { showMessage } from "react-native-flash-message";


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
export function actionsearchUser(keyWord) {
  return async (dispatch, getState) => {
    if(!getState().user.isSearchUser){


    await   dispatch({
      type: "START_SEARCH_USER",
    });
    try {
      const response = await Api(true).searchUser(keyWord);

      if(response.data && response.data.status==200){
        await   dispatch({
          type: "SEARCH_USER",
          data: response.data.dataUserSearch
        });

      }else{
        await   dispatch({
          type: "END_GET_PROFILE_USER",
        });
      }


    } catch (error) {

      await   dispatch({
        type: "END_SEARCH_USER",
      });
      showMessage({
        message: "Lỗi mạng",
        type: "danger",
        duration: 1000,
        icon: { icon: "danger", position: 'left' }
      });
    }
    }
    else{
      return ;
    }

  };
}



export default {
  actionGetProfileUser
};
