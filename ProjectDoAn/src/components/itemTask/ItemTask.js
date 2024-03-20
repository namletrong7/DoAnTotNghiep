/**
 * Componet itemtask : thiết kế item cho 1 công việc trên danh sách
 */
/**
 * Componet hiển thị nội dung từng ngày họp cụ thể
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
import { baseUrlAvatarUser } from "../../api/ConstBaseUrl";
import IconAttach from "../../assets/icons/IconAttach";
import ItemComment from "../listCommentComponent/ItemComment";
import IconComment from "../../assets/icons/IconComment";


const ItemTask = (props) => {
  console.log(props.item.taskId)
  // render ra priority của  task
  const RenderPriority = () => {
        return(
              <View style={{padding:8, borderRadius:16, backgroundColor:getColorBackgroundPriority(props.item.priority),paddingHorizontal:14,marginLeft:40}}>
                <Text style={{fontSize:15, color:getColorPriority(props.item.priority),fontFamily:"OpenSans-Regular"}}>{getValuePriority(props.item.priority)}</Text>
              </View>
        )
  };
  function gotoDetailScreen (taskId){
    props.navigation.navigate('DetailTaskScreen',{taskId:taskId});
  }
  return (
    <TouchableOpacity style={styles.container} onPress={() => {gotoDetailScreen(props.item.taskId)}}>
      <View style={{flexDirection:'row'}}>
         <View style={styles.containerEndDay}>
             <IconCalendar/>
             <Text style={{fontSize:15, color:"black",fontFamily:"OpenSans-Regular",marginLeft:5}}>{props.item.endDay}</Text>
         </View>
        {RenderPriority()}
      </View>
      <View style={{flexDirection:"row",justifyContent:"space-around"}}>
        <View style={{  flex:0.9,flexDirection:"row",backgroundColor:"#F0F0F0",borderRadius:15,padding: 8,alignItems:"center",marginTop:10,}}>
          <FastImage
            style={{ width: 24, height: 24,borderRadius: 24/2 ,overflow: "hidden", borderWidth: 1,borderColor:"#99CCFF"}}
            source={{
              uri: baseUrlAvatarUser+props.item?.avatarAssignUser
            }}
            resizeMode={FastImage.resizeMode.stretch}

          />
          <Text style={{fontSize:15, color:"black",fontFamily:"OpenSans-Regular",marginLeft:12,flexWrap:"wrap", flex:1}}>{props.item.assignFullName}</Text>
        </View>
        <View style={{  flexDirection:"row",backgroundColor:"#F0F0F0",borderRadius:15,padding: 8,alignItems:"center",marginTop:10,alignSelf:"flex-start"}}>
          <IconAttach/>
          <Text style={{fontSize:15, color:"black",fontFamily:"OpenSans-Regular",marginLeft:12}}>{"6"}</Text>
        </View>
        <View style={{  flexDirection:"row",backgroundColor:"#F0F0F0",borderRadius:15,padding: 8,alignItems:"center",marginTop:10,alignSelf:"flex-start"}}>
          <IconComment/>
          <Text style={{fontSize:15, color:"black",fontFamily:"OpenSans-Regular",marginLeft:12}}>{"10"}</Text>
        </View>
      </View>

      <View style={{marginTop:10}}>
        <Text style={{fontSize:24, color:"black",fontFamily:"OpenSans-SemiBold",fontWeight:'700'}}>{props.item.title}</Text>
      </View>
      {props.item.content.trim().length>0&&
      (<View style={{marginTop:10}}>
        <Text style={{fontSize:15, color:"#999999",fontFamily:"OpenSans-Regular"}} numberOfLines={2}>{props.item.content}</Text>
      </View>)}
      <View style={{flexDirection:"row",marginTop:10,alignContent:"center"}}>
        <View style={{marginTop:10,backgroundColor:"#CCCCCC",height:10, borderRadius:50,width:'84%'}}>
          <View style={{flex:1,backgroundColor:"#4577ef",borderRadius:50,width:props.item.progress+"%"}}></View>
        </View>
          <Text style={{fontSize:15, color:"#999999",fontFamily:"OpenSans-Regular",marginTop:4,marginLeft:10}} numberOfLines={2}>{props.item.progress+"%"}</Text>
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
});

export default React.memo(ItemTask);
