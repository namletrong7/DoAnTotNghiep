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
import { ItemFile } from "./ItemFile";
import { ItemStaff } from "../../../components/ItemStaff/ItemStaff.js";
import { useSelector } from "react-redux";

type props={
  type:number;
  navigation:any
}
export  const ListStaffSearch:React.FC<props> =React.memo(({type,navigation}) =>{

  const dataUserSearch = useSelector((state:any) => state.user.dataUserSearch);

    return (
      <View style={styles.container}>
        {type===2?
        <FlatList
              data={dataUserSearch}
              scrollEnabled={false}
              renderItem={({item, index})=><ItemStaff item={item} navigation={navigation}/>}
              keyExtractor={(item, index) => index.toString()}
            />:null}
      </View>
    );
  }
)
const styles = StyleSheet.create({
  container: {
    display:"flex",
  },

});


