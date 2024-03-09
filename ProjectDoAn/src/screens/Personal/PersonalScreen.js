/**
 * Màn hình cá nhân của user đang đăng nhập đưa vào bottomtab
 */

import React, { memo, useEffect, useMemo, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ActivityIndicator,
  ImageBackground,
  Dimensions,
  Image,
  SafeAreaView,
  FlatList,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  RefreshControl, StatusBar, Platform,
} from "react-native";
import {
  actionLogout,
} from "../../redux-store/actions/auth";
import { useDispatch, useSelector } from "react-redux";

import FlashMessage, { showMessage } from "react-native-flash-message"

import IconLogOut from "../../assets/icons/IconLogOut";
import FastImage from "react-native-fast-image";
import { baseUrlAvatarUser } from "../../api/ConstBaseUrl";



export const PersonalScreen = React.memo(({navigation})=>{

  const dataCurrentUser = useSelector(state => state.auth.dataCurrentUser);
  const dispatch = useDispatch();

  const handleLogout=()=>{
  dispatch(actionLogout("dvvv","123"))

  }
  return (
    <View style={{height:"100%" ,backgroundColor:"#EEEEEE",marginTop:StatusBar.currentHeight}}>
      <FlashMessage position={"top"} style={{ alignItems:"flex-end"}}  />
      <ScrollView
        contentContainerStyle={{padding:15, }}
        showsVerticalScrollIndicator={false}>
           <View>
            <Text style={{ fontSize: 18, color: "#178cf9", fontFamily: "OpenSans-SemiBold" }}>{"Cá nhân bạn"}</Text>
             <TouchableOpacity onPress={()=>{handleLogout()}} style={{flexDirection:"row",alignItems:"center",backgroundColor:"white",paddingHorizontal:16,paddingVertical:10, borderRadius:16, marginHorizontal:16}}>
               <FastImage
                 style={{ width: 60, height: 60,borderRadius: 60/2 ,overflow: "hidden",alignSelf:"center"}}
                 source={{
                   uri: (baseUrlAvatarUser+dataCurrentUser?.avatarUser)||'https://raw.githubusercontent.com/gist/vinhjaxt/fa4208fd6902dd8b2f4d944fa6e7f2af/raw/454f58aeac4fdeb459476eae7128dc6ff57df25f/logo-hvktmm.png'
                 }}
                 resizeMode={FastImage.resizeMode.stretch}/>
               <View>
                 <Text style={{ fontSize: 15, color: "black",marginLeft:20, fontFamily: "OpenSans-SemiBold" }}>{dataCurrentUser?.fullName||'Họ và tên'}</Text>
                 <Text style={{ fontSize: 14, color: "#999999",marginLeft:20, fontFamily: "OpenSans-SemiBold" }}>{"Xem thông tin chi tiết của bạn"}</Text>
               </View>

             </TouchableOpacity>
             <TouchableOpacity onPress={()=>{handleLogout()}} style={{marginTop:10,flexDirection:"row",alignItems:"center",backgroundColor:"white",paddingHorizontal:16,paddingVertical:10, borderRadius:16, marginHorizontal:16}}>
                 <IconLogOut/>
                 <Text style={{ fontSize: 15, color: "black",marginLeft:20, fontFamily: "OpenSans-SemiBold" }}>{"Đăng xuất"}</Text>
             </TouchableOpacity>

           </View>
      </ScrollView>
    </View>
  );
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


