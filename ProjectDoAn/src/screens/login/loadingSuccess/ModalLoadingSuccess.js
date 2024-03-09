/*
*   Component hỗ trợ thay đỏi 1 số thông tin của task bao gồm tiêu đề và content cho nội dung
* */
import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { rgbaColor } from "react-native-reanimated/lib/typescript/reanimated2/Colors";
import LottieView from "lottie-react-native";
import { useSelector } from "react-redux";

const ModalLoadingSuccess = () => {
  const isLoginSuccess = useSelector(state => state.auth.isLoginSuccess);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isLoginSuccess}

    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <LottieView style={{width:'100%', height:100}} source={require('../../../assets/animation/loading.json')} autoPlay loop />
          <Text style={{ fontSize: 15, color: "black", fontFamily: "OpenSans-SemiBold", marginHorizontal:20, textAlign:"center" }}>{"Đang cập nhập thông tin mới nhất"}</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal:13,
    backgroundColor:'rgba(0,0,0,0.3)',
  },
  modalContent: {
    marginTop:'80%',
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
    width:'70%',
    paddingVertical:10
  },
  modelButton:{
    flexDirection:"row",
    alignItems:"center",
    display:"flex",
    height:50,
  }
});

export default React.memo(ModalLoadingSuccess) ;
