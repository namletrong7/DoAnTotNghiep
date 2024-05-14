import React, {useEffect, useState} from "react";
import styles from './ListProduct.modules.scss';
import classNames from "classnames/bind";
import ItemProduct from "../../component/itemProduct/ItemProduct";
import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const cx = classNames.bind(styles);

function ListProduct(props) {


    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();

    const [currentPageNumber, setCurrentPageNumber] = useState('0');
    const sortBy = 'name';

    return (
        <div className={cx('listProduct')}>
            <div className={cx('categoryLists')}>
            </div>

            <div className={cx('listCategoryProduct')}>
                <div className={cx('categoryProductH')}>
                    <div className={cx('categoryProductHT')}>Điện thoại</div>
                </div>

                <div className={cx('flex')}>
                </div>
            </div>
        </div>
    )
}

export default ListProduct;
