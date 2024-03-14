import React, {useCallback, useMemo, useState} from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ImageBackground, Dimensions, Image, SafeAreaView, FlatList, ScrollView, StatusBar,
} from "react-native";
import {  actionLogout } from "../../redux-store/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import HeaderComponent from "../../components/header/HeaderComponent";


import ItemTask from "../../components/itemTask/ItemTask";
import FastImage from "react-native-fast-image";
import LottieView from "lottie-react-native";
import IconPlus from "../../assets/icons/IconPlus";
import { baseUrlAvatarUser } from "../../api/ConstBaseUrl";
import ItemProject from "../../components/itemProject/ItemProject";
import IconArrowRight from "../../assets/icons/IconArrowRigth";
import IconArrowDown from "../../assets/icons/IconArrowDown";
import IconArrowDownDouble from "../../assets/icons/IconDoubleDown";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import {useRef} from "react/index";
import {GestureDetector} from "react-native-gesture-handler/src/handlers/gestures/GestureDetector";
import {GestureHandlerRootView, PanGestureHandler} from "react-native-gesture-handler";
import IconProject from "../../assets/icons/IconProject";
import IconAddUser from "../../assets/icons/IconAddUser";
import IconInfor from "../../assets/icons/IconInfor";
import IconArrowLeft from "../../assets/icons/IconArrowLeft";
import IconBack from "../../assets/icons/IconBack";
import IconEdit from "../../assets/icons/IconEdit";
import { showMessage } from "react-native-flash-message";
import {  TopTabTask1 } from "./toptab/TopTabTask";




const DetailProjectScreen = ({ navigation ,route}) => {
   const {itemProject} =  route?.params
  const dispatch  = useDispatch();
  const snapPoints = useMemo(() => ['50%', "80%"], []);
  const bottomSheetRef = useRef(null);

  // @ts-ignore
  const renderBackdrop = useCallback(
    (props: any) => {
      return <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />;
    },
    []
  );
  // hàm mở ra bottom sheet thông tin của project
  function handelOpenModal (){
    bottomSheetRef.current?.present();
  }

  var detailProject=
    {
      "projectId": "P001",
      "nameProject": "Nâng cấp phiên bản cho phần mềm diệt virus",
      "startDay": "10/08/2001",
      "endDay":"10/08/2001",
      "createUser": 1,
      "state":1,
      "dataMember":[
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
          "isAdmin": "1",
          "jobtitleName": "Chuyên viên phân tích dữ liệu",
          "departmentName": "Phòng hành chính nhân sự"
        }, {
          "userId": "3",
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
          "isAdmin": "1",
          "jobtitleName": "Chuyên viên phân tích dữ liệu",
          "departmentName": "Phòng hành chính nhân sự"
        }, {
          "userId": "4",
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
          "isAdmin": "1",
          "jobtitleName": "Chuyên viên phân tích dữ liệu",
          "departmentName": "Phòng hành chính nhân sự"
        },
        {
          "userId": "5",
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
          "isAdmin": "1",
          "jobtitleName": "Chuyên viên phân tích dữ liệu",
          "departmentName": "Phòng hành chính nhân sự"
        },
        {
          "userId": "6",
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
          "isAdmin": "1",
          "jobtitleName": "Chuyên viên phân tích dữ liệu",
          "departmentName": "Phòng hành chính nhân sự"
        },

      ]

    }
