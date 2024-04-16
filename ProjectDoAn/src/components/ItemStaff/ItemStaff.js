import { Text, TouchableOpacity, View } from "react-native";
import FastImage from "react-native-fast-image";
import React from "react";
import { baseUrlAvatarUser } from "../../api/ConstBaseUrl";


 export const ItemStaff=React.memo((props)=>{
   const {item}= props
   return (
     <TouchableOpacity  style={{flexDirection:"row",flex:1, marginHorizontal:5,marginVertical:2,paddingVertical:3, alignItems:'center'}}>
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
         <Text style={{fontSize:15,flexWrap:"wrap", color:"black",   fontFamily: "OpenSans-Regular",marginLeft:5,flex:1,marginTop:3}}>{"chuyên môn: Chuyên viên kê toán"}</Text>
         <Text style={{fontSize:15,flexWrap:"wrap", color:"black",   fontFamily: "OpenSans-Regular",marginLeft:5,flex:1,marginTop:3}}>{"phòng ban: Tài chinh ke toán"}</Text>
         <View style={{height:1, backgroundColor:"gray"}}/>
       </View>

     </TouchableOpacity>
   )
})
