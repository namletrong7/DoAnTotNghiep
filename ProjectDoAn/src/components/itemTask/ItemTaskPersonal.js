/**
 * Componet itemtask : thiết kế item cho 1 công việc trên danh sách
 */
/**
 * Componet hiển thị nội dung từng ngày họp cụ thể
 */
import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";

import AppNavigator from "../../navigation/AppNavigator";
import IconFlag from "../../assets/icons/IconArrowDown";
import FastImage from 'react-native-fast-image'
import { getColorBackgroundPriority, getColorPriority, getState, getValuePriority } from "../../utils/GetPriority";
import IconCalendar from "../../assets/icons/IconCalendar";
import { baseUrlAvatarUser } from "../../api/ConstBaseUrl";
import IconAttach from "../../assets/icons/IconAttach";
import ItemComment from "../listCommentComponent/ItemComment";
import IconComment from "../../assets/icons/IconComment";
import IconMuiTenXuong from "../../assets/icons/IconMuiTenXuong";


export  const ItemTaskPersonal=React.memo(({item,gotoDetail})=>{

  return(
    <TouchableOpacity onPress={()=>{gotoDetail(item.taskId)}} style={{paddingVertical:3,}}>
      <View style={{flexDirection:"row", justifyContent:"space-between",paddingHorizontal:15}}>
        <View style={{flex:1}}>
          <Text style={{flexWrap:"wrap", flex:1}}>
            <Text style={{
              fontSize: 15,
              color: getColorPriority(item.priority),
              fontFamily: "OpenSans-Regular",
              marginRight:10,paddingHorizontal:5,
              backgroundColor: getColorBackgroundPriority(item.priority)
            }}>{getValuePriority(item.priority)}
            </Text>
            <Text>{'    '}</Text>
            <Text style={{fontSize:17, flexWrap: "wrap", color:"black",fontFamily:"OpenSans-Regular",textDecorationLine: item.state==2?"line-through":"none"}}>{item.title}</Text>
          </Text>
          <Text style={{fontSize:15, flexWrap: "wrap", color:"black",fontFamily:"OpenSans-Regular",marginVertical:10}}>{"Hạn: "+item.endDay}</Text>
        </View>

        <View style={{flexDirection:"row"}}>
          <FastImage
            style={{ width: 20, height: 20,borderRadius: 20/2 ,overflow: "hidden"}}
            source={{
              uri: baseUrlAvatarUser+item?.avatarAssignUser
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
          <FastImage
            style={{ width: 20, height: 20,borderRadius: 20/2 ,overflow: "hidden",marginLeft:-7}}
            source={{
              uri: baseUrlAvatarUser+item?.avatarTargetUser
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
        </View>

      </View>



      <View style={{height:1, backgroundColor:"#DDDDDD", width:"100%", marginVertical:3}}/>
    </TouchableOpacity>
  )
})
