import axios from 'axios';

const Api = (isFormData) => {
    const api = axios.create({
        baseURL: 'http://192.168.1.107:8080/DOAN/API_WEB/',
        headers: {
            'Content-Type': isFormData?'multipart/form-data':'application/json',

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
    const editJobtitle=(content,jobtitleId)=> {
        return api.get("editJobtitle.php",{
            params:{
                content:content,
                jobtitleId:jobtitleId,

            }
        });
    }

    const addJobtitle=(content)=> {
        return api.get("addJobtitle.php",{
            params:{
                content:content,
            }
        });
    }
    const editDepartment=(content,departmentId)=> {
        return api.get("editDepartment.php",{
            params:{
                content:content,
                departmentId:departmentId,

            }
        });
    }
    const addDepartment=(content,departmentId)=> {
        return api.get("addDepartment.php",{
            params:{
                content:content,
            }
        });
    }
    const editUser=(body)=> {
        return api.post("editUser.php",body);
    }
    return {
        getListEmployee,getDepartMent,getJobtitle,editJobtitle,addJobtitle,editDepartment,addDepartment,editUser
    };
};

export default Api;
