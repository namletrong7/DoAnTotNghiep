/**
 * Componet itemtask : thiết kế item cho 1 project
 */
/**
 *
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
import IconProject from "../../assets/icons/IconProject";
import IconArrowRight from "../../assets/icons/IconArrowRigth";


const ItemProject = (props) => {


  function gotoDetailProjectScreen (taskId){
    props.navigation.navigate('Detail',{taskId:taskId});
  }
  return (
    <TouchableOpacity style={styles.container} onPress={() => {gotoDetailProjectScreen(props.item.taskId)}}>
            <IconProject/>
      <View style={{marginHorizontal:10}}>
        <Text style={{fontSize:18, color:"black",fontFamily:"OpenSans-SemiBold",fontWeight:'700',maxWidth:"98%"}}>{props.item.nameProject}</Text>
        <View style={{marginTop:10, flexDirection:"row", alignItems:"center"}}>
          <Text style={{fontSize:15, color:"black",fontFamily:"OpenSans-Regular"}}>{props.item.startDay}</Text>
          <View style={{marginHorizontal:10}}>
            <IconArrowRight/>
          </View>
          <Text style={{fontSize:15, color:"black",fontFamily:"OpenSans-Regular"}}>{props.item.endDay}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
   flex:1,
    marginHorizontal:10,
    backgroundColor:"white",
    borderRadius:7,
    paddingVertical:5,
    paddingHorizontal:5,
    marginBottom:10,
    flexDirection:"row",
    alignItems:"center"
  },
  containerEndDay: {
      flexDirection:"row",
      backgroundColor:"#F0F0F0",
      borderRadius:15,
      padding: 8,
      width:"40%",
      justifyContent:"space-around",
      alignItems:"center"
  },
});

export default React.memo(ItemProject);
