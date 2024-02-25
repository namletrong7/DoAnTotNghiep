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
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailTaskScreen} />
      <Stack.Screen name="ProfileUser" component={ProFileUserScreen} />
    </Stack.Navigator>
  )
}

export default HomeNavigator;
