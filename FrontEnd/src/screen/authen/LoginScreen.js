import React, {useCallback, useState} from "react";
import { useNavigate } from 'react-router-dom';

import classNames from "classnames/bind";
import styles from "./style.module.scss";
import {useDispatch} from "react-redux";
import {Player} from "@lottiefiles/react-lottie-player";
import {actionLogin} from "../../redux-store/action/actionAuth";

const cx = classNames.bind(styles)

function LoginScreen ( props ) {

    // const navigate = useNavigate();
   const dispatch = useDispatch();

    const [showLogin, setShowLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleForget = () => {
        setShowLogin(!showLogin);
    }

    // const nextToScreen = (url) => {
    //     navigate(url);
    // };
    //
    // const handleRegister = () => {
    //     navigate('/screen/authen/RegisterScreen');
    // };



    const loginAction = async () => {
     await dispatch(actionLogin(email, password));
        console.log("xin chào")
    }


    return (
        <div className={cx('login')} >
                <div style={style.container}>
                    <div className={cx('w70', 'item')} >
                        <h4>ĐĂNG NHẬP</h4>
                        <p>Nếu bạn có một tài khoản, xin vui lòng đăng nhập.</p>
                        <h4>Tên đăng nhập</h4>
                        <input className={cx('input', 'w70')} placeholder={'Nhập tên đăng nhập'} value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                        <h4>Mật khẩu</h4>
                        <input className={cx('input', 'w70')} placeholder={'Nhập Password'} value={password} onChange={(e)=>{setPassword(e.target.value)}} type={'password'}/>
                        <p onClick={handleForget} className={cx('cursorP')} >Quên mật khẩu ?</p>
                        <div className={cx('btn', 'w40')} onClick={loginAction} >ĐĂNG NHẬP</div>
                    </div>
                    <Player
                        autoplay
                        loop
                        src={require("../../assets/animation/work_space.json")}
                        style={{ flex:1 }}
                    />
                </div>


        </div>
    )
}

export default LoginScreen;
const style = {
      container:{
          display:'flex',
          marginTop:"5%",
          width:"70%",
          alignSelf:'center',
          backgroundColor:"#CCCCCC",
          marginRight:"10%",
          borderRadius:10,
          borderWidth:10,
          borderColor:"red"
      },
    lottie:{
          backgroundColor: "red",
        display: 'flex',
       flex:1
    }
};
