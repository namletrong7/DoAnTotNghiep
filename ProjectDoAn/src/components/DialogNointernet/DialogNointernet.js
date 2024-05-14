/*
*   Component hiển thị dialog xác nhận 1 số thay đổi
* */
import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { rgbaColor } from "react-native-reanimated/lib/typescript/reanimated2/Colors";
import LottieView from "lottie-react-native";
import IconClose from "../../assets/icons/IconClose";
import IconClose2 from "../../assets/icons/IconClose2";

const DialogNointernet = ({ visible,onClose}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={!visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity onPress={onClose}  style={{alignSelf:"flex-end",marginTop:-35}}>
            <IconClose2  width={40}  height={40}/>
          </TouchableOpacity>
          <LottieView style={{ height:150,width:150}} source={require('../../assets/animation/noInternet.json')} autoPlay loop />
          <Text style={{fontSize:16, color:"black",fontFamily:"OpenSans-SemiBold"}}>{"Mất kết nối internet\nVui lòng kiểm tra lại!"}</Text>
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
    backgroundColor:'rgba(0,0,0,0.5)',
  },
  modalContent: {
    marginTop:'50%',
    borderRadius: 10,
    paddingVertical:25,
    elevation: 5,
    width:'80%',
    height: '40%',
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: "white"
  },
  modelButton:{
     flexDirection:"row",
     alignItems:"center",
     display:"flex",
    height:47,
    paddingHorizontal:15,
    justifyContent:"space-between"
  }
});

export default React.memo(DialogNointernet) ;
