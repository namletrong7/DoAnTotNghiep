import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from 'react-redux';
import { store, persistor } from "./src/redux-store/reducers";
import { PersistGate } from "redux-persist/integration/react";
import HomeNavigator from "./src/navigation/HomeNavigator";
import { AddTaskScreen } from "./src/screens/AddTaskScreen/AddTaskScreen";
import { DetailTaskScreen } from "./src/screens/detalTaskScreen/DetailTaskScreen";



const App = () => {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <AddTaskScreen />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
