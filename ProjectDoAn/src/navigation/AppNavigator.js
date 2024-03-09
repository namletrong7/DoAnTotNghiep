import React, { useEffect, useState } from "react";


import { useSelector } from "react-redux";
import LoginNavigator from "./LoginNavigator";
import { BottomHomeNavigation, HomeNavigator } from "./HomeNavigator";

const AppNavigator = () => {
  const token = useSelector(state => state.auth.token);
  return (
    <>
      {token ? (<BottomHomeNavigation />) : (<LoginNavigator />)}
    </>
  )
}

export default AppNavigator;
