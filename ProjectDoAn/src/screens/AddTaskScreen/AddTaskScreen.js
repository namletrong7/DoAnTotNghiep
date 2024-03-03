/**
 * Màn hình thêm task mới
 */

import React, { memo, useEffect, useMemo, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ActivityIndicator,
  ImageBackground,
  Dimensions,
  Image,
  SafeAreaView,
  FlatList,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  PermissionsAndroid,
  StatusBar, Platform,
} from "react-native";


import FlashMessage, { showMessage } from "react-native-flash-message"
import IconDate from "../../assets/icons/IconDate";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {TextInputComponent} from "../../components/InputComponent/TextInputComponent"
import {DatePickerComponent} from "../../components/InputComponent/DatePickerComponet"
import { converPickerDate, converPickerDateToDatetime } from "../../utils/ConverPickerDate";
import { Dropdown } from 'react-native-element-dropdown';
import { DropDownMenu } from "../../components/DropDownMenu/DropDownMenu";
import IconUpload from "../../assets/icons/IconUpload";
import DocumentPicker from "react-native-document-picker";
import { ListFileAttach } from "./ListIFileAttach/ListFileAttach";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import ModalUserProject from "./ModalUserProject/ModalUserProject";
import FastImage from "react-native-fast-image";
import { useDispatch } from "react-redux";
import { actionAddTask } from "../../redux-store/actions/task";
import axios from "axios";
import ModalLoading from "./ModalLoading/ModalLoading";
import { dataPriority } from "../../utils/GetPriority";
const MaxFileSize = 10 * 1024 * 1024; // Giới hạn kích thước file: 10 MB
export const AddTaskScreen = React.memo(({navigation})=>{
  const dispatch = useDispatch();
  const [title, setTitle]=useState('');// tieeu de của công việc
  const [content, setContent]=useState('');// nội dung của công viec

  const [startDay, setStartDay]=useState('');//ngày băt đầu
  const [ngayBatDau, setNgayBatDau]=useState('');//ngày băt đầu
  const [endDay, setEndDay]=useState();// ngày kết thuc
  const [ngayKetThuc, setngayKetThuc]=useState();// ngày kết thuc

  const [isShowStartDay, SetIsShowStartDay]=useState(false);//hiển thị picker chọn ngày bắt đầu
  const [isShowEndDay, SetIsShowEndDay]=useState(false);//hiển thị picker chọn kết thúc

  const [valueProjectId, setValueProjectId]=useState('');  // giá trị của project id dc chọn
  const [valuePriority, setValuePriority]=useState(0);// giá trị của priority
  const [pickedFile, setPickedFile] = useState([]);// mảng chứa các file dc chọn

  const [isShowModalUser, setIsShowModalUser] = useState(false);// mảng chứa các file dc chọn
  const [targetUser, setTargetUser] = useState({}) // user dc chọn làm xử lý chính
   console.log("render lại test screen");

   // hàm mở lại picker chon ngày bắt đầu
  const  showStartDayPicker= ()=>{
    console.log("đang mở modal")
    SetIsShowStartDay(true)
  }
  // hàm tắt picker chọn ngày bắt đầu
  const  hideStartDayPicker= ()=>{
    console.log("đang mở modal")
    SetIsShowStartDay(false)
  }

  // hàm nhán vào nút ok của pker chọn ngày bắt đầu
  const onConfirmStartDay = (date)=>{
       setStartDay(converPickerDate(date));
       setNgayBatDau(date)
       hideStartDayPicker();
  }
  // hàm mở lại picker chon ngày key thuc
  const  showEndDayPicker= ()=>{
    console.log("đang mở modal")
    SetIsShowEndDay(true)
  }
  // hàm tắt picker chọn ngày key thuc
  const  hideEndDayPicker= ()=>{
    console.log("đang mở modal")
    SetIsShowEndDay(false)
  }

  // hàm nhán vào nút ok của pker ngày key thuc
  const onConfirmEndDay = (date)=>{
    console.log(date)
    setEndDay(converPickerDate(date));
    setngayKetThuc(date);
    hideEndDayPicker();
  }

  // hàm chọn value cho project Id dc chọn
  const onSelectProjectId=item=>{
         setValueProjectId(item.value)
    console.log(valueProjectId)
  }
  const onSelectPriority=item=>{
    setValuePriority(item.value)
    console.log(valuePriority)
  }
  const data = [
    { label: 'Dự án nhân ái', value: 'P0011' },
    { label: 'Dự án thiện nguyện', value: 'P001' },
    { label: 'hntk 3', value: 'P002' },
    { label: 'fjbgg 1', value: 'P003' },
    { label: 'Optdskjvbjkvbdikjvbivbion 2', value: 'P004' },
    { label: 'Option 3', value: 'P005' },
    { label: 'Option 1', value: 'P006' },
    { label: 'Option 2', value: 'P007' },
    { label: 'Option 3', value: 'P008' },
    { label: 'Option 1', value: 'P009' },
    // Thêm các mục khác nếu cần
  ];

  const UserProject=useMemo(()=>{
    return [
      {
        "userId": "1",
        "userName": "namltc",
        "firstName": "John",
        "lastName": "Doe",
        "fullName": "John Doe",
        "email": "john.doe@example.com",
        "phoneNumber": "123456789",
        "gender": "1",
        "isActive": "1",
        "passWord": "password123",
        "createdByUserid": "admin_user",
        "avatarUser": "avatar.jpg",
        "positionLevel": "2",
        "birthDay": "1990-01-01 00:00:00",
        "isAdmin": "1"
      },
      {
        "userId": "2",
        "userName": "john_doe",
        "firstName": "John",
        "lastName": "Doe",
        "fullName": "vanptt",
        "email": "john.doe@example.com",
        "phoneNumber": "123456789",
        "gender": "1",
        "isActive": "1",
        "passWord": "password123",
        "createdByUserid": "admin_user",
        "avatarUser": "avatar.jpg",
        "positionLevel": "2",
        "birthDay": "1990-01-01 00:00:00",
        "isAdmin": "1"
      },
      {
        "userId": "2",
        "userName": "john_doe",
        "firstName": "John",
        "lastName": "Doe",
        "fullName": "vanptt",
        "email": "john.doe@example.com",
        "phoneNumber": "123456789",
        "gender": "1",
        "isActive": "1",
        "passWord": "password123",
        "createdByUserid": "admin_user",
        "avatarUser": "avatar.jpg",
        "positionLevel": "2",
        "birthDay": "1990-01-01 00:00:00",
        "isAdmin": "1"
      },
      {
        "userId": "2",
        "userName": "john_doe",
        "firstName": "John",
        "lastName": "Doe",
        "fullName": "vanptt",
        "email": "john.doe@example.com",
        "phoneNumber": "123456789",
        "gender": "1",
        "isActive": "1",
        "passWord": "password123",
        "createdByUserid": "admin_user",
        "avatarUser": "anh.jpg",
        "positionLevel": "2",
        "birthDay": "1990-01-01 00:00:00",
        "isAdmin": "1"
      },
      {
        "userId": "2",
        "userName": "john_doe",
        "firstName": "John",
        "lastName": "Doe",
        "fullName": "vanptt",
        "email": "john.doe@example.com",
        "phoneNumber": "123456789",
        "gender": "1",
        "isActive": "1",
        "passWord": "password123",
        "createdByUserid": "admin_user",
        "avatarUser": "anh.jpg",
        "positionLevel": "2",
        "birthDay": "1990-01-01 00:00:00",
        "isAdmin": "1"
      }
    ]
  })
// hàm hõ trợ láy ra các file từ điện thoại
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
         console.log(result[0])
  //       setPickedFile((prevFiles) => [...prevFiles, ...result]);
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
         if (DocumentPicker.isCancel(err)) {
           // Người dùng đã hủy chọn file
           console.log('Canceled');
         } else {
           // Xử lý lỗi khác
           console.error('Error', err);
         }
       }
     }
  };
  // hàm hỗ trợ xóa file đã chọn

    const handleDeleteItemFile = (index) => {
      // Tạo một bản sao của danh sách
      const updatedData = [...pickedFile];
      // Loại bỏ mục tại index được chọn
      updatedData.splice(index, 1);
      // Cập nhật state để kích thích việc render lại
      setPickedFile(updatedData);
    };
