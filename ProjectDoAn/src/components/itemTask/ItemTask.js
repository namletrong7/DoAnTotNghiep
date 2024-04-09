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
import RenderHtml from "react-native-render-html";


const ItemTask = (props) => {
//  console.log(props.item.taskId)
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
             <Text style={{fontSize:15, color:"black",fontFamily:"OpenSans-Regular",marginLeft:5}}>{props.item?.endDay}</Text>
         </View>
        {RenderPriority()}
      </View>
      <View style={{marginTop:7}}>
        <Text numberOfLines={2} style={{fontSize:17, color:"black",fontFamily:"OpenSans-SemiBold",fontWeight:'700'}}>{props?.item?.title}</Text>
      </View>
      {props.item.content.trim().length>0&&
      (<View style={{marginTop:5,height:10,flex:1}}>
        <RenderHtml
          contentWidth={ Dimensions.get("window").width}
          source={{html:props?.item?.content}}
          tagsStyles={{
            div:{
              color:"black",
              fontSize:15
            },
            a:{
              color:"black"
            }

          }}
        />
        {/*<Text style={{fontSize:15, color:"#999999",fontFamily:"OpenSans-Regular"}} numberOfLines={2}>{props?.item?.content}</Text>*/}
      </View>)}
      <View style={{flexDirection:"row",marginTop:10,alignContent:"center"}}>
        <View style={{marginTop:10,backgroundColor:"#CCCCCC",height:10, borderRadius:50,width:'84%'}}>
          <View style={{flex:1,backgroundColor:"#4577ef",borderRadius:50,width:props.item.progress+"%"}}></View>
        </View>
          <Text style={{fontSize:15, color:"#999999",fontFamily:"OpenSans-Regular",marginTop:4,marginLeft:10}} numberOfLines={2}>{props?.item?.progress+"%"}</Text>
      </View>
      <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:5,marginHorizontal:5}}>
        <View style={{flexDirection:"row",alignSelf:'center'}}>
          <FastImage
            style={{ width: 20, height: 20,borderRadius: 20/2 ,overflow: "hidden"}}
            source={{
              uri: baseUrlAvatarUser+props.item?.avatarAssignUser
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
          <FastImage
            style={{ width: 20, height: 20,borderRadius: 20/2 ,overflow: "hidden",marginLeft:-7}}
            source={{
              uri: baseUrlAvatarUser+props.item?.avatarAssignUser
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
        </View>
        <View style={{  flexDirection:"row",alignItems:"center"}}>
          <IconComment/>
          <Text style={{fontSize:15, color:"#787486",fontFamily:"OpenSans-Regular",marginLeft:5}}>{"6 bình luận"}</Text>
        </View>
        <View style={{  flexDirection:"row",alignItems:"center"}}>
          <IconAttach/>
          <Text style={{fontSize:15, color:"#787486",fontFamily:"OpenSans-Regular",marginLeft:5}}>{"10 file đính kèm"}</Text>
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
