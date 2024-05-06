/**
 * Componet hiển thị danh sách bình luận
 */

import React, {Component, useCallback, useEffect, useState} from "react";
import ImagePicker from 'react-native-image-crop-picker';
import {
  Dimensions,
  FlatList, Image, KeyboardAvoidingView, Platform,
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
import {connect, useDispatch, useSelector} from "react-redux";
import IconArrowDown from "../../assets/icons/IconArrowDown";
import IconArrowUp from "../../assets/icons/IconArrowLeft";
import { showMessage } from "react-native-flash-message";
import { actionAddCommentTask } from "../../redux-store/actions/task";
import IconCam from "../../assets/icons/IconCam";
import IconClose from "../../assets/icons/IconClose";
const SendCommentComponent = (props)=> {
  const dispatch = useDispatch();
    const [imageUri, setImageUri] = useState(null);
  const [content, setContent] = useState("");
    const tokenFCM = useSelector(state => state.auth.tokenFCM);
    const sendComment=useCallback(()=>{
      dispatch(actionAddCommentTask(props?.taskId,content))
      setContent('')
      setImageUri(null)

    },[props?.taskId,content])

    useEffect(()=>{
           setContent(tokenFCM)
    },[tokenFCM])
   function  chooseImage(){
       ImagePicker.openPicker({
         mediaType: 'photo', // Chỉ chọn ảnh
         compressImageQuality: 0.4,
       }).then(image => {
         console.log(image)
           setImageUri(image.path);
       });
   }

    return (
        <SafeAreaView>
            <TouchableOpacity onPress={()=>{setImageUri(null)}} style={{flexDirection:"row",marginLeft:10}}>
                {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
                {imageUri &&<IconClose height={20} width={20}/>}
            </TouchableOpacity>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => {
                    chooseImage()
                }}>
                    <IconCam
                    />
                </TouchableOpacity>
                <View style={{ flexDirection: "row", borderRadius: 15, flex: 0.93 ,  backgroundColor:"#FFFFFF",paddingHorizontal:10, paddingVertical:Platform.OS==='ios'?5:0,marginLeft:5}}>
                    <TextInput
                        multiline={true}
                        style={{ color: 'black', fontSize: 15, fontFamily: "OpenSans-Regular", flex: 1 }}
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
            </View>
        </SafeAreaView>


    )
  }

const styles = StyleSheet.create({
  container: {
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    marginHorizontal:6,
    paddingVertical:5,
    borderRadius:15,

  },
    image: {
        width: 50,
        height: 70,
        borderRadius: 16,
        marginBottom: 5,
    },
});

export default React.memo(SendCommentComponent)

