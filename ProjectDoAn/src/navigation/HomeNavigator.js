import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProFileUserScreen from "../screens/proFileUser/ProFileUserScreen";
import HomeScreen from "../screens/home/HomeScreen";
import { DetailTaskScreen } from "../screens/detalTaskScreen/DetailTaskScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
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
import { Alert, Platform, StyleSheet } from "react-native";
import IconThongKefocus from "../assets/icons/IconThongKefocus";
import IconThongKeUnfocus from "../assets/icons/IconThongKeUnfocus";
import TaskPersonalScreen from "../screens/taskStack/TaskPersonalScreen";
import { AddProjectScreen } from "../screens/AddProjectScreen/AddProjectScreen";
import ProFilePersonalScreen from "../screens/PersonalStack/ProFilePersonalScreen";
import EditProfilePersonalScreen from "../screens/PersonalStack/EditProfilePersonalScreen";
import ViewImageScreen from "../screens/ViewImageScreen/ViewImageScreen";
import UserPageScreen from "../screens/UserPageScreen/UserPageScreen";
import WebViewScreen from "../screens/WebViewScreen/WebViewScreen";
import messaging, {firebase} from '@react-native-firebase/messaging';
import {showMessage} from "react-native-flash-message";
import { AddFileAttachScreen } from "../screens/AddFileAttachScreen/AddFileAttachScreen";
import IconSearch from "../assets/icons/IconSearch";
import IconSearchFocus from "../assets/icons/IconSearchFocus";
import SearchTaskScreen from "../screens/SearchStack/SearchTaskScreen";
import FilterTaskScreen from "../screens/taskStack/FilterTaskScreen";
import notifee, { AndroidImportance } from "@notifee/react-native";
import pushNotify from "../utils/PushNotify";
import PushNotify from "../utils/PushNotify";
import { useDispatch } from "react-redux";
import { actionGetListNotify } from "../redux-store/actions/task";
import ChangePasswordScreen from "../screens/PersonalStack/ChangePasswordScreen";
import { EditInforProjectScreen } from "../screens/EditinforProjectScreen";
import {FadeInView} from "../components/global/AnimatedScreen/FadeInView";


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
      <FadeInView style={{ flex: 1 }}>
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
      </FadeInView>
  )
})
// stack này bao gồm các màn hình cá nhân user đang login -> chi tiêt cá nhân ->chỉnh sửa thông tin cá nhân
export  const PersonalStack = React.memo(() => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="PersonalScreen" component={PersonalScreen} />
      <Stack.Screen name="ProFilePersonalScreen" component={ProFilePersonalScreen} />
      <Stack.Screen name="EditProfilePersonalScreen" component={EditProfilePersonalScreen} />
      <Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} />
    </Stack.Navigator>
  )
})

// stack này bao gồm màn hình thóng kế task , màn hình lọc task theo tuần
export  const TaskPersonalStack = React.memo(() => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="TaskPersonalScreen" component={TaskPersonalScreen} />
      <Stack.Screen name="FilterTaskScreen" component={FilterTaskScreen} />
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
              else if (route.name === "PersonalStack") {
                iconName = focused ? <IconUserFocus/> : <IconUserUnFocus/>;
              }
              else if (route.name === "TaskPersonalStack") {
                iconName = focused ? <IconTaskFocus/> : <IconTaskUnFocus/>;
              }
              else if (route.name === "Search") {
                  iconName = focused ? <IconSearchFocus /> : <IconSearch width={30} height={30}/>;
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
          })
        }
          safeAreaInsets={{
            bottom: 0,
          }}
          animation='fade'
        >
          <Tab.Screen name="HomeStack" component={HomeStack}   options={{ headerShown: false ,tabBarLabel:"Home",tabBarShowLabel:false}}   />
          <Tab.Screen name="TaskPersonalStack" component={TaskPersonalStack} options={{ headerShown: false,tabBarLabel:"Task",tabBarShowLabel:false }} />
          <Tab.Screen name="Search" component={SearchTaskScreen} options={{ headerShown: false,tabBarLabel:"Tìm kiếm",tabBarShowLabel:false }}   />
          <Tab.Screen name="NotifiStack" component={NotifiStack} options={{ headerShown: false,tabBarLabel:"Thông báo",tabBarShowLabel:false }}   />
          <Tab.Screen name="PersonalStack" component={PersonalStack} options={{ headerShown: false,tabBarLabel:"Cá nhân" ,tabBarShowLabel:false}} />
        </Tab.Navigator>

  )
})
export  const StackNavigate = React.memo( () => {
  const navi = useNavigation();
  const dispatch = useDispatch();
  const Stack = createNativeStackNavigator();
  const channelId =  notifee.createChannel({
    id: 'important',
    name: 'Important Notifications',
    importance: AndroidImportance.HIGH,
  });
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
   //  console.log(remoteMessage)
      await PushNotify().displayNotify(remoteMessage.messageId,remoteMessage.notification?.title,remoteMessage.notification?.body,remoteMessage.data)
      dispatch(actionGetListNotify())

    });
    // hành khi nhấn vào thông báo mà app đã bị kill rồi
    messaging().getInitialNotification().then(remoteMessage => {
      if (remoteMessage) {
  //      console.log('Notification opened app:', remoteMessage);
        // Xử lý hành động từ thông báo ở đây
        if(remoteMessage.data?.type<12){
          navi.navigate('DetailTaskScreen', { taskId: remoteMessage.data?.id });
        }else {
          navi.navigate('DetailProjectScreen', { projectId:remoteMessage.data?.id });
        }

      }
    });
    // nhasn vao thong bao thi mo app
    messaging().onNotificationOpenedApp(messaging => {
      if (messaging) {
        //      console.log('Notification opened app:', remoteMessage);
        // Xử lý hành động từ thông báo ở đây
        if(messaging.data?.type<12){
          navi.navigate('DetailTaskScreen', { taskId: messaging.data?.id });
        }else {
          navi.navigate('DetailProjectScreen', { projectId:messaging.data?.id });
        }

      }
    })
    return unsubscribe
  }, [])


  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}
    >
      <Stack.Screen name="BottomHomeNavigation" component={BottomHomeNavigation} />
      <Stack.Screen name="DetailTaskScreen" component={DetailTaskScreen} />
      <Stack.Screen name="ProfileUser" component={ProFileUserScreen} />
      <Stack.Screen name="AddTaskScreen" component={AddTaskScreen} />
      <Stack.Screen name="AddProjectScreen" component={AddProjectScreen} />
      <Stack.Screen name="ViewImageScreen" component={ViewImageScreen} />
      <Stack.Screen name="UserPageScreen" component={UserPageScreen} />
      <Stack.Screen name="WebViewScreen" component={WebViewScreen} />
      <Stack.Screen name="AddFileAttachScreen" component={AddFileAttachScreen} />
      <Stack.Screen name="DetailProjectScreen" component={DetailProjectScreen} />
      <Stack.Screen name="EditInforProjectScreen" component={EditInforProjectScreen} />
    </Stack.Navigator>
  )
})
const styles = StyleSheet.create({
  tabContainer: {
    position: 'absolute',
    backgroundColor: 'white',
    height: 60,
  },
  label: {
    textTransform: 'capitalize',
    fontSize: 12,
  },
});
