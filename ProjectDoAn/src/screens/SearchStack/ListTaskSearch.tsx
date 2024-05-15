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
import Animated, {  SlideInRight, SlideOutLeft} from "react-native-reanimated";
import { useSelector } from "react-redux";
import { ItemStaff } from "../../components/ItemStaff/ItemStaff.js";
import ItemTask from "../../components/itemTask/ItemTask.js";

type props={
  type:number;
  navigation:any
}
export  const ListTaskSearch:React.FC<props> =React.memo(({type,navigation}) =>{

  const dataUserSearch = useSelector((state:any) => state.task.dataSearchTask);

    return (
      <Animated.View
        entering={SlideInRight.duration(500)} exiting={SlideOutLeft.duration(500)}
        style={{ flex: 1}}
      >
      <View style={styles.container}>
        {type===1?
        <FlatList
              data={dataUserSearch}
              scrollEnabled={false}
              renderItem={({item})=><ItemTask item={item} navigation={navigation}></ItemTask>}
              keyExtractor={item => item.taskId}
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


