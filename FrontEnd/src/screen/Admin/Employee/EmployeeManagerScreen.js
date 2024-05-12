import React, {useCallback, useMemo, useState} from "react";
import styles from './EmployeeManager.module.css';
import classNames from "classnames/bind";
import {formatPrice} from "../../../unitl";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {baseUrlAvatarUser} from "../../../api/ConstBaseUrl";
import {getValuePositionLevel} from "../../../unitl/GetValuePosition";
import * as PropTypes from "prop-types";
import IconClose from "../../../assets/icon/IconClose";
import {Player} from "@lottiefiles/react-lottie-player";

import reducerEmployee from "../../../redux-store/reducer/reducerEmployee";
import {actionLogout} from "../../../redux-store/action/actionEmployee";
import {toast} from "react-toastify";
import {ModalEditEmployee} from "../../../component/ModallEditEmployee/ModalEditEmployee";

const cx = classNames.bind(styles);



function EmployeeManagerScreen (props) {
    const  [isShowModalEditUser , setIsShowModalEditUser] = useState(false);
    const  [itemSelected , setItemSelected] = useState({});
    const dataListTypeProduct = [
        {
            id: 1,
            name: 'iPhone XS',
        },
        {
            id: 2,
            name: 'iPhone 12',
        }
    ]
    const dataListEmployee = useMemo(()=>[
        {
            "userId": "1",
            "userName": "namltc",
            "firstName": "John",
            "lastName": "Doe",
            "fullName": "Lê Trọng Nam",
            "email": "john.doe@example.com",
            "phoneNumber": "123456789",
            "gender": "1",
            "isActive": "1",
            "passWord": "password123",
            "createdByUserid": "admin_user",
            "avatarUser": "namltc.png",
            "positionLevel": "2",
            "birthDay": "1990-01-01 00:00:00",
            "isAdmin": "1",
            "jobtitleName": "Chuyên viên phân tích dữ liệu",
            "departmentName": "Phòng phát triển hệ thống"
        },
        {
            "userId": "2",
            "userName": "sonntt",
            "firstName": "John",
            "lastName": "Doe",
            "fullName": "Nguyễn Trần Thanh Sơn",
            "email": "sonntt@KMA.com",
            "phoneNumber": "123456789",
            "gender": "1",
            "isActive": "1",
            "passWord": "123456a@",
            "createdByUserid": "admin_user",
            "avatarUser": "avatar.jpg",
            "positionLevel": "2",
            "birthDay": "1990-01-01 00:00:00",
            "isAdmin": "1",
            "jobtitleName": "Chuyên viên phân tích dữ liệu",
            "departmentName": "Phòng hành chính nhân sự"
        },
        {
            "userId": "3",
            "userName": "hantk",
            "firstName": "nguyễn thị kim ",
            "lastName": "hà ",
            "fullName": "nguyễn thị kim hà",
            "email": "hantk@gmail.com",
            "phoneNumber": "0337356550",
            "gender": "1",
            "isActive": "1",
            "passWord": "123456",
            "createdByUserid": "1",
            "avatarUser": "avatar.jpg",
            "positionLevel": "3",
            "birthDay": "2024-03-28 14:31:08",
            "isAdmin": "0",
            "jobtitleName": "Sales Representative",
            "departmentName": "Phòng phát triển hệ thống"
        },
        {
            "userId": "0",
            "userName": "anhvtd",
            "firstName": "vũ thi ",
            "lastName": "hà",
            "fullName": "Vũ đình tuấn anh",
            "email": "anhvtd@gmail.com",
            "phoneNumber": "037356450",
            "gender": "0",
            "isActive": "0",
            "passWord": "123456",
            "createdByUserid": "1",
            "avatarUser": "anhvtd.png",
            "positionLevel": "3",
            "birthDay": "2024-03-28 14:31:08",
            "isAdmin": "1",
            "jobtitleName": "Chuyên viên phân tích dữ liệu",
            "departmentName": "Phòng phát triển hệ thống"
        },
        {
            "userId": "5",
            "userName": "tienbv",
            "firstName": "tien",
            "lastName": "bui",
            "fullName": "Bùi Văn Tiến",
            "email": "sonntt@KMA.com",
            "phoneNumber": "0337356550",
            "gender": "0",
            "isActive": "1",
            "passWord": "123456",
            "createdByUserid": "1",
            "avatarUser": "tuananh.jpg",
            "positionLevel": "0",
            "birthDay": "2024-03-28 14:31:08",
            "isAdmin": "0",
            "jobtitleName": "Sales Representative",
            "departmentName": "Phòng hành chính nhân sự"
        },
        {
            "userId": "6",
            "userName": "anhptp",
            "firstName": "vũ thi ",
            "lastName": "hà",
            "fullName": "phạm thị phương anh",
            "email": "anhvtd@gmail.com",
            "phoneNumber": "037356450",
            "gender": "0",
            "isActive": "0",
            "passWord": "123456",
            "createdByUserid": "1",
            "avatarUser": "anhvtd.png",
            "positionLevel": "3",
            "birthDay": "2024-03-28 14:31:08",
            "isAdmin": "1",
            "jobtitleName": null,
            "departmentName": null
        },
        {
            "userId": "7",
            "userName": "DucNgV",
            "firstName": "John",
            "lastName": "Doe",
            "fullName": "nguyễn văn Đức",
            "email": "john.doe@example.com",
            "phoneNumber": "123456789",
            "gender": "1",
            "isActive": "1",
            "passWord": "password123",
            "createdByUserid": "admin_user",
            "avatarUser": "namltc.png",
            "positionLevel": "2",
            "birthDay": "1990-01-01 00:00:00",
            "isAdmin": "1",
            "jobtitleName": null,
            "departmentName": null
        },
        {
            "userId": "8",
            "userName": "ThơmTT",
            "firstName": "John",
            "lastName": "Doe",
            "fullName": "Tạ thị thơm",
            "email": "sonntt@KMA.com",
            "phoneNumber": "123456789",
            "gender": "1",
            "isActive": "1",
            "passWord": "123456a@",
            "createdByUserid": "admin_user",
            "avatarUser": "avatar.jpg",
            "positionLevel": "2",
            "birthDay": "1990-01-01 00:00:00",
            "isAdmin": "1",
            "jobtitleName": null,
            "departmentName": null
        },
        {
            "userId": "9",
            "userName": "HuongHT",
            "firstName": "nguyễn thị kim ",
            "lastName": "hà ",
            "fullName": "Hoàng thị hường",
            "email": "hantk@gmail.com",
            "phoneNumber": "0337356550",
            "gender": "1",
            "isActive": "1",
            "passWord": "123456",
            "createdByUserid": "1",
            "avatarUser": "avatar.jpg",
            "positionLevel": "3",
            "birthDay": "2024-03-28 14:31:08",
            "isAdmin": "0",
            "jobtitleName": null,
            "departmentName": null
        },
        {
            "userId": "10",
            "userName": "NhiNT",
            "firstName": "tien",
            "lastName": "bui",
            "fullName": "nguyễn thị nhị",
            "email": "sonntt@KMA.com",
            "phoneNumber": "0337356550",
            "gender": "0",
            "isActive": "1",
            "passWord": "123456",
            "createdByUserid": "1",
            "avatarUser": "tuananh.jpg",
            "positionLevel": "0",
            "birthDay": "2024-03-28 14:31:08",
            "isAdmin": "0",
            "jobtitleName": null,
            "departmentName": null
        },
        {
            "userId": "11",
            "userName": "AnhTT",
            "firstName": "vũ thi ",
            "lastName": "hà",
            "fullName": "trịnh thị anh",
            "email": "anhvtd@gmail.com",
            "phoneNumber": "037356450",
            "gender": "0",
            "isActive": "0",
            "passWord": "123456",
            "createdByUserid": "1",
            "avatarUser": "anhvtd.png",
            "positionLevel": "3",
            "birthDay": "2024-03-28 14:31:08",
            "isAdmin": "1",
            "jobtitleName": null,
            "departmentName": null
        },
        {
            "userId": "12",
            "userName": "DungVT",
            "firstName": "John",
            "lastName": "Doe",
            "fullName": "vương thị dung",
            "email": "john.doe@example.com",
            "phoneNumber": "123456789",
            "gender": "1",
            "isActive": "1",
            "passWord": "password123",
            "createdByUserid": "admin_user",
            "avatarUser": "namltc.png",
            "positionLevel": "2",
            "birthDay": "1990-01-01 00:00:00",
            "isAdmin": "1",
            "jobtitleName": null,
            "departmentName": null
        },
        {
            "userId": "13",
            "userName": "GiangVT",
            "firstName": "John",
            "lastName": "Doe",
            "fullName": "Vũ thị giang",
            "email": "sonntt@KMA.com",
            "phoneNumber": "123456789",
            "gender": "1",
            "isActive": "1",
            "passWord": "123456a@",
            "createdByUserid": "admin_user",
            "avatarUser": "avatar.jpg",
            "positionLevel": "2",
            "birthDay": "1990-01-01 00:00:00",
            "isAdmin": "1",
            "jobtitleName": null,
            "departmentName": null
        },
        {
            "userId": "14",
            "userName": "LinhNV",
            "firstName": "nguyễn thị kim ",
            "lastName": "hà ",
            "fullName": "nguyễn văn linh",
            "email": "hantk@gmail.com",
            "phoneNumber": "0337356550",
            "gender": "1",
            "isActive": "1",
            "passWord": "123456",
            "createdByUserid": "1",
            "avatarUser": "avatar.jpg",
            "positionLevel": "3",
            "birthDay": "2024-03-28 14:31:08",
            "isAdmin": "0",
            "jobtitleName": null,
            "departmentName": null
        },
        {
            "userId": "15",
            "userName": "ThaoLTp",
            "firstName": "tien",
            "lastName": "bui",
            "fullName": "Lại Thi Phương Thảo",
            "email": "sonntt@KMA.com",
            "phoneNumber": "0337356550",
            "gender": "0",
            "isActive": "1",
            "passWord": "123456",
            "createdByUserid": "1",
            "avatarUser": "tuananh.jpg",
            "positionLevel": "0",
            "birthDay": "2024-03-28 14:31:08",
            "isAdmin": "0",
            "jobtitleName": null,
            "departmentName": null
        }
    ],[])
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [textSearch, setTextSearch] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const dataList = useSelector(state => state.reducerEmployee.dataListEmployee);

    const handleSearch = (e) => {
        setTextSearch(e.target.value)
    }

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleToEditProductKhoHangAdminScreen = (item) => {
        const editSanPham = true;

        navigate(`/admin/EditProductKhoHangAdminScreen/${item.idProduct}`, {
            state: { editSanPham },
        });
    }
    const onCloseEditEmployee=useCallback(()=>{
        setIsShowModalEditUser(false)
    },[])

    const showToast = () => {
        toast.success("successful");
    };
    const handleEditEmployee=useCallback((item)=>{
        setItemSelected(item)
        setIsShowModalEditUser(true)
    },[])
    // modal hiển thị edit thông tin nhân viên
    return (
        <div className={cx('QLHangHoaScreen')}>
            <div className={cx('fixed')}>
                <div className={cx('headerQl', 'flex')}>
                    <i className={cx('bx bx-menu', 'iconMenu')}></i>
                    <div>QUẢN LÝ NHÂN VIÊN</div>
                </div>

                <div className={cx('flex', 'searchUser')}>
                    <div className={cx('borderSearch', 'flex')}>
                        <input className={cx('searchInput')} onChange={handleSearch} placeholder={'Nhập nội dung tìm kiếm'} value={textSearch}/>
                        <i className={cx('bx bx-search', 'iconSearch')}></i>
                    </div>
                </div>

                <div>
                    <select value={selectedOption} onChange={handleOptionChange} className={cx('selectListProduct')}>
                        {dataListTypeProduct.map(item => (
                            <option value={item.id} >{item.name}</option>
                        ))}
                    </select>
                </div>

                <div onClick={showToast} className={cx('btn', 'addSp')}>Thêm nhân viên</div>
            </div>
            <div className={cx('body')}>
                <div className={cx('relative')}>
                    <table border="1" cellPadding="1" cellSpacing="1" className={cx('tableKH')}>
                        <thead>
                        <tr>
                            <th>Ảnh đại diện</th>
                            <th>User name</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Số điện thoại</th>
                            <th>Giới tính</th>
                            <th>Chuyên môn</th>
                            <th>phòng ban</th>
                            <th>Chức vụ</th>
                            <th style={{width:100}}></th>
                        </tr>
                        </thead>

                        <tbody>
                        {dataListEmployee.map(item => (
                            <tr>
                                <td>
                                    <img src={baseUrlAvatarUser+item?.avatarUser} style={{width:100, height:100, borderRadius:100/2}} alt={'ảnh nhân viên'} />
                                </td>
                                <td>
                                    <div className={styles.nameProduct}>{item?.userName}</div>
                                </td>
                                <td>
                                    <div className={styles.nameProduct}>{item?.firstName}</div>
                                </td>
                                <td>
                                    <div className={styles.nameProduct}>{item?.lastName}</div>
                                </td>
                                <td>
                                    <div className={styles.nameProduct}>{item?.email}</div>
                                </td>
                                <td>
                                    <div className={styles.nameProduct}>{item?.phoneNumber}</div>
                                </td>
                                <td>
                                    <div className={styles.nameProduct}>{item?.gender==0?'Nam':'Nữ'}</div>
                                </td>
                                <td>
                                    <div className={styles.nameProduct}>{item?.jobtitleName || "Chưa có thông tin"}</div>
                                </td>
                                <td>
                                    <div className={styles.nameProduct}>{item?.departmentName || "Chưa có thông tin"}</div>
                                </td>
                                <td>
                                    <div className={styles.nameProduct}>{getValuePositionLevel(item?.positionLevel)}</div>
                                </td>
                                <td className={cx('iconList')}>
                                    <i className={cx('bx bx-show-alt', 'iconShow')} onClick={() => handleToEditProductKhoHangAdminScreen(item)}></i>
                                    <i className={cx('bx bxs-pencil', 'iconEdit')} onClick={()=>{handleEditEmployee(item)}}></i>
                                    <i className={cx('bx bx-trash', 'iconTrash')}></i>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

            </div>
            <ModalEditEmployee item={itemSelected} isShowModalEditUser={isShowModalEditUser} onClose={onCloseEditEmployee}/>

        </div>
    )
}


export default EmployeeManagerScreen;
