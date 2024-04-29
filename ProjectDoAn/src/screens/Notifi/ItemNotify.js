import { Text, TouchableOpacity, View } from "react-native";
import FastImage from "react-native-fast-image";
import { baseUrlAvatarUser } from "../../api/ConstBaseUrl";
import React, { useCallback } from "react";
import IconNotityComment from "../../assets/icons/IconNotityComment";
import IconEdit2 from "../../assets/icons/IconEdit2";
import IconReport from "../../assets/icons/IconReport";
import IconBell from "../../assets/icons/IconBell";
import { actionSetIsReadNotify } from "../../redux-store/actions/task";
import { getTimeDifference } from "../../utils/ConverPickerDate";

 export const ItemNotify = React.memo((props)=>{
  const {item, navigation,dispatch} = props
   const handleItemNotifi = useCallback((item) => {
     navigation.navigate('DetailTask_Notifi', { taskId: item?.taskId });
     dispatch(actionSetIsReadNotify(item?.notifyId))
   }, [item]);
   const RenderIconNotity=({type})=>{
     if(type==10){
       return(
         <View style={{alignSelf:"flex-end",marginLeft:-15,marginTop:-10,backgroundColor:"#00CD00", borderRadius:16,padding:3}}>
           <IconNotityComment/>
         </View>
       )

     }else if(type >= 1 && type <= 3){
       return (
         <View style={{alignSelf:"flex-end",marginLeft:-15,marginTop:-10,backgroundColor:"#F0F8FF", borderRadius:16,padding:3}}>
           <IconEdit2 width={10} height={10}/>
         </View>
       )
     } else if(type == 6 || type==7 ){
       return (
         <View style={{alignSelf:"flex-end",marginLeft:-15,marginTop:-10,backgroundColor:"#00F5FF", borderRadius:16,padding:3}}>
           <IconReport width={10} height={10}/>
         </View>
       )
     }
     else{
       return (
         <View style={{alignSelf:"flex-end",marginLeft:-15,marginTop:-10,backgroundColor:"#FFCC00", borderRadius:16,padding:3}}>
           <IconBell/>
         </View>
       )
     }

   }
  return(
    <TouchableOpacity onPress={()=>{handleItemNotifi(item)}} style={{flexDirection:"row",alignItems:"center",paddingHorizontal:15,
      paddingVertical:15, backgroundColor:item.isRead==0?"#DDDDDD":"transparent"}}>
      <View>
        <FastImage
          style={{ width: 40, height: 40,borderRadius: 40/2 ,overflow: "hidden"}}
          source={{
            uri:  (baseUrlAvatarUser+props.item?.avatarCreateUser)||''

          }}
          resizeMode={FastImage.resizeMode.stretch}
        />
        <RenderIconNotity type={item.type}/>
      </View>

      <View style={{marginLeft:10,flex:0.98}}>
        <Text numberOfLines={4} style={{fontSize:14,flexWrap:"wrap", color:"black",fontFamily:"OpenSans-SemiBold"}}>{item.fullNameCreate+" "}
          <Text style={{fontSize:14,flexWrap:"wrap", color:"black",fontFamily:"OpenSans-Regular"}}>{item.content+" "}</Text>
          <Text style={{fontSize:14,flexWrap:"wrap", color:"black",fontFamily:"OpenSans-SemiBold"}}>{item.titleTask}</Text>
        </Text>
        <Text style={{fontSize:13,flexWrap:"wrap", color:"#8B8B83",fontFamily:"OpenSans-SemiBold"}}>{getTimeDifference(item?.timeNotify)}</Text>

      </View>
    </TouchableOpacity>
  )
})
