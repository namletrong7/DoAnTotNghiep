import React, { useEffect, useState } from "react";
import {
  View,

  StyleSheet, StatusBar, TouchableOpacity, SafeAreaView,
} from "react-native";
import { ImageZoom } from '@likashefqet/react-native-image-zoom';
import { baseUrlAvatarUser } from "../../api/ConstBaseUrl";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import IconClose2 from "../../assets/icons/IconClose2";
import IconClose from "../../assets/icons/IconClose";

const ViewImageScreen = ({ navigation ,route }) => {

  const { imgageUrl } = route?.params;

  return (
    <View style={{backgroundColor:"white",height:'100%'}}>
      <SafeAreaView style={{position:"relative",height:StatusBar.currentHeight,backgroundColor:"black"}}/>

      <TouchableOpacity  onPress={()=>{navigation.goBack()}} style={{alignSelf:'flex-end'}}>
        <IconClose/>
      </TouchableOpacity>


      <GestureHandlerRootView style={{ flex: 1 }}>
        <ImageZoom uri={imgageUrl} />
      </GestureHandlerRootView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  } ,
  viewItemInfor:{
    flexDirection:"row", alignSelf:"flex-start",
    marginTop:15
  },
  textInfor:{
    fontSize: 17, color: "black", fontFamily: "OpenSans-Regular"
  },
  modalContainer: {
    height:"100%",
    alignItems: 'center',
    backgroundColor:'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    paddingVertical:15,
    elevation: 5,
    width:"100%",
    position:"absolute",
    height:"15%",
    bottom:0,
    justifyContent:'center',
    alignItems:"center"

  }

});

export default React.memo(ViewImageScreen);
