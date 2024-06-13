import React, {useEffect, useState} from "react";
import HeaderAdmin from "./component/headerAdmin/HeaderAdmin";
import {useDispatch, useSelector} from "react-redux";
import {ToastContainer} from "react-toastify";
import LoginScreen from "./screen/authen/LoginScreen";
import {ISLOGIN} from "./unitl/constant";
import {actionCheckLogged} from "./redux-store/action/actionAuth";

function App() {

    const isLogin = useSelector(state => state.reducerAuth?.isLogin);



    return (
        <div className="App">
            {isLogin?<HeaderAdmin/>: <LoginScreen/>}
        </div>
    );
}

export default App;
