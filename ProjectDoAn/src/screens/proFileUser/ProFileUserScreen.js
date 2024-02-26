import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ImageBackground, Dimensions, Image, SafeAreaView, FlatList,ScrollView
} from "react-native";
import {  actionLogout } from "../../redux-store/actions/auth";
import { useDispatch } from "react-redux";
import HeaderComponent from "../../components/header/HeaderComponent";

import ItemTask from "../../components/itemTask/ItemTask";
import FastImage from "react-native-fast-image";
import { getValuePositionLevel } from "../../utils/GetValuePosition";
import IconMessage from "../../assets/icons/IconMessage";
import IconPhone from "../../assets/icons/IconPhone";
import IconMail from "../../assets/icons/IconMail";
import Toast from "react-native-toast-message";
import FlashMessage from "react-native-flash-message";

const ProFileUserScreen = ({ navigation }) => {

  const dispatch = useDispatch();
  const widthScreen = Dimensions.get('window').width
  const heightScreen = Dimensions.get('window').width

  var dataUser = {
    "userId": "dfkblnb", // id của user
    "fullName": "Test 3", // full tên
    "email": "namletrong7@gmail.com", // email của người dùng
    "phoneNumber": "0337356550",
    "avatarUser": "https://mixhotel.vn/uploads/images/624418a1d6a5eb1d066980ed/tao-dang-chup-anh-voi-nguoi-yeu__5_.webp",
    "assignFullName": "Hoàng ngọc đặng kim khánh",
    "positionLevel": 2, //0- Tổng giám đốc, 1-Giám đốc, 2- truong phòng , 3-Nhân viên
    "departmentId":1 , // id phòng ban
    "departmentName":"Phòng tài chính kế toán", // tên phòng ban
    "jobtitlenName":'Chuyên viên chăm sóc khách hàng'
  }
  // in ra toast

// render ra 1 số  thông tin của người dùng
   const RenderContent = (props) =>{
    return(
      <View style={{flexDirection:"row",alignItems:"center",marginTop:10,flex:1}}>
          <View style={{width:14, height:14, borderRadius:14/2, backgroundColor:"#3366CC",marginLeft:10}}/>
          <Text style={{fontSize:15, color:"black",fontFamily:"OpenSans-Regular",marginLeft:10,flex:0.4}}>{props?.title || "số điện thoại"}</Text>
          <Text style={{fontSize:15, color:"black",fontFamily:"OpenSans-Regular",marginLeft:4,flex:0.6}}>{props?.content ||"0337356550"}</Text>
      </View>
    )
   }
  const RenderContactIcon = () =>{
    return(
      <View style={{flexDirection:"row",marginTop:20,marginBottom:40,alignSelf:"center",justifyContent:"space-around"}}>
        <TouchableOpacity style={{marginRight:40}}>
          <IconMessage/>
        </TouchableOpacity>
        <View style={{marginRight:40}}>
          <IconPhone/>
        </View>
        <View style={{marginRight:20}}>
          <IconMail/>
        </View>
      </View>
    )
  }

  return (
    <View style={{backgroundColor:"#F0F0F0",flex:1}}>
      <FlashMessage position={"top"}  />
      <ScrollView contentContainerStyle={{marginHorizontal:20,marginTop:20}}>
        <View >

          <FastImage
            style={{ width: 100, height: 100,borderRadius: 100/2 ,overflow: "hidden", borderWidth: 1,borderColor:"#99CCFF",alignSelf:"center"}}
            source={{
              uri: dataUser.avatarUser
            }}
            resizeMode={FastImage.resizeMode.stretch}/>
          <Text style={{fontSize:17, color:"black",fontFamily:"OpenSans-SemiBold",fontWeight:'700',marginTop:20,alignSelf:"center"}}>{dataUser.assignFullName}</Text>
          <RenderContactIcon/>
          <RenderContent title={"Số điện thoại:"} content={dataUser.phoneNumber}/>
          <RenderContent title={"Email:"} content={dataUser.email}/>
          <Text style={{fontSize:16, color:"black",fontFamily:"OpenSans-SemiBold",fontWeight:'700',marginTop:30}}>{"Chức vụ, phòng ban"}</Text>
          <RenderContent title={"Chức vụ: "} content={getValuePositionLevel(dataUser.positionLevel)}/>
          <RenderContent title={"Phòng ban: "} content={dataUser.departmentName}/>
          <RenderContent title={"Chuyên môn: "} content={dataUser.jobtitlenName}/>
        </View>


      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});

export default ProFileUserScreen;
