import React, { useEffect, useState } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { Provider } from 'react-redux';
import { store, persistor } from "./src/redux-store/reducers";
import { PersistGate } from "redux-persist/integration/react";

import {requestStoragePermission, requestUserPermission} from "./src/utils/getPermisson";

import AppNavigator from "./src/navigation/AppNavigator";

import FlashMessage from "react-native-flash-message";
import FilterTaskScreen from "./src/screens/taskStack/FilterTaskScreen";
import SplashScreen from "./src/screens/SplashScreen";




const App = () => {
  const [isShow, setIsShow] = useState(true);
  useEffect(()=>{
    // yêu cầu quyền đọc ghi file
    requestUserPermission()
    requestStoragePermission()

    const timerId = setTimeout(() => {
      setIsShow(false)
    }, 3000);


    return () => clearTimeout(timerId);
  },[])


  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          {
            isShow?<SplashScreen/>:    <AppNavigator/>
          }

          <FlashMessage position="top" style={{height:100,  alignItems:"flex-end"}} />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
