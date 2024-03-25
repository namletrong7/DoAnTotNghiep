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
  StatusBar, Platform, Modal,
} from "react-native";


import  { showMessage } from "react-native-flash-message"
import {TextInputComponent} from "../../components/InputComponent/TextInputComponent"
import {DatePickerComponent} from "../../components/InputComponent/DatePickerComponet"
import { converPickerDate } from "../../utils/ConverPickerDate";
import { Dropdown } from 'react-native-element-dropdown';
import { DropDownMenu } from "../../components/DropDownMenu/DropDownMenu";
import IconUpload from "../../assets/icons/IconUpload";

import { ListFileAttach } from "./ListIFileAttach/ListFileAttach";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import FastImage from "react-native-fast-image";
import { useDispatch, useSelector } from "react-redux";

import {
  dataPriority,
  getBackgroundStateProject,
  getColorStateProject,
  getStateProject,
} from "../../utils/GetPriority";
import HeaderComponent from "../../components/header/HeaderComponent";
import { createListProjectDropDown } from "../../utils/CreateListDropDown";
import IconLogoProject from "../../assets/icons/IconLogoProject";
import IconArrowDown from "../../assets/icons/IconArrowDown";
import { baseUrlAvatarUser } from "../../api/ConstBaseUrl";
import IconClose2 from "../../assets/icons/IconClose2";
import IconSearch from "../../assets/icons/IconSearch";
import SendCommentComponent from "../../components/sendComentComponet/SendCommentComponent";
import ItemProject from "../../components/itemProject/ItemProject";
import IconUnTick from "../../assets/icons/IconUnTick";
import IconTick from "../../assets/icons/IconTick";
import ListUserChoose from "./ListUserChoose/ListUserChoose";
import ListUserSearch from "./ListUserSearch/ListUserSearch";
import { checkMember } from "./Utils/CheckMember";
import { actionsearchUser } from "../../redux-store/actions/user";
import IconBox from "../../assets/icons/IconBox";
import IconClose from "../../assets/icons/IconClose";
import IconAssign from "../../assets/icons/IconAssign";
import IconTarget from "../../assets/icons/IconTarget";
import IconAll from "../../assets/icons/IconAll";
import IconDone from "../../assets/icons/IconDone";
import DateTimePicker from "react-native-modal-datetime-picker";
import { actionAddProject } from "../../redux-store/actions/project";
import ModalLoadingAddProject from "./ModalLoading/ModalLoading";

