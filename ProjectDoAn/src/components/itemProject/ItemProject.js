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
import IconLich from "../../assets/icons/IconLich";
import { baseUrlAvatarUser } from "../../api/ConstBaseUrl";
import ItemTask from "../itemTask/ItemTask";
import IconCheck from "../../assets/icons/IconCheck";
import {convertDateDB} from "../../utils/ConverPickerDate";


const ItemProject = (props) => {


  function gotoDetailProjectScreen (item){
    props.navigation.navigate('DetailProjectScreen',{itemProject:item});
  }
  const ItemUser=({item,index})=>{
    return (
      <FastImage
        style={{ width: 30, height: 30,borderRadius: 30/2 ,overflow: "hidden",marginLeft:index==0?0:-10}}
        source={{
          uri: (baseUrlAvatarUser+item?.avatarUser)||''
        }}
        resizeMode={FastImage.resizeMode.stretch}

      />
    )
  }
  return (
    <TouchableOpacity style={styles.container} onPress={() => {gotoDetailProjectScreen(props.item)}}>

         <Text numberOfLines={2} style={{fontSize:18, color:"black",fontFamily:"OpenSans-SemiBold",fontWeight:'700'}}>{props.item.nameProject}</Text>
         <View style={{marginVertical:10, flexDirection:"row", alignItems:"center",}}>
           <FlatList
             data={props?.item?.dataListUser}
             renderItem={({item,index}) => <ItemUser item={item} index={index} />}
             horizontal={true}
             keyExtractor={item => item.userId}
           />
         </View>
         <View style={{flexDirection:"row", justifyContent:"space-between",}}>
           <View style={{flexDirection:"row",justifyContent:'center'}}>
             <IconLich/>
             <Text style={{fontSize:15, color:"#7B7B85",fontFamily:"OpenSans-Regular",marginLeft:5}}>{convertDateDB(props?.item?.endDay)}</Text>
           </View>

           <View style={{flexDirection:"row"}}>
               <IconCheck/>
             <Text style={{fontSize:15, color:"#7B7B85",fontFamily:"OpenSans-Regular",marginLeft:5}}>{(props?.item?.totalTask)+" Công việc"}</Text>
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
    paddingHorizontal:15,
    marginBottom:10,
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