const ItemUserMemer=(props)=>{
    const {item}= props
  return (
    <View style={{flexDirection:"row", borderRadius:14, backgroundColor:"#DDDDDD", flex:0.5, marginHorizontal:10,marginVertical:5,paddingVertical:5, alignItems:'center'}}>
      <FastImage
        style={{ width: 30, height: 30,borderRadius: 30/2 ,overflow: "hidden", borderWidth: 1,borderColor:"#99CCFF",marginLeft:3}}
        source={{
          uri: (baseUrlAvatarUser+item?.avatarUser)||''
        }}
        resizeMode={FastImage.resizeMode.priority}

      />
      <Text style={{fontSize:13,flexWrap:"wrap", color:"black",fontFamily:"OpenSans-Regular",marginLeft:5,flex:1}}>{item.fullName}</Text>
    </View>
  )
}


  return (
    <View style={{backgroundColor:"#F0F0F0", height:"100%"}}>
     <View style={{flexDirection:"row",paddingTop:StatusBar.currentHeight+50, backgroundColor:"#6699FF", paddingLeft:10, paddingVertical:5, justifyContent:"flex-start",alignItems:"center",display:'flex'}}>
         <TouchableOpacity onPress={()=>{navigation.goBack()}}>
           <IconBack/>
         </TouchableOpacity>
          <IconProject/>
           <View style={{justifyContent:"flex-start", flex:0.7}}>
             <Text numberOfLines={1} style={{fontSize:17, color:"black",fontFamily:"Roboto-Bold",marginLeft:5}}>{itemProject.nameProject}</Text>
             <Text style={{fontSize:13, color:"black",fontFamily:"OpenSans-Regular",marginLeft:5, marginTop:5}}>{itemProject.state==0?"Đang triển khai":"Đã kết thúc"}</Text>
           </View>
       <View style={{flexDirection:"row", justifyContent:"space-between",display:"flex", height:'100%', alignItems:"center", flex:0.25}}>
         <TouchableOpacity  >
           <IconAddUser/>
         </TouchableOpacity>
         <TouchableOpacity onPress={()=>{handelOpenModal()}}>
           <IconInfor/>
         </TouchableOpacity>
       </View>
     </View>
      {/*<TouchableOpacity onPress={()=>{navigation.navigate("AddTaskScreen")}} style={{justifyContent:'center', alignItems:'center',position:"absolute",right:20, bottom:0, width:50, height:50, borderRadius:25, backgroundColor:"gray"}}>*/}
      {/*   <IconPlus/>*/}
      {/*</TouchableOpacity>*/}

      <GestureHandlerRootView  style={{ borderRadius:16,  display:"flex"}}>
          <View style={{height:"100%"}}>
               <TopTabTask1/>
          </View>
        <BottomSheetModalProvider>
          <BottomSheetModal
              ref={bottomSheetRef}
              index={1}
              enablePanDownToClose={true}
              backdropComponent={renderBackdrop}
              snapPoints={snapPoints}>
            <BottomSheetScrollView  >
              <View style={{paddingHorizontal:10, backgroundColor:"white"}}>
                  <Text style={{fontSize:24, color:"black",fontFamily:"OpenSans-SemiBold",fontWeight:'700',marginRight:10}}>{detailProject.nameProject}</Text>
                <TouchableOpacity style={{flexDirection:"row", marginTop:10}}>
                  <Text style={{fontSize:15, color:"black",fontFamily:"OpenSans-Regular",marginRight:5}}>{"Ngày bắt đầu dự án: "}</Text>
                  <Text style={{fontSize:15, color:"black",fontFamily:"OpenSans-Regular",marginRight:5}}>{detailProject.startDay}</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={{flexDirection:"row", marginTop:10}}>
                  <Text style={{fontSize:15, color:"black",fontFamily:"OpenSans-Regular",marginRight:5}}>{"Ngày kết thúc dự án: "}</Text>
                  <Text style={{fontSize:15, color:"black",fontFamily:"OpenSans-Regular",marginRight:5}}>{detailProject.endDay}</Text>
                </TouchableOpacity>
                <Text style={{fontSize:20, color:"black",fontFamily:"OpenSans-SemiBold",fontWeight:'700',marginRight:10,marginTop:20}}>{"Thành viên tham gia dự án"}</Text>
                <FlatList
                  data={detailProject.dataMember}
                  renderItem={({item}) => <ItemUserMemer item={item}  />}
                  scrollEnabled={false}
                  horizontal={false}
                  numColumns={2}
                  keyExtractor={item => item.userId}
                />
              </View>
            </BottomSheetScrollView>
          </BottomSheetModal>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  notification: {
    marginTop: 20,
    marginBottom: 20,
    width: '70%',
    height: Dimensions.get('window').height * 0.14,
    backgroundColor: '#040739',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ffffff',
    borderRadius: 10,
    borderWidth: 1,
  },
  itemMenu: {
    alignItems: 'center',
    marginBottom: 10,
    width: Dimensions.get('window').width * 0.31,
    padding: Dimensions.get('window').width * 0.02,
  },
  IconImg: {
    width: Dimensions.get('window').width * 0.2,
    height: Dimensions.get('window').width * 0.2,
  },
  TextItem: {
    marginTop: 5,
    color: '#ffffff',
    textAlign: 'center',
  },	contentContainer: {
    flex: 1,
    alignItems: 'center'
  },
  containerHeadline: {
    fontSize: 24,
    fontWeight: '600',
    padding: 20,
    color: '#fff'
  }
});

export default DetailProjectScreen;