// hàm nhán dẻ close modal user
  const onCloseUser=()=>{
    setIsShowModalUser(false)
  }
  // hàm hỗ trợ nhấn vao chọn item user
  const handelItemUser=(item)=>{
    setTargetUser(item);
    setIsShowModalUser(false)
  }
  // hàm nhấn vào để tạo task
  const addTask=async () => {
    const formData = new FormData();

    // chèn các đối số vào  formData
    formData.append('status', 0);
    formData.append('state', 0);
    formData.append('assignUser', 0);

    formData.append('targetUser', targetUser.userId);
    formData.append('priority', valuePriority);
    formData.append('title', title);

    formData.append('content', content);
    formData.append('startDay', converPickerDateToDatetime(ngayBatDau));
    formData.append('endDay', converPickerDateToDatetime(ngayKetThuc));

    formData.append('createdDate', converPickerDateToDatetime(new Date()));
    formData.append('progress', 0);
    formData.append('projectId', valueProjectId);



    pickedFile.forEach((file, index) => {
      formData.append(`file${index + 1}`, {
        uri: file.uri,
        type: file.type,
        name: file.name,
      });
    });
    console.log(formData)
     await dispatch(actionAddTask(formData))
  }
  return (
    <View>


     <View style={{backgroundColor:"white",height:50, alignItems:"center",width:"100%"}}>
       <Text style={{fontSize:24, color:"#99CCFF",fontFamily:"OpenSans-SemiBold",fontWeight:'700',marginRight:10}}>{"Tạo công việc mới "}</Text>
     </View>
      <FlashMessage position={"top"}  />
      <KeyboardAwareScrollView
        style={styles.container}
        scrollEnabled={true}
        keyboardShouldPersistTaps="handled">

         <SafeAreaView style={{marginHorizontal:15,paddingBottom:'50%'}}>
          <TextInputComponent textInput={title} setTextInput={setTitle} title={"Tiêu đề công việc *"} placeHolder={"Nhập tiêu đề của công việc"} height={50}/>
           <DropDownMenu data={data} value={valueProjectId} title={"Chọn project của bạn"} onSelectItem = {onSelectProjectId} label={"Nhấn để chọn project"}/>
           <DropDownMenu data={dataPriority} value={valuePriority} title={"Độ ưu tiên của công việc"} onSelectItem = {onSelectPriority}  label={"Nhấn để chọn độ ưu  tiên "}/>
           <View  style={{marginTop:15,marginBottom:15}}>
             <Text style={{ fontSize: 17, color: "black", fontFamily: "OpenSans-SemiBold" }}>{"Người xử lý chính *"}</Text>
             <TouchableOpacity onPress={()=>{setIsShowModalUser(true)}} style={{flexDirection:"row", borderRadius: 10, borderColor: "#4577ef", borderWidth:0.5,height:60,marginTop:10, alignItems:"center"}}>
               <FastImage
                 style={{ width: 40, height: 40,borderRadius: 40/2 ,overflow: "hidden", borderWidth: 1,borderColor:"#99CCFF",marginLeft:20}}
                 source={{
                   uri: "http://192.168.1.109:8080/DOAN/avatarUser/"+targetUser.avatarUser
                 }}
                 resizeMode={FastImage.resizeMode.stretch}

               />
               <Text style={{
                 fontSize: 15,
                 marginLeft:20,
                 color: "black",
                 fontFamily: "OpenSans-SemiBold",
               }}>{targetUser.fullName?targetUser.fullName:"Chưa chọn người xử lý chính"}</Text>
             </TouchableOpacity>
           </View>
           <DatePickerComponent title ={"Ngày bắt đầu"} dateContent={startDay}  isShowModal={isShowStartDay} setShowModal={showStartDayPicker} setHideModal={hideStartDayPicker} onConfrim={onConfirmStartDay}/>
           <DatePickerComponent title ={"Ngày kết thúc"} dateContent={endDay}  isShowModal={isShowEndDay} setShowModal={showEndDayPicker} setHideModal={hideEndDayPicker} onConfrim={onConfirmEndDay}/>


           <ListFileAttach dataFilePicker={pickedFile} handleDelete = {handleDeleteItemFile}/>
            <TouchableOpacity  onPress={()=>{pickDocument()}} style={{alignItems:"center", justifyContent:"center", marginTop:15}}>
              <IconUpload/>
             <Text style={{fontSize:15, color:"#4577ef",fontFamily:"OpenSans-SemiBold",marginRight:10}}>{"Nhấn để chọn file"}</Text>
           </TouchableOpacity>

           <TextInputComponent textInput={content} setTextInput={setContent} title={"Nội dung công việc *"} placeHolder={"Nhập nội dung công việc "} height={150}/>
           <ModalUserProject visible={isShowModalUser} data={UserProject} onClose={onCloseUser} handleItem={handelItemUser}/>
           <TouchableOpacity onPress={()=>{addTask()}} style={{height:60, borderRadius:17, backgroundColor:"#4577ef", marginTop:30,alignItems:'center', justifyContent:'center'}}>
             <Text style={{
               fontSize: 17,
               color: "white",
               fontFamily: "OpenSans-SemiBold",
             }}>{"Tạo công việc mới"}</Text>
           </TouchableOpacity>
           <ModalLoading/>
         </SafeAreaView>
      </KeyboardAwareScrollView>
    </View>
  );
})

const styles = StyleSheet.create({
  container: {
    display:"flex",
    backgroundColor:"#EEEEEE"
  },
  dropdown: {
    height: 50,
    borderColor: '#4577ef',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
});


