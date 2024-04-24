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
  VirtualizedList, Modal, RefreshControl,
} from "react-native";

import { useDispatch, useSelector } from "react-redux";

import Animated, { FadeIn, SlideInDown, SlideInRight, SlideOutLeft, SlideOutRight } from "react-native-reanimated";
import IconBox from "../../assets/icons/IconBox";
import IconDown from "../../assets/icons/IconDown";
import {
  actionGetAssignTask, actionGetMoreAssignTask, actionGetTargetTask, actionGetTargetTaskByEndDay, actionGetTaskDone,
} from "../../redux-store/actions/task";
import { ItemTaskPersonal } from "../../components/itemTask/ItemTaskPersonal";
import {FooterTask} from "./footerTask/FooterTask";
import IconAssign from "../../assets/icons/IconAssign";
import IconTarget from "../../assets/icons/IconTarget";
import IconAll from "../../assets/icons/IconAll";
import IconDone from "../../assets/icons/IconDone";
import IconClose from "../../assets/icons/IconClose";
import IconSearch from "../../assets/icons/IconSearch";
import { EmptyTask } from "../../components/EmptyScreen/EmptyTask";
import IconLoadMore from "../../assets/icons/IconLoadMorer";
import { PieChart } from "react-native-gifted-charts";
import TaskChart from "../../components/TaskChart/TaskChart";
import IconCalendar from "../../assets/icons/IconCalendar";
import IconArrowRight from "../../assets/icons/IconArrowRigth";
import IconCam from "../../assets/icons/IconCam";
import moment from "moment";
import DateTimePicker from "react-native-modal-datetime-picker";
import fontAwesome5Pro from "react-native-vector-icons/FontAwesome5Pro";
import ItemTask from "../../components/itemTask/ItemTask";
import LoadingComponent from "../../components/loadingComponent/LoadingComponent";


