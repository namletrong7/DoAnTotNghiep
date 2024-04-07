/*
*   Component hỗ trợ thay đỏi 1 số thông tin của task bao gồm tiêu đề và content cho nội dung
* */
import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { rgbaColor } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

const DialogChangContent = ({ visible, onClose,onEdit }) => {
  const  [content , setContent] = useState('');

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
           <View style={{alignSelf:"center",marginVertical:10}}>
             <Text style={{fontSize:15, color:"black",fontFamily:"OpenSans-SemiBold"}}>{"Chỉnh sửa tiêu đề nhiệm vụ"}</Text>
           </View>
          <View style={{height:1, backgroundColor:"#99CCFF"}}/>
          <TextInput
            multiline
            style={[styles.input,{marginHorizontal:10,fontFamily:"OpenSans-SemiBold",fontSize:15,height:150,alignSelf:'flex-start'}]}
            placeholder="Nhập nọi dung bạn cần chỉnh....."
            value={content}
            onChangeText={setContent}
          />
          <View style={{height:1, backgroundColor:"#0033FF"}}/>
          <View style={styles.modelButton}>
                <TouchableOpacity onPress={onClose} style={{flex:0.5,alignItems:"center",backgroundColor:"#777777",height:'100%',justifyContent:"center",borderBottomLeftRadius:10}}>
                  <Text style={{fontSize:16, color:"white",fontFamily:"OpenSans-SemiBold"}}>{"Hủy"}</Text>
                </TouchableOpacity>
            <View style={{height:50,width:1, backgroundColor:"#0033FF"}}/>
            <TouchableOpacity onPress={()=>{onEdit(content)} } style={{flex:0.5,alignItems:"center",backgroundColor:"#99FFFF",height:'100%',justifyContent:"center",borderBottomRightRadius:10}}>
              <Text style={{fontSize:16, color:"black",fontFamily:"OpenSans-SemiBold"}}>{"Chỉnh sửa"}</Text>
            </TouchableOpacity>
          </View>
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
    marginTop:'40%',
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
    width:'100%',
  },
  modelButton:{
     flexDirection:"row",
     alignItems:"center",
     display:"flex",
    height:50,
  }
});

export default React.memo(DialogChangContent) ;
