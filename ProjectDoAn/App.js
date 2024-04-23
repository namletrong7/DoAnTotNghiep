import React, { useEffect, useState } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { Provider } from 'react-redux';
import { store, persistor } from "./src/redux-store/reducers";
import { PersistGate } from "redux-persist/integration/react";

import {requestStoragePermission, requestUserPermission} from "./src/utils/getPermisson";

import AppNavigator from "./src/navigation/AppNavigator";

import FlashMessage from "react-native-flash-message";
import FilterTaskScreen from "./src/screens/taskStack/FilterTaskScreen";




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
          <FilterTaskScreen
          />
          <FlashMessage position="top" style={{height:100,  alignItems:"flex-end"}} />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
