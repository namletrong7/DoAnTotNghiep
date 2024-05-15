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
import ItemProjectVertical from "../../components/itemProject/ItemProjectVertical";


type props={
  type:number;
  navigation:any
}
export  const ListProjectSearch:React.FC<props> =React.memo(({type,navigation}) =>{

  const dataSearchProject = useSelector((state:any) => state.project.dataSearchProject);
    return (
      <Animated.View
        entering={SlideInRight.duration(500)} exiting={SlideOutLeft.duration(500)}
        style={{ flex: 1}}
      >
      <View style={styles.container}>
        {type===3?
        <FlatList
              data={dataSearchProject}
              scrollEnabled={false}
              renderItem={({item, index})=><ItemProjectVertical item={item} navigation={navigation}/>}
              keyExtractor={item => item.projectId}
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


