import Api from "../../../api/Api";
;
import { showMessage } from "react-native-flash-message";
import { actionGetDetailProject } from "../project";


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
      const response = await Api(false).searchUser(keyWord);

      if(response.data && response.data.status==200){
        await   dispatch({
          type: "SEARCH_USER",
          data: response.data.dataUserSearch
        });

      }else{
        showMessage({
          message: "Xảy ra lỗi vui lòng thử lại sau",
          type: "danger",
          duration: 2000,
          icon: { icon: "danger", position: 'left' }
        });
        await   dispatch({
          type: "END_SEARCH_USER",
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
export function actionEditUserProject(body,projectId) {
  return async (dispatch, getState) => {
    if(!getState().user.isEditUserProject){


      await   dispatch({
        type: "START_EDIT_USER_PROJECT",
      });
      try {
        const response = await Api(false).editUserOfProject(body);
       console.log(response.data)
        if(response.data && response.data.status==200){
         await dispatch(actionGetDetailProject(projectId))
          await   dispatch({
            type: "END_EDIT_USER_PROJECT",
          });
          showMessage({
            message: "Cập nhật thành viên dự án thành công",
            type: "success",
            duration: 1500,
            icon: { icon: "success", position: 'left' }
          });
        }else{
          showMessage({
            message: "Xảy ra lỗi vui lòng thử lại sau",
            type: "danger",
            duration: 2000,
            icon: { icon: "danger", position: 'left' }
          });
          await   dispatch({
            type: "END_EDIT_USER_PROJECT",
          });
        }


      } catch (error) {

        await   dispatch({
          type: "END_EDIT_USER_PROJECT",
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
