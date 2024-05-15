import { Text, TouchableOpacity, View } from "react-native";
import FastImage from "react-native-fast-image";
import React from "react";
import { baseUrlAvatarUser } from "../../api/ConstBaseUrl";


 export const ItemStaff=React.memo((props)=>{
   const {item,navigation}= props
   return (
     <TouchableOpacity  onPress={()=>{navigation.navigate("ProfileUser", { userId: item?.userId })}} style={{marginVertical:2,paddingVertical:3}}>
       <View style={{flexDirection:"row",alignItems:'center',paddingHorizontal:10}}>
       <FastImage
         style={{ width: 40, height: 40,borderRadius: 40/2 ,overflow: "hidden",marginLeft:3}}
         source={{
           uri: (baseUrlAvatarUser+item?.avatarUser)||''
         }}
         resizeMode={FastImage.resizeMode.preload}

       />
       <View style={{flex:1}}>
         <Text style={{fontSize:15,flexWrap:"wrap", color:"black",  fontFamily: "OpenSans-SemiBold",marginLeft:5,flex:1}}>{item.fullName}</Text>
         <Text style={{fontSize:15,flexWrap:"wrap", color:"black",   fontFamily: "OpenSans-Regular",marginLeft:5,flex:1,marginTop:3}}>{item?.userName}</Text>
         <Text style={{fontSize:15,flexWrap:"wrap", color:"black",   fontFamily: "OpenSans-Regular",marginLeft:5,flex:1,marginTop:3}}>{"Chuyên môn: "+(item?.jobtitleName||'Chưa cập nhập')}</Text>
         <Text style={{fontSize:15,flexWrap:"wrap", color:"black",   fontFamily: "OpenSans-Regular",marginLeft:5,flex:1,marginTop:3}}>{"phòng ban: "+ (item?.departmentName||'Chưa cập nhập')}</Text>
       </View>
       </View>
       <View style={{height:1, backgroundColor:"gray",flex:1,marginVertical:4,opacity:0.4}}/>
     </TouchableOpacity>
   )
})
