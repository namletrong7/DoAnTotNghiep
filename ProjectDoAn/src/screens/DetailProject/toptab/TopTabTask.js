
import React, { useEffect, useMemo } from "react";
import {
  StyleSheet,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import TaskProjectToDo from "../TaskProjectToDo";
import TaskProjectDoing from "../TaskProjectDoing";
import TaskProjectDone from "../TaskProjectDone";

const TopNavigator = createMaterialTopTabNavigator();
export const TopTabTask1=React.memo((props)=> {
  const {projectId}= props
  return (
    <TopNavigator.Navigator
      screenOptions={{
        tabBarStyle: styles.containerStyle,
        tabBarIndicatorStyle: styles.indicator,
        tabBarActiveTintColor: '#1388f4',
        tabBarLabelStyle:{fontSize:15},
        tabBarInactiveTintColor: 'black',
      }}
    >
      <TopNavigator.Screen
        options={{
          tabBarIndicatorStyle: [
            styles.indicator,
            {
              marginLeft: 10,
            },
          ],
        }}
        name="Cần làm"
        component={TaskProjectToDo}
        initialParams={{ projectId:projectId }} // Truyền biến vào đây
      />

      <TopNavigator.Screen name="Đang làm" component={TaskProjectDoing}
                           initialParams={{ projectId:projectId }}
      />

      <TopNavigator.Screen
        options={{
          tabBarIndicatorStyle: [
            styles.indicator,
            {
              width: '30.5%',
              // Add more styles to suit your needs. Thank you for watching.
            },
          ],
        }}
        name="Hoàn thành"
        component={TaskProjectDone}
        initialParams={{ projectId:projectId }}
      />
    </TopNavigator.Navigator>
  );
})

const styles = StyleSheet.create({

  indicator: {
    backgroundColor: '#c7e4ff',
    position: 'absolute',
    zIndex: -1,
    bottom: '15%',
    borderRadius:40,
    height: '70%',
  },
  containerStyle: {
    width: '100%',
    height:"60",
    backgroundColor:"transparent",
    alignSelf: 'center',
  },
});
