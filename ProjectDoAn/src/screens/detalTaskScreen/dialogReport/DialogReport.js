/*
*   Component hiển thị cho phép báo cáo tiến độ hoặc yêu cầu báo
* */
import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { rgbaColor } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

const DialogReport = ({ visible,title, onClose, type }) => {
  const [content, setContent] = useState("");
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
             <Text style={{fontSize:17, color:"black",fontFamily:"OpenSans-SemiBold"}}>{title}</Text>
           </View>
          <TextInput
            multiline={true}
            style={{ color: 'black', fontSize: 15, fontFamily: "OpenSans-Regular", maxHeight:"50%"}}
            placeholder="Nhập báo cáo củ bạn"
            placeholderTextColor={"#999999"}
            onChangeText={(value)=>{setContent(value)}}
            value={content}
          />
          <View style={styles.modelButton}>
                <TouchableOpacity onPress={()=>{onClose()}} style={{flex:0.5,alignItems:"center",backgroundColor:"#ebf6ff",height:'100%',justifyContent:"center",borderRadius:14}}>
                  <Text style={{fontSize:16, color:"#0663b0",fontFamily:"OpenSans-SemiBold"}}>{"Hủy bỏ"}</Text>
                </TouchableOpacity>
            <View style={{width:15}}/>
            <TouchableOpacity  style={{flex:0.5,alignItems:"center",backgroundColor:"#009eac",height:'100%',justifyContent:"center",borderRadius:14}}>
              <Text style={{fontSize:16, color:"white",fontFamily:"OpenSans-SemiBold"}}>{"Đồng ý"}</Text>
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
    marginTop:'50%',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical:15,
    elevation: 5,
    width:'95%',
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

export default React.memo(DialogReport) ;
