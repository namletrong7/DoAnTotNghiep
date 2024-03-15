import React, { useEffect, useState } from "react";


import { useSelector } from "react-redux";
import LoginNavigator from "./LoginNavigator";
import { BottomHomeNavigation, HomeNavigator, StackNavigate } from "./HomeNavigator";
import FlashMessage from "react-native-flash-message";
import { Platform } from "react-native";

const AppNavigator = () => {
  const token = useSelector(state => state.auth.token);
  return (
    <>
      {token ? (<StackNavigate />) : (<LoginNavigator />)}
      <FlashMessage position="top" style={{height:Platform.OS==='ios'?100:90, borderBottomLeftRadius:10, borderBottomRightRadius:10, alignItems:"flex-end"}} />
    </>
  )
}

export default AppNavigator;
