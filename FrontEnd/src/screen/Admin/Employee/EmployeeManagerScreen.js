import React, {useCallback, useEffect, useMemo, useState} from "react";
import styles from './EmployeeManager.module.scss';
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
import {actionGetListEmployee, actionLogout} from "../../../redux-store/action/actionEmployee";
import {toast} from "react-toastify";
import {ModalComfirm} from "../../../component/ModalConfirm/ModalComfirm";
import axios from "axios";
import {ModalEditEmployee} from "../../../component/ModallEditEmployee/ModalEditEmployee";
import {LoadingComponent} from "../../../component/LoadingComponent/LoadingComponent";
import Api from "../../../api";


const cx = classNames.bind(styles);



function EmployeeManagerScreen (props) {
    const  [isShowModalEditUser , setIsShowModalEditUser] = useState(false);
    const  [isShowModalDeleteEmployee , setIsShowModalDeleteEmployee] = useState(false);
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
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [textSearch, setTextSearch] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const dataListEmployee = useSelector(state => state.reducerEmployee?.dataListEmployee);
    const isGetListEmployee = useSelector(state => state.reducerEmployee?.isGetListEmployee);

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
    const onCloseModalDeleteEmployee=useCallback(()=>{
        setIsShowModalDeleteEmployee(false)
    },[])

    const showToast = () => {
        toast.success("successful");
    };
    const handleOpenEditEmployee=useCallback(async (item) => {
        await setItemSelected(item)
        setIsShowModalEditUser(true)
    },[])
    const handleOpenModalDeleteEmployee=useCallback(async (item) => {
        await setItemSelected(item)
        setIsShowModalDeleteEmployee(true)
    },[])
    const fetchData =  () => {
      dispatch(actionGetListEmployee())
    };
  useEffect(()=>{
       fetchData()
  },[])
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
                    {isGetListEmployee?  <LoadingComponent/>:
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
                            <th style={{width:100}}>Thao tác</th>
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
                                    <i className={cx('bx bx-show-alt', 'iconShow')}></i>
                                    <i className={cx('bx bxs-pencil', 'iconEdit')} onClick={()=>{handleOpenEditEmployee(item)}}></i>
                                    <i className={cx('bx bx-trash', 'iconTrash')}  onClick={() => handleOpenModalDeleteEmployee(item)}></i>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>}
                </div>

            </div>
            <ModalEditEmployee item={itemSelected} isShowModalEditUser={isShowModalEditUser} onClose={onCloseEditEmployee}/>
            <ModalComfirm content={"Bạn có đồng ý xóa nhân viên: "+itemSelected?.userName} onClose={onCloseModalDeleteEmployee} isVisible={isShowModalDeleteEmployee}/>

        </div>
    )
}


export default React.memo(EmployeeManagerScreen);
