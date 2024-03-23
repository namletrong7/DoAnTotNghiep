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

import { ListFileAttach } from "./ListIFileAttach/ListFileAttach";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import FastImage from "react-native-fast-image";
import { useDispatch, useSelector } from "react-redux";

import { dataPriority, getStateProject } from "../../utils/GetPriority";
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

export const AddProjectScreen = React.memo(({navigation})=>{
  const dispatch = useDispatch()
  const dataAllProject = useSelector(state => state.project.dataAllProject);
  const [title, setTitle]=useState('');// tieeu de của project
  const [textSearch, settextSearch]=useState('');// tieeu de của project

  const [startDay, setStartDay]=useState('');//ngày băt đầu
  const [ngayBatDau, setNgayBatDau]=useState('');//ngày băt đầu
  const [endDay, setEndDay]=useState();// ngày kết thuc
  const [ngayKetThuc, setngayKetThuc]=useState();// ngày kết thuc

  const [isShowStartDay, SetIsShowStartDay]=useState(false);//hiển thị picker chọn ngày bắt đầu
  const [isShowEndDay, SetIsShowEndDay]=useState(false);//hiển thị picker chọn kết thúc

  const [dataUserChoose, SetdataUserChoose]=useState([])
  const dataUserSearch=[
    {
      "userId": "0",
      "userName": "anhvtd",
      "firstName": "vũ thi ",
      "lastName": "hà",
      "fullName": "Vũ đình tuấn anh",
      "email": "anhvtd@gmail.com",
      "phoneNumber": "037356450",
      "gender": "0",
      "isActive": "0",
      "passWord": "123456",
      "createdByUserid": "1",
      "avatarUser": "anhvtd.png",
      "positionLevel": "3",
      "birthDay": "2024-03-28 14:31:08",
      "isAdmin": "1"
    },
    {
      "userId": "1",
      "userName": "namltc",
      "firstName": "John",
      "lastName": "Doe",
      "fullName": "Lê Trọng Nam",
      "email": "john.doe@example.com",
      "phoneNumber": "123456789",
      "gender": "1",
      "isActive": "1",
      "passWord": "password123",
      "createdByUserid": "admin_user",
      "avatarUser": "namltc.png",
      "positionLevel": "2",
      "birthDay": "1990-01-01 00:00:00",
      "isAdmin": "1"
    },
    {
      "userId": "2",
      "userName": "sonntt",
      "firstName": "John",
      "lastName": "Doe",
      "fullName": "Nguyễn Trần Thanh Sơn",
      "email": "sonntt@KMA.com",
      "phoneNumber": "123456789",
      "gender": "1",
      "isActive": "1",
      "passWord": "123456a@",
      "createdByUserid": "admin_user",
      "avatarUser": "avatar.jpg",
      "positionLevel": "2",
      "birthDay": "1990-01-01 00:00:00",
      "isAdmin": "1"
    },
    {
      "userId": "3",
      "userName": "hantk",
      "firstName": "nguyễn thị kim ",
      "lastName": "hà ",
      "fullName": "nguyễn thị kim hà",
      "email": "hantk@gmail.com",
      "phoneNumber": "0337356550",
      "gender": "1",
      "isActive": "1",
      "passWord": "123456",
      "createdByUserid": "1",
      "avatarUser": "avatar.jpg",
      "positionLevel": "3",
      "birthDay": "2024-03-28 14:31:08",
      "isAdmin": "0"
    },
    {
      "userId": "5",
      "userName": "tienbv",
      "firstName": "tien",
      "lastName": "bui",
      "fullName": "Bùi Văn Tiến",
      "email": "sonntt@KMA.com",
      "phoneNumber": "0337356550",
      "gender": "0",
      "isActive": "1",
      "passWord": "123456",
      "createdByUserid": "1",
      "avatarUser": "tuananh.jpg",
      "positionLevel": "0",
      "birthDay": "2024-03-28 14:31:08",
      "isAdmin": "0"
    }
  ]

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





  // hàm hỗ trợ xóa file đã chọn

    const handleDeleteItemFile = (index) => {
      // Tạo một bản sao của danh sách
      const updatedData = [...pickedFile];
      // Loại bỏ mục tại index được chọn
      updatedData.splice(index, 1);
      // Cập nhật state để kích thích việc render lại
      setPickedFile(updatedData);
    };

  const ItemUserMemer=(props)=>{
    const {item}= props
    return (
      <View style={{flexDirection:"row", borderRadius:14, backgroundColor:"#DDDDDD", flex:0.5, marginHorizontal:5,marginVertical:2,paddingVertical:3, alignItems:'center'}}>
        <FastImage
          style={{ width: 25, height: 25,borderRadius: 25/2 ,overflow: "hidden",marginLeft:3}}
          source={{
            uri: (baseUrlAvatarUser+item?.avatarUser)||''
          }}
          resizeMode={FastImage.resizeMode.preload}

        />
        <Text style={{fontSize:13,flexWrap:"wrap", color:"black",fontFamily:"OpenSans-Regular",marginLeft:5,flex:1}}>{item.fullName}</Text>
         <IconClose2/>
      </View>
    )
  }
  const handleChooseUser=(itemCheck)=>{  // hàm nhấn vào để chọn user trong ds tìm kiếm
    if(checkMember(itemCheck,dataUserChoose)){ // nếu đã nằm trong ds dc chọn
      const newDataUserChoose = dataUserChoose.filter(item => item.userName !== itemCheck.userName);
      SetdataUserChoose(newDataUserChoose);
    }else{ // nếu người đó chưa nằm trong  danh sách được chọn
      SetdataUserChoose(  [... dataUserChoose,itemCheck])
    }

    // SetdataUserChoose(  [... dataUserChoose,itemCheck])
  }
  const handleSearchUser=value=>{
    settextSearch(value)
    dispatch(actionsearchUser(value))
  }
  return (
    <View>
      <HeaderComponent title={"Tạo Dự Án Mới"} navigation={navigation} back/>
      <KeyboardAwareScrollView>
        <View style={{marginHorizontal:15,paddingTop:10}}>
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
            <View style={{padding:5, borderRadius:6, backgroundColor:"#DDDDDD"}}>
              <Text style={{
                fontSize: 15,
                color: "black",
                fontFamily: "OpenSans-Regular",
              }}>{"20/11/24"} </Text>
            </View>
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
            <View style={{padding:5, borderRadius:6, backgroundColor:"#DDDDDD"}}>
              <Text style={{
                fontSize: 15,
                color: "black",
                fontFamily: "OpenSans-Regular",
              }}>{"20/11/24"} </Text>
            </View>
          </View>
          <View style={{flexDirection:"row",marginTop:10,justifyContent:"space-between"}}>
            <Text style={{
              fontSize: 15,
              color: "black",
              fontFamily: "OpenSans-SemiBold",
            }}>{"Trạng thái dự án:"} </Text>
            <View style={{padding:5, borderRadius:6, backgroundColor:"#999999", flexDirection:"row"}}>
              <Text style={{
                fontSize: 15,
                color: "black",
                fontFamily: "OpenSans-Regular",
              }}>{"Chưa thực hiện"} </Text>
              <IconArrowDown/>
            </View>
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

          <ListUserChoose dataUserChoose={dataUserChoose}/>

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

           <TouchableOpacity  style={{height:50,alignSelf:'center', paddingHorizontal:9, borderRadius:17, backgroundColor:"#4577ef", marginTop:30,alignItems:'center', justifyContent:'center'}}>
             <Text style={{
               fontSize: 15,
               color: "white",
               fontFamily: "OpenSans-SemiBold",
             }}>{getStateProject(0)}</Text>
           </TouchableOpacity>
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


