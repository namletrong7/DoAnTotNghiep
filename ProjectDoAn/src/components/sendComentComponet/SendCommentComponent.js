/**
 * Componet hiển thị danh sách bình luận
 */

import React, { Component, useState } from "react";
import {
  Dimensions,
  FlatList, KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text, TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";


import FastImage from 'react-native-fast-image'
import IconSend from "../../assets/icons/IconSend";

import { actionAddComment } from "../../redux-store/actions/auth";
import { connect, useDispatch } from "react-redux";
import IconArrowDown from "../../assets/icons/IconArrowDown";
import IconArrowUp from "../../assets/icons/IconArrowLeft";
import { showMessage } from "react-native-flash-message";
import { actionAddCommentTask } from "../../redux-store/actions/task";
const SendCommentComponent = (props)=> {
  const dispatch = useDispatch();
  const [content, setContent] = useState("");

    const sendComment=()=>{
      dispatch(actionAddCommentTask(props.taskId,content,1))
      setContent('')

    }


    return (
      <SafeAreaView style={styles.container}>
        <View style={{ flexDirection: "row", borderRadius: 15, flex: 0.97 }}>
          <TextInput
            multiline={true}
            style={{ color: 'black', fontSize: 17, fontFamily: "OpenSans-Regular", flex: 1 }}
            placeholder="Nhập bình luận của bạn"
            onChangeText={(value)=>{setContent(value)}}
            value={content}
          />
        </View>
        <TouchableOpacity onPress={() => {
           sendComment()
        }}>
          <IconSend />
        </TouchableOpacity>
      </SafeAreaView>

    )
  }

const styles = StyleSheet.create({
  container: {
    flexDirection:"row",
    height:60,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#DDDDDD",
    paddingVertical:6,
    borderRadius:15,
    marginBottom:50,
    marginTop:100
  },

});

export default React.memo(SendCommentComponent)

