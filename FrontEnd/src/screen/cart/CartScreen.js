import React, {useEffect, useState} from "react";
import styles from './CartScreen.module.scss';
import classNames from "classnames/bind";
import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const cx = classNames.bind(styles);

function CartScreen (props) {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();

    const [totalPrice, setTotalPrice] = useState(0);
    const [resetView, setResetView] = useState();

    const listCart = useSelector(state => state.reducerCart.listCart);

    const incrementQuantity = (item) => {
        item.quantity++;
        setResetView(!resetView);
    };

    const decrementQuantity = (item) => {
        if ( item.quantity > 1) {
            item.quantity--;
            setResetView(!resetView);
        }
    };

    const handleQuantity = (event, item) => {
        item.quantity = (parseInt(event.target.value, 10));
        setResetView(!resetView);
    }

    const handleToDetailProduct = () => {
        navigate('/screen/productDetail/DetailProduct');
    }

    const handleToHome = () => {
        navigate('/');
    }

    const handlePay = () => {
        navigate('/screen/pay/PayScreen')
    }

    const handleDelete = (i) => {
        // listCart.splice(i, 1);
        // dispatch(actionDeleteProduct(listCart));
        // setResetView(!resetView);
    }

    useEffect(() => {
        // let totalPriceTmp = 0
        // listCart.map(item => {
        //     totalPriceTmp += (item.quantity * item.price);
        // })
        // setTotalPrice(totalPriceTmp);
    }, [resetView])

    return (
        <div className={cx('cart')}>
        </div>
    )
}

export default CartScreen;
