import React, {useEffect} from "react";
import styles from './HeaderAdmin.module.scss';
import classNames from "classnames/bind";
import {BrowserRouter as Router, Link, Route, Routes,Navigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import EmployeeManagerScreen from "../../screen/Admin/Employee/EmployeeManagerScreen";
import DepartmentManagerScreen from "../../screen/Admin/Department/DepartmentManagerScreen";
import JobtitleManagerScreen from "../../screen/Admin/Jobtitle/JobtitleManagerScreen";
import {actionGetListDepartment} from "../../redux-store/action/actionDepartment";
import {actionGetListJobtitle} from "../../redux-store/action/actionJobtitle";
import {actionLogout} from "../../redux-store/action/actionAuth";

const cx = classNames.bind(styles);

function HeaderAdmin () {

    const dispatch = useDispatch();

    const handleLogout = () => {
     dispatch(actionLogout())
    }
  useEffect(()=>{
       dispatch(actionGetListDepartment())
       dispatch(actionGetListJobtitle())
      console.log('reset lai toan bo trang')
  },[])
    return (
        <Router>
            <div id='headerAdmin' className={cx('headerAdmin')} >
                <ul className={cx('headerAdminList')} >

                    <li className={cx('item')} >
                        <Link to="/admin/EmployeeManagerScreen" className={cx('flex')}>
                            <i className={cx('bx bx-purchase-tag', 'iconArrowR')}></i>
                            <div className={cx('colorW')}>Quản Lý Nhân Viên</div>
                            <i className={cx('bx bx-chevron-right', 'iconArrowR')} />
                        </Link>
                    </li>

                    <li className={cx('item')} >
                        <Link to="/admin/DepartmentManagerScreen" className={cx('flex')}>
                            <i className={cx('bx bx-purchase-tag', 'iconArrowR')}></i>
                            <div className={cx('colorW')}>Quản Lý Phòng Ban</div>
                            <i className={cx('bx bx-chevron-right', 'iconArrowR')} />
                        </Link>
                    </li>

                    <li className={cx('item')} >
                        <Link onClick={()=>{console.log("nam test")}} to="/admin/JobtitleManagerScreen" className={cx('flex')}>
                            <i className={cx('bx bx-user-circle', 'iconArrowR')}></i>
                            <div className={cx('colorW')}>Quản Lý Chuyên Môn</div>
                            <i className={cx('bx bx-chevron-right', 'iconArrowR')} />
                        </Link>
                    </li>

                    <li className={cx('item')} onClick={handleLogout}>
                        <Link to="/" className={cx('flex')}>
                            <i className={cx('bx bx-log-out', 'iconArrowR')}></i>
                            <div className={cx('colorW')}>Thoát</div>
                        </Link>
                    </li>
                </ul>
            </div>

            <Routes>
            <Route path="/admin" element={<Navigate to="/admin/EmployeeManagerScreen" />} />
            <Route path="/admin/EmployeeManagerScreen" element={<EmployeeManagerScreen />} />
            <Route path="/admin/DepartmentManagerScreen" element={<DepartmentManagerScreen />} />
            <Route path="/admin/JobtitleManagerScreen" element={<JobtitleManagerScreen />} />
        </Routes>

        </Router>
    )
}

export default HeaderAdmin;