export const AddProjectScreen = React.memo(({navigation})=>{
  const dispatch = useDispatch()
  const dataAllProject = useSelector(state => state.project.dataAllProject);
  const [title, setTitle]=useState('');// tieeu de của project
  const [textSearch, settextSearch]=useState('');// tieeu de của project

  const [startDay, setStartDay]=useState(converPickerDate(new Date()));//ngày băt đầu
  const [ngayBatDau, setNgayBatDau]=useState('');//ngày băt đầu
  const [endDay, setEndDay]=useState(converPickerDate(new Date()));// ngày kết thuc
  const [ngayKetThuc, setngayKetThuc]=useState();// ngày kết thuc

  const [isShowStartDay, SetIsShowStartDay]=useState(false);//hiển thị picker chọn ngày bắt đầu
  const [isShowEndDay, SetIsShowEndDay]=useState(false);//hiển thị picker chọn kết thúc
  const [isChooseState, SetIsChooseState]=useState(false);//hiển thị modal chọn trạng thái dự án
  const [dataUserChoose, SetdataUserChoose]=useState([])// mảng user đã chọn
  const [stateProject, SetStateProject]=useState(2)  // trạng thái dự án
  const dataCurrentUser = useSelector(state => state.auth.dataCurrentUser);


  // hàm nhán vào nút ok của pker chọn ngày bắt đầu
  const onConfirmStartDay = (date)=>{
       setStartDay(converPickerDate(date));
       setNgayBatDau(moment(date).format('YYYY-MM-DD'))
       SetIsShowStartDay(false)
  }


  // hàm nhán vào nút ok của pker ngày key thuc
  const onConfirmEndDay = (date)=>{
    setEndDay(converPickerDate(date));
    setngayKetThuc(moment(date).format('YYYY-MM-DD'));
    SetIsShowEndDay(false)
  }



  const handleChooseUser=(itemCheck)=> {  // hàm nhấn vào để chọn user trong ds tìm kiếm
    if (checkMember(itemCheck, dataUserChoose)) { // nếu đã nằm trong ds dc chọn
      const newDataUserChoose = dataUserChoose.filter(item => item.userName !== itemCheck.userName);
      SetdataUserChoose(newDataUserChoose);
    } else { // nếu người đó chưa nằm trong  danh sách được chọn
      SetdataUserChoose([...dataUserChoose, itemCheck])
    }
  }
  // hàm xóa user đã chọn
  const handleDeleleUser=(userId)=>{
    // Tạo một bản sao của danh sách
    const updatedData = [...dataUserChoose];
    const index = updatedData.findIndex(user => user.userId === userId);
    if (index !== -1) {
      updatedData.splice(index, 1);
    }
    // Cập nhật state để kích thích việc render lại
    SetdataUserChoose(updatedData);
  }

  const handleSearchUser=value=>{
    settextSearch(value)
    dispatch(actionsearchUser(value))
  }
  const handleAddProject=async () => {
    await dispatch(actionAddProject({
      "nameProject":title,
      "startDay":ngayBatDau,
      "endDay":ngayKetThuc,
      "createUser":dataCurrentUser.userId,
      "state":stateProject,
      "projectUser":dataUserChoose
    }))
  }
  return (
    <View>
      <HeaderComponent title={"Tạo Dự Án Mới"} navigation={navigation} back/>
      <KeyboardAwareScrollView>
        <View style={{marginHorizontal:15,paddingTop:10,paddingBottom:"25%"}}>
          <Text style={{
            fontSize: 15,
            color: "black",
            fontFamily: "OpenSans-SemiBold",
          }}>{"Nhâp tên dự án"} <Text style={{
            fontSize: 15,
            color: "red",
            fontFamily: "OpenSans-SemiBold",
          }}>{"*"}</Text></Text>
          <View style={{flexDirection:"row",alignItems:'center',marginTop:10}}>
            <IconLogoProject/>
            <TextInput
              value={title}
              onChangeText={setTitle}
              placeholder={"Nhập tên dự án"}
              placeholderTextColor={"#888888"}
              style={{ height: 40,flex:1,marginLeft:10,borderRadius:5, borderColor: "#888888", borderWidth: 0.5, textAlignVertical:"center", fontSize:14, fontFamily: "OpenSans-Regular" }}
            />
          </View>
          <View style={{flexDirection:"row",marginTop:10,justifyContent:"space-between"}}>
            <Text style={{
              fontSize: 15,
              color: "black",
              fontFamily: "OpenSans-SemiBold",
            }}>{"Ngày bắt đầu:"} <Text style={{
              fontSize: 15,
              color: "red",
              fontFamily: "OpenSans-SemiBold",
            }}>{"*"}</Text></Text>
            <TouchableOpacity onPress={()=>{SetIsShowStartDay(true)}} style={{padding:5, borderRadius:6, backgroundColor:"#DDDDDD"}}>
              <Text style={{
                fontSize: 15,
                color: "black",
                fontFamily: "OpenSans-Regular",
              }}>{startDay} </Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection:"row",marginTop:10,justifyContent:"space-between"}}>
            <Text style={{
              fontSize: 15,
              color: "black",
              fontFamily: "OpenSans-SemiBold",
            }}>{"Ngày kết thúc:"} <Text style={{
              fontSize: 15,
              color: "red",
              fontFamily: "OpenSans-SemiBold",
            }}>{"*"}</Text></Text>
            <TouchableOpacity onPress={()=>{SetIsShowEndDay(true)}}  style={{padding:5, borderRadius:6, backgroundColor:"#DDDDDD"}}>
              <Text style={{
                fontSize: 15,
                color: "black",
                fontFamily: "OpenSans-Regular",
              }}>{endDay} </Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection:"row",marginTop:10,justifyContent:"space-between"}}>
            <Text style={{
              fontSize: 15,
              color: "black",
              fontFamily: "OpenSans-SemiBold",
            }}>{"Trạng thái dự án:"} </Text>

            <TouchableOpacity onPress={()=>{SetIsChooseState(true)}} style={{padding:6, borderRadius:6, backgroundColor:getBackgroundStateProject(stateProject), flexDirection:"row"}}>
              <Text style={{
                fontSize: 15,
                color: getColorStateProject(stateProject),
                fontFamily: "OpenSans-Regular",
              }}>{getStateProject(stateProject)} </Text>
              <IconArrowDown/>
            </TouchableOpacity>


          </View>
          <View style={{flexDirection:"row",marginTop:10,justifyContent:"space-between"}}>
            <Text style={{
              fontSize: 15,
              color: "black",
              fontFamily: "OpenSans-SemiBold",
            }}>{"Danh sách thành viên:"} </Text>
            <Text style={{
              fontSize: 15,
              color: "black",
              fontFamily: "OpenSans-Regular",
            }}>{"Đã chọn: "+ dataUserChoose.length} </Text>
          </View>

          <ListUserChoose dataUserChoose={dataUserChoose} handleItem={handleDeleleUser}/>

          <KeyboardAvoidingView keyboardVerticalOffset={10} behavior='padding' >
            <SafeAreaView style={{ flexDirection: "row",alignItems:'center', borderRadius: 15,marginVertical:10 ,  backgroundColor:"#EEEEEE",paddingHorizontal:10, paddingVertical:Platform.OS==='ios'?5:0,marginLeft:5}}>
              <IconSearch/>
              <TextInput
                multiline={true}
                value={textSearch}
                onChangeText={handleSearchUser}
                style={{ color: 'black', fontSize: 15, fontFamily: "OpenSans-Regular", flex: 1 }}
                placeholder="Tim kiếm thành viên..."
                placeholderTextColor={"#888888"}
              />
            </SafeAreaView>
          </KeyboardAvoidingView>
         <ListUserSearch  dataUserChoose={dataUserChoose} handleChooseUser={handleChooseUser}/>

           <TouchableOpacity onPress={handleAddProject} style={{height:50,alignSelf:'center', paddingHorizontal:9, borderRadius:17, backgroundColor:"#daeefd", marginTop:30,alignItems:'center', justifyContent:'center'}}>
             <Text style={{
               fontSize: 15,
               color: "#2f88dc",
               fontFamily: "OpenSans-SemiBold",
             }}>{"Tạo dự án"}</Text>
           </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isChooseState}
      >
        <TouchableOpacity onPress={()=>{SetIsChooseState(false)}} style={styles.modalContainer} >
          <View  style={styles.modalContent}>
            <Text style={{
              fontSize: 20,
              alignSelf:'center',
              color: "black",
              fontFamily: "OpenSans-SemiBold",
            }}>{"Trạng thái dự án"}</Text>
            <TouchableOpacity onPress={()=>{SetStateProject(0)}} style={{marginTop:5,paddingLeft:15,paddingVertical:6,backgroundColor:stateProject==0?"#EEEEEE":null}}>
              <Text style={{
                fontSize: 15,
                color: getColorStateProject(0),
                fontFamily: "OpenSans-Regular",
              }}>{getStateProject(0)} </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=>{SetStateProject(1)}} style={{marginTop:5,paddingLeft:15,paddingVertical:6,backgroundColor:stateProject==1?"#EEEEEE":null}}>
              <Text style={{
                fontSize: 15,
                color: getColorStateProject(1),
                fontFamily: "OpenSans-Regular",
              }}>{getStateProject(1)} </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=>{SetStateProject(2)}} style={{marginTop:5,paddingLeft:15,paddingVertical:6,backgroundColor:stateProject==2?"#EEEEEE":null}}>
              <Text style={{
                fontSize: 15,
                color: getColorStateProject(2),
                fontFamily: "OpenSans-Regular",
              }}>{getStateProject(2)} </Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=>{SetStateProject(3)}} style={{marginTop:5,paddingLeft:15,paddingVertical:6,backgroundColor:stateProject==3?"#EEEEEE":null}}>
              <Text style={{
                fontSize: 15,
                color: getColorStateProject(3),
                fontFamily: "OpenSans-Regular",
              }}>{getStateProject(3)} </Text>
            </TouchableOpacity>

          </View>
        </TouchableOpacity>
      </Modal>
      <DateTimePicker
        isVisible={isShowStartDay}
        mode="date"
        onCancel={()=>{SetIsShowStartDay(false)}}
        onConfirm={onConfirmStartDay}
      />
      <DateTimePicker
        isVisible={isShowEndDay}
        mode="date"
        onCancel={()=>{SetIsShowEndDay(false)}}
        onConfirm={onConfirmEndDay}
      />
      <ModalLoadingAddProject/>
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
  modalContainer: {
    height:"100%",
    alignItems: 'center',
    backgroundColor:'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    paddingVertical:15,
    elevation: 5,
    width:"100%",
    position:"absolute",
    height:"30%",
    bottom:0,
    borderTopRightRadius:15,
    borderTopLeftRadius:15

  }

});


