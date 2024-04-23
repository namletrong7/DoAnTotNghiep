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
import IconSearch from "../../assets/icons/IconSearch";
import { EmptyTask } from "../../components/EmptyScreen/EmptyTask";
import IconLoadMore from "../../assets/icons/IconLoadMorer";
import { PieChart } from "react-native-gifted-charts";
import TaskChart from "../../components/TaskChart/TaskChart";
import IconCalendar from "../../assets/icons/IconCalendar";
import IconArrowRight from "../../assets/icons/IconArrowRigth";
import IconCam from "../../assets/icons/IconCam";
import moment from "moment";


const FilterTaskScreen = ({ navigation }) => {

  const dataAssignTask = useSelector(state => state.task.dataAssignTask);
  const [startDay, setStartDay]=useState('');//ngày băt đầu
  const [endDay, setEndDay]=useState('');// ngày kết thuc

  const isHermes = () => global.HermesInternal
  console.log(isHermes)

  useEffect(()=>{
    // Lấy ngày hiện tại
    const currentDate = new Date();

// Lấy ngày đầu tiên của tuần (Thứ 2)
    const firstDayOfWeek = new Date(currentDate);
    firstDayOfWeek.setDate(currentDate.getDate() - currentDate.getDay() + (currentDate.getDay() === 0 ? -6 : 1));
    setStartDay(moment(firstDayOfWeek).format('YYYY-MM-DD'))
// Lấy ngày cuối cùng của tuần (Chủ nhật)
    const lastDayOfWeek = new Date(currentDate);
    lastDayOfWeek.setDate(firstDayOfWeek.getDate() + 6);
    setEndDay(moment(lastDayOfWeek).format('YYYY-MM-DD'))
  },[])




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
          <View style={{flexDirection:"row",marginRight:20,alignItems:'center',marginTop:5,marginLeft:5}}>
            <IconCalendar/>
            <Text style={{ fontSize: 15, color: "black", fontFamily: "OpenSans-SemiBold",marginLeft:10 }}>{"Làm tuần này"}</Text>
          </View>

        <View style={{marginLeft:5}}>
          <Text style={{ fontSize: 15, color: "black", fontFamily: "OpenSans-Regular" }}>{"Chọn thời gian:"}</Text>
          <View style={{flexDirection:"row",borderColor:"gray",borderWidth:1,borderRadius:7,alignItems:'center',alignSelf:"flex-start",paddingHorizontal:5,width:'90%',justifyContent:'space-around',marginTop:10}}>
            <View style={{flexDirection:"row",alignItems:'center'}}>
              <Text style={{ fontSize: 15, color: "black", fontFamily: "OpenSans-Regular" }}>{startDay}</Text>
            </View>
            <IconArrowRight/>
            <View style={{flexDirection:"row",alignItems:'center'}}>
              <Text style={{ fontSize: 15, color: "black", fontFamily: "OpenSans-Regular" }}>{endDay}</Text>
            </View>
            <IconCalendar/>
          </View>

        </View>
      </SafeAreaView>
          <ScrollView style={{paddingHorizontal:10,marginTop:10,marginBottom:"20%"}}>
            {dataAssignTask?.length>0?
                (dataAssignTask.map((item, index) => (
                    <ItemTaskPersonal item={item} key={item.taskId} />
                ))):
                <EmptyTask/>
            }
            <TouchableOpacity style={{flexDirection:"row",marginTop:10}}>
              <IconLoadMore/>
              <Text style={{ fontSize: 17, color: "black",marginLeft:5, fontFamily: "OpenSans-Regular" }}>{"Nhấn để tải thêm task..."}</Text>
            </TouchableOpacity>
         </ScrollView>


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
