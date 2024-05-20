import React, { useCallback, useEffect, useMemo, useState } from "react";
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
  StatusBar,
  ActivityIndicator,
  Platform,
  VirtualizedList, Modal,
} from "react-native";

import { useDispatch, useSelector } from "react-redux";

import Animated, { FadeIn, SlideInDown, SlideInRight, SlideOutLeft, SlideOutRight } from "react-native-reanimated";
import IconBox from "../../assets/icons/IconBox";
import IconDown from "../../assets/icons/IconDown";
import {
  actionGetAssignTask, actionGetMoreAssignTask, actionGetTargetTask, actionGetTaskDone
} from "../../redux-store/actions/task";
import { ItemTaskPersonal } from "../../components/itemTask/ItemTaskPersonal";
import {FooterTask} from "./footerTask/FooterTask";
import IconAssign from "../../assets/icons/IconAssign";
import IconTarget from "../../assets/icons/IconTarget";
import IconAll from "../../assets/icons/IconAll";
import IconDone from "../../assets/icons/IconDone";
import IconClose from "../../assets/icons/IconClose";
import { EmptyTask } from "../../components/EmptyScreen/EmptyTask";
import IconLoadMore from "../../assets/icons/IconLoadMorer";
import TaskChart from "../../components/TaskChart/TaskChart";
import IconCalendar from "../../assets/icons/IconCalendar";
import IconDoubleDown from "../../assets/icons/IconDoubleDown";
import {BoardTask} from "./BoardTask/BoardTask";
import LinearGradient from "react-native-linear-gradient";



