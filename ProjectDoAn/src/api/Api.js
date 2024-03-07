
import axios from 'axios';




// Tạo một instance của Axios với các cấu hình mặc định
const Api = (isFormData) => {

    //Hàm tạo header
    const apiConfig = () => {
        return axios.create({
            baseURL: "http://192.168.1.109:8080/DOAN/",
            headers: {
                'Content-Type': isFormData?'multipart/form-data':'application/json',
                // Thêm các headers khác nếu cần thiết
            },
            timeout: 180000, // Timeout là 10 giây
        });
    }

    // Api test
    const getTemplateComment=()=> {
        const apiInstance = apiConfig();
        return apiInstance.get("/Document/GetTemplateComments");
    }
    // Api test
    const login=(body)=> {
        const apiInstance = apiConfig();
        return apiInstance.post("/auth/login",body);
    }//-----------------------------------------------------
    // thêm api add task
    const addTask=(body)=> {
        const apiInstance = apiConfig();
        return apiInstance.post("addTask.php",body);
    }
    // api get detail task
   const getDetailTask=(taskId)=>{
       const apiInstance = apiConfig();
       return apiInstance.get(`getDetailTask.php?taskId=${taskId}`);
   }
    // api láy file đính kèm của task
    const getFileAttach=(taskId)=>{
        const apiInstance = apiConfig();
        return apiInstance.get(`getAllFileAttach.php?taskId=${taskId}`);
    }
    // api láy file đính kèm của task
    const getCommentTask=(taskId, offset)=>{
        console.log("gọi api get comment:"+taskId+" , "+ offset)
        const apiInstance = apiConfig();
        return apiInstance.post('getAllCommentTask.php',{
            taskId:taskId,
            offset:offset
        });
    }
    const addCommentTask=(taskId, content, createUser)=>{
        const apiInstance = apiConfig();
        return apiInstance.post('addComment.php',{
            taskId:taskId,
            content:content,
            createUser:createUser

        });
    }
    const getProfileUser=(userId)=>{
        const apiInstance = apiConfig();
        return apiInstance.get(`getProfileUser.php?userId=${userId}`);
    }


    //NamLTc: Trả về các hàm api để lớp action gọi tới
    return {
        apiConfig,
        getTemplateComment,
        login,
        getCommentTask,
        addTask,
        getDetailTask,
        getFileAttach,
        addCommentTask,
      getProfileUser

    };
};
export default Api;
