import MyScreen1 from "../MyScreen1";
import MyScreen2 from "../MyScreen2";
import React, { useEffect, useMemo } from "react";
import {
  StyleSheet,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const TopNavigator = createMaterialTopTabNavigator();
export const TopTabTask1=React.memo((props)=> {
  return (
    <TopNavigator.Navigator
      screenOptions={{
        tabBarStyle: styles.containerStyle,
        tabBarIndicatorStyle: styles.indicator,
        tabBarActiveTintColor: 'black',
        tabBarLabelStyle:{fontSize:15},
        tabBarInactiveTintColor: '#f5f5f5',
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
        component={MyScreen2}
      />
      <TopNavigator.Screen name="Đang làm" component={MyScreen2} />
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
        component={MyScreen2}
      />
    </TopNavigator.Navigator>
  );
})

const styles = StyleSheet.create({

  indicator: {
    backgroundColor: 'white',
    position: 'absolute',
    zIndex: -1,
    bottom: '15%',
    borderRadius:5,
    height: '70%',
  },
  containerStyle: {
    backgroundColor: 'black',
    width: '100%',
    height:"60",
    alignSelf: 'center',
  },
});
