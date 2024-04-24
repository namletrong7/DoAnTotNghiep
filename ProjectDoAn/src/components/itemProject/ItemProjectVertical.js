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
  getBackgroundStateProject,
  getColorBackgroundPriority,
  getColorPriority, getColorStateProject, getFirstAndLastCharacters,
  getRandomColor,
  getState, getStateProject,
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


const ItemProjectVertical = (props) => {


  function gotoDetailProjectScreen (item){
    props.navigation.navigate('DetailProjectScreen',{itemProject:item});
  }
  const ItemUser=React.memo(({item,index})=>{
    return (
      <FastImage
        style={{ width: 25, height: 25,borderRadius: 25/2 ,overflow: "hidden",marginLeft:index==0?0:-10,borderWidth:1, borderColor:'white'}}
        source={{
          uri: (baseUrlAvatarUser+item?.avatarUser)||''
        }}
        resizeMode={FastImage.resizeMode.stretch}

      />
    )
  })
  return (
    <TouchableOpacity style={styles.container} onPress={() => {gotoDetailProjectScreen(props.item)}}>

         <Text numberOfLines={2} style={{fontSize:14, color:"black",fontFamily:"OpenSans-Regular"}}>{props?.item?.nameProject}</Text>
         <View style={{marginVertical:5, flexDirection:"row", alignItems:"center",}}>
            <View  style={{alignSelf:'flex-start'}}>
              <FlatList
                data={props?.item?.dataListUser.slice(0, 4)}
                renderItem={({item,index}) => <ItemUser item={item} index={index} />}
                horizontal={true}
                keyExtractor={item => item.userId}
              />
            </View>
            {props?.item?.dataListUser.length>4&&
           <View
              style={{width: 25,alignSelf:"flex-start",alignItems:'center',justifyContent:'center', height: 25,borderRadius: 25/2 ,overflow: "hidden",marginLeft:-10,backgroundColor:"#A9A9A9"}}
            >
             <Text  style={{fontSize:13, color:"white",fontFamily:"OpenSans-SemiBold",fontWeight:'700'}}>{"+"+(props?.item?.dataListUser.length-4)}</Text>

           </View>}
         </View>
      <View style={{backgroundColor:getBackgroundStateProject(props?.item.state),alignSelf:'flex-start',padding:3,borderRadius:8,marginVertical:5}}>
        <Text numberOfLines={2} style={{fontSize:12, color:"black",fontFamily:"OpenSans-Regular"}}>{getStateProject(props?.item.state)}</Text>
      </View>
         <View style={{flexDirection:"row", justifyContent:"space-between",}}>
           <View style={{flexDirection:"row",alignItems:'center'}}>
             <IconLich/>
             <Text style={{fontSize:13, color:"#7B7B85",fontFamily:"OpenSans-Regular",marginLeft:5}}>{convertDateDB(props?.item?.endDay)}</Text>
           </View>

           <View style={{flexDirection:"row",alignItems:'center'}}>
               <IconCheck/>
             <Text style={{fontSize:13, color:"#7B7B85",fontFamily:"OpenSans-Regular",marginLeft:5}}>{(props?.item?.totalTask)+" Công việc"}</Text>
           </View>

         </View>



    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    display:"flex",
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

export default React.memo(ItemProjectVertical);
