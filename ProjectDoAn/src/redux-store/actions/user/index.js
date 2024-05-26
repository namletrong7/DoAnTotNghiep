import Api from "../../../api/Api";
;
import { showMessage } from "react-native-flash-message";
import { actionGetDetailProject } from "../project";
import { getNewDate } from "../../../utils/ConverPickerDate";


/**
 * Created by NamLTC on 29/01/2024
 * khai báo các action thực hiện liên quan đến user như  lấy thông tin user, laasy user của project
 */
export function updateData(data) {
  return {
    type: 'USER_UPDATE_DATA',
    data
  }
}
// action call api addTask
export function actionGetProfileUser(userId) {
  return async (dispatch, getState) => {
    await   dispatch({
      type: "START_GET_PROFILE_USER",
    });
    const token = getState().auth?.token
    try {
      const response = await Api(true,token).getProfileUser(userId);



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
      const token = getState().auth?.token
    try {
      const response = await Api(false,token).searchUser(keyWord);
      if(response.data && response?.data?.status==200){
        await   dispatch({
          type: "SEARCH_USER",
          data: response?.data?.dataUserSearch
        });

      }else{
        showMessage({
          message: "Xảy ra lỗi vui lòng thử lại sau",
          type: "danger",
          duration: 2000,
          icon: { icon: "danger", position: 'left' }
        });
      }
      await   dispatch({
        type: "END_SEARCH_USER",
      });

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
export function actionEditUserProject(projectId,dataUser) {
  return async (dispatch, getState) => {
      await   dispatch({
        type: "START_EDIT_USER_PROJECT",
      });
    const token = getState().auth?.token
    let userId= getState().auth.dataCurrentUser?.userId
      try {
        const response = await Api(false,token).editUserOfProject(
        {
          "projectId": projectId,
          "listUser": dataUser,
           'createUser':userId ,
        }
        );
       // console.log(response.data)
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
  };
}
export function actionGetListUserProject(projectId) {
  return async (dispatch, getState) => {
    if(!getState().user.isEditUserProject){
      const token = getState().auth?.token
      try {
        const response = await Api(false,token).getListUserOfProject(projectId);

        if(response.data && response.data.status==200){
          await   dispatch({
            type: "GET_USER_OF_PROJECT",
            data:response.data.userProject
          });

        }else{
          await   dispatch({
            type: "GET_USER_OF_PROJECT_FAIL",
          });
          showMessage({
            message: "Xảy ra lỗi khi tải thành viên của Project",
            type: "danger",
            duration: 2000,
            icon: { icon: "danger", position: 'left' }
          });
        }


      } catch (error) {
        await   dispatch({
          type: "GET_USER_OF_PROJECT_FAIL",
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
export function actionEditUserForTask(type , taskId, userId) {
  return async (dispatch, getState) => {
    let createUser = getState().auth.dataCurrentUser?.userId
    const token = getState().auth?.token
      try {

        const response = await Api(false,token).editUserForTask(type,taskId, userId,createUser );

        if(response.data && response.data.status==200){
          showMessage({
            message: response.data?.message,
            type: "success",
            duration: 1000,
            icon: { icon: "success", position: 'left' }
          });

        }
        else{
          showMessage({
            message: "Xảy ra lỗi vui lòng thử lại sau",
            type: "warning",
            duration: 1000,
            icon: { icon: "warning", position: 'left' }
          });
        }
      } catch (error) {
        await   dispatch({
          type: "GET_USER_OF_PROJECT_FAIL",
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
export function actionChangePassword(newPass) {
  return async (dispatch, getState) => {
    let createUser = getState().auth.dataCurrentUser?.userId
    const token = getState().auth?.token
    dispatch(updateData({
      isChangePass: true,
    }))
    try {
      const response = await Api(false,token).changePassword(newPass, createUser );
      if(response.data && response.data.status==200){
        showMessage({
          message: response.data?.message,
          type: "success",
          duration: 1000,
          icon: { icon: "success", position: 'left' }
        });

      }
      else{
        showMessage({
          message: "Xảy ra lỗi vui lòng thử lại sau",
          type: "warning",
          duration: 1000,
          icon: { icon: "warning", position: 'left' }
        });
      }
      dispatch(updateData({
        isChangePass: false,
      }))
    } catch (error) {
      dispatch(updateData({
        isChangePass: false,
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
export function actionEditInforUser(fullName,email,phoneNumber,birthDay) {
  return async (dispatch, getState) => {
      let userId= getState().auth.dataCurrentUser?.userId
      let token = getState().auth?.token
    try {
      const response = await Api(false, token).editInforUser({
        userId: userId,
        fullName: fullName,
        phoneNumber: phoneNumber,
        birthDay: birthDay,
        email: email,
      });
      if(response.data && response.data.message){
        showMessage({
          message: response.data.message,
          type: "success",
          duration: 1000,
          icon: { icon: "success", position: 'left' }
        });
      }
    } catch (error) {
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
