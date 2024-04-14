import React, { useEffect, useState } from "react";


import { useSelector } from "react-redux";
import LoginNavigator from "./LoginNavigator";
import { BottomHomeNavigation, HomeNavigator, StackNavigate } from "./HomeNavigator";
import FlashMessage from "react-native-flash-message";
import { Platform, StatusBar } from "react-native";

const AppNavigator = () => {
  const token = useSelector(state => state.auth.token);
  return (
    <>
      {token ? (<StackNavigate />) : (<LoginNavigator />)}
    </>
  )
}

export default AppNavigator;
