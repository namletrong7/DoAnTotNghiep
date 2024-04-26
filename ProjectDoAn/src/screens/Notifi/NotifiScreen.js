import React, { useState } from "react";
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
import IconBell from "../../assets/icons/IconBell";
import { getTypeNotifi } from "../../utils/GetPriority";
import IconBack from "../../assets/icons/IconBack";
import LinearGradient from "react-native-linear-gradient";

const NotifiScreen = ({ navigation }) => {

  const dispatch = useDispatch();

  var fakeDataListTask = [
    {
      "notifyUserId":1,
      "reciverUser":1,
      "notifyId":"abcccc",
      "isRead":0,
      "createrUser":0,
      "avatarCreateUser":"tuananh.jpg",  "fullNameCreate":"Lê trọng Nam",
      "type":1,   "taskId":"T001",
      "titleTask":"Tieu de của task T001",
      "timeNotify":"10/08/2001"

    },
    {
      "notifyUserId":2,
      "reciverUser":1,
      "notifyId":"abcccc",
      "isRead":0,
      "createrUser":0,
      "avatarCreateUser":"tuananh.jpg",  "fullNameCreate":"Lê trọng Nam",
      "type":1,   "taskId":"T001",
      "titleTask":"Tieu de của task T001",
      "timeNotify":"10/08/2001"


    },
    {
      "notifyUserId":3,
      "reciverUser":1,
      "notifyId":"abcccc",
      "isRead":0,
      "createrUser":1,
      "avatarCreateUser":"tuananh.jpg",  "fullNameCreate":"Lê trọng Nam",
      "type":1,   "taskId":"T001",
      "titleTask":"Tieu de của task T001",
      "timeNotify":"10/08/2001"
    },

    {
      "notifyUserId":4,
      "reciverUser":1,
      "notifyId":"abcccc",
      "isRead":0,
      "createrUser":0,
      "avatarCreateUser":"tuananh.jpg",  "fullNameCreate":"Lê trọng Nam",
      "type":3,
      "taskId":"T001",
      "titleTask":"Tieu de của task T001",
      "timeNotify":"10/08/2001"

    },
    {
      "notifyUserId":12,
      "reciverUser":1,
      "notifyId":"abcccc",
      "isRead":0,
      "createrUser":0,
      "avatarCreateUser":"tuananh.jpg",  "fullNameCreate":"Lê trọng Nam",
      "type":4,
      "taskId":"T001",
      "titleTask":"Tieu de của task T001",
      "timeNotify":"10/08/2001"
    },
    {
      "notifyUserId":66,
      "reciverUser":1,
      "notifyId":"abcccc",
      "isRead":1,
      "createrUser":0,
      "avatarCreateUser":"tuananh.jpg",  "fullNameCreate":"Lê trọng Nam",
      "type":6,
      "taskId":"T001",
      "titleTask":"Tieu de của task T001",
      "timeNotify":"10/08/2001"
    },
    {
      "notifyUserId":67,
      "reciverUser":1,
      "notifyId":"abcccc",
      "isRead":1,
      "createrUser":0,
      "avatarCreateUser":"tuananh.jpg",
      "fullNameCreate":"Lê trọng Nam",
      "type":5,
      "taskId":"T001",
      "titleTask":"Tieu de của task T001",
      "timeNotify":"10/08/2001"
    },

  ];
  const handleItemNotifi=(item)=>{
    navigation.navigate('DetailTask_Notifi',{taskId:item?.taskId})
  }
  const ItemNotfi = (props)=>{
    const {item, navigation} = props
    return(
      <TouchableOpacity onPress={()=>{handleItemNotifi(item)}} style={{flexDirection:"row",alignItems:"center",paddingHorizontal:15,
        paddingVertical:15, backgroundColor:item.isRead==0?"#DDDDDD":"transparent"}}>
        <FastImage
          style={{ width: 50, height: 50,borderRadius: 50/2 ,overflow: "hidden"}}
          source={{
            uri:  (baseUrlAvatarUser+props.item?.avatarCreateUser)||''

          }}
          resizeMode={FastImage.resizeMode.stretch}
        />
        <View style={{alignSelf:"flex-end",marginLeft:-20,backgroundColor:"#FFCC00", borderRadius:16,padding:3}}>
           <IconBell/>
        </View>
        <View style={{marginLeft:10,flex:0.98}}>
          <Text style={{fontSize:15,flexWrap:"wrap", color:"black",fontFamily:"OpenSans-SemiBold"}}>{item.fullNameCreate+" "}
            <Text style={{fontSize:14,flexWrap:"wrap", color:"black",fontFamily:"OpenSans-Regular"}}>{getTypeNotifi(item.type)+" "}</Text>
            <Text style={{fontSize:15,flexWrap:"wrap", color:"black",fontFamily:"OpenSans-SemiBold"}}>{item.titleTask}</Text>
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={{height:'100%',backgroundColor:"#F0F0F0"}}>
      <HeaderComponent title={"THÔNG BÁO"} navigation={navigation}/>
        <LinearGradient  colors={['#faefcb', '#eaf1e0', '#deedda']} style={{flex:1}} >
          <FlatList
            data={fakeDataListTask}
            renderItem={({item}) => <ItemNotfi item={item} navigation = {navigation} />}
            scrollEnabled={true}
            keyExtractor={item => item.notifyUserId}
          />
        </LinearGradient>
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
  }
});

export default NotifiScreen;
