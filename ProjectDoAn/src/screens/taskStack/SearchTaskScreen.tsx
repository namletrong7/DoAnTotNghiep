import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ImageBackground,
  Dimensions,
  Image,
  SafeAreaView,
  FlatList,
  ScrollView,
  RefreshControl,
  Platform,
  TextInput,
  KeyboardAvoidingView, StatusBar
} from "react-native";
import {  actionLogout } from "../../redux-store/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import HeaderComponent from "../../components/header/HeaderComponent";

import ItemTask from "../../components/itemTask/ItemTask";
import FastImage from "react-native-fast-image";
import { getValuePositionLevel } from "../../utils/GetValuePosition";
import IconMessage from "../../assets/icons/IconMessage";
import IconPhone from "../../assets/icons/IconPhone";

import Animated, { FadeIn, SlideInDown, SlideInRight, SlideOutLeft, SlideOutRight } from "react-native-reanimated";
import IconCam from "../../assets/icons/IconCam.js";
import IconSend from "../../assets/icons/IconSend.js";
import IconSearch from "../../assets/icons/IconSearch.js";
import { EmptyTask } from "../../components/EmptyScreen/EmptyTask.js";
import { actionSearchTask } from "../../redux-store/actions/task";
import { useFocusEffect } from "@react-navigation/native";
import IconBack from "../../assets/icons/IconBack.js";
import { isNumber } from "@notifee/react-native/dist/utils";
import { ItemStaff } from "../../components/ItemStaff/ItemStaff.js";


 type propsType ={
        navigation:any
}
const SearchTaskScreen : React.FC<propsType>= ({ navigation  }) => {
  const dispatch  = useDispatch();
  const [content, setContent] = useState<string | number>("");
  const [typeSearch, setTypeSearch] = useState<number>(1);
  const dataSearchTask = useSelector(state => state.task?.dataSearchTask);

  const listUser=[
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
    },]
  const handleSearchTask=(value:string):void=>{
            setContent(value)
           dispatch(actionSearchTask(value))
  }
  const ItemFilter=React.memo(({ title, type }: { title: string; type: number })=>{
    return(
    <TouchableOpacity onPress={()=>{setTypeSearch(type)}} style={{backgroundColor:typeSearch===type?"#148eff":"#bed9f2",borderRadius:15,alignItems:'center',justifyContent:'center',padding:7,marginLeft:5}}>
      <Text style={{ fontSize: 13, color: typeSearch===type?"white":"#148eff", fontFamily: "OpenSans-SemiBold"}}>{title}</Text>
    </TouchableOpacity>)
  })

  const handleReset=()=>{
    dispatch({
             type:"RESET_SEARCH_TASK"
             })
  }
  // useEffect(
  //   React.useCallback(() => {
  //     return () => {
  //       dispatch({
  //         type:"RESET_SEARCH_TASK"
  //       })
  //     };
  //   }, [])
  // );
  return (
    <Animated.View
      entering={SlideInRight.duration(500)} exiting={SlideOutLeft.duration(500)}
      style={{ flex: 1}}
    >
      <View style={{backgroundColor:"#F0F0F0",height:'100%'}}>
        <SafeAreaView style={{height:StatusBar.currentHeight,backgroundColor:'white'}}>
          <StatusBar
            translucent
            backgroundColor={'black'}
          />
        </SafeAreaView>
        <KeyboardAvoidingView keyboardVerticalOffset={10} behavior='padding' style={{flexDirection:"row", backgroundColor:"white", paddingHorizontal:10, justifyContent:"space-between",alignItems:"center",display:'flex'}}>
          <TouchableOpacity onPress={()=>{navigation.goBack()}}>
            <IconBack/>
          </TouchableOpacity>
          <TextInput
            style={{ color: 'black',marginVertical:5, fontSize: 15, fontFamily: "OpenSans-Regular", flex: 1,marginHorizontal:15 }}
            placeholder="Nhập tiêu đề công việc cần tìm .."
            onChangeText={handleSearchTask}
            value={content}
          />
          <View  style={{ flexDirection:"row"}}>
              <TouchableOpacity onPress={handleReset}>
                <IconSearch width={25} height={25}/>
              </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{backgroundColor:"white",alignItems:'center',paddingHorizontal:10,height:50}}>
          <Text style={{ fontSize: 13, color: "#148eff", fontFamily: "OpenSans-SemiBold"}}>{"Tìm kiếm theo : "}</Text>
          <ItemFilter title={"Công việc"} type={1}/>
          <ItemFilter title={"Nhân viên"} type={2}/>
          <ItemFilter title={"Dự án"} type={3}/>
          <ItemFilter title={"Phòng ban"} type={4}/>
        </ScrollView>
        <ScrollView contentContainerStyle={{height:"100%"}}>
          {(dataSearchTask?.length > 0 && typeSearch===1)?
          <FlatList
          data={dataSearchTask}
          initialNumToRender={5}
          renderItem={({item}) => <ItemTask item={item} navigation={navigation}/>}
          scrollEnabled={false}
          keyExtractor={item => item.taskId}
        />:null}
          {(listUser?.length > 0 && typeSearch===2) &&
            <FlatList
              data={listUser}
              renderItem={({item}) => <ItemStaff item={item} navigation={navigation}/>}
              scrollEnabled={false}
              keyExtractor={item => item.taskId}
            />}
        </ScrollView>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});

export default React.memo(SearchTaskScreen);
