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
import {
  getColorBackgroundPriority,
  getColorPriority, getFirstAndLastCharacters,
  getRandomColor,
  getState,
  getValuePriority,
} from "../../utils/GetPriority";
import IconCalendar from "../../assets/icons/IconCalendar";
import IconProject from "../../assets/icons/IconProject";
import IconArrowRight from "../../assets/icons/IconArrowRigth";


const ItemProject = (props) => {


  function gotoDetailProjectScreen (item){
    props.navigation.navigate('DetailProjectScreen',{itemProject:item});
  }
  return (
    <TouchableOpacity style={styles.container} onPress={() => {gotoDetailProjectScreen(props.item)}}>
      <View style={{height:40, width:40, borderRadius:20, backgroundColor:getRandomColor(), alignItems:'center', justifyContent:"center"}}>
        <Text style={{fontSize:13, color:"white",fontFamily:"OpenSans-Regular",fontWeight:'700'}}>{getFirstAndLastCharacters(props.item.nameProject)}</Text>
      </View>
      <View style={{marginHorizontal:10,flex:1}}>
        <Text numberOfLines={2} style={{fontSize:18, color:"black",fontFamily:"OpenSans-SemiBold",fontWeight:'700'}}>{props.item.nameProject}</Text>
        <View style={{marginTop:3, flexDirection:"row", alignItems:"center"}}>
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
