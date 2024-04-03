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
import ItemComment from "./ItemComment";
import ItemTask from "../itemTask/ItemTask";
  const ListCommentComponent  =(props)=> {
    const dispatch = useDispatch();
    const navi = useNavigation();
    const [see, setSee] = useState(true);// mảng chứa các file dc chọn
    const isGetComment = useSelector(state => state.task.isGetComment);
    const dataCommentTask = useSelector(state => state.task.dataCommentTask);

    const isGetMoreComment = useSelector(state => state.task.isGetMoreComment);


     useEffect(()=> {// hàm thực hiện sau mỗi lần render
     dispatch(actionGetCommentTask(props.taskId,0))
    },[props.taskId])
   const loadMoreComment=()=>{
     dispatch(actionGetMoreCommentTask(props.taskId,dataCommentTask.length))
    }

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
              renderItem={({item}) => <ItemComment item={item} navigation={navi}  openActionComment={props.openActionComment}/>}
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
  },

});
 export default React.memo(ListCommentComponent)

