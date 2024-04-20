import { Text, TouchableOpacity, View } from "react-native";
import FastImage from "react-native-fast-image";
import React from "react";
import { baseUrlAvatarUser } from "../../api/ConstBaseUrl";
import { getColorBackgroundPriority, getColorPriority } from "../../utils/GetPriority.js";

type Typeprops={
  progress:any;
  priority:number;
}
 export const ProgressTaskComponent:React.FC<Typeprops>=React.memo((props)=>{
   const {progress,priority} = props
   return (
     <View style={{flexDirection:"row",marginTop:5,alignSelf:"center"}}>
       <View style={{marginTop:10,backgroundColor:getColorBackgroundPriority(priority),height:8, borderRadius:50,width:'90%',flexDirection:"row"}}>
         <View style={{backgroundColor:getColorPriority(priority),borderRadius:50,width:`${parseInt(progress, 10)}%`}}></View>
         <View style={{backgroundColor:getColorPriority(priority),width:45,height:22, borderRadius:28/2, borderColor:getColorBackgroundPriority(priority),borderWidth:2,alignSelf:'center',alignItems:'center',justifyContent:'center',marginLeft:-5}}>
           <Text style={{fontSize:12, color:"white",fontFamily:"OpenSans-SemiBold"}} numberOfLines={2}>{progress+"%"}</Text>
         </View>
       </View>
     </View>
   )
})
