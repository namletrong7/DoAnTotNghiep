/**
 * Componet hiển thị danh sách bình luận
 */

import React, { Component, useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text, TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";


import FastImage from 'react-native-fast-image'
import IconSend from "../../assets/icons/IconSend";

import { actionAddComment, actionLoadMoreComment } from "../../redux-store/actions/auth";
import { connect, useDispatch, useSelector } from "react-redux";
import IconArrowDown from "../../assets/icons/IconArrowDown";
import IconArrowUp from "../../assets/icons/IconArrowLeft";
import { ShimmerEffectCommentComponent } from "../shimmerEfffect/ShimmerEffectComment/ShimmerEffectCommentComponent";
import FlashMessage from "react-native-flash-message";
import { actionGetCommentTask, actionGetMoreCommentTask } from "../../redux-store/actions/task";
import axios from "axios";
import { baseUrlAvatarUser } from "../../api/ConstBaseUrl";
import { useNavigation } from "@react-navigation/native";
  const ListCommentComponent  =(props)=> {
    const dispatch = useDispatch();
    const navi = useNavigation();
    const [see, setSee] = useState(true);// mảng chứa các file dc chọn
    const isGetComment = useSelector(state => state.task.isGetComment);
    const dataCommentTask = useSelector(state => state.task.dataCommentTask);

    const isGetMoreComment = useSelector(state => state.task.isGetMoreComment);


     useEffect(()=> {// hàm thực hiện sau mỗi lần render
       console.log("taskId o comment: "+props.taskId)
     dispatch(actionGetCommentTask(props.taskId,0))

    },[props.taskId])
   const loadMoreComment=()=>{
     dispatch(actionGetMoreCommentTask(props.taskId,dataCommentTask.length))
    }

  const  RenderItemComment = (props) => {
    return(
      <View style={{marginTop: 20,flexDirection:"row",flex:1,}}>
        <TouchableOpacity onPress={()=>{navi.navigate("ProfileUser",{userId:props.item.createUser})}}>
          <FastImage
            style={{ width: 50, height: 50,borderRadius: 50/2 ,overflow: "hidden", borderWidth: 1,borderColor:"#99CCFF"}}
            source={{
              uri:  (baseUrlAvatarUser+props.item?.avatarUser)||''

            }}
            resizeMode={FastImage.resizeMode.stretch}

          />
        </TouchableOpacity>

        <View style={{marginLeft:10,flex:0.8}}>

          <View style={{flexDirection:"row",}}>
            <Text  numberOfLines={1} style={{fontSize:15, color:"black",fontFamily:"OpenSans-SemiBold"}}>{props.item.fullName}</Text>
            <View  style={{width:7,height:7,borderRadius:7/2, backgroundColor:"#888888", margin:9,alignSelf:"center"}}/>
            <Text style={{fontSize:14, color:"black",fontFamily:"OpenSans-SemiBold"}}>{props.item.createdDate}</Text>
          </View>
          <Text style={{fontSize:14, color:"black",fontFamily:"OpenSans-Regular"}}>{props.item.content}</Text>
        </View>

      </View>
    )
  };

     return (
       <View style={styles.container}>
         <TouchableOpacity style={{flexDirection:"row",justifyContent:"space-between"}} onPress= {() => {setSee(!see)} }>
           <Text style={{fontSize:18, color:"black",fontFamily:"OpenSans-SemiBold"}} numberOfLines={10}>{"Bình luận"}</Text>
           <View>
             {see? <IconArrowDown/>:<IconArrowUp/>}
           </View>
         </TouchableOpacity>
         {isGetComment?(<ShimmerEffectCommentComponent/>):
           <FlatList
              data={dataCommentTask}
              renderItem={RenderItemComment}
              keyExtractor={(item, index) => index.toString()}
              scrollEnabled={false}
            />
         }
         {isGetMoreComment&&(<ShimmerEffectCommentComponent/>)}
         <TouchableOpacity style={{alignItems:"center",marginTop:20}} onPress={()=>{loadMoreComment()}}>
           <Text style={{fontSize:15, color:"#4577ef",fontFamily:"OpenSans-SemiBold"}} numberOfLines={10}>{"Nhấn để xem thêm bình luận..."}</Text>
         </TouchableOpacity>
       </View>

     )

};
const styles = StyleSheet.create({
  container: {
    display:"flex",
    marginTop: 20,
    marginBottom:500,
  },

});
 export default React.memo(ListCommentComponent)

