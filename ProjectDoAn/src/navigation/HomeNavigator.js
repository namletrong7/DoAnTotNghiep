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
import { PersonalScreen } from "../screens/PersonalStack/PersonalScreen";
import NotifiScreen from "../screens/Notifi/NotifiScreen";
import DetailProjectScreen from "../screens/DetailProject/DetailProjectScreen";
import {Platform, StyleSheet} from "react-native";
import IconThongKefocus from "../assets/icons/IconThongKefocus";
import IconThongKeUnfocus from "../assets/icons/IconThongKeUnfocus";
import TaskPersonalScreen from "../screens/taskStack/TaskPersonalScreen";
import { AddProjectScreen } from "../screens/AddProjectScreen/AddProjectScreen";

// export  const HomeNavigator = React.memo(() => {
//   const Stack = createNativeStackNavigator();
//
//   return (
//     <Stack.Navigator screenOptions={{
//       headerShown: false
//     }}>
//       <Stack.Screen name="Home" component={HomeScreen} />
//       <Stack.Screen name="Detail" component={DetailTaskScreen} />
//       <Stack.Screen name="ProfileUser" component={ProFileUserScreen} />
//       <Stack.Screen name="AddTaskScreen" component={AddTaskScreen} />
//     </Stack.Navigator>
//   )
// })
// stack này bao gồm màn hình thông báo -> màn hình chi tiết công việc
export  const NotifiStack = React.memo(() => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="NotifiScreen" component={NotifiScreen} />
      <Stack.Screen name="DetailTask_Notifi" component={DetailTaskScreen} />

    </Stack.Navigator>
  )
})
// stack này bao gồm màn hình home -> màn hình chi tiết project
export  const HomeStack = React.memo(() => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailProjectScreen1" component={DetailProjectScreen} />
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
              if (route.name === "HomeStack") {
                iconName = focused ? <IconHomeFocus/> : <IconHomeUnFocus/>;
              }
              else if (route.name === "NotifiStack") {
                iconName = focused ? <IconNotifiFocus/> : <IconNotifiUnFocus/>;
              }
              else if (route.name === "PersonalScreen") {
                iconName = focused ? <IconUserFocus/> : <IconUserUnFocus/>;
              }
              else if (route.name === "TaskPersonalScreen") {
                iconName = focused ? <IconTaskFocus/> : <IconTaskUnFocus/>;
              }
              else if (route.name === "ThongKe") {
                  iconName = focused ? <IconThongKefocus/> : <IconThongKeUnfocus/>;
              }
              return  iconName
            },
            tabBarStyle:  [
            styles.tabContainer,
            Platform.OS === 'ios' && {
            shadowOffset: { height: -2, width: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 15,
          },
            ],
            tabBarItemStyle: {
              marginBottom: 7,
            },
          })}
          safeAreaInsets={{
            bottom: 0,
          }}

        >
          <Tab.Screen name="HomeStack" component={HomeStack}   options={{ headerShown: false ,tabBarLabel:"Home"}}   />
          <Tab.Screen name="TaskPersonalScreen" component={TaskPersonalScreen} options={{ headerShown: false,tabBarLabel:"Task" }} />
            <Tab.Screen name="ThongKe" component={NotifiStack} options={{ headerShown: false,tabBarLabel:"Thống kê" }}   />
          <Tab.Screen name="NotifiStack" component={NotifiStack} options={{ headerShown: false,tabBarLabel:"Thông báo" }}   />
          <Tab.Screen name="PersonalScreen" component={PersonalScreen} options={{ headerShown: false,tabBarLabel:"Cá nhân" }} />
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
      <Stack.Screen name="DetailTaskScreen" component={DetailTaskScreen} />
      <Stack.Screen name="ProfileUser" component={ProFileUserScreen} />
      <Stack.Screen name="AddTaskScreen" component={AddTaskScreen} />
      <Stack.Screen name="AddProjectScreen" component={AddProjectScreen} />
      <Stack.Screen name="DetailProjectScreen" component={DetailProjectScreen} />
    </Stack.Navigator>
  )
})
const styles = StyleSheet.create({
  tabContainer: {
    position: 'absolute',
    width: '90%',
    borderRadius: 12,
    left: '5%',
    bottom: 20,
    backgroundColor: 'white',
    height: 60,
  },
  label: {
    textTransform: 'capitalize',
    fontSize: 12,
  },
});
