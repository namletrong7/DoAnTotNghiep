/**
 * Componet itemtask : thiết kế item cho 1 công việc trên danh sách
 */
/**
 * Componet hiển thị nội dung từng ngày họp cụ thể
 */
import React, {useCallback, useState} from 'react';
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
import { baseUrlAvatarUser } from "../../api/ConstBaseUrl";
import IconAttach from "../../assets/icons/IconAttach";
import ItemComment from "../listCommentComponent/ItemComment";
import IconComment from "../../assets/icons/IconComment";
import RenderHtml from "react-native-render-html";
import { ProgressTaskComponent } from "../ProgressTaskComponent/ProgressTaskComponent";
import {RenderWarningDate} from "../../utils/ConverPickerDate";
import IconHeart from "../../assets/icons/IconHeart";


const ItemTask = (props) => {
//  console.log(props.item.taskId)
  // render ra priority của  task
  const RenderPriority = React.memo(() => {
        return(
              <View style={{padding:3, borderRadius:16, backgroundColor:getColorBackgroundPriority(props.item.priority),paddingHorizontal:5,marginLeft:40,flexDirection:"row",alignItems:'center'}}>
                <View style={{width:7, height:7, borderRadius:7/2, backgroundColor:getColorPriority(props.item.priority)}}/>
                <Text style={{fontSize:13,marginLeft:5, color:getColorPriority(props.item.priority),fontFamily:"OpenSans-Regular"}}>{getValuePriority(props.item.priority)}</Text>
              </View>
        )
  });
  const gotoDetailScreen =useCallback((taskId)=>{
    props.navigation.navigate('DetailTaskScreen',{taskId:taskId});
  })

  return (
    <TouchableOpacity style={styles.container} onPress={() => {gotoDetailScreen(props.item.taskId)}}>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
         <View style={styles.containerEndDay}>
             <IconCalendar/>
             <Text style={{fontSize:13, color:"black",fontFamily:"OpenSans-Regular",marginLeft:5}}>{props.item?.endDay}</Text>
         </View>
        <RenderPriority/>
      </View>
      <View style={{marginTop:5,flexDirection:"row"}}>
        <View style={{width:3,backgroundColor:getColorPriority(props.item.priority)}}/>
        <Text numberOfLines={2} style={{fontSize:14 ,marginLeft:"5%", color:"black",fontFamily:"OpenSans-SemiBold",fontWeight:'700'}}>{props?.item?.title}</Text>
      </View>
     <ProgressTaskComponent progress={props?.item?.progress} priority={props.item.priority}/>
      <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:9,marginHorizontal:5}}>
        <View style={{flexDirection:"row",alignSelf:'center'}}>
          <FastImage
            style={styles.imageStyle}
            source={{
              uri: baseUrlAvatarUser+props.item?.avatarAssignUser
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
          <FastImage
            style={[styles.imageStyle,{marginLeft:-7}]}
            source={{
              uri: baseUrlAvatarUser+props.item?.avatarTargetUser
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
        </View>
        <View style={{flexDirection:'row',flex:0.45,justifyContent:'space-between'}}>
          <View style={styles.backgroundQuantity}>
            <IconComment/>
            <Text style={styles.textStyleQuantity}>{"6"}</Text>
          </View>
          <View style={styles.backgroundQuantity}>
            <IconAttach/>
            <Text style={styles.textStyleQuantity}>{"10"}</Text>
          </View>
        </View>
      </View>
        {RenderWarningDate(props.item.endDay)}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
   display:"flex",
    marginHorizontal:5,
    backgroundColor:"white",
    borderRadius:7,
    paddingVertical:10,
    paddingHorizontal:10,
    marginBottom:10
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
  backgroundQuantity:{
    flexDirection:"row",alignItems:"center",
    borderRadius:6,backgroundColor:"#E8E8E8",paddingHorizontal:10,paddingVertical:5
  },
  textStyleQuantity:{
    fontSize:15, color:"#4F4F4F",fontFamily:"OpenSans-Regular",marginLeft:5
  },
  imageStyle:{
    width: 25, height: 25,borderRadius: 25/2 ,overflow: "hidden",
    borderWidth:1, borderColor:"#E8E8E8"
  }
});

export default React.memo(ItemTask);
