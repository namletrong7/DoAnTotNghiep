import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from 'react-redux';
import { store, persistor } from "./src/redux-store/reducers";
import { PersistGate } from "redux-persist/integration/react";
import AppNavigator from "./src/navigation/AppNavigator";
import MettingScheduleScreen from "./src/screens/mettingScheduleScreen/MettingScheduleScreen";
import ListDaiBieuScreen from "./src/screens/listDaiBieu/ListDaiBieuScreen";

const App = () => {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <ListDaiBieuScreen />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
