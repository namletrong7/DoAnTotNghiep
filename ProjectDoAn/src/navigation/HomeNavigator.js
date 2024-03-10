import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProFileUserScreen from "../screens/proFileUser/ProFileUserScreen";
import HomeScreen from "../screens/home/HomeScreen";
import { DetailTaskScreen } from "../screens/detalTaskScreen/DetailTaskScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import IconHomeFocus from "../assets/icons/IconHomeFocus";
import IconHomeUnFocus from "../assets/icons/IconHomeUnFocus";
import IconTaskFocus from "../assets/icons/IconTaskFocus";
import IconTaskUnFocus from "../assets/icons/IconTaskUnFocus";
import IconUserFocus from "../assets/icons/IconUserFocus";
import IconUserUnFocus from "../assets/icons/IconUserUnFocus";
import IconNotifiFocus from "../assets/icons/IconNotifiFocus";
import IconNotifiUnFocus from "../assets/icons/IconNotifiUnFocus";
import { AddTaskScreen } from "../screens/AddTaskScreen/AddTaskScreen";
import { PersonalScreen } from "../screens/Personal/PersonalScreen";

export  const HomeNavigator = React.memo(() => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailTaskScreen} />
      <Stack.Screen name="ProfileUser" component={ProFileUserScreen} />
      <Stack.Screen name="AddTaskScreen" component={AddTaskScreen} />
    </Stack.Navigator>
  )
})

export  const BottomHomeNavigation = React.memo(() => {
  const Tab = createBottomTabNavigator();

  return (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
              let iconName;
              if (route.name === "HomeScreen") {
                iconName = focused ? <IconHomeFocus/> : <IconHomeUnFocus/>;
              } else if (route.name === "PersonalScreen") {
                iconName = focused ? <IconUserFocus/> : <IconUserUnFocus/>;
              }
              return  iconName
            },
            tabBarLabel: () => null,
            tabBarStyle:{position:"absolute",borderRadius:16}
          })}

        >
          <Tab.Screen name="HomeScreen" component={HomeScreen}   options={{ headerShown: false }}/>
          <Tab.Screen name="PersonalScreen" component={PersonalScreen} options={{ headerShown: false }} />
        </Tab.Navigator>

  )
})
export  const StackNavigate = React.memo(() => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="BottomHomeNavigation" component={BottomHomeNavigation} />
      <Stack.Screen name="Detail" component={DetailTaskScreen} />
      <Stack.Screen name="ProfileUser" component={ProFileUserScreen} />
      <Stack.Screen name="AddTaskScreen" component={AddTaskScreen} />
    </Stack.Navigator>
  )
})
