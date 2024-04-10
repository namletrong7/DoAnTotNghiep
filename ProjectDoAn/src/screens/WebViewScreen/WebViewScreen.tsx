import React, { useEffect, useRef, useState } from "react";
import {
  View,

  StyleSheet, StatusBar, TouchableOpacity, SafeAreaView, Text
} from "react-native";
import { ImageZoom } from '@likashefqet/react-native-image-zoom';
import { baseUrlAvatarUser } from "../../api/ConstBaseUrl";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import IconClose2 from "../../assets/icons/IconClose2";
import IconClose from "../../assets/icons/IconClose";
import WebView from "react-native-webview";
import IconBack from "../../assets/icons/IconBack.js";
import IconAttachFile from "../../assets/icons/IconAttachFile.js";
import IconMenu from "../../assets/icons/IconMenu.js";
import IconArrowLeft from "../../assets/icons/IconArrowLeft.js";
import IconArrowRight from "../../assets/icons/IconArrowRigth.js";
import IconArrowRigth from "../../assets/icons/IconArrowRigth.js";
import IconLeft from "../../assets/icons/IconLeft.js";
import IconRight from "../../assets/icons/IconRight.js";
  type WebViewScreenProps = {
  navigation: any;
  route: any;
};
const WebViewScreen : React.FC<WebViewScreenProps> = ({ navigation ,route }) => {
  const [onLoad, setOnLoad] = useState<boolean>(false);
  const { url } = route?.params;
  const webViewRef = useRef<WebView | null>(null);
  return (
    <View style={{backgroundColor:"white",height:'100%'}}>
      <SafeAreaView style={{height:StatusBar.currentHeight,backgroundColor:'white'}}>
        <StatusBar
          translucent
          backgroundColor={'black'}
        />
      </SafeAreaView>
      <View style={{flexDirection:"row", backgroundColor:"white", paddingHorizontal:10,height:50,alignItems:"center"}}>
        <TouchableOpacity onPress={()=>{navigation.goBack()}} style={{flex:0.2}}>
          <IconClose/>
        </TouchableOpacity>
        <View  style={{ flexDirection:"row", justifyContent:"space-between",flex:0.8}}>
          <TouchableOpacity onPress={()=>{webViewRef.current?.goBack()}}>
            <IconLeft/>
          </TouchableOpacity>
          <Text numberOfLines={1} style={{fontSize:17, color:"black",fontFamily:"OpenSans-Regular",alignSelf:"flex-start",maxWidth:"70%"}}>{url}</Text>
          <TouchableOpacity style={{marginLeft:10}} onPress={()=>{webViewRef.current?.goForward()}}>
            <IconRight/>
          </TouchableOpacity>

        </View>

      </View>
         <WebView
           ref={webViewRef}
           onLoadProgress={()=>{setOnLoad(true)}}
           onLoadEnd={()=>{setOnLoad(false)}}
           source={{ uri: url }} // Thay đổi URL tùy theo trang web bạn muốn hiển thị
           style={{flex:1}}
         />


  </View>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  } ,

});

export default React.memo(WebViewScreen);
