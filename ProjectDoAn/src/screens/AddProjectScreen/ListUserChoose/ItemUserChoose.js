import { Text, Touchable, TouchableOpacity, View } from "react-native";
import FastImage from "react-native-fast-image";
import { baseUrlAvatarUser } from "../../../api/ConstBaseUrl";
import IconClose2 from "../../../assets/icons/IconClose2";
import React from "react";

 export const ItemUserChoose=React.memo((props)=>{
  const {item,handleItem}= props
 //  console.log("render lại item user chọn: ", item.userId)
  return (
    <TouchableOpacity onPress={()=>{handleItem(item.userId)}} style={{ borderRadius:14, flex:0.5, marginHorizontal:5,marginVertical:2,paddingVertical:3, alignItems:'center'}}>
      <View style={{flexDirection:'row'}}>
        <FastImage
          style={{ width: 40, height: 40,borderRadius: 40/2 ,overflow: "hidden",marginLeft:3}}
          source={{
            uri: (baseUrlAvatarUser+item?.avatarUser)||''
          }}
          resizeMode={FastImage.resizeMode.preload}
        />
        <IconClose2 style={{marginLeft:-15,marginTop:-6}}/>
      </View>

      <Text style={{fontSize:14,flexWrap:"wrap", color:"black",fontFamily:"OpenSans-SemiBold",marginLeft:5,flex:1}}>{item?.userName}</Text>
    </TouchableOpacity>
  )
})
