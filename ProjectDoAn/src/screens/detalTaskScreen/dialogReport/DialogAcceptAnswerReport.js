/*
*   Component hiển thị dialog xác nhận 1 số thay đổi
* */
import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { rgbaColor } from "react-native-reanimated/lib/typescript/reanimated2/Colors";
import { actionAcceptAnswerReport, actionRejectAnswerReport } from "../../../redux-store/actions/task";

const DialogAcceptAnswerReport = ({ visible, onClose ,type, dispatch,userId,taskId ,reportSelected}) => {

  const onConfirm=()=>{
    if(type==1){  // duyệt báo cáo
          dispatch(actionAcceptAnswerReport({
            reportId:reportSelected?.reportId,
            createUser:userId,
            taskId:taskId
          }))
    }else {
      dispatch(actionRejectAnswerReport({
        reportId:reportSelected?.reportId,
        createUser:userId,
        taskId:taskId,
        parentId:reportSelected?.parentId,
        isHaveParent:reportSelected?.parentId?true:false
      }))
    }
    onClose();
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
           <View style={{alignSelf:"center",marginVertical:10}}>
             <Text style={{fontSize:17, color:"black",fontFamily:"OpenSans-SemiBold"}}>{"Thông báo"}</Text>
           </View>
          <Text style={{fontSize:15, color:"black",fontFamily:"OpenSans-SemiBold", alignSelf:"center", marginVertical:10, lineHeight:24}}>{type==0?"Bạn có chắc chắn từ chối báo cáo không ?":"Bạn có chắc chắn Duyệt báo cáo không ?"}</Text>
          <View style={styles.modelButton}>
                <TouchableOpacity onPress={()=>{onClose()}} style={{flex:0.5,alignItems:"center",backgroundColor:"#ebf6ff",height:'100%',justifyContent:"center",borderRadius:14}}>
                  <Text style={{fontSize:16, color:"#0663b0",fontFamily:"OpenSans-SemiBold"}}>{"Hủy bỏ"}</Text>
                </TouchableOpacity>
            <View style={{width:15}}/>
            <TouchableOpacity onPress={onConfirm}  style={{flex:0.5,alignItems:"center",backgroundColor:"#009eac",height:'100%',justifyContent:"center",borderRadius:14}}>
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

export default React.memo(DialogAcceptAnswerReport) ;
