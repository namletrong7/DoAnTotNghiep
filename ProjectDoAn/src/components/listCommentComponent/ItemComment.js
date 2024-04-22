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
import { baseUrlAvatarUser, baseUrlLinkFile } from "../../api/ConstBaseUrl";
import { convertDateDB } from "../../utils/ConverPickerDate";
import IconLike from "../../assets/icons/IconLike";
import IconUnLike from "../../assets/icons/IconUnlike";


const ItemComment = ({item,navigation,openActionComment}) => {
  return (
    <TouchableOpacity style={{ marginTop: 20, flexDirection: "row", flex: 1 }} onLongPress={()=>{openActionComment(item)}} >
      <TouchableOpacity onPress={() => {
        navigation.navigate("ProfileUser", { userId: item?.createUser })
      }}>
        <FastImage
          style={{ width: 30, height: 30, borderRadius: 30 / 2, overflow: "hidden" }}
          source={{
            uri: (baseUrlAvatarUser + item?.avatarUser) || ''

          }}
          resizeMode={FastImage.resizeMode.cover}

        />
      </TouchableOpacity>

      <View style={{ marginLeft: 10,flex:1,}}>
        <View style={{ backgroundColor: "rgba(0,0,0,0.05)",borderRadius: 16,
          borderBottomRightRadius: 0, paddingVertical:5, paddingHorizontal:10,
          alignSelf:"flex-start",}}>
          <TouchableOpacity style={{ flexDirection: "row",alignItems:'center',flexWrap:'wrap',flex:1}} onPress={() => {
            navigation.navigate("ProfileUser", { userId: item?.createUser })
          }}>
            <Text numberOfLines={1}
                  style={{ fontSize: 14, color: "black", fontFamily: "OpenSans-SemiBold" }}>{item?.fullName}</Text>
            <View style={{
              width: 7,
              height: 7,
              borderRadius: 7 / 2,
              backgroundColor: "#888888",
              marginHorizontal: 9,
              alignSelf: "center"
            }} />
            <Text style={{ fontSize: 13, color: "black", fontFamily: "OpenSans-Regular" }}>{convertDateDB(item?.createdDate)}</Text>
          </TouchableOpacity>
          <Text style={{
            fontSize: 14,
            color: "black",
            fontFamily: "OpenSans-Regular",
            paddingHorizontal: 5,
            marginVertical:3,
          }}>{item?.content}</Text>
        </View>
      </View>
     <TouchableOpacity style={{alignSelf:'center',marginLeft:10}}>
       <IconUnLike/>
     </TouchableOpacity>

    </TouchableOpacity>
  )
}

export default React.memo(ItemComment);
