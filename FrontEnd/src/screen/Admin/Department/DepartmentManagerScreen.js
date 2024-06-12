import React, {useCallback, useEffect, useMemo, useState} from "react";
import styles from './DepartmentManager.module.scss';
import classNames from "classnames/bind";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {toast} from "react-toastify";
import axios from "axios";
import {ModalEditEmployee} from "../../../component/ModallEditEmployee/ModalEditEmployee";
import {LoadingComponent} from "../../../component/LoadingComponent/LoadingComponent";
import {ModalComfirm} from "../../../component/ModalConfirm/ModalComfirm";
import {ModalAddDepartment} from "../../../component/ModalAddDepartment/ModalAddDepartment";
import {ModalEditDepartment} from "../../../component/ModalEditDepartment/ModalEditDepartment";
import {actionDeleteDepartment, actionGetListDepartment} from "../../../redux-store/action/actionDepartment";


const cx = classNames.bind(styles);



function DepartmentManagerScreen (props) {
    const  [isShowModalEditDepartment , setIsShowModalEditDepartment] = useState(false);
    const  [isShowModalDeleteDepartment , setIsShowModalDeleteDepartment] = useState(false);
    const  [isShowModalAddDepartment , setIsShowModalAddDepartment] = useState(false);
    const  [itemSelected , setItemSelected] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [textSearch, setTextSearch] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const isGetDepartment = useSelector(state => state.reducerDepartment?.isGetDepartment);
    const dataListDepartment = useSelector(state => state.reducerDepartment?.dataListDepartment);
    console.log(dataListDepartment)
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
        setIsShowModalEditDepartment(false)
    },[])
    const onCloseModalDeletedepartment=useCallback(()=>{
        setIsShowModalDeleteDepartment(false)
    },[])

    const showToast = () => {
        toast.success("successful");
    };
    const handleOpenEditDepartment=useCallback(async (item) => {
        await setItemSelected(item)
        console.log(item)
        setIsShowModalEditDepartment(true)
    },[])
    const handleCloseEditDepartment=useCallback( () => {
        setIsShowModalEditDepartment(false)
    },[])
    const handleOpenModalDeleteDepartment=useCallback(async (item) => {
        await setItemSelected(item)
        setIsShowModalDeleteDepartment(true)
    },[])
    const handleOpenAddDepartment=useCallback( () => {
        setIsShowModalAddDepartment(true)
    },[])
    const handleCloseAddDepartment=useCallback( () => {
        setIsShowModalAddDepartment(false)
    },[])
    const fetchData = async () => {
  //    dispatch(actionGetListDepartment())
        console.log(dataListDepartment)
    };
    const handlDelete=()=>{
        setIsShowModalDeleteDepartment(false)
        dispatch(actionDeleteDepartment(itemSelected?.departmentId))
    }
  useEffect(()=>{
       fetchData()
  },[])
    return (
        <div className={cx('QLHangHoaScreen')}>
            <div className={cx('fixed')}>
                <div className={cx('headerQl', 'flex')}>
                    <i className={cx('bx bx-menu', 'iconMenu')}></i>
                    <div>QUẢN LÝ PHÒNG BAN</div>
                </div>

                <div className={cx('flex', 'searchUser')}>
                    <div className={cx('borderSearch', 'flex')}>
                        <input className={cx('searchInput')} onChange={handleSearch} placeholder={'Nhập nội dung tìm kiếm'} value={textSearch}/>
                        <i className={cx('bx bx-search', 'iconSearch')}></i>
                    </div>
                </div>


                <div onClick={handleOpenAddDepartment} className={cx('btn', 'addSp')}>Thêm phòng ban</div>
            </div>
            <div className={cx('body')}>
                {isGetDepartment?<LoadingComponent/>:
                <div className={cx('relative')}>
                    <table border="1" cellPadding="1" cellSpacing="1" className={cx('tableKH')}>
                        <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên phòng ban</th>
                            <th style={{width:100}}>Thao tác</th>
                        </tr>
                        </thead>

                        <tbody>
                        {dataListDepartment?.map((item,index) => (
                            <tr>
                                <td>
                                    <div className={styles.nameProduct}>{index}</div>
                                </td>
                                <td>
                                    <div className={styles.nameProduct}>{item?.departmentName}</div>
                                </td>
                                <td className={cx('iconList')}>
                                    <i className={cx('bx bx-show-alt', 'iconShow')}></i>
                                    <i className={cx('bx bxs-pencil', 'iconEdit')} onClick={()=>{handleOpenEditDepartment(item)}}></i>
                                    <i className={cx('bx bx-trash', 'iconTrash')}  onClick={() => handleOpenModalDeleteDepartment(item)}></i>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>}

            </div>
            <ModalComfirm content={"Bạn có đồng ý xóa phòng ban: "+itemSelected?.departmentName} onClose={onCloseModalDeletedepartment} isVisible={isShowModalDeleteDepartment} onConfirm={handlDelete}/>
             <ModalAddDepartment isVisible={isShowModalAddDepartment} onClose={handleCloseAddDepartment}/>
             <ModalEditDepartment item={itemSelected} isVisible={isShowModalEditDepartment} onClose={handleCloseEditDepartment}/>


        </div>
    )
}


export default React.memo(DepartmentManagerScreen);