const FilterTaskScreen = ({ navigation }) => {

  const dataTargetTaskByEndDay = useSelector(state => state.task.dataTargetTaskByEndDay);
  const [startDay, setStartDay]=useState('1');//ngày băt đầu
  const [endDay, setEndDay]=useState('1');// ngày kết thuc

  const [isShowStartDay, setIsShowStartDay]=useState(false);
  const [isShowEndDay, setIsShowEndDay]=useState(false);
  const dispatch = useDispatch();

  const [refreshing, setRefreshing] = useState(false);
  const handleRefresh = () => {
    setRefreshing(true); // Đặt trạng thái là đang làm mới
    dispatch(actionGetTargetTaskByEndDay(0,startDay,endDay))
    setRefreshing(false);
  };
  const handleShowStartDay=()=>{
      setIsShowStartDay(true)
  }
  const handleShowEndDay=()=>{
    setIsShowEndDay(true)
  }
  const handleHideStartDay=()=>{
    setIsShowStartDay(false)
  }
  const handleHideEndDay=()=>{
    setIsShowEndDay(false)
  }
  const handleConfirmStartDay=(date)=>{
    setStartDay(moment(date).format('YYYY-MM-DD'));
    setIsShowStartDay(false)
  }
  const handleConfirmEndDay=(date)=>{
    setEndDay(moment(date).format('YYYY-MM-DD'));
    setIsShowEndDay(false)
  }
  useEffect(()=>{
       handlegetWee()
  },[])

  const handleGetTask=()=>{
    dispatch(actionGetTargetTaskByEndDay(0,startDay,endDay))
  }
 const handlegetWee=async () => {
   // Lấy ngày hiện tại
   const currentDate = new Date();

// Lấy ngày đầu tiên của tuần (Thứ 2)
   const firstDayOfWeek = new Date(currentDate);
   firstDayOfWeek.setDate(currentDate.getDate() - currentDate.getDay() + (currentDate.getDay() === 0 ? -6 : 1));
   await setStartDay(moment(firstDayOfWeek).format('YYYY-MM-DD'))
// Lấy ngày cuối cùng của tuần (Chủ nhật)
   const lastDayOfWeek = new Date(currentDate);
   lastDayOfWeek.setDate(firstDayOfWeek.getDate() + 6);
   await setEndDay(moment(lastDayOfWeek).format('YYYY-MM-DD'))
   console.log(firstDayOfWeek, lastDayOfWeek)
   dispatch(actionGetTargetTaskByEndDay(0, firstDayOfWeek, lastDayOfWeek))
 }

  return (
    <Animated.View
      entering={SlideInRight.duration(500)} exiting={SlideOutLeft.duration(500)}
      style={{ flex: 1}}
    >
    <View style={{backgroundColor:"#F0F0F0",height:'100%'}}>
      <View style={{position:"relative",backgroundColor:"black",height:StatusBar.currentHeight}}>
        <StatusBar
          translucent
          backgroundColor={'transparent'}
        />
      </View>

      <SafeAreaView style={{width:'100%'}}>
          <View style={{flexDirection:"row",marginRight:20,alignItems:'center',marginTop:5,marginLeft:10}}>
            <IconCalendar/>
            <Text style={{ fontSize: 15, color: "black", fontFamily: "OpenSans-SemiBold",marginLeft:10 }}>{"Làm tuần này"}</Text>
          </View>
          <Text style={{ fontSize: 15, color: "black", fontFamily: "OpenSans-Regular",marginLeft:10,marginTop:10 }}>{"Chọn thời gian:"}</Text>
      </SafeAreaView>
          <View style={{paddingHorizontal:10,marginTop:10,marginBottom:"20%",flex:1}}>
            <FlatList
              ListHeaderComponent={ <View style={{marginLeft:5,flexDirection:'row',paddingHorizontal:5,alignItems:'center',marginTop:10}}>
                <View style={{flexDirection:"row",borderColor:"gray",borderWidth:1,borderRadius:7,alignItems:'center',paddingHorizontal:5,width:'80%',justifyContent:'space-around'}}>
                  <TouchableOpacity onPress={handleShowStartDay} style={{flexDirection:"row",alignItems:'center'}}>
                    <Text style={{ fontSize: 15, color: "black", fontFamily: "OpenSans-Regular" }}>{startDay}</Text>
                  </TouchableOpacity>
                  <IconArrowRight/>
                  <TouchableOpacity onPress={handleShowEndDay} style={{flexDirection:"row",alignItems:'center'}}>
                    <Text style={{ fontSize: 15, color: "black", fontFamily: "OpenSans-Regular" }}>{endDay}</Text>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={handleGetTask} style={{borderRadius:7, borderWidth:1, borderColor:"#0099FF",flex:1,paddingVertical:7,marginHorizontal:4,alignItems:'center',justifyContent:'center'}}>
                  <Text style={{ fontSize: 15, color: "black", fontFamily: "OpenSans-Regular" }}>{"Lọc"}</Text>
                </TouchableOpacity>

              </View>}
              data={dataTargetTaskByEndDay}
              initialNumToRender={3}
              renderItem={({item}) => <ItemTask item={item} navigation={navigation}/>}
              scrollEnabled={true}
              keyExtractor={item => item.taskId}
              onEndReached={()=>{console.log("load them")}} // Bắt sự kiện load more
              onEndReachedThreshold={0.1}
              ListEmptyComponent={<EmptyTask/>}
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={handleRefresh}
                />
              }
            />
         </View>

      <DateTimePicker
        isVisible={isShowStartDay}
        mode="date"
        onCancel={handleHideStartDay}
       onConfirm={handleConfirmStartDay}
      />
      <DateTimePicker
        isVisible={isShowEndDay}
        mode="date"
        onCancel={handleHideEndDay}
         onConfirm={handleConfirmEndDay}
      />
    </View>
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
  }, modalContainer: {
    height:"100%",
    alignItems: 'center',
    backgroundColor:'rgba(0,0,0,0.3)',
  },
  modalContent: {
    backgroundColor: 'white',
    paddingVertical:15,
    elevation: 5,
    width:"100%",
    height:"40%"
  }

});

export default React.memo(FilterTaskScreen);
