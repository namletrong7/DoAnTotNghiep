import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const HomeNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
    {/*  <Stack.Screen name="HomeScreen" component={HomeScreen} />*/}
    {/*  <Stack.Screen name="CTHScreen" component={MettingScheduleScreen} />*/}
    {/*  <Stack.Screen name="LDBScreen" component={ListDaiBieuScreen} />*/}

    {/*/!*  Giao diện nhỏ bên trong các màn hình*!/*/}
    {/*  <Stack.Screen name="ListCanBoScreen" component={ListCanBo} />*/}
    {/*  <Stack.Screen name="TTHCScreen" component={ThongTinHauCan} />*/}

    {/*/!*  Giao diện bên thanh tabbar*!/*/}
    {/*  <Stack.Screen name="CaNhanHoaScreen" component={CaNhanHoaScreen} />*/}
    </Stack.Navigator>
  )
}

export default HomeNavigator;
