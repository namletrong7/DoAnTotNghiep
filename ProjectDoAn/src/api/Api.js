
import axios from 'axios';




// Tạo một instance của Axios với các cấu hình mặc định
const Api = (baseURL, token) => {

    //Hàm tạo header
    const apiConfig = () => {
        return axios.create({
            baseURL: baseURL,
            headers: {
                'Content-Type': 'application/json',
                // Thêm các headers khác nếu cần thiết
            },
            timeout: 20000, // Timeout là 10 giây
        });
    }

    // Api test
    const getTemplateComment=()=> {
        const apiInstance = apiConfig(baseURL);
        return apiInstance.get("/Document/GetTemplateComments");
    }
    // Api test
    const login=(body)=> {
        const apiInstance = apiConfig(baseURL);
        return apiInstance.post("/auth/login",body);
    }

    //NamLTc: Trả về các hàm api để lớp action gọi tới
    return {
        apiConfig,
        getTemplateComment,
        login
    };
};
export default Api;
