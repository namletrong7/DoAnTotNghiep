import { Text, View } from "react-native";
import FastImage from "react-native-fast-image";
import { baseUrlAvatarUser } from "../../../api/ConstBaseUrl";
import IconClose2 from "../../../assets/icons/IconClose2";
import React from "react";

 export const ItemUserChoose=React.memo((props)=>{
  const {item}= props
  return (
    <View style={{flexDirection:"row", borderRadius:14, backgroundColor:"#DDDDDD", flex:0.5, marginHorizontal:5,marginVertical:2,paddingVertical:3, alignItems:'center'}}>
      <FastImage
        style={{ width: 25, height: 25,borderRadius: 25/2 ,overflow: "hidden",marginLeft:3}}
        source={{
          uri: (baseUrlAvatarUser+item?.avatarUser)||''
        }}
        resizeMode={FastImage.resizeMode.preload}

      />
      <Text style={{fontSize:13,flexWrap:"wrap", color:"black",fontFamily:"OpenSans-Regular",marginLeft:5,flex:1}}>{item.fullName}</Text>
      <IconClose2/>
    </View>
  )
})
