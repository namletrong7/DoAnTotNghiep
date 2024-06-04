import React from "react";
import HeaderComponent from "./component/headerComponent/HeaderComponent";
import HeaderAdmin from "./component/headerAdmin/HeaderAdmin";
import {useSelector} from "react-redux";
import {ToastContainer} from "react-toastify";
import LoginScreen from "./screen/authen/LoginScreen";

function App() {

  //  const isAdmin = useSelector(state => state.reducerAuth.admin);

    return (
        <div className="App">
            <ToastContainer />
            <LoginScreen/>
        </div>
    );
}

export default App;
