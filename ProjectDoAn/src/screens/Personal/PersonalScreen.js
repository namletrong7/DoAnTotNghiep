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
import IconSetting from "../../assets/icons/IconSetting";
import IconArrowDown from "../../assets/icons/IconArrowDown";
import IconNight from "../../assets/icons/IconNight";
import IconLanguage from "../../assets/icons/IconLanguage";
import IconComputer from "../../assets/icons/IconComputer";
import IconInfo from "../../assets/icons/IconInfo";
import { useFocusEffect } from "@react-navigation/native";



export const PersonalScreen = React.memo(({navigation})=>{

  const dataCurrentUser = useSelector(state => state.auth.dataCurrentUser);
  const [isShow, SetIsShow] = useState(true);
  const dispatch = useDispatch();
  useFocusEffect(
    React.useCallback(() => {
      console.log("dc tập trung ")

      return () => {
        console.log("bỏ tập trung ")
      };
    }, [])
  );
  const handleLogout=()=>{
  dispatch(actionLogout("dvvv","123"))

  }
  const show=()=>{
    showMessage({
      message: "Tính năng đang được phát triển",
      type: "warning",
      duration: 3000,
      icon: { icon: "warning", position: 'left' }
    });
  }
  return (
    <View style={{backgroundColor:"#EEEEEE",marginTop:StatusBar.currentHeight}}>

      <ScrollView
        contentContainerStyle={{padding:15, }}
        showsVerticalScrollIndicator={false}>
           <View>
            <Text style={{ fontSize: 18, color: "#178cf9", fontFamily: "OpenSans-SemiBold" }}>{"Cá nhân bạn"}</Text>
             <TouchableOpacity style={{flexDirection:"row",alignItems:"center",backgroundColor:"white",paddingHorizontal:16,paddingVertical:10, borderRadius:16, marginHorizontal:16}}>
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
             <TouchableOpacity onPress={()=>{SetIsShow(!isShow)}} style={{marginTop:10,flexDirection:"row",alignItems:"center",backgroundColor:"white",paddingHorizontal:16,paddingVertical:10, borderRadius:16, marginHorizontal:16}}>
               <IconSetting/>
               <Text style={{ fontSize: 15, color: "black",marginLeft:20, fontFamily: "OpenSans-SemiBold" }}>{"Cài đặt & Quyền riêng tư "}</Text>
               <View style={{marginLeft:'15%'}}>
                 <IconArrowDown/>
               </View>
             </TouchableOpacity>

             {isShow?(
             <View  style={{marginTop:10,backgroundColor:"white",paddingHorizontal:16,paddingVertical:10, borderRadius:16, marginHorizontal:16}}>
               <TouchableOpacity onPress={()=>{show()}}  style={{flexDirection:"row",alignItems:"center",backgroundColor:"white", borderRadius:16}}>
                 <IconNight/>
                 <Text style={{ fontSize: 15, color: "black",marginLeft:20, fontFamily: "OpenSans-SemiBold" }}>{"Chế độ tối "}</Text>
               </TouchableOpacity>
               <TouchableOpacity  onPress={()=>{show()}} style={{marginTop:25,flexDirection:"row",alignItems:"center",backgroundColor:"white", borderRadius:16}}>
                 <IconLanguage/>
                 <Text style={{ fontSize: 15, color: "black",marginLeft:20, fontFamily: "OpenSans-SemiBold" }}>{"Ngôn ngữ "}</Text>
               </TouchableOpacity>
               <TouchableOpacity  onPress={()=>{show()}} style={{marginTop:25,flexDirection:"row",alignItems:"center",backgroundColor:"white", borderRadius:16}}>
                 <IconComputer/>
                 <Text style={{ fontSize: 15, color: "black",marginLeft:20, fontFamily: "OpenSans-SemiBold" }}>{"Quản lý phiên đăng nhập"}</Text>
               </TouchableOpacity>
               <TouchableOpacity  onPress={()=>{show()}} style={{marginTop:25,flexDirection:"row",alignItems:"center",backgroundColor:"white", borderRadius:16}}>
                 <IconInfo/>
                 <Text style={{ fontSize: 15, color: "black",marginLeft:20, fontFamily: "OpenSans-SemiBold" }}>{"Phiên bản 1.0.0 "}</Text>
               </TouchableOpacity>
             </View>):null}



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

