/**
 * Màn hình chi tiết công việc
 */

import React, { memo, useEffect, useMemo, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,ActivityIndicator,
  ImageBackground, Dimensions, Image, SafeAreaView, FlatList, TextInput, ScrollView, KeyboardAvoidingView,PermissionsAndroid
} from "react-native";
import {
  actionAddComment,
  actionAddDataFake,
  actionChangeTitleTask,
  actionLogout,
} from "../../redux-store/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import HeaderComponent from "../../components/header/HeaderComponent";
import { getColorBackgroundPriority, getColorPriority, getValuePriority } from "../../utils/GetPriority";
import ListCommentComponet from "../../components/listCommentComponent/ListCommentComponet";
import FastImage from "react-native-fast-image";
import IconCalendar from "../../assets/icons/IconCalendar";
import SendCommentComponent from "../../components/sendComentComponet/SendCommentComponent";
import { ListFileAttachComponent } from "../../components/listFileAttachComponent/ListFileAttachComponent";
import FlashMessage, { showMessage } from "react-native-flash-message"
import ModalComponent from "../../components/changeConentComponent/ModalChangeContent";
import ModalChaneConent from "../../components/changeConentComponent/ModalChangeContent";
import IconEdit from "../../assets/icons/IconEdit";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import TabNavigator from "../../navigation/TopTabTask";
import DropDownPicker from "react-native-dropdown-picker";

import DocumentPicker from 'react-native-document-picker';
import axios from "axios";
const MaxFileSize = 10 * 1024 * 1024; // Giới hạn kích thước file: 10 MB
export const AddTaskScreen = React.memo(({navigation})=>{

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [pickedFile, setPickedFile] = useState([]);

  // Lấy thông tin kích thước của màn hình
  const { width: screenWidth, height: screenHeight } = Dimensions.get('window');


  useEffect(()=>{
    async function requestStoragePermission() {
      try {
        const granted = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        ]);

        if (
          granted['android.permission.READ_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED &&
          granted['android.permission.WRITE_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED
        ) {
          console.log('Storage permissions granted');
        } else {
          console.log('Storage permissions denied');
        }
      } catch (err) {
        console.warn(err);
      }
    }
    requestStoragePermission()
  },[])








  const uploadFile = async (pickedFile) => {
    console.log("mảng file");
    console.log(pickedFile);
    if (!pickedFile) {
      console.log('No file selected');
      return;
    }
    // Tạo một đối tượng FormData để chứa các file
    const formData = new FormData();

    // Đưa từng file vào FormData
    pickedFile.forEach((file, index) => {
      formData.append(`file${index + 1}`, {
        uri: file.uri,
        type: file.type,
        name: file.name,
      });
    });
    console.log("formData")
    console.log(formData)
    try {

      const response = await axios.post('http://192.168.1.109:8080/ketnoiviet/test.php', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        timeout: 180000, // Timeout là 10 giây
      });
      console.log("response:")
      console.log(response)
      showMessage({
        message: response.data.message,
        type: "success",
        duration: 1000,
        icon: { icon: "success", position: 'left' }
      });
      console.log('Upload successful:', response.data);
    } catch (error) {
      showMessage({
        message: "Lỗi mạng",
        type: "default",
        duration: 1000,
        icon: { icon: "default", position: 'left' }
      });
     console.error('lỗi:', error);
    }
  };
  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles], // Chọn tất cả các loại file
      });
      console.log("File vừa dc chọn:");
      console.log(result);
      if(result[0].size>=MaxFileSize){
        showMessage({
          message: "Vui lòng chọn file có kích thước nhỏ hơn 10MB ",
          type: "danger",
          duration: 1000,
          icon: { icon: "danger", position: 'left' }
        });
        return ;
      }else{
        // Lưu mảng các file đã chọn vào state
        setPickedFile((prevFiles) => [...prevFiles, ...result]);
      }
   //   uploadFile(result[0])


    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // Người dùng đã hủy chọn file
        console.log('Canceled');
      } else {
        // Xử lý lỗi khác
        console.error('Error', err);
      }
    }
  };
  return (
    <View>

      <KeyboardAwareScrollView
        style={{paddingHorizontal:15,backgroundColor:"red"}}
        keyboardShouldPersistTaps="handled">
        <FlashMessage position={"top"}  />
        <TouchableOpacity onPress={()=>{pickDocument()}} style={{width:100, height:100, backgroundColor:"green"}}>
        </TouchableOpacity>
        <TouchableOpacity style={{height:1000}} onPress={()=>{ uploadFile(pickedFile)}}>
        </TouchableOpacity>

      </KeyboardAwareScrollView>
    </View>
  );
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


