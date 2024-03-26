/*
*   Component hiển thị cho phép báo cáo tiến độ hoặc yêu cầu báo
* */
import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { rgbaColor } from "react-native-reanimated/lib/typescript/reanimated2/Colors";
import IconSub from "../../../assets/icons/IconSub";
import IconSum from "../../../assets/icons/IconSum";
import { useDispatch } from "react-redux";
import { actionChangePriorityTask, actionChangeProgressTask } from "../../../redux-store/actions/task";

const DialogReport = ({ visible ,onClose,taskId}) => {
  const dispatch = useDispatch();

  const [progress, setProgress] = useState(0);
  const handleChangePriorityTask=async () => {
    await dispatch(actionChangeProgressTask(progress, taskId))
    onClose()
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
             <Text style={{fontSize:17, color:"black",fontFamily:"OpenSans-SemiBold"}}>{"Cập nhập tiến độ công việc"}</Text>
           </View>
        <View style={{flexDirection:"row",alignSelf:"center",marginVertical:10}}>
          <TouchableOpacity onPress={()=>{setProgress(progress-1)}}>
                 <IconSub/>
          </TouchableOpacity>

          <Text style={{fontSize:17, color:"black",fontFamily:"OpenSans-SemiBold", marginHorizontal:20,alignSelf:"center"}}>{progress}</Text>
          <TouchableOpacity onPress={()=>{setProgress(progress+1)}}>
            <IconSum/>
          </TouchableOpacity>

        </View>

          <View style={styles.modelButton}>
                <TouchableOpacity onPress={()=>{onClose()}} style={{flex:0.5,alignItems:"center",backgroundColor:"#ebf6ff",height:'100%',justifyContent:"center",borderRadius:14}}>
                  <Text style={{fontSize:16, color:"#0663b0",fontFamily:"OpenSans-SemiBold"}}>{"Hủy bỏ"}</Text>
                </TouchableOpacity>
            <View style={{width:15}}/>
            <TouchableOpacity  onPress={handleChangePriorityTask} style={{flex:0.5,alignItems:"center",backgroundColor:"#009eac",height:'100%',justifyContent:"center",borderRadius:14}}>
              <Text style={{fontSize:16, color:"white",fontFamily:"OpenSans-SemiBold"}}>{"Cập nhập"}</Text>
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
