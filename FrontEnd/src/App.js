import React from "react";
import HeaderAdmin from "./component/headerAdmin/HeaderAdmin";
import {useSelector} from "react-redux";
import {ToastContainer} from "react-toastify";
import LoginScreen from "./screen/authen/LoginScreen";

function App() {

   const isLogin = useSelector(state => state.reducerAuth?.isLogin);

    return (
        <div className="App">
            {isLogin?<HeaderAdmin/>: <LoginScreen/>}
        </div>
    );
}

export default App;
