import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetScrollView
} from "@gorhom/bottom-sheet";
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView, StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {converPickerDate, convertDateDB} from "../../../utils/ConverPickerDate";
import React, {useCallback, useEffect, useRef, useState} from "react";
import ListUserChoose from "../../AddProjectScreen/ListUserChoose/ListUserChoose";
import IconSearch from "../../../assets/icons/IconSearch";
import { actionEditUserProject, actionsearchUser } from "../../../redux-store/actions/user";
import {useDispatch, useSelector} from "react-redux";
import ListUserSearch from "../../AddProjectScreen/ListUserSearch/ListUserSearch";
import { checkMember } from "../../AddProjectScreen/Utils/CheckMember";
import { drawAsImage } from "@shopify/react-native-skia";
import { showMessage } from "react-native-flash-message";
import { ScrollView } from "react-native-gesture-handler";
import IconLogoProject from "../../../assets/icons/IconLogoProject";
import {getBackgroundStateProject, getColorStateProject, getStateProject} from "../../../utils/GetPriority";
import IconArrowDown from "../../../assets/icons/IconArrowDown";
import moment from "moment";
import DateTimePicker from "react-native-modal-datetime-picker";
import Modal from "react-native-modal";
import {actionAddProject, actionChangeInforProject} from "../../../redux-store/actions/project";

export const BottomEditInforProject=React.memo((props)=>{
  const {bottomSheetRef,snapPoints,projectId,handleClose,data}= props
  const dispatch  = useDispatch();
  const dataCurrentUser = useSelector(state => state.auth.dataCurrentUser);
  const [title, setTitle]=useState(null);// tieeu de của project
  const [borderTitle, setBoderTitle]=useState('#888888');// mau cua border nhap tieu de cong viec
  const [startDay, setStartDay]=useState(moment(new Date()).format('YYYY-MM-DD'));//ngày băt đầu
  const [ngayBatDau, setNgayBatDau]=useState(moment(new Date()).format('YYYY-MM-DD'));// su dung de call api
  const [endDay, setEndDay]=useState(moment(new Date()).format('YYYY-MM-DD'));// ngày kết thuc
  const [ngayKetThuc, setngayKetThuc]=useState(moment(new Date()).format('YYYY-MM-DD'));// su dung de call api

  const [isShowStartDay, SetIsShowStartDay]=useState(false);//hiển thị picker chọn ngày bắt đầu
  const [isShowEndDay, SetIsShowEndDay]=useState(false);//hiển thị picker chọn kết thúc
  const [isChooseState, SetIsChooseState]=useState(false);//hiển thị modal chọn trạng thái dự án
  const [dataUserChoose, SetdataUserChoose]=useState([])// mảng user đã chọn
  const [stateProject, SetStateProject]=useState(null)  // trạng thái dự án


   useEffect(()=>{
              setNgayBatDau(data?.startDay)
              setStartDay(convertDateDB(data?.startDay))
              setEndDay(convertDateDB(data?.endDay))
              setngayKetThuc(data?.endDay)
              setTitle(data?.nameProject)
              SetStateProject(data?.state)
   },[data,bottomSheetRef])

  const onDismiss = useCallback(() => {   // bat su kien khi dong bottom sheet
    setNgayBatDau(data?.startDay)
    setStartDay(convertDateDB(data?.startDay))
    setEndDay(convertDateDB(data?.endDay))
    setngayKetThuc(data?.endDay)
    setTitle(data?.nameProject)
    SetStateProject(data?.state)
  }, [data]);
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
  // @ts-ignore
  const renderBackdrop = useCallback(
      (props) => {
        return <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />;
      },
      []
  );
  const handleEditProject=async () => {
    if(!title){
      setBoderTitle('red');
    }else {
      await dispatch(actionChangeInforProject(title,ngayBatDau,ngayKetThuc,projectId))
    }
  }
  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomSheetRef}
        index={2}
        onDismiss={onDismiss}
        enablePanDownToClose={true}
        backdropComponent={renderBackdrop}
        snapPoints={snapPoints}>
        <ScrollView style={{backgroundColor:"white"}} >
          <Text style={{
            fontSize: 20,
            color: "blue",
            marginBottom:25,
            alignSelf:'center',
            fontFamily: "OpenSans-SemiBold",
          }}>{"Chỉnh sửa thông tin dự án"}</Text>
          <View style={{paddingHorizontal:10, backgroundColor:"white",marginBottom:"40%"}}>
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
                  onFocus={()=>{setBoderTitle("#148EFF")}}
                  onBlur={()=>{setBoderTitle("#888888")}}
                  placeholder={"Nhập tên dự án"}
                  placeholderTextColor={"#888888"}
                  style={{ height: 40,flex:1,marginLeft:10,borderRadius:5, borderColor: borderTitle, borderWidth: 0.5, textAlignVertical:"center", fontSize:14, fontFamily: "OpenSans-Regular" }}
              />
            </View>
            {borderTitle==='red'?
                <Text style={{ fontSize: 11, color: "red", fontFamily: "OpenSans-Regular" }}>{"Vui lòng nhập tiêu đề dự án !"} </Text>:null}
            <View style={{flexDirection:"row",marginTop:10,justifyContent:"space-between"}}>
              <Text style={{
                fontSize: 15,
                color: "black",
                fontFamily: "OpenSans-SemiBold",
              }}>{"Ngày bắt đầu:"}</Text>
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
              }}>{"Ngày kết thúc:"}</Text>
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
          <TouchableOpacity onPress={handleEditProject} style={{height:50,alignSelf:'center', paddingHorizontal:9, borderRadius:17, backgroundColor:"#daeefd", marginTop:30,alignItems:'center', justifyContent:'center'}}>
            <Text style={{
              fontSize: 15,
              color: "#2f88dc",
              fontFamily: "OpenSans-SemiBold",
            }}>{"Chỉnh sửa thông tin"}</Text>
          </TouchableOpacity>
          </View>
        </ScrollView>
      </BottomSheetModal>
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
      <Modal
          onBackdropPress={()=>{SetIsChooseState(false)}}
          onBackButtonPress={()=>{SetIsChooseState(false)}}
          animationType="slide"
          swipeDirection='down'
          onSwipeComplete={()=>{SetIsChooseState(!isChooseState)}}
          animationIn={"bounceInUp"}
          animationOut={"bounceOutDown"}
          animationInTiming={900}
          animationOutTiming={500}
          backdropTransitionInTiming={1000}
          backdropTransitionOutTiming={500}
          transparent={true}
          visible={isChooseState}
          style={{  justifyContent: "flex-end",
            margin: 0,}}
      >
        <View  style={styles.modalContainer} >
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
      </Modal>
    </BottomSheetModalProvider>
  )
})
const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "white",
    paddingTop: 12,
    paddingHorizontal: 12,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    height: '30%',
    paddingBottom: 20,
  },

});
