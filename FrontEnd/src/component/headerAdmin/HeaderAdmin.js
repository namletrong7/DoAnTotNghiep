import React from "react";
import styles from './HeaderAdmin.module.scss';
import classNames from "classnames/bind";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import NoPage from "../../screen/noPage/NoPage";
import {useDispatch} from "react-redux";
import {actionLogout} from "../../redux-store/action/actionEmployee";
import QLKhoHangScreen from "../../screen/Admin/qlKhoHang/QLKhoHangScreen";
import NotificationAdminScreen from "../../screen/Admin/notificationAdmin/NotificationAdminScreen";
import BillAdminScreen from "../../screen/Admin/bill/BillAdminScreen";
import DetailBillAdminScreen from "../../screen/Admin/detailBill/DetailBillAdminScreen";
import EditProductKhoHangAdminScreen from "../../screen/Admin/editProductKhoHang/EditProductKhoHangAdminScreen";
import DetailUserAdminScreen from "../../screen/Admin/detailUserAdmin/DetailUserAdminScreen";
import EmployeeManagerScreen from "../../screen/Admin/Employee/EmployeeManagerScreen";
import DepartmentManagerScreen from "../../screen/Admin/Department/DepartmentManagerScreen";

const cx = classNames.bind(styles);

function HeaderAdmin () {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(actionLogout());
    }

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
                        <Link onClick={()=>{console.log("nam test")}} to="/admin/QLUserScreen" className={cx('flex')}>
                            <i className={cx('bx bx-user-circle', 'iconArrowR')}></i>
                            <div className={cx('colorW')}>Quản Lý Chuyên Môn</div>
                            <i className={cx('bx bx-chevron-right', 'iconArrowR')} />
                        </Link>
                    </li>

                    <li className={cx('item')} >
                        <Link to="/admin/BillAdminScreen" className={cx('flex')}>
                            <i className={cx('bx bx-cart-alt', 'iconArrowR')}></i>
                            <div className={cx('colorW')}>Đơn hàng</div>
                            <i className={cx('bx bx-chevron-right', 'iconArrowR')} />
                        </Link>
                    </li>

                    <li className={cx('item')} >
                        <Link to="/admin/QLKhoHangScreen" className={cx('flex')}>
                            <i className={cx('bx bx-archive-out', 'iconArrowR')}></i>
                            <div className={cx('colorW')}>Quản lý tồn kho</div>
                            <i className={cx('bx bx-chevron-right', 'iconArrowR')} />
                        </Link>
                    </li>

                    <li className={cx('item')} >
                        <Link onClick={()=>{dispatch(actionLogout())}} to="/admin/NotificationAdminScreen" className={cx('flex')}>
                            <i className={cx('bx bx-bell', 'iconArrowR')}></i>
                            <div className={cx('colorW')}>Thông báo</div>
                            <div className={cx('numberNotification')}>( 10 )</div>
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
                <Route path="/admin/EmployeeManagerScreen" element={<EmployeeManagerScreen />} />
                <Route path="/admin/DepartmentManagerScreen" element={<DepartmentManagerScreen />} />
                <Route path="/admin/QLKhoHangScreen" element={<QLKhoHangScreen />} />
                <Route path="/admin/NotificationAdminScreen" element={<NotificationAdminScreen />} />
                <Route path="/admin/BillAdminScreen" element={<BillAdminScreen />} />
                <Route path="/admin/DetailBillAdminScreen/:id" element={<DetailBillAdminScreen />} />
                <Route path="/admin/EditProductKhoHangAdminScreen/:id" element={<EditProductKhoHangAdminScreen />} />
                <Route path="/admin/DetailUserAdminScreen/:id" element={<DetailUserAdminScreen />} />
                <Route path="*" element={<NoPage />} />
            </Routes>

        </Router>
    )
}

export default HeaderAdmin;
