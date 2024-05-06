
import axios from 'axios';




// Tạo một instance của Axios với các cấu hình mặc định
const Api = (isFormData:boolean) => {

    //Hàm tạo header
    const apiConfig = () => {
        return axios.create({
            baseURL: "http://3.25.188.2/DOAN/",
            headers: {
                'Content-Type': isFormData?'multipart/form-data':'application/json',
                // Thêm các headers khác nếu cần thiết
            },
            timeout: 180000, // Timeout là 10 giây
        });
    }
    // Api test
    const login=(userName:string,password:string)=> {
        const apiInstance = apiConfig();
        return apiInstance.post("login.php",{
           userName:userName,
           passWord:password
        });
    }//-----------------------------------------------------
    // thêm api add task
    const addTask=(body:any)=> {
        const apiInstance = apiConfig();
        return apiInstance.post("addTask.php",body);
    }
    // api get detail task
   const getDetailTask=(taskId:string)=>{
       const apiInstance = apiConfig();
       return apiInstance.get(`getDetailTask.php?taskId=${taskId}`);
   }
    // api láy file đính kèm của task
    const getFileAttach=(taskId:string)=>{ // láy file đính kèm
        const apiInstance = apiConfig();
        return apiInstance.get(`getAllFileAttach.php?taskId=${taskId}`);
    }
    // api láy file đính kèm của task
    const getCommentTask=(taskId:string, offset:number)=>{  // lấy comment task
        const apiInstance = apiConfig();
        return apiInstance.post('getAllCommentTask.php',{
            taskId:taskId,
            offset:offset
        });
    }
    const addCommentTask=(taskId:string, content:string, createUser:number)=>{  // thêm comment cho task
        const apiInstance = apiConfig();
        return apiInstance.post('addComment.php',{
            taskId:taskId,
            content:content,
            createUser:createUser

        });
    }
    const getProfileUser=(userId:any)=>{  // láy thông tin của 1 user
        const apiInstance = apiConfig();
        return apiInstance.get(`getProfileUser.php?userId=${userId}`);
    }
  const getAllProject=(userId:any)=>{  // api láy tất cả project của 1 user
    const apiInstance = apiConfig();
    return apiInstance.get(`getProjectUser.php?userId=${userId}`);
  }
  const getDetailProject=(projectId:string)=>{ // apo lấy chi tiết project
    const apiInstance = apiConfig();
    return apiInstance.get(`getDetailProject.php?projectId=${projectId}`);
  }
  const getListTaskProject=(projectId:string,state:number)=>{ // api lấy danh sách của 1 project
    return apiConfig().get(`getListTaskProject.php?projectId=${projectId}&state=${state}`);
  }
  const getAllTask=(offset:number)=>{  /// api lasy tat ca cac task
    return apiConfig().get(`getAllTask.php?offset=${offset}`);
  }
    const getAssignTask=(assignUser:number,offset:number)=>{ // api lấy danh sách cong việc tôi giao
        return apiConfig().get(`getAssignTask.php?assignUser=${assignUser}&offset=${offset}`);
    }
    const getTargetTask=(targetUser:number,offset:number)=>{ // api lấy danh sách Cv tôi xử lý chưa hoàn thành
        return apiConfig().get(`getTargetTask.php?targetUser=${targetUser}&offset=${offset}`);
    }
    const getTaskDone=(targetUser:number,offset:number)=>{ // api lấy danh sách Cv tôi xử lý chưa hoàn thành
        return apiConfig().get(`getTaskDone.php?targetUser=${targetUser}&offset=${offset}`);
    }
  const searchUser=(text:string)=>{ // api lấy danh sách Cv tôi xử lý chưa hoàn thành
    return apiConfig().get(`searchUser.php?textSearch=${text}`);
  }
  const addProject=(body:any)=> {
    return apiConfig().post("addProject.php",body);
  }
  const editUserOfProject=(body:any)=> {
    return apiConfig().post("editUserOfProject.php",body);
  }
  const changePriorityTask=(priority, taskId,createUser)=> {
    return apiConfig().get(`changePriorityTask.php`,{
      params: {
        priority: priority,
        taskId: taskId,
        createUser: createUser
      }
      });
  }
  const changeProgressTask=(progress:number, taskId:any,userId:any)=> {
    return apiConfig().get(`changeProgressTask.php`,{
      params:{
        progress: progress,
        taskId: taskId,
        createUser: userId
      }
    });
  }
  const reportTask=(body)=> {
    return apiConfig().post("reportTask.php",body);
  }
  const getListUserOfProject=(projectId)=> {
    return apiConfig().post(`getUserProject.php?projectId=${projectId}`);
  }
  const editUserForTask=(type:number, taskId:string,userId:any,createUser:number)=> {
    return apiConfig().get('editUserTask.php',{
        params:{
          userId: userId,
          taskId: taskId,
          type: type,
          createUser:createUser
        }
    });
  }
  const searchTask=(text:string)=> {
    return apiConfig().get('searchTask.php',{
      params:{
        textSearch:text
      }
    });
  }
  const searchProject=(text:string)=> {
    return apiConfig().get('searchProject.php',{
      params:{
        textSearch:text
      }
    });
  }
  const getOverView=(userId:number)=>{
    return apiConfig().get('getOverView.php',{
      params:{
        userId:userId
      }
    });
  }
  // Api lấy công việc mik xử lý có hạn nằm mà nằm trong khoảng thời gian
  const getTargetTaskByEndDay=(offset:number,userId:number,startDay:string,endDay:string)=>{
    return apiConfig().get('getTargetTaskByEndDay.php',{
      params:{
        offset:offset,
        targetUser:userId,
        startDay:startDay,
        endDay:endDay,
      }
    });
  }
  const addCheckList=(taskId:string, content:string, createUser:number)=>{  // theem checkId cho task
    return apiConfig().post('addCheckList.php',{
      taskId:taskId,
      content:content,
      createUser:createUser
    });
  }
  // Api điều chỉnh trạng thái của checklist
  const setStatusCheckList=(status:number,checkId:string)=>{
    return apiConfig().get('setStatusCheckList.php',{
      params:{
        status:status,
        checkId:checkId,
      }
    });
  }
  const getListNotify=(reciverUser:number)=>{
    return apiConfig().get('getNotify.php',{
      params:{
        reciverUser:reciverUser,
      }
    });
  }
  const setHasReadNotify=(reciverUser:number,notifyId:string)=>{
    return apiConfig().get('setHasReadNotify.php',{
      params:{
        reciverUser:reciverUser,
        notifyId:notifyId
      }
    });
  }
  const changeDayTask=(taskId:string,type:number, createUser:number, day:any)=>{
    return apiConfig().get('changeDayTask.php',{
      params:{
        taskId:taskId,
        type:type,
        createUser:createUser,
        day:day
      }
    });
  }
    //NamLTc: Trả về các hàm api để lớp action gọi tới
    return {
        apiConfig,
        login,
        getCommentTask,
        addTask,
        getDetailTask,
        getFileAttach,
        addCommentTask,
        getProfileUser,
        getAllProject,
      getDetailProject,
      getListTaskProject,
      getAllTask,
        getAssignTask,
        getTargetTask,
        getTaskDone,
      searchUser,
      addProject,
      editUserOfProject,
      changePriorityTask,
      changeProgressTask,
      reportTask,
      getListUserOfProject,
      editUserForTask,
     searchTask,
      searchProject,
      getOverView,
      getTargetTaskByEndDay,
      addCheckList,
      setStatusCheckList,
      getListNotify,
      setHasReadNotify,
      changeDayTask
    };
};
export default Api;
