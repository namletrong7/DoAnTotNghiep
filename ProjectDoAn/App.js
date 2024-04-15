import React, { useEffect, useState } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { Provider } from 'react-redux';
import { store, persistor } from "./src/redux-store/reducers";
import { PersistGate } from "redux-persist/integration/react";
import { DetailTaskScreen } from "./src/screens/detalTaskScreen/DetailTaskScreen";
import { AddTaskScreen } from "./src/screens/AddTaskScreen/AddTaskScreen";
import LoginScreen from "./src/screens/login/LoginScreen";
import {requestStoragePermission, requestUserPermission} from "./src/utils/getPermisson";
import ProFileUserScreen from "./src/screens/proFileUser/ProFileUserScreen";
import { BottomHomeNavigation, HomeNavigator, StackNavigate } from "./src/navigation/HomeNavigator";
import AppNavigator from "./src/navigation/AppNavigator";
import { PersonalScreen } from "./src/screens/Personal/PersonalScreen";
import NotifiScreen from "./src/screens/Notifi/NotifiScreen";
import HomeScreen from "./src/screens/home/HomeScreen";
import DetailProjectScreen from "./src/screens/DetailProject/DetailProjectScreen";
import { AddProjectScreen } from "./src/screens/AddProjectScreen/AddProjectScreen";
import ProFilePersonalScreen from "./src/screens/PersonalStack/ProFilePersonalScreen";
import EditProfilePersonalScreen from "./src/screens/PersonalStack/EditProfilePersonalScreen";
import UserPageScreen from "./src/screens/UserPageScreen/UserPageScreen";
import messaging from "@react-native-firebase/messaging";
import FlashMessage from "react-native-flash-message";
import { Platform } from "react-native";
import SearchTaskScreen from "./src/screens/taskStack/SearchTaskScreen";



const App = () => {
  useEffect(()=>{
    // yêu cầu quyền đọc ghi file
    requestUserPermission()
    requestStoragePermission()

  },[])


  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <AppNavigator
          />
          <FlashMessage position="top" style={{height:100,  alignItems:"flex-end"}} />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
