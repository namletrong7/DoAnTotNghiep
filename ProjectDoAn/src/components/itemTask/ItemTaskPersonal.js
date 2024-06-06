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
import {
  getBackgroundStateTask,
  getColorBackgroundPriority,
  getColorPriority,
  getColorTextStateTask,
  getState,
  getValuePriority
} from "../../utils/GetPriority";

import { baseUrlAvatarUser } from "../../api/ConstBaseUrl";

import {convertDateDB, RenderWarningDate} from "../../utils/ConverPickerDate";


export  const ItemTaskPersonal=React.memo(({item,gotoDetail})=>{

  return(
    <TouchableOpacity onPress={()=>{gotoDetail(item.taskId)}} style={{paddingVertical:5,backgroundColor:"white",borderRadius:10,marginVertical:3}}>
      <View style={{flexDirection:"row", justifyContent:"space-between",paddingHorizontal:15}}>
        <View style={{flex:1}}>
          <Text numberOfLines={2} style={{flexWrap:"wrap", flex:1}}>
            <Text style={{
              fontSize: 15,
              color: getColorPriority(item.priority),
              fontFamily: "OpenSans-Regular",
              marginRight:10,paddingHorizontal:5,
              backgroundColor: getColorBackgroundPriority(item.priority)
            }}>{getValuePriority(item.priority)}
            </Text>
            <Text>{'    '}</Text>
            <Text   style={{fontSize:15, flexWrap: "wrap", color:"black",fontFamily:"OpenSans-Regular",textDecorationLine: item.state==2?"line-through":"none"}}>{item.title}</Text>
          </Text>
          {item.endDay==='0000-00-00'?null:
          <Text style={{fontSize:15, flexWrap: "wrap", color:"#9260f4",fontFamily:"OpenSans-Regular",marginVertical:10}}>{"Hạn: "+convertDateDB(item.endDay)}</Text>}
          <View style={{flexDirection:"row",justifyContent:'space-between',alignItems:'center',flex:1}}>
            {RenderWarningDate(item.endDay)}
            <View style={{backgroundColor:getBackgroundStateTask(item?.state),justifyContent:'center',padding:3,borderRadius:16,paddingHorizontal:10,marginTop:9}}>
              <Text style={{
                fontSize: 13,
                color: getColorTextStateTask(item?.state),
                fontFamily: "OpenSans-Regular",
              }}>{getState(item?.state)}
              </Text>
            </View>

          </View>

        </View>

         <View style={{flexDirection:"row",alignSelf:"flex-start"}}>
           <FastImage
               style={{ width: 30, height: 30,borderRadius: 30/2 ,backgroundColor:'white',overflow: "hidden", borderWidth:1, borderColor:"#DDDDDD"}}
               source={{
                 uri: baseUrlAvatarUser+item?.avatarAssignUser
               }}
               resizeMode={FastImage.resizeMode.cover}
           />
           <FastImage
             style={{ width: 30, height: 30,backgroundColor:'white',borderRadius: 30/2 ,overflow: "hidden",marginLeft:-7,borderWidth:1, borderColor:"#DDDDDD"}}
               source={{
                 uri: baseUrlAvatarUser+item?.avatarTargetUser
               }}
               resizeMode={FastImage.resizeMode.cover}
           />
         </View>




      </View>
    </TouchableOpacity>
  )
})
