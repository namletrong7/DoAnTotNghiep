import React, {useCallback, useEffect, useMemo, useState} from "react";
import styles from './JobtitleManager.module.scss';
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
import {actionGetListDepartment} from "../../../redux-store/action/actionDepartment";
import {actionDeleteJobtitle, actionGetListJobtitle} from "../../../redux-store/action/actionJobtitle";
import {ModalEditJobtitle} from "../../../component/ModalEditJobtitle/ModalEditJobtitle";
import {ModalAddJobtitle} from "../../../component/ModalAddJobtitle/ModalAddJobtitle";


const cx = classNames.bind(styles);



function JobtitleManagerScreen (props) {
    const  [isShowModalEditJobtitle , setIsShowModalEditJobtitle] = useState(false);
    const  [isShowModalDeleteJobtitle , setIsShowModalDeleteJobtitle] = useState(false);
    const  [isShowModalAddJobtitle , setIsShowModalAddJobtitle] = useState(false);
    const  [itemSelected , setItemSelected] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [textSearch, setTextSearch] = useState('');
//    const [selectedOption, setSelectedOption] = useState('');
    const isGetListJobtitle = useSelector(state => state.reducerJobtitle?.isGetListJobtitle);
    const dataListJobtitle = useSelector(state => state.reducerJobtitle?.dataListJobtitle);
    console.log(dataListJobtitle)
    const handleSearch = (e) => {
        setTextSearch(e.target.value)
    }

  //  const handleOptionChange = (event) => {
    //     setSelectedOption(event.target.value);
    // };

    // const handleToEditProductKhoHangAdminScreen = (item) => {
    //     const editSanPham = true;
    //
    //     navigate(`/admin/EditProductKhoHangAdminScreen/${item.idProduct}`, {
    //         state: { editSanPham },
    //     });
    // }

    const onCloseModalDeleteJobtitle=useCallback(()=>{
        setIsShowModalDeleteJobtitle(false)
    },[])


    const handleOpenEditJobtitle=useCallback(async (item) => {
        await setItemSelected(item)
        console.log(item)
        setIsShowModalEditJobtitle(true)
    },[])
    const handleCloseEditJobtitle=useCallback( () => {
        setIsShowModalEditJobtitle(false)
    },[])
    const handleOpenModalDeleteJobtitle=useCallback(async (item) => {
        await setItemSelected(item)
        setIsShowModalDeleteJobtitle(true)
    },[])


    const handleOpenAddJobtitle=useCallback( () => {
        setIsShowModalAddJobtitle(true)
    },[])
    const handleCloseAddJobtitle=useCallback( () => {
        setIsShowModalAddJobtitle(false)
    },[])
    const fetchData = async () => {
      dispatch(actionGetListJobtitle())
       // console.log('mout lai man hinh chuyen mon')
    };

    const handleDelete=()=>{
        setIsShowModalDeleteJobtitle(false)
        dispatch(actionDeleteJobtitle(itemSelected?.jobtitleId))
    }
  useEffect(()=>{
       fetchData()
  },[])
    return (
        <div className={cx('QLHangHoaScreen')}>
            <div className={cx('fixed')}>
                <div className={cx('headerQl', 'flex')}>
                    <i className={cx('bx bx-menu', 'iconMenu')}></i>
                    <div>QUẢN LÝ CHUYÊN MÔN</div>
                </div>

                <div className={cx('flex', 'searchUser')}>
                    <div className={cx('borderSearch', 'flex')}>
                        <input className={cx('searchInput')} onChange={handleSearch} placeholder={'Nhập nội dung tìm kiếm'} value={textSearch}/>
                        <i className={cx('bx bx-search', 'iconSearch')}></i>
                    </div>
                </div>


                <div onClick={handleOpenAddJobtitle} className={cx('btn', 'addSp')}>Thêm chuyên môn</div>
            </div>
            <div className={cx('body')}>
                {isGetListJobtitle?<LoadingComponent/>:
                <div className={cx('relative')}>
                    <table border="1" cellPadding="1" cellSpacing="1" className={cx('tableKH')}>
                        <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên chuyên môn</th>
                            <th style={{width:100}}>Thao tác</th>
                        </tr>
                        </thead>

                        <tbody>
                        {dataListJobtitle?.map((item,index) => (
                            <tr>
                                <td>
                                    <div className={styles.nameProduct}>{index}</div>
                                </td>
                                <td>
                                    <div className={styles.nameProduct}>{item?.jobtitleName}</div>
                                </td>
                                <td className={cx('iconList')}>
                                    <i className={cx('bx bx-show-alt', 'iconShow')}></i>
                                    <i className={cx('bx bxs-pencil', 'iconEdit')} onClick={()=>{handleOpenEditJobtitle(item)}}></i>
                                    <i className={cx('bx bx-trash', 'iconTrash')}  onClick={() => handleOpenModalDeleteJobtitle(item)}></i>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>}

            </div>
             <ModalComfirm content={"Bạn có đồng ý xóa phòng ban: "+itemSelected?.jobtitleName} onClose={onCloseModalDeleteJobtitle} isVisible={isShowModalDeleteJobtitle} onConfirm={handleDelete}/>
             <ModalAddJobtitle isVisible={isShowModalAddJobtitle} onClose={handleCloseAddJobtitle}/>
             <ModalEditJobtitle item={itemSelected} isVisible={isShowModalEditJobtitle} onClose={handleCloseEditJobtitle}/>


        </div>
    )
}


export default React.memo(JobtitleManagerScreen);