const TaskPersonalScreen = ({ navigation }) => {

  const dispatch = useDispatch();
  const [isShowMore, SetIsShowMore] = useState(false); // show các chức năng khác
  const [typeTask, setTypeTask] = useState(1); // lua chon các task khac nhau
  const [lableTypeTask, setLableTypeTask] = useState("");

  const dataAssignTask = useSelector(state => state.task.dataAssignTask);
  const dataTargetTask = useSelector(state => state.task.dataTargetTask);
  const dataTaskDone = useSelector(state => state.task.dataTaskDone);
  const isGetMoreAssignTask = useSelector(state => state.task.isGetMoreAssignTask);
  const [currentTask, setCurrentTask] = useState(dataAssignTask);

  useEffect( () => {

     dispatch(actionGetAssignTask())
     setLableTypeTask("Việc tôi giao")
  },[])

  useEffect( () => {
    if(typeTask==1){
      setCurrentTask(dataAssignTask)
    }
    else if(typeTask==2){
      setCurrentTask(dataTargetTask)
    }
    else if(typeTask==3){
      setCurrentTask(dataAssignTask)
    }
    else{
      setCurrentTask(dataTaskDone)
    }


  },[dataAssignTask,dataTaskDone,dataTargetTask,typeTask])

  const goToDetailTask=(taskId)=>{
    navigation.navigate('DetailTaskScreen',{taskId:taskId});
  }


  const loadMore=()=>{
    ///  console.log("load theem:")
    switch (typeTask) {
      case 1:
        dispatch(actionGetMoreAssignTask(dataAssignTask.length))
        break;
      default:
        dispatch(actionGetMoreAssignTask(dataAssignTask.length))
        break;
    }
  }
  const filterTask=async (typeTask) => {

    switch (typeTask) {
      case 1:
        setTypeTask(1)
         dispatch(actionGetAssignTask())
          setLableTypeTask("Việc tôi giao")
        break;
      case 2:
        setTypeTask(2)
         dispatch(actionGetTargetTask())
        setLableTypeTask("Việc tôi cần xử lý")
        break;
      case 4:
        setTypeTask(4)
        setLableTypeTask("Việc của tôi xử lý đã hoàn thành")
        dispatch(actionGetTaskDone())
        break;
      default:
        setTypeTask(1)
        dispatch(actionGetAssignTask())
        setLableTypeTask("Việc tôi giao")
        break;
    }
  }
  // tổng số nhiệm vụ : đang làm, hoàn thành, đã hết hạn xử lý

  return (
    <Animated.View
      entering={SlideInRight.duration(500)} exiting={SlideOutLeft.duration(500)}
      style={{ flex: 1}}
    >
    <LinearGradient   colors={['#e3efdd', '#faeeca', '#deedda']} style={{backgroundColor:"#F0F0F0",height:'100%'}}>
      <View style={{position:"relative",backgroundColor:"black",height:StatusBar.currentHeight}}>
        <StatusBar
          translucent
          backgroundColor={'transparent'}
        />
      </View>

      <SafeAreaView style={{width:'100%'}}>
        <TouchableOpacity onPress={()=>{SetIsShowMore(!isShowMore)}} style={{flexDirection:"row",paddingLeft:10,justifyContent:'space-between'}}>
          <View style={{flexDirection:"row",marginRight:20}}>
            <IconBox/>
            <Text style={{ fontSize: 17, color: "black", fontFamily: "OpenSans-SemiBold",marginLeft:10 }}>{lableTypeTask}</Text>
          </View>
          <IconDoubleDown/>
        </TouchableOpacity>
        <Modal
         animationType="fade"
          transparent={true}
          visible={isShowMore}
        >
          <SafeAreaView style={styles.modalContainer} >
            <View style={styles.modalContent}>
              <View style={{backgroundColor:"white",paddingHorizontal:20}}>
                <TouchableOpacity onPress={()=>{SetIsShowMore(!isShowMore)}} style={{flexDirection:"row",paddingLeft:10,backgroundColor:isShowMore?"white":null}}>
                  <View style={{flexDirection:"row",marginRight:20,flex:1}}>
                    <IconBox/>
                    <Text style={{ fontSize: 15, color: "black", fontFamily: "OpenSans-SemiBold",marginLeft:10 }}>{lableTypeTask}</Text>
                  </View>
                  <IconClose/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                  SetIsShowMore(false)
                  filterTask(1)}}
                  style={{flexDirection:"row",marginTop:15}}

                >
                  <IconAssign/>
                  <Text style={{ fontSize: 15, color: "black",marginLeft:15, fontFamily: "OpenSans-Regular" }}>{"Việc tôi giao"}</Text>

                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                  SetIsShowMore(false)
                  filterTask(2)}}
                                  style={{flexDirection:"row",marginTop:10}}
                >
                  <IconTarget/>
                  <Text style={{ fontSize: 15, color: "black",marginLeft:15, fontFamily: "OpenSans-Regular" }}>{"Việc tôi cần xử lý"}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                  SetIsShowMore(false)
                  filterTask(4)}}
                                  style={{flexDirection:"row",marginTop:10}}
                >
                  <IconDone/>
                  <Text style={{ fontSize: 15, color: "black",marginLeft:14, fontFamily: "OpenSans-Regular" }}>{"Việc của tôi xử lý đã hoàn thành"}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{navigation.navigate("FilterTaskScreen")}}
                                  style={{flexDirection:"row",marginTop:10}}
                >
                  <IconCalendar/>
                  <Text style={{ fontSize: 15, color: "black",marginLeft:14, fontFamily: "OpenSans-Regular" }}>{"Việc cần xử lý tuần này "}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </SafeAreaView>
        </Modal>
      </SafeAreaView>
          <ScrollView style={{paddingHorizontal:10,marginTop:10,marginBottom:"17%"}}>
            <TaskChart/>
            <BoardTask/>
            {currentTask?.length>0?
            (currentTask.map((item, index) => (
              <ItemTaskPersonal item={item} gotoDetail = {goToDetailTask} key={item.taskId} />
            ))):
              <EmptyTask/>
      }
            {isGetMoreAssignTask&&<FooterTask/>}
            <TouchableOpacity style={{flexDirection:"row",marginTop:10}} onPress={()=>{loadMore()}}>
              <IconLoadMore/>
              <Text style={{ fontSize: 17, color: "black",marginLeft:5, fontFamily: "OpenSans-Regular" }}>{"Nhấn để tải thêm task..."}</Text>
            </TouchableOpacity>
         </ScrollView>


    </LinearGradient>
    </Animated.View>
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
  },
  modalContainer: {
    height:"100%",
    alignItems: 'center',
    backgroundColor:'rgba(0,0,0,0.3)',
  },
  modalContent: {
    backgroundColor: 'white',
    paddingVertical:15,
    elevation: 5,
    width:"100%",
    height:"40%",
    borderBottomRightRadius:10,
    borderBottomLeftRadius:10,
  }

});

export default React.memo(TaskPersonalScreen);
