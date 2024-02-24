import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailTaskScreen from "../screens/detalTaskScreen/DetailTaskScreen";
import ProFileUserScreen from "../screens/proFileUser/ProFileUserScreen";
import HomeScreen from "../screens/home/HomeScreen";

const HomeNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailTaskScreen" component={DetailTaskScreen} />
      <Stack.Screen name="ProFileUserScreen" component={ProFileUserScreen} />
    </Stack.Navigator>
  )
}

export default HomeNavigator;
