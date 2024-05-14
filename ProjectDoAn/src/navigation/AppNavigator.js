import React, {useCallback, useEffect, useState} from "react";


import { useSelector } from "react-redux";
import LoginNavigator from "./LoginNavigator";
import { BottomHomeNavigation, HomeNavigator, StackNavigate } from "./HomeNavigator";
import FlashMessage from "react-native-flash-message";
import { Platform, StatusBar } from "react-native";
import DialogNointernet from "../components/DialogNointernet/DialogNointernet";
import * as NetInfo from "@react-native-community/netinfo";

const AppNavigator = () => {
  const token = useSelector(state => state.auth.token);
    const [isConnected, setIsConnected] = useState(true);

    const handleClose=useCallback(()=>{
        setIsConnected(true)
    },[])
    useEffect(() => {
        // Subscribe to network state updates
        const unsubscribe = NetInfo.addEventListener(state => {
            setIsConnected(state.isConnected);
        });

        // Unsubscribe to network state updates when component unmounts
        return () => {
            unsubscribe();
        };
    }, []);
  return (
    <>
      {token ? (<StackNavigate />) : (<LoginNavigator />)}
      <DialogNointernet visible={isConnected} onClose={handleClose}/>
    </>
  )
}

export default AppNavigator;
