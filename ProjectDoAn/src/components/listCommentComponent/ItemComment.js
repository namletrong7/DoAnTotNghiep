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


const ItemComment = ({item,navigation}) => {
  return (
    <View style={{ marginTop: 20, flexDirection: "row", flex: 1, }} >
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

      <View style={{ marginLeft: 10, flex: 0.95 }}>

        <TouchableOpacity style={{ flexDirection: "row", }} onPress={() => {
          navigation.navigate("ProfileUser", { userId: item?.createUser })
        }}>
          <Text numberOfLines={1}
                style={{ fontSize: 15, color: "black", fontFamily: "OpenSans-SemiBold" }}>{item?.fullName}</Text>
          <View style={{
            width: 7,
            height: 7,
            borderRadius: 7 / 2,
            backgroundColor: "#888888",
            margin: 9,
            alignSelf: "center"
          }} />
          <Text style={{ fontSize: 14, color: "black", fontFamily: "OpenSans-SemiBold" }}>{item?.createdDate}</Text>
        </TouchableOpacity>
        <Text style={{
          fontSize: 15,
          color: "black",
          fontFamily: "OpenSans-Regular",
          backgroundColor: "#DDDDDD",
          alignSelf:"flex-start",
          paddingHorizontal: 10,
          paddingVertical: 5,
          borderRadius: 16,
          borderBottomRightRadius: 0
        }}>{item?.content}</Text>
      </View>

    </View>
  )
}

export default React.memo(ItemComment);
