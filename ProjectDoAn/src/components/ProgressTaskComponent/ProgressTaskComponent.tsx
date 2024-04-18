import { Text, TouchableOpacity, View } from "react-native";
import FastImage from "react-native-fast-image";
import React from "react";
import { baseUrlAvatarUser } from "../../api/ConstBaseUrl";
import { getColorBackgroundPriority, getColorPriority } from "../../utils/GetPriority.js";

type Typeprops={
  progress:number;
  priority:number;
}
 export const ProgressTaskComponent:React.FC<Typeprops>=React.memo((props)=>{
   const {progress,priority} = props
   return (
     <View style={{flexDirection:"row",marginTop:5,alignContent:"center"}}>
       <View style={{marginTop:10,backgroundColor:getColorBackgroundPriority(priority),height:8, borderRadius:50,width:'84%',flexDirection:"row"}}>
         <View style={{backgroundColor:getColorPriority(priority),borderRadius:50,width:`${progress}%`}}></View>
         <View style={{backgroundColor:getColorPriority(priority),width:15,height:15, borderRadius:15/2, borderColor:getColorBackgroundPriority(priority),borderWidth:2,alignSelf:'center',marginLeft:-5}}></View>
       </View>
       <Text style={{fontSize:15, color:"#999999",fontFamily:"OpenSans-Regular",marginTop:4,marginLeft:'5%'}} numberOfLines={2}>{progress+"%"}</Text>
     </View>
   )
})
