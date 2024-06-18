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
import 'react-native-gesture-handler';
import 'react-native-reanimated'
import { enableFreeze } from 'react-native-screens';
enableFreeze(true);



const App = () => {
  const [isShow, setIsShow] = useState(true);
  useEffect(()=>{
    // yêu cầu quyền đọc ghi file
    requestUserPermission()
    requestStoragePermission()

    const timerId = setTimeout(() => {
      setIsShow(false)
    }, 5000);


    return () => clearTimeout(timerId);
  },[])


  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <AppNavigator/>
          <FlashMessage position="top" style={{height:100,  alignItems:"flex-end"}} />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
