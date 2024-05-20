/*
*  Đây là modal hiển thị danh sách user của project sử dụng ở màn hình add Task
* */
import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity, StyleSheet, FlatList, Image } from "react-native";
import FastImage from "react-native-fast-image";
import { baseUrlAvatarUser } from "../../../api/ConstBaseUrl";
import { useSelector } from "react-redux";

const ModalUserProject = ({ visible, onClose ,handleItem,targetUser}) => {

  const listUserOfProject = useSelector(state => state.user.listUserOfProject);
  const RenderItemUser = (props) => {
    return(
    <TouchableOpacity onPress={()=>{handleItem(props.item)}} style={{ backgroundColor:targetUser?.userId==props.item.userId?"#EEEEEE":null,flexDirection: "row", alignItems: "center", flex: 1,marginVertical:5, marginHorizontal:10 }}>
      <FastImage
        style={{ width: 30, height: 30,borderRadius: 30/2 ,overflow: "hidden", borderWidth: 1,borderColor:"#99CCFF"}}
        source={{
          uri: baseUrlAvatarUser+props?.item.avatarUser
        }}
        resizeMode={FastImage.resizeMode.stretch}

      />
      <View >
        <Text style={{
          fontSize: 13,
          marginLeft:20,
          color: "black",
          fontFamily: "OpenSans-SemiBold",
        }}>{props.item.fullName}</Text>
        <Text style={{
          fontSize: 13,
          marginLeft:20,
          color: "black",
          fontFamily: "OpenSans-Regular",
        }}>{props.item.userName}</Text>
      </View>

    </TouchableOpacity>
    )
  }


  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View  style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={{flexDirection:"row",justifyContent:'space-between',width:'100%', paddingHorizontal:5}}>
            <Text style={{
              fontSize: 12,
              color: "black",
              marginTop:15,
              fontFamily: "OpenSans-SemiBold",
            }}>{"Chọn người xử lý chính"}</Text>
            <TouchableOpacity onPress={onClose}>
              <Text style={{
                fontSize: 11,
                color: "black",
                marginTop:15,
                fontFamily: "OpenSans-SemiBold",
              }}>{"Đóng"}</Text>
            </TouchableOpacity>
          </View>

            <View style={{width:"100%", height:1, backgroundColor:"black", marginVertical:20}}/>
          <FlatList
            data={listUserOfProject}
            style={{alignSelf:"flex-start",marginTop:5,width:"100%"}}
            renderItem={({ item, index }) => <RenderItemUser item={item} />}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  modalContent: {
    bottom:0,
    width:'100%',
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    position:'absolute',
    backgroundColor: "white",
    height:"50%",
    alignItems:'center',
    justifyContent:"center"
  },
  modelButton: {
    flexDirection: "row",
    alignItems: "center",
    display: "flex",
    height: 50,
  },
});

export default React.memo(ModalUserProject);
