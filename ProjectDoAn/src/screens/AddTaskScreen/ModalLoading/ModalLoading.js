/*
*  Đây là modal hiển thị danh sách user của project sử dụng ở màn hình add Task
* */
import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import FastImage from "react-native-fast-image";
import { useSelector } from "react-redux";
import LottieView from "lottie-react-native";

const ModalLoading = () => {

  const isLoading = useSelector(state => state.task.isLoadingAddTask);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isLoading}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <LottieView style={{ height:130,width:130}} source={require('../../../assets/animation/circlesRotate.json')} autoPlay loop />
          {/*<Text style={{*/}
          {/*  fontSize: 17,*/}
          {/*  color: "#4577ef",*/}
          {/*  fontFamily: "OpenSans-SemiBold",*/}
          {/*  alignSelf:"center",*/}
          {/*  textAlign:"center",*/}
          {/*  marginVertical:10*/}
          {/*}}>{multiLineText}</Text>*/}
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
  },
  modalContent: {
    marginTop: "60%",
    backgroundColor: "rgba(0,0,0,0.35)",
    borderRadius: 10,
    elevation: 5,
   alignItems:'center'
  },
  modelButton: {
    flexDirection: "row",
    alignItems: "center",
    display: "flex",
    height: 50,
  },
});

export default React.memo(ModalLoading);
