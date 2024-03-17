/**
 * Màn hình thêm task mới
 */

import React, { memo, useEffect, useMemo, useState } from "react"
import moment from 'moment';
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


import  { showMessage } from "react-native-flash-message"
import {TextInputComponent} from "../../components/InputComponent/TextInputComponent"
import {DatePickerComponent} from "../../components/InputComponent/DatePickerComponet"
import { converPickerDate } from "../../utils/ConverPickerDate";
import { Dropdown } from 'react-native-element-dropdown';
import { DropDownMenu } from "../../components/DropDownMenu/DropDownMenu";
import IconUpload from "../../assets/icons/IconUpload";
import DocumentPicker from "react-native-document-picker";
import { ListFileAttach } from "./ListIFileAttach/ListFileAttach";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import ModalUserProject from "./ModalUserProject/ModalUserProject";
import FastImage from "react-native-fast-image";
import { useDispatch, useSelector } from "react-redux";
import { actionAddTask } from "../../redux-store/actions/task";
import ModalLoading from "./ModalLoading/ModalLoading";
import { dataPriority } from "../../utils/GetPriority";
import HeaderComponent from "../../components/header/HeaderComponent";
import { createListProjectDropDown } from "../../utils/CreateListDropDown";
const MaxFileSize = 10 * 1024 * 1024; // Giới hạn kích thước file: 10 MB
export const AddTaskScreen = React.memo(({navigation})=>{
  const dispatch = useDispatch()
  const dataAllProject = useSelector(state => state.project.dataAllProject);
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

  const dataCurrentUser = useSelector(state => state.auth.dataCurrentUser);
   // hàm mở lại picker chon ngày bắt đầu
  const  showStartDayPicker= ()=>{

    SetIsShowStartDay(true)
  }
  // hàm tắt picker chọn ngày bắt đầu
  const  hideStartDayPicker= ()=>{

    SetIsShowStartDay(false)
  }

  // hàm nhán vào nút ok của pker chọn ngày bắt đầu
  const onConfirmStartDay = (date)=>{
       setStartDay(converPickerDate(date));
       setNgayBatDau(moment(date).format('YYYY-MM-DD'))
       hideStartDayPicker();
  }
  // hàm mở lại picker chon ngày key thuc
  const  showEndDayPicker= ()=>{

    SetIsShowEndDay(true)
  }
  // hàm tắt picker chọn ngày key thuc
  const  hideEndDayPicker= ()=>{

    SetIsShowEndDay(false)
  }

  // hàm nhán vào nút ok của pker ngày key thuc
  const onConfirmEndDay = (date)=>{
    setEndDay(converPickerDate(date));
    setngayKetThuc(moment(date).format('YYYY-MM-DD'));
    hideEndDayPicker();
  }

  // hàm chọn value cho project Id dc chọn
  const onSelectProjectId=item=>{
         setValueProjectId(item.value)

  }
  const onSelectPriority=item=>{
    setValuePriority(item.value)

  }

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
    formData.append('assignUser', dataCurrentUser.userId);

    formData.append('targetUser', targetUser.userId);
    formData.append('priority', valuePriority);
    formData.append('title', title);

    formData.append('content', content);
    formData.append('startDay', ngayBatDau);
    formData.append('endDay', ngayKetThuc);

    formData.append('createdDate', moment(new Date()).format('YYYY-MM-DD'));
    formData.append('progress', 0);
    formData.append('projectId', valueProjectId);



    pickedFile.forEach((file, index) => {
      formData.append(`file${index + 1}`, {
        uri: file.uri,
        type: file.type,
        name: file.name,
      });
    });

     await dispatch(actionAddTask(formData))
  }
  return (
    <View>
      <HeaderComponent title={"Thêm công việc mới"} navigation={navigation} back/>
      <KeyboardAwareScrollView
        style={styles.container}
        scrollEnabled={true}
        keyboardShouldPersistTaps="handled">

         <View style={{marginHorizontal:15,paddingBottom:'50%'}}>
          <TextInputComponent textInput={title} setTextInput={setTitle} title={"Tiêu đề công việc *"} placeHolder={"Nhập tiêu đề của công việc"} height={50}/>
           <DropDownMenu data={createListProjectDropDown(dataAllProject)} value={valueProjectId} title={"Chọn project của bạn"} onSelectItem = {onSelectProjectId} label={"Nhấn để chọn project"}/>
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
         </View>
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


