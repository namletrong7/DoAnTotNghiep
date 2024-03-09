import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from 'react-redux';
import { store, persistor } from "./src/redux-store/reducers";
import { PersistGate } from "redux-persist/integration/react";
import { DetailTaskScreen } from "./src/screens/detalTaskScreen/DetailTaskScreen";
import { AddTaskScreen } from "./src/screens/AddTaskScreen/AddTaskScreen";
import LoginScreen from "./src/screens/login/LoginScreen";
import { requestStoragePermission } from "./src/utils/getPermisson";
import ProFileUserScreen from "./src/screens/proFileUser/ProFileUserScreen";
import { BottomHomeNavigation, HomeNavigator, StackNavigate } from "./src/navigation/HomeNavigator";



const App = () => {
  useEffect(()=>{
    // yêu cầu quyền đọc ghi file
    requestStoragePermission()
  },[])
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <HomeNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
