
import axios from 'axios';




// Tạo một instance của Axios với các cấu hình mặc định
const Api = (isFormData) => {

    //Hàm tạo header
    const apiConfig = () => {
        return axios.create({
            baseURL: "http://192.168.1.109:8080",
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
    }
    const getCommentTask=(body)=> {
        const apiInstance = apiConfig();
        return apiInstance.post("/DOAN/getAllFileAttach.php",body);
    }
    // thêm api add task
    const addTask=(body)=> {
        const apiInstance = apiConfig();
        return apiInstance.post("/DOAN/addTask.php",body);
    }

    //NamLTc: Trả về các hàm api để lớp action gọi tới
    return {
        apiConfig,
        getTemplateComment,
        login,
        getCommentTask,
        addTask
    };
};
export default Api;
