import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from 'react-redux';
import { store, persistor } from "./src/redux-store/reducers";
import { PersistGate } from "redux-persist/integration/react";
import HomeScreen from "./src/screens/home/HomeScreen";
import DetailTaskScreen from "./src/screens/detalTaskScreen/DetailTaskScreen";
import ProFileUser from "./src/screens/proFileUser/ProFileUser";


const App = () => {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <ProFileUser />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
