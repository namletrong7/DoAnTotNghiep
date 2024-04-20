/**
 * Componet này húng vào để hiển thị cac file dã chọn từ máy cho màn hình addTaskSceen
 */

import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  SafeAreaView, ScrollView,
  StyleSheet,

  View,
} from "react-native";

import { useSelector } from "react-redux";
import { ItemStaff } from "../../components/ItemStaff/ItemStaff.js";
import Animated, {  SlideInRight, SlideOutLeft} from "react-native-reanimated";
type props={
  type:number;
  navigation:any
}
export  const ListStaffSearch:React.FC<props> =React.memo(({type,navigation}) =>{

  const dataUserSearch = useSelector((state:any) => state.user.dataUserSearch);
   useEffect(()=>{
     console.log("mout lại tìm kiesm nhân vien")
   },[])
    return (
      <Animated.View
        entering={SlideInRight.duration(500)} exiting={SlideOutLeft.duration(500)}
        style={{ flex: 1}}
      >
      <View style={styles.container}>
        {type===2?
        <FlatList
              data={dataUserSearch}
              scrollEnabled={false}
              renderItem={({item})=><ItemStaff item={item} navigation={navigation}></ItemStaff>}
              keyExtractor={item => item.userId }
            />:null}
      </View>
      </Animated.View>
    );
  }
)
const styles = StyleSheet.create({
  container: {
    display:"flex",
  },

});


