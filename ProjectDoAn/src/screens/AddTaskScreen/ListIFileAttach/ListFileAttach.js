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


export  const ListFileAttach =React.memo((props) =>{
   const {dataFilePicker,handleDelete} =props
    const  RenderItemFile = (props) => {
      return(
        <TouchableOpacity onPress={()=>handleDelete(props.index)} style={{marginTop: 5,paddingVertical:5,paddingHorizontal:5, borderRadius:20, backgroundColor:"#CCCCCC",flexDirection:"row", alignItems:"center",justifyContent:"space-around",flex:0.5,height:50,marginRight:5}}>
         <IconFileSmall/>
          <Text style={{marginLeft:10,flex:0.9,fontSize:13, color:"black",fontFamily:"OpenSans-SemiBold",marginRight:10, }}>{props.item.name}</Text>
              <IconX/>
        </TouchableOpacity>
      )
    };

    return (
      <View style={styles.container}>
        <FlatList
              data={dataFilePicker}
              scrollEnabled={false}
              numColumns={2}
              renderItem={({item, index})=><RenderItemFile item={item} index={index}/>}
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


