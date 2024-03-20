import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ImageBackground, Dimensions, Image, SafeAreaView, FlatList, ScrollView, StatusBar, ActivityIndicator,
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
import BottomSheet, {BottomSheetBackdrop, BottomSheetModal, BottomSheetModalProvider} from "@gorhom/bottom-sheet";
import {useRef} from "react/index";
import {GestureDetector} from "react-native-gesture-handler/src/handlers/gestures/GestureDetector";
import {GestureHandlerRootView, PanGestureHandler} from "react-native-gesture-handler";
import { actionGetAllProject } from "../../redux-store/actions/project";
import {getColorBackgroundPriority, getColorPriority, getValuePriority} from "../../utils/GetPriority";
import IconBox from "../../assets/icons/IconBox";
import IconDown from "../../assets/icons/IconDown";
import IconMuiTenXuong from "../../assets/icons/IconMuiTenXuong";
import { actionGetAllTask, actionGetDetailTask, actionGetMoreAllTask } from "../../redux-store/actions/task";
import { ItemTaskPersonal } from "../../components/itemTask/ItemTaskPersonal";

const TaskPersonalScreen = ({ navigation }) => {

  const dispatch = useDispatch();
  const [isShowMore, SetIsShowMore] = useState(false); // show các chức năng khác
  const [typeTask, setTypeTask] = useState(3); // lua chon các task khac nhau
  const dataCurrentUser = useSelector(state => state.auth.dataCurrentUser);
  const dataAllTask = useSelector(state => state.task.dataAllTask);
  const isGetAllTask = useSelector(state => state.task.isGetMoreAllTask);
  const isGetMoreAllTask = useSelector(state => state.task.isGetMoreAllTask);



  useEffect( () => {

     dispatch(actionGetAllTask(0))

  },[])
  console.log(dataAllTask.length)
  var fakeDataListTask =  [
    {
      "taskId": "0jxabz1",
      "status": "0",
      "state": "1",
      "assignUser": "0",
      "targetUser": "2",
      "priority": "1",
      "progress": "0",
      "title": "Jfjfjjf",
      "content": " Djfjfjf",
      "startDay": "0000-00-00",
      "endDay": "0000-00-00",
      "createdDate": "0000-00-00",
      "projectId": "P001",
      "assignFullName": "Vũ đình tuấn anh",
      "avatarAssignUser": "anhvtd.png"
    },
    {
      "taskId": "1",
      "status": "1",
      "state": "1",
      "assignUser": "1",
      "targetUser": "1",
      "priority": "1",
      "progress": "10",
      "title": "test giao công việc 1",
      "content": " nọi dung của công việc ",
      "startDay": "2024-03-07",
      "endDay": "2024-03-07",
      "createdDate": "2024-03-07",
      "projectId": "P001",
      "assignFullName": "Lê Trọng Nam",
      "avatarAssignUser": "namltc.png"
    },
    {
      "taskId": "2cw76es",
      "status": "1",
      "state": "1",
      "assignUser": "1",
      "targetUser": "1",
      "priority": "1",
      "progress": "10",
      "title": "test giao công việc 1",
      "content": " nọi dung của công việc ",
      "startDay": "2024-03-07",
      "endDay": "2024-03-07",
      "createdDate": "2024-03-07",
      "projectId": "P001",
      "assignFullName": "Lê Trọng Nam",
      "avatarAssignUser": "namltc.png"
    },
    {
      "taskId": "2jb3w86",
      "status": "0",
      "state": "1",
      "assignUser": "0",
      "targetUser": "2",
      "priority": "0",
      "progress": "0",
      "title": "Test nhiệm vụ 1",
      "content": " Jfjfjfjjffjjfjfj",
      "startDay": "0000-00-00",
      "endDay": "0000-00-00",
      "createdDate": "0000-00-00",
      "projectId": "P001",
      "assignFullName": "Vũ đình tuấn anh",
      "avatarAssignUser": "anhvtd.png"
    },
    {
      "taskId": "45mawp0",
      "status": "0",
      "state": "1",
      "assignUser": "0",
      "targetUser": "2",
      "priority": "0",
      "progress": "0",
      "title": "Hello",
      "content": " Jfjfjfjjffjjfjfj",
      "startDay": "0000-00-00",
      "endDay": "0000-00-00",
      "createdDate": "0000-00-00",
      "projectId": "P001",
      "assignFullName": "Vũ đình tuấn anh",
      "avatarAssignUser": "anhvtd.png"
    },
    {
      "taskId": "a3gezjo",
      "status": "0",
      "state": "1",
      "assignUser": "0",
      "targetUser": "0",
      "priority": "1",
      "progress": "1",
      "title": "dsjklvnblvd",
      "content": " dsflkjvbndljnbv",
      "startDay": "2024-03-07",
      "endDay": "2024-03-07",
      "createdDate": "2024-03-07",
      "projectId": "P001",
      "assignFullName": "Vũ đình tuấn anh",
      "avatarAssignUser": "anhvtd.png"
    },
    {
      "taskId": "gtajl1x",
      "status": "1",
      "state": "1",
      "assignUser": "1",
      "targetUser": "1",
      "priority": "1",
      "progress": "10",
      "title": "test giao công việc 1",
      "content": " nọi dung của công việc ",
      "startDay": "2024-03-07",
      "endDay": "2024-03-07",
      "createdDate": "2024-03-07",
      "projectId": "P001",
      "assignFullName": "Lê Trọng Nam",
      "avatarAssignUser": "namltc.png"
    },
    {
      "taskId": "lsnu3eg",
      "status": "1",
      "state": "1",
      "assignUser": "1",
      "targetUser": "1",
      "priority": "1",
      "progress": "10",
      "title": "test giao công việc 1",
      "content": " nọi dung của công việc ",
      "startDay": "2024-03-07",
      "endDay": "2024-03-07",
      "createdDate": "2024-03-07",
      "projectId": "P001",
      "assignFullName": "Lê Trọng Nam",
      "avatarAssignUser": "namltc.png"
    },
    {
      "taskId": "n02xy61",
      "status": "1",
      "state": "1",
      "assignUser": "1",
      "targetUser": "1",
      "priority": "1",
      "progress": "10",
      "title": "test giao công việc 1",
      "content": " nọi dung của công việc ",
      "startDay": "2024-03-07",
      "endDay": "2024-03-07",
      "createdDate": "2024-03-07",
      "projectId": "P001",
      "assignFullName": "Lê Trọng Nam",
      "avatarAssignUser": "namltc.png"
    },
    {
      "taskId": "rz82x3p",
      "status": "1",
      "state": "1",
      "assignUser": "1",
      "targetUser": "1",
      "priority": "1",
      "progress": "10",
      "title": "test giao công việc 1",
      "content": " nọi dung của công việc ",
      "startDay": "2024-03-07",
      "endDay": "2024-03-07",
      "createdDate": "2024-03-07",
      "projectId": "P001",
      "assignFullName": "Lê Trọng Nam",
      "avatarAssignUser": "namltc.png"
    },
    {
      "taskId": "x26j7dw",
      "status": "1",
      "state": "2",
      "assignUser": "1",
      "targetUser": "1",
      "priority": "1",
      "progress": "10",
      "title": "test giao công việc 1",
      "content": " nọi dung của công việc ",
      "startDay": "2024-03-07",
      "endDay": "2024-03-07",
      "createdDate": "2024-03-07",
      "projectId": "P001",
      "assignFullName": "Lê Trọng Nam",
      "avatarAssignUser": "namltc.png"
    },
    {
      "taskId": "xn0hdlb",
      "status": "1",
      "state": "2",
      "assignUser": "1",
      "targetUser": "1",
      "priority": "1",
      "progress": "10",
      "title": "test giao công việc 1",
      "content": " nọi dung của công việc ",
      "startDay": "2024-03-07",
      "endDay": "2024-03-07",
      "createdDate": "2024-03-07",
      "projectId": "P001",
      "assignFullName": "Lê Trọng Nam",
      "avatarAssignUser": "namltc.png"
    },
    {
      "taskId": "y0vp2nu",
      "status": "1",
      "state": "2",
      "assignUser": "1",
      "targetUser": "1",
      "priority": "1",
      "progress": "10",
      "title": "test giao công việc 1",
      "content": " nọi dung của công việc ",
      "startDay": "2024-03-07",
      "endDay": "2024-03-07",
      "createdDate": "2024-03-07",
      "projectId": "P001",
      "assignFullName": "Lê Trọng Nam",
      "avatarAssignUser": "namltc.png"
    }
  ];

  const goToDetailTask=(taskId)=>{
    navigation.navigate('DetailTaskScreen',{taskId:taskId});
  }


  const loadMore=()=>{
    if(!isGetAllTask && !isGetMoreAllTask){
      dispatch(actionGetMoreAllTask())
    }else {
      return;
    }
    console.log(dataAllTask.length)
  }
  const getTypeTask=()=>{
    switch (typeTask) {
      case 1:
       return "Việc tôi giao"
        break;
      case 2:
        return "Việc tôi cần xử lý"
        break;
      case 3:
        return "Tất cả công việc của tôi"
        break;
      case 4:
        return "Việc đã hoàn thành "
        break;
      default:
        return "Tất cả công việc của tôi"
        break;
    }
  }
  const filterTask=()=>{

      switch (typeTask) {
        case 1:
          return dataAllTask.filter(item => item.assignUser == dataCurrentUser.userId);
          break;
        case 2:
          return dataAllTask.filter(item => item.targetUser == dataCurrentUser.userId);
          break;
        case 3:
          return  dataAllTask
          break;
        case 4:
          return  dataAllTask.filter(item => item.state == 2);
          break;
        default:
          return dataAllTask
          break;
    }
  }
  return (
    <SafeAreaView style={{backgroundColor:"white",paddingTop:StatusBar.currentHeight,height:'100%'}}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View style={{zIndex:10,position:'absolute',width:'100%',top:10}}>
        <TouchableOpacity onPress={()=>{SetIsShowMore(!isShowMore)}} style={{flexDirection:"row",paddingLeft:10,backgroundColor:isShowMore?"white":null}}>
          <View style={{flexDirection:"row",marginRight:20}}>
            <IconBox/>
            <Text style={{ fontSize: 19, color: "black", fontFamily: "OpenSans-SemiBold",marginLeft:10 }}>{getTypeTask()}</Text>
          </View>
          <IconDown/>
        </TouchableOpacity>
        {isShowMore&&
          <View style={{backgroundColor:"white",paddingHorizontal:20,paddingBottom:10,}}>
            <TouchableOpacity onPress={()=>{setTypeTask(1),SetIsShowMore(false)}}>
              <Text style={{ fontSize: 17, color: "black",marginLeft:20, fontFamily: "OpenSans-Regular",marginTop:15 }}>{"Việc tôi giao"}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{setTypeTask(2),SetIsShowMore(false)}}>
              <Text style={{ fontSize: 17, color: "black",marginLeft:20, fontFamily: "OpenSans-Regular",marginTop:15 }}>{"Việc tôi cần xử lý"}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{setTypeTask(3),SetIsShowMore(false)}}>
              <Text style={{ fontSize: 17, color: "black",marginLeft:20, fontFamily: "OpenSans-Regular",marginTop:15 }}>{"Tất cả công việc của tôi"}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{setTypeTask(4),SetIsShowMore(false)}}>
              <Text style={{ fontSize: 17, color: "black",marginLeft:20, fontFamily: "OpenSans-Regular",marginTop:15 }}>{"Việc của tôi đã hoàn thành"}</Text>
            </TouchableOpacity>

          </View>}
      </View>
        <ScrollView style={{marginTop:20,marginBottom:"24%"}}>
          <View style={{height:1.5, backgroundColor:"white",marginVertical:10}}/>
          <View style={{paddingHorizontal:10}}>
           <FlatList
               data={filterTask()}
               renderItem={({item}) => <ItemTaskPersonal item={item} gotoDetail = {goToDetailTask} />}
               keyExtractor={(item,index) => index.toString()}
               onEndReachedThreshold={0.04}
               scrollEnabled={false}
               showsVerticalScrollIndicator={false}
               ListFooterComponent={

                 <View style={{ alignItems: "center", marginVertical: 10 }}>
                   {isGetMoreAllTask&& <ActivityIndicator size="large" color="#4577ef" />}
                 </View>
               }
           />
            <TouchableOpacity onPress={()=>{loadMore()}}>
              <Text style={{ fontSize: 17, color: "green",marginLeft:20, fontFamily: "OpenSans-SemiBold",marginTop:15 }}>{"Nhấn để xem thêm công việc mới..."}</Text>
            </TouchableOpacity>
         </View>




        </ScrollView>

    </SafeAreaView>
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

export default React.memo(TaskPersonalScreen);
