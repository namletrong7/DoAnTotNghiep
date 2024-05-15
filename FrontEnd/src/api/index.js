import axios from 'axios';

const Api = () => {
    const api = axios.create({
        baseURL: 'http://192.168.1.108:8080/DOAN/API_WEB/',
        headers: {
            'Content-Type': 'application/json',
        },
        timeout: 20000,
    });

    // api lấy danh sách nhân viên
    const getListEmployee=()=> {
        return api.get("getListEmployee.php");
    }
    // api lấy danh sách phòng ban
    const getDepartMent=()=> {
        return api.get("getDepartMent.php");
    }
    // api lấy danh sách chuyên môn
    const getJobtitle=()=> {
        return api.get("getJobtitle.php");
    }


    return {
        getListEmployee,getDepartMent,getJobtitle
    };
};

export default Api;
