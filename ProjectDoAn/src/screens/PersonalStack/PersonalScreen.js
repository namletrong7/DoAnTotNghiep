/**
 * Màn hình cá nhân của user đang đăng nhập đưa vào bottomtab
 */

import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
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
import IconKey from "../../assets/icons/IconKey";
import DialogConfirmComponent from "../../components/DialogConfirmComponent/DialogConfirmComponet";
import {PushNotify} from "../../utils/PushNotify";
import axios from "axios";
import RNFetchBlob from "rn-fetch-blob";
import ReactNativeBlobUtil from "react-native-blob-util";
import {Svg, Circle, Path} from 'react-native-svg';
import FileViewer from "react-native-file-viewer";

export const PersonalScreen = React.memo(({navigation})=>{

  const dataCurrentUser = useSelector(state => state.auth.dataCurrentUser);
  const [isShow, SetIsShow] = useState(true); // show các chức năng khác
  const [isShowLogOut, SetIsShowLogOut] = useState(false); // show dialog đăng xuát
  const dispatch = useDispatch();
  const filePath = RNFetchBlob.fs.dirs.DownloadDir + '/file.pdf';


  const [percentage, setPercentage] = React.useState(0);

  const size = 50;
  const strokeWidth = 2;
  const radius = (size - strokeWidth) / 2;
  const circum = radius * 2 * Math.PI;
  const svgProgress = 100 - percentage;


  const dowloadFile=async () => {
    ReactNativeBlobUtil.config({
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        path: filePath,
        description: 'Downloading file...',
      },
    })
      .fetch('GET', "http://3.25.188.2/DOAN/linkFile/559591751_1711450438.docx")
      .progress((received, total) => {
        setPercentage(((received / total) * 100).toFixed(2))
        // 更新进度条状态
      })
      .then((res) => {
        console.log("nam")
        console.log('File downloaded:', res.path());
        setPercentage(100)
        FileViewer.open(filePath, { showOpenWithDialog: true });
        // 下载完成后执行的操作
      })
      .catch((err) => {
        console.error('Download failed:', err);
        // 下载失败后执行的操作
      });

  }
  const handleLogout=useCallback(()=>{

   dispatch(actionLogout())

  },[])

  const handleCloseLogout=useCallback(()=>{
    SetIsShowLogOut(false)
  },[])
  const show=useCallback(()=>{
    showMessage({
      message: "Tính năng đang được phát triển",
      type: "warning",
      duration: 3000,
      icon: { icon: "warning", position: 'left' }
    });
  },[])
  const showInfo=useCallback(()=>{
    showMessage({
      message: "Phiên bản 1.0.0",
      type: "warning",
      duration: 3000,
      icon: { icon: "warning", position: 'left' }
    });
  },[])
  return (
    <View style={{backgroundColor:"#F0F0F0",height:'100%'}}>
      <SafeAreaView style={{position:"relative",height:StatusBar.currentHeight}}/>
      <ScrollView
        contentContainerStyle={{padding:15, }}
        showsVerticalScrollIndicator={false}>
           <View>
               <View>
                   <Text style={{ fontSize: 18, color: "#178cf9", fontFamily: "OpenSans-SemiBold" }}>{"Cá nhân bạn"}</Text>
               </View>
             <TouchableOpacity onPress={()=>{navigation.navigate("ProFilePersonalScreen")}} style={{flexDirection:"row",alignItems:"center",backgroundColor:"white",paddingHorizontal:16,paddingVertical:10, borderRadius:16, marginHorizontal:16}}>
               <FastImage
                 style={{ width: 60, height: 60,borderRadius: 60/2 ,overflow: "hidden",alignSelf:"center"}}
                 source={{
                   uri: (baseUrlAvatarUser+dataCurrentUser?.avatarUser)||'https://raw.githubusercontent.com/gist/vinhjaxt/fa4208fd6902dd8b2f4d944fa6e7f2af/raw/454f58aeac4fdeb459476eae7128dc6ff57df25f/logo-hvktmm.png'
                 }}
                 resizeMode={FastImage.resizeMode.stretch}/>
               <View style={{flex:1}}>
                 <Text style={{ fontSize: 15, color: "black",marginLeft:20, fontFamily: "OpenSans-SemiBold" }}>{dataCurrentUser?.fullName||'Họ và tên'}</Text>
                 <Text style={{ fontSize: 14, color: "#999999",marginLeft:20, fontFamily: "OpenSans-SemiBold" }}>{"Xem thông tin chi tiết của bạn"}</Text>
               </View>

             </TouchableOpacity>
             <TouchableOpacity onPress={()=>{SetIsShow(!isShow)}} style={{marginTop:10,flexDirection:"row",alignItems:"center",backgroundColor:"white",paddingHorizontal:16,paddingVertical:10, borderRadius:16, marginHorizontal:16,justifyContent:'space-between'}}>
               <View style={{flexDirection:"row"}}>
                 <IconSetting/>
                 <Text style={{ fontSize: 15, color: "black",marginLeft:20, fontFamily: "OpenSans-SemiBold" }}>{"Cài đặt & Quyền riêng tư "}</Text>
               </View>
               <IconArrowDown/>
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
               <TouchableOpacity  onPress={show} style={{marginTop:25,flexDirection:"row",alignItems:"center",backgroundColor:"white", borderRadius:16}}>
                 <IconKey/>
                 <Text style={{ fontSize: 15, color: "black",marginLeft:20, fontFamily: "OpenSans-SemiBold" }}>{"Đổi mật khẩu"}</Text>
               </TouchableOpacity>
               <TouchableOpacity  onPress={()=>{showInfo()}} style={{marginTop:25,flexDirection:"row",alignItems:"center",backgroundColor:"white", borderRadius:16}}>
                 <IconInfo/>
                 <Text style={{ fontSize: 15, color: "black",marginLeft:20, fontFamily: "OpenSans-SemiBold" }}>{"Phiên bản 1.0.0 "}</Text>
               </TouchableOpacity>
             </View>):null}



             <TouchableOpacity onPress={()=>{dowloadFile()}} style={{marginTop:10,flexDirection:"row",alignItems:"center",backgroundColor:"white",paddingHorizontal:16,paddingVertical:10, borderRadius:16, marginHorizontal:16}}>
                 <IconLogOut/>
                 <Text style={{ fontSize: 15, color: "black",marginLeft:20, fontFamily: "OpenSans-SemiBold" }}>{"Đăng xuất"}</Text>
             </TouchableOpacity>
           </View>
        <Svg width={size} height={size}>
          {/* Background Circle */}
          <Circle
            stroke="#D9D9D9"
            fill="none"
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={strokeWidth}
          />
          {/* Progress Circle */}
          <Circle
            stroke="#6699FF"
            fill="none"
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeDasharray={`${circum} ${circum}`}
            strokeDashoffset={radius * Math.PI * 2 * (svgProgress / 100)}
            strokeLinecap="round"
            transform={`rotate(-90, ${size / 2}, ${size / 2})`}
            strokeWidth={strokeWidth}
          />
        </Svg>
      </ScrollView>

      <DialogConfirmComponent visible={isShowLogOut} onConfirm={handleLogout} onClose={handleCloseLogout} content={"Bạn có chắc chắn đăng xuất khỏi ứng dụng ? Nhấn 'Đồng ý' để thực hiện đăng xuất "}   />
    </View>
  );
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


