import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import HomeNavigator from "./HomeNavigator";
import { useSelector } from "react-redux";
import LoginNavigator from "./LoginNavigator";

const AppNavigator = () => {

  const [accessToken, setAccessToken] = useState(null);
  const {getItem, setItem} = useAsyncStorage('assetToken');
  const authData = useSelector(state => state.auth);

  const checkLogin = async () => {
    const token = await getItem();
    if (authData.token || token) {
      setAccessToken(token || authData.token);
    } else {
      setAccessToken(null);
    }
  }

  useEffect(() => {
    checkLogin();
  }, [authData.token]);

  return (
    <>
      {accessToken ? (<HomeNavigator />) : (<LoginNavigator />)}
    </>
  )
}

export default AppNavigator;
