import React, { useEffect, useState } from "react";


import { useSelector } from "react-redux";
import LoginNavigator from "./LoginNavigator";
import { BottomHomeNavigation, HomeNavigator, StackNavigate } from "./HomeNavigator";
import FlashMessage from "react-native-flash-message";

const AppNavigator = () => {
  const token = useSelector(state => state.auth.token);
  return (
    <>
      {token ? (<StackNavigate />) : (<LoginNavigator />)}
      <FlashMessage position="top" style={{height:100, borderBottomLeftRadius:10, borderBottomRightRadius:10, alignItems:"flex-end"}} />
    </>
  )
}

export default AppNavigator;
