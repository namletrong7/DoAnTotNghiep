/**
 * Màn hình thêm task mới
 */

import React, { memo, useEffect, useMemo, useRef, useState } from "react";
import {
  actions,
  RichEditor,
  RichToolbar,
} from "react-native-pell-rich-editor";

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
import { actionGetListUserProject } from "../../redux-store/actions/user";
import { baseUrlAvatarUser } from "../../api/ConstBaseUrl";
export const MaxFileSize = 10 * 1024 * 1024; // Giới hạn kích thước file: 10 MB
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
  const richText = useRef();
  const [descHTML, setDescHTML] = useState( '<div></div>');
  const richTextHandle = (descriptionText) => {
    if (descriptionText) {
      setDescHTML(descriptionText);
   //   console.log(descriptionText)
    } else {
      setDescHTML(<div></div>);
    }
  };
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
  const onSelectProjectId=async item => {
    setValueProjectId(item.value)
    await dispatch(actionGetListUserProject(item.value))
  }
  const onSelectPriority=item=>{
    setValuePriority(item.value)

  }

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
    //     console.log(result)
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

    formData.append('content', descHTML);
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
      <HeaderComponent title={"Tạo công việc"} navigation={navigation} back/>
      <KeyboardAwareScrollView
        style={styles.container}
        scrollEnabled={true}
        keyboardShouldPersistTaps="handled">

         <View style={{marginHorizontal:15,paddingBottom:'50%'}}>
          <TextInputComponent textInput={title} setTextInput={setTitle} title={"Tiêu đề công việc *"} placeHolder={"Nhập tiêu đề của công việc"} height={45}/>
           <DropDownMenu data={createListProjectDropDown(dataAllProject)} value={valueProjectId} title={"Chọn project của bạn"} onSelectItem = {onSelectProjectId} label={"Nhấn để chọn project"}/>
           <DropDownMenu data={dataPriority} value={valuePriority} title={"Độ ưu tiên"} onSelectItem = {onSelectPriority}  label={"Nhấn để chọn độ ưu  tiên "}/>
           <View  style={{marginTop:15,marginBottom:15}}>
             <Text style={{ fontSize: 15, color: "black", fontFamily: "OpenSans-SemiBold" }}>{"Người xử lý chính *"}</Text>
             <TouchableOpacity onPress={()=>{setIsShowModalUser(true)}} style={{flexDirection:"row", borderRadius: 10, backgroundColor: "#DDDDDD",height:50,marginTop:10, alignItems:"center"}}>
               <FastImage
                 style={{ width: 35, height: 35,borderRadius: 35/2 ,overflow: "hidden", borderWidth: 1,borderColor:"#99CCFF",marginLeft:20}}
                 source={{
                   uri: baseUrlAvatarUser+targetUser.avatarUser
                 }}
                 resizeMode={FastImage.resizeMode.stretch}

               />
               <Text style={{
                 fontSize: 14,
                 marginLeft:20,
                 color: "black",
                 fontFamily: "OpenSans-SemiBold",
               }}>{targetUser.fullName?targetUser.fullName:"Chưa chọn người xử lý chính"}</Text>
             </TouchableOpacity>
           </View>
           <DatePickerComponent title ={"Ngày bắt đầu"} dateContent={startDay}  isShowModal={isShowStartDay} setShowModal={showStartDayPicker} setHideModal={hideStartDayPicker} onConfrim={onConfirmStartDay}/>
           <DatePickerComponent title ={"Ngày kết thúc"} dateContent={endDay}  isShowModal={isShowEndDay} setShowModal={showEndDayPicker} setHideModal={hideEndDayPicker} onConfrim={onConfirmEndDay}/>


           <ListFileAttach dataFilePicker={pickedFile} handleDelete = {handleDeleteItemFile}/>
            <TouchableOpacity  onPress={()=>{pickDocument()}} style={{alignItems:"center", justifyContent:"center", marginTop:15, borderColor:"#148eff",borderWidth:1,borderRadius:8, borderStyle:"dashed",padding:10}}>
              <View style={{width:70,height:70,borderRadius:25, backgroundColor:"#c7e4ff",alignItems:"center",justifyContent:'center'}}>
                <IconUpload />
              </View>
             <Text style={{fontSize:15, color:"#148eff",fontFamily:"OpenSans-SemiBold",marginRight:10}}>{"Nhấn để chọn file đính kèm"}</Text>
           </TouchableOpacity>
           <View style={styles.richTextContainer}>
             <RichEditor
               ref={richText}
               onChange={richTextHandle}
                styleWithCSS={true}
               placeholder="Nhập nội dung công việc tại đây :)"
               androidHardwareAccelerationDisabled={true}
               style={styles.richTextEditorStyle}
               initialHeight={250}
               editorStyle={{color:"black", }}
             />
             <RichToolbar
               editor={richText}
               selectedIconTint="#000000"
               iconTint="green"
               actions={[
                 actions.fontSize,
                 actions.undo,
                 actions.redo,
                 actions.setBold,
                 actions.setItalic,
                 actions.insertBulletsList,
                 actions.insertOrderedList,
                 actions.insertLink,
                 actions.code,
                 actions.setStrikethrough,
                 actions.setUnderline,

               ]}
               style={styles.richTextToolbarStyle}
             />
           </View>
           {/*<TextInputComponent textInput={content} setTextInput={setContent} title={"Nội dung công việc *"} placeHolder={"Nhập nội dung công việc "} height={150}/>*/}
           <ModalUserProject targetUser={targetUser} visible={isShowModalUser} onClose={onCloseUser} handleItem={handelItemUser}/>
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
  richTextContainer: {
    display: "flex",
    flexDirection: "column-reverse",
    width: "100%",
    marginTop:20,
    marginBottom: 10,
  },

  richTextEditorStyle: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderWidth: 1,
    borderColor: "#2596be",
    shadowColor: "#2596be",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    fontSize: 20,
  },

  richTextToolbarStyle: {
    backgroundColor: "white",
    borderColor: "#000000",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 1,
  },

});


