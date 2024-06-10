/**
 * Màn hình chi tiết công việc
 */

import React, {memo, useCallback, useEffect, useMemo, useState} from "react";
import Clipboard from '@react-native-clipboard/clipboard';
import RenderHtml from 'react-native-render-html';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  RefreshControl, StatusBar, ActivityIndicator
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Animated, { FadeIn, SlideInDown, SlideInRight, SlideOutLeft, SlideOutRight } from "react-native-reanimated";
import HeaderComponent from "../../components/header/HeaderComponent.js";
import IconUpload from "../../assets/icons/IconUpload.js";
import { showMessage } from "react-native-flash-message";
import DocumentPicker from "react-native-document-picker";
import { MaxFileSize } from "../AddTaskScreen/AddTaskScreen.js";
import { ListFileAttach } from "../AddTaskScreen/ListIFileAttach/ListFileAttach.js";
import { ListFile } from "./ListIFileAttach/ListFile.js";
import { actionAddTask, actionUploadFileAttach } from "../../redux-store/actions/task";


interface AddFileAttachScreenProps {
  navigation: any;
  route: any;
}

export const AddFileAttachScreen:React.FC<AddFileAttachScreenProps> = React.memo(({navigation,route})=>{
  const [pickedFile, setPickedFile] = useState<any[]>([]);// mảng chứa các file dc chọn
  const [isUpload, setIsUpload] = useState(false);// mảng chứa các file dc chọn
  const { taskId } = route?.params ;
  const dataCurrentUser = useSelector(state => state.auth.dataCurrentUser);
  const dispatch = useDispatch()
  const pickDocument = async () => {
    if(pickedFile.length>=5){
      showMessage({
        message: "Bạn chỉ được phép chọn tối đa 5 file",
        type: "warning",
        duration: 2000,
        icon: { icon: "warning", position: 'left' }
      });
      return;
    }
    else {
      try {
        const result = await DocumentPicker.pick({
          type: [DocumentPicker.types.allFiles], // Chọn tất cả các loại file
        });
      //  console.log(result)
        // setPickedFile((prevFiles) => [...prevFiles, ...result]);
        if (result[0].size >= MaxFileSize) {
          showMessage({
            message: "Vui lòng chọn file có kích thước nhỏ hơn 10MB ",
            type: "danger",
            duration: 1000,
            icon: { icon: "danger", position: 'left' }
          });
          return;
        } else {
          // Lưu mảng các file đã chọn vào state
          setPickedFile((prevFiles) => [...prevFiles, ...result]);
        }
      } catch (err) {
        return
      }
    }
  };
  const handleDeleteItemFile = (index:number) => {
    // Tạo một bản sao của danh sách
    const updatedData = [...pickedFile];
    // Loại bỏ mục tại index được chọn
    updatedData.splice(index, 1);
    // Cập nhật state để kích thích việc render lại
    setPickedFile(updatedData);
  };
  const handleUploadFile=async ():Promise<void> => {
    setIsUpload(true)
    const formData = new FormData();
    formData.append('taskId', taskId);
    formData.append('createUser', dataCurrentUser?.userId);
    pickedFile.forEach((file, index) => {
      formData.append(`file${index + 1}`, {
        uri: file.uri,
        type: file.type,
        name: file.name,
      });
    });
    await dispatch(actionUploadFileAttach(formData))
    setIsUpload(false)
    setPickedFile([])
  }

  return (
    <Animated.View
      entering={SlideInRight.duration(500)} exiting={SlideOutLeft.duration(500)}
      style={{ flex: 1}}
    >
        <HeaderComponent title={"Thêm File Đính kèm"} navigation={navigation} back/>
        <ScrollView contentContainerStyle={{marginHorizontal:20,marginTop:20}}>
          <ListFile dataFilePicker={pickedFile} handleDelete = {handleDeleteItemFile}/>
          <TouchableOpacity  onPress={()=>{pickDocument()}} style={{alignItems:"center", justifyContent:"center", marginTop:15, borderColor:"#148eff",borderWidth:1,borderRadius:8, borderStyle:"dashed",padding:10}}>
            <View style={{width:70,height:70,borderRadius:25, backgroundColor:"#c7e4ff",alignItems:"center",justifyContent:'center'}}>
              <IconUpload />
            </View>
            <Text style={{fontSize:15, color:"#148eff",fontFamily:"OpenSans-SemiBold",marginRight:10}}>{"Nhấn để chọn file đính kèm"}</Text>
          </TouchableOpacity>
        </ScrollView>
      <TouchableOpacity onPress={handleUploadFile} style={{height:50,bottom:20,alignSelf:'center',paddingHorizontal:50, borderRadius:17, backgroundColor:"#4577ef", marginTop:30,alignItems:'center', justifyContent:'center',width:"50%"}}>
        {isUpload? <ActivityIndicator size='small' color="white" />:
          <Text style={{
            fontSize: 17,
            color: "white",
            fontFamily: "OpenSans-SemiBold",
          }}>{"Upload"}</Text>}

      </TouchableOpacity>
    </Animated.View>



  );
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


