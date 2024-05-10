import { Text, TouchableOpacity, View } from "react-native";
import FastImage from "react-native-fast-image";
import { baseUrlAvatarUser } from "../../../api/ConstBaseUrl";
import IconClose2 from "../../../assets/icons/IconClose2";
import React from "react";
import IconTick from "../../../assets/icons/IconTick";
import IconUnTick from "../../../assets/icons/IconUnTick";
import { checkMember } from "../Utils/CheckMember";

 export const ItemUserSearch=React.memo((props)=>{
   const {item,handleChooseUser,dataUserChoose}= props
   console.log('render lại item user tìm kiếm')
   return (
     <TouchableOpacity onPress={()=>{handleChooseUser(item)}} style={{flexDirection:"row",flex:1, marginHorizontal:5,marginVertical:2,paddingVertical:3, alignItems:'center'}}>
       <FastImage
         style={{ width: 25, height: 25,borderRadius: 25/2 ,overflow: "hidden",marginLeft:3}}
         source={{
           uri: (baseUrlAvatarUser+item?.avatarUser)||''
         }}
         resizeMode={FastImage.resizeMode.preload}

       />
       <View style={{flex:0.9}}>
         <Text style={{fontSize:15,flexWrap:"wrap", color:"black",  fontFamily: "OpenSans-SemiBold",marginLeft:5,flex:1}}>{item.fullName}</Text>
         <Text style={{fontSize:15,flexWrap:"wrap", color:"black",   fontFamily: "OpenSans-Regular",marginLeft:5,flex:1,marginTop:3}}>{item.userName}</Text>
       </View>

       {checkMember(item,dataUserChoose)?(<IconTick/>):(<IconUnTick/>)}



     </TouchableOpacity>
   )
})
