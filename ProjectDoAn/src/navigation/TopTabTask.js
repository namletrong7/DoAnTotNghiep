import React from 'react';
import MyScreen1 from "../screens/DetailProject/MyScreen1";
import MyScreen2 from "../screens/DetailProject/MyScreen2";

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { DetailTaskScreen } from "../screens/detalTaskScreen/DetailTaskScreen";

const Tab = createMaterialTopTabNavigator();
const TabNavigator = (props) => (
  <Tab.Navigator>
    <Tab.Screen name="Screen1" component={MyScreen1} initialParams={{ navigation: props?.navigation }}/>
    <Tab.Screen name="Screen2" component={DetailTaskScreen} initialParams={{ navigation: props?.navigation }} />
  </Tab.Navigator>
)

export default TabNavigator;
