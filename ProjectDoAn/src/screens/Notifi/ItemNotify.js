import {Pressable, Text, TouchableOpacity, View} from "react-native";
import FastImage from "react-native-fast-image";
import { baseUrlAvatarUser } from "../../api/ConstBaseUrl";
import React, { useCallback } from "react";
import IconNotityComment from "../../assets/icons/IconNotityComment";
import IconEdit2 from "../../assets/icons/IconEdit2";
import IconReport from "../../assets/icons/IconReport";
import IconBell from "../../assets/icons/IconBell";
import { actionSetIsReadNotify } from "../../redux-store/actions/task";
import { getTimeDifference } from "../../utils/ConverPickerDate";
import IconPeople from "../../assets/icons/IconPeople";

 export const ItemNotify = React.memo((props)=>{
  const {item, navigation,dispatch} = props
   const handleItemNotifi = useCallback((item) => {
     if(item?.type<12){
       navigation.navigate('DetailTask_Notifi', { taskId: item?.taskId });
     }else {
       navigation.navigate('DetailProjectScreen', { projectId:item?.projectId });
     }

     if(item.isRead==0) // chưa đọc
     {
       dispatch(actionSetIsReadNotify(item?.notifyUserId))
     }else{
       return ;
     }

   }, [item]);
   const RenderIconNotity=React.memo(({type})=>{
     if(type==10){
       return(
         <View style={{alignSelf:"flex-end",marginLeft:-15,marginTop:-10,backgroundColor:"#00CD00", borderRadius:16,padding:5}}>
           <IconNotityComment/>
         </View>
       )

     }else if(type >= 1 && type <= 3){
       return (
         <View style={{alignSelf:"flex-end",marginLeft:-15,marginTop:-10,backgroundColor:"#F0F8FF", borderRadius:16,padding:5}}>
           <IconEdit2 width={15} height={15}/>
         </View>
       )
     } else if(type == 11 ){
       return (
         <View style={{alignSelf:"flex-end",marginLeft:-15,marginTop:-10,backgroundColor:"#5030E5", borderRadius:16,padding:5}}>
           <IconPeople width={15} height={15}/>
         </View>
       )
     }
     else{
       return (
         <View style={{alignSelf:"flex-end",marginLeft:-15,marginTop:-10,backgroundColor:"#FFCC00", borderRadius:16,padding:5}}>
           <IconBell/>
         </View>
       )
     }

   })
  return(
    <View>
    <Pressable onPress={()=>{handleItemNotifi(item)}} style={{flexDirection:"row",alignItems:"center",paddingHorizontal:10,
      paddingVertical:7, backgroundColor:item.isRead==0?"#AAAAAA":"transparent"}}>
      <View>
        <FastImage
          style={{ width: 50, height: 50,borderRadius: 50/2 ,overflow: "hidden"}}
          source={{
            uri:  (baseUrlAvatarUser+props.item?.avatarCreateUser)||''

          }}
          resizeMode={FastImage.resizeMode.stretch}
        />
        <RenderIconNotity type={item.type}/>
      </View>

      <View style={{marginLeft:10,flex:0.98}}>
        <Text numberOfLines={4} style={{fontSize:13,flexWrap:"wrap", color:"black",fontFamily:"OpenSans-SemiBold"}}>{item.fullNameCreate+" "}
          <Text style={{fontSize:13,flexWrap:"wrap", color:"black",fontFamily:"OpenSans-Regular"}}>{item.content+" "}</Text>
          <Text style={{fontSize:13,flexWrap:"wrap", color:"black",fontFamily:"OpenSans-SemiBold"}}>{item?.type<11?item?.titleTask:item?.nameProject}</Text>
        </Text>
        <Text style={{fontSize:11,flexWrap:"wrap", color:item.isRead==0?"white":"#8B8B83",fontFamily:"OpenSans-SemiBold"}}>{getTimeDifference(item?.timeNotify)}</Text>
      </View>
    </Pressable>
      <View style={{height:1, backgroundColor:"#999999"}}/>
    </View>
  )
})
