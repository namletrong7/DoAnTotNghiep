/**
 * Componet này húng vào để hiển thị cac file dã chọn từ máy cho màn hình addTaskSceen
 */

import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  SafeAreaView, ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import IconXLS from "../../../assets/icons/IconXLS";
import IconX from "../../../assets/icons/IconX";
import IconFile from "../../../assets/icons/IconFile";
import IconFileSmall from "../../../assets/icons/IconFileSmall";
import { RenderItemFile } from "./RenderItemFile";


export  const ListFileAttach =React.memo((props) =>{
   const {dataFilePicker,handleDelete} =props


    return (
      <View style={styles.container}>
        <FlatList
              data={dataFilePicker}
              scrollEnabled={true}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({item, index})=><RenderItemFile item={item} index={index} handleDelete={handleDelete}/>}
              keyExtractor={(item, index) => index.toString()}
            />
      </View>
    );
  }
)
const styles = StyleSheet.create({
  container: {
    display:"flex",
    marginTop: 19
  },

});


