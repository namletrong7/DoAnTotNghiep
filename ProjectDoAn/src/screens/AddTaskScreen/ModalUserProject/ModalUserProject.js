/*
*  Đây là modal hiển thị danh sách user của project sử dụng ở màn hình add Task
* */
import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import FastImage from "react-native-fast-image";
import { baseUrlAvatarUser } from "../../../api/ConstBaseUrl";

const ModalUserProject = ({ visible, onClose ,data,handleItem}) => {
  console.log("render lại modal");

  const RenderItemUser = (props) => {
    return(
    <TouchableOpacity onPress={()=>{handleItem(props.item)}} style={{ flexDirection: "row", alignItems: "center", flex: 1,marginVertical:5, marginHorizontal:10 }}>
      <FastImage
        style={{ width: 40, height: 40,borderRadius: 40/2 ,overflow: "hidden", borderWidth: 1,borderColor:"#99CCFF"}}
        source={{
          uri: baseUrlAvatarUser+props?.item.avatarUser
        }}
        resizeMode={FastImage.resizeMode.stretch}

      />
      <Text style={{
        fontSize: 17,
        marginLeft:20,
        color: "black",
        fontFamily: "OpenSans-SemiBold",
      }}>{props.item.fullName}</Text>
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
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={{
            fontSize: 15,
            color: "black",
            fontFamily: "OpenSans-SemiBold",
          }}>{"Danh sách thành viên thuộc Project"}</Text>
            <View style={{width:"100%", height:1, backgroundColor:"black", marginVertical:20}}/>
          <FlatList
            data={data}
            style={{alignSelf:"flex-start",marginTop:5}}
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
    alignItems: "center",
    paddingHorizontal: 13,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  modalContent: {
    marginTop: "40%",
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 5,
    width: "100%",
    height:"50%",
   alignItems:'center'
  },
  modelButton: {
    flexDirection: "row",
    alignItems: "center",
    display: "flex",
    height: 50,
  },
});

export default React.memo(ModalUserProject);
