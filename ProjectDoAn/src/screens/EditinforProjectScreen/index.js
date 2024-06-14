
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView, ScrollView, StatusBar, StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {converPickerDate, convertDateDB} from "../../utils/ConverPickerDate";
import React, {useCallback, useEffect, useMemo, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import IconLogoProject from "../../assets/icons/IconLogoProject";
import {getBackgroundStateProject, getColorStateProject, getStateProject} from "../../utils/GetPriority";
import IconArrowDown from "../../assets/icons/IconArrowDown";
import moment from "moment";
import DateTimePicker from "react-native-modal-datetime-picker";
import Modal from "react-native-modal";
import { actionChangeInforProject, actionEditRoleProjecet, actionOutProjecet } from "../../redux-store/actions/project";
import IconBack from "../../assets/icons/IconBack";
import IconEdit from "../../assets/icons/IconEdit";
import OptionComponent from "./OptionComponent/OptionComponent";
import ListAdminProject from "./ListAdminProject/ListAdminProject";
import ListMemberProject from "./ListMemberProject/ListMemberProject";
import DialogConfirmComponent from "../../components/DialogConfirmComponent/DialogConfirmComponet";
import {ModalOptionForAdmin} from "./ModalOptionForAdmin/ModalOptionForAdmin";
import LottieView from "lottie-react-native";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {BottomEditUser} from "./BottomEditUser";
import {BottomSheetBackdrop} from "@gorhom/bottom-sheet";

export const EditInforProjectScreen=React.memo((props)=>{
  const {route,navigation}= props
  const { projectId } = route?.params ;
  const dispatch  = useDispatch();
  const data = useSelector(state => state.project?.dataDetailProject);
  const [title, setTitle]=useState(null);// tieeu de của project
  const [isLoading, setIsLoading]=useState(false);// mau cua border nhap tieu de cong viec
  const [startDay, setStartDay]=useState(moment(new Date()).format('YYYY-MM-DD'));//ngày băt đầu
  const [endDay, setEndDay]=useState(moment(new Date()).format('YYYY-MM-DD'));// ngày kết thuc
  const [isShowStartDay, SetIsShowStartDay]=useState(false);//hiển thị picker chọn ngày bắt đầu
  const [isShowEndDay, SetIsShowEndDay]=useState(false);//hiển thị picker chọn kết thúc
  const [isChooseState, SetIsChooseState]=useState(false);//hiển thị modal chọn trạng thái dự án
  const [stateProject, SetStateProject]=useState(null)  // trạng thái dự án
  const [isShowIconEdit, setisShowIconEdit]=useState(true);
  const [isShowDialogLeave, setIsShowDialogLeave]=useState(false);//hiển thị dialog xác nhận rời dự án
  const [isShowDialogDeleteProject, setIsShowDialogDeleteProject]=useState(false);//hiện thị dialog xác nhận xóa dự án
  const [isShowModalOptionForAdmin, setIsShowModalOptionForAdmin]=useState(false);//hiện thị modal lựa chọn danh cho các quản trị viên
  const [typeOptionForAdmin, setTypeOptionForAdmin]=useState(null);//kiểu lựa chọn đành cho admin
  const [userSelected, setUserSelected]=useState(null);//user dc chọn
  const snapPoints = useMemo(() => ['50%', "80%",'99%'], []);
  const bottomEditUserRef = useRef(null);


   useEffect(()=>{
  //   console.log(data)
              setStartDay(convertDateDB(data?.startDay))
              setEndDay(convertDateDB(data?.endDay))
              setTitle(data?.nameProject)
              SetStateProject(data?.state)
   },[data])

  // hàm nhán vào nút ok của pker chọn ngày bắt đầu
  const onConfirmStartDay = (date)=>{
    SetIsShowStartDay(false)
    setStartDay(converPickerDate(date));
    handleEditProject(moment(date).format('YYYY-MM-DD'),1);
  }


  // hàm nhán vào nút ok của pker ngày key thuc
  const onConfirmEndDay = (date)=>{
    setEndDay(converPickerDate(date));
    SetIsShowEndDay(false)
    handleEditProject(moment(date).format('YYYY-MM-DD'),2);

  }

  const onCloseDialogLeave = useCallback(()=>{
    setIsShowDialogLeave(false)
  },[])
  const onShowDialogLeave = useCallback(()=>{
    setIsShowDialogLeave(true)
  },[])


  const onCloseDialogDeleteProject= useCallback(()=>{
    setIsShowDialogDeleteProject(false)
  },[])
  const onShowDialogLeaveProject = useCallback(()=>{
    setIsShowDialogDeleteProject(true)
  },[])

   // useEffect(()=>{
   //   console.log(userSelected)
   // },[userSelected])
  const onCloseModalOptionForAdmin= useCallback(()=>{
    setIsShowModalOptionForAdmin(false)
  },[])
  const onShowModalOptionForAdmin =useCallback(async (typeOption, item) => {
   if(data?.isAdminProject){
     setTypeOptionForAdmin(typeOption)
     await setUserSelected(item)
     setIsShowModalOptionForAdmin(true)
   }else{
     return ;
   }

  },[data])
  const onEditRoleProject =useCallback(async (type) => {
        //   type:  0 - gỡ vai trò quản trị viên , 1- thêm vai trò quản trị viên  2-Rời khỏi dự án
    setIsLoading(true)
    setIsShowModalOptionForAdmin(false)
   await dispatch(actionEditRoleProjecet(userSelected?.projectUserId,projectId,type,userSelected?.fullName))
    setIsLoading(false)
  },[userSelected])
  const handleEditProject=async (content,type) => {
     // type = 0 - chỉnh sửa tên dự án , 1-chỉnh sửa ngày bắt đầu. 2- chỉnh sửa ngày kết thúc 3-cap nhap trang thai du an
      setIsLoading(true)
     await  dispatch(actionChangeInforProject(content,type,projectId))
      setIsLoading(false)

  }
  const handleEditStateProject=async (content,type) => {
    // type = 0 - chỉnh sửa tên dự án , 1-chỉnh sửa ngày bắt đầu. 2- chỉnh sửa ngày kết thúc 3-cap nhap trang thai du an
    dispatch(actionChangeInforProject(content,type,projectId))
    SetIsChooseState(false)
  }
// hàm mở ra bottom sheet thông tin của project
  const handelOpenEditUser = useCallback(() => {
    bottomEditUserRef.current?.present();
  }, []);
  const handelCloseEditUser = useCallback(() => {
    bottomEditUserRef.current?.dismiss();
  }, [bottomEditUserRef]);
  // @ts-ignore
  const renderBackdrop = useCallback(
      (props) => {
        return <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />;
      },
      []
  );
  // hành động cho user hiện tại thoát khỏi project
  const handleOutProject = useCallback(async () => {
    setIsLoading(true)
    setIsShowDialogLeave(false)
    await dispatch(actionOutProjecet(projectId))
    setIsLoading(false)

  }, []);
  const handleOpenEditState=useCallback(()=>{
    if(data?.isAdminProject){
      SetIsChooseState(true)
    }else{
      return ;
    }

  },[data])
  return (
      <View style={{height:"100%"}}>
        <SafeAreaView style={{position:"relative",height:StatusBar.currentHeight}}>
          <StatusBar
            translucent
            backgroundColor={'transparent'}
          />
        </SafeAreaView>
        <View style={{backgroundColor:'#f5f5f5', paddingLeft:10, paddingVertical:5,justifyContent:'center'}}>
          <TouchableOpacity style={{position:"absolute",alignSelf:'flex-start'}} onPress={()=>{navigation.goBack()}}>
            <IconBack/>
          </TouchableOpacity>
            <Text numberOfLines={1} style={{fontSize:17, color:"black",fontFamily:"Roboto-Bold",alignSelf:'center'}}>{"Cấu hình dự án"}</Text>
        </View>
        <GestureHandlerRootView style={{flex:1}}>
        <ScrollView style={{backgroundColor:"white"}} >
          <View style={{paddingHorizontal:10, backgroundColor:"white",marginBottom:"40%",}}>
            <View style={{flexDirection:'row',alignItems:'center',alignSelf:'center',marginVertical:20}}>
              <TextInput
                  value={title}
                  onChangeText={setTitle}
                  onFocus={()=>{setisShowIconEdit(false)}}
                  onBlur={()=>setisShowIconEdit(true)}
                  placeholder={"Nhập tên dự án"}
                  editable={data?.isAdminProject?true:false}
                  onSubmitEditing={()=>handleEditProject(title,0)}
                  placeholderTextColor={"#888888"}
                  style={{ height: 60,marginLeft:10, textAlignVertical:"center",alignSelf:'center', fontSize:20, fontFamily: "Roboto-Bold" }}
              />
              {isShowIconEdit? <IconEdit height={15} width={15}/>:null}
            </View>
            <View style={{flexDirection:"row",marginTop:10,justifyContent:"space-between"}}>
              <Text style={{
                fontSize: 15,
                color: "black",
                fontFamily: "OpenSans-Regular",
              }}>{"Ngày bắt đầu:"}</Text>
              <TouchableOpacity onPress={()=>{
                if(data?.isAdminProject){
                  SetIsShowStartDay(true)
                }}} style={{padding:5, borderRadius:6, backgroundColor:data?.isAdminProject?"#f5f5f5":'transparent',flexDirection:'row',alignItems:'center'}}>
                <Text style={{
                  fontSize: 15,
                  color: "black",
                  fontFamily: "OpenSans-Regular",
                }}>{startDay} </Text>
                {data?.isAdminProject?<IconArrowDown height={10} width={10}/>:null}
              </TouchableOpacity>
            </View>
            <View style={{flexDirection:"row",marginTop:10,justifyContent:"space-between"}}>
              <Text style={{
                fontSize: 15,
                color: "black",
                fontFamily: "OpenSans-Regular",
              }}>{"Ngày kết thúc:"}</Text>
              <TouchableOpacity onPress={()=>{
                if(data?.isAdminProject){
                  SetIsShowEndDay(true)
                }}}  style={{padding:5, borderRadius:6, backgroundColor:data?.isAdminProject?"#f5f5f5":'transparent',flexDirection:'row',alignItems:'center'}}>
                <Text style={{
                  fontSize: 15,
                  color: "black",
                  fontFamily: "OpenSans-Regular",
                }}>{endDay} </Text>
                {data?.isAdminProject?<IconArrowDown height={10} width={10}/>:null}
              </TouchableOpacity>
            </View>

            <View style={{flexDirection:"row",marginTop:10,justifyContent:"space-between"}}>
              <Text style={{
                fontSize: 15,
                color: "black",
                fontFamily: "OpenSans-Regular",
              }}>{"Trạng thái:"} </Text>
              <TouchableOpacity onPress={handleOpenEditState} style={{padding:6, borderRadius:6, backgroundColor:getBackgroundStateProject(stateProject), flexDirection:"row", alignItems:'center'}}>
                <Text style={{
                  fontSize: 15,
                  color: getColorStateProject(stateProject),
                  fontFamily: "OpenSans-Regular",
                }}>{getStateProject(stateProject)} </Text>
                <IconArrowDown height={10} width={10}/>
              </TouchableOpacity>
            </View>
            {/*Là quản trị viên hay thành vien mới có quyền hiển thị lựa chọn này*/}
            {(data?.isAdminProject || data?.isMemberProject) ? <OptionComponent isAdmin={data?.isAdminProject} isMember={data?.isMemberProject} onShowDialogLeave={onShowDialogLeave} onShowDialogLeaveProject={onShowDialogLeaveProject} />:null}
            <ListAdminProject listAdmin={data?.dataMemberAdmin} handleItem={onShowModalOptionForAdmin} />
            <ListMemberProject listMember={data?.dataMember} handleItem={onShowModalOptionForAdmin} openEditUser={handelOpenEditUser} />
          </View>
        </ScrollView>
          <BottomEditUser handelCloseEditUser={handelCloseEditUser} projectId={projectId} bottomSheetRef={bottomEditUserRef} renderBackdrop={renderBackdrop} snapPoints={snapPoints} dataUserChoose={data?.dataMember}/>
        </GestureHandlerRootView>
        <DialogConfirmComponent visible={isShowDialogLeave} content={"Ban có chắc chắn muốn rời khỏi dự án?"} onClose={onCloseDialogLeave} onConfirm={handleOutProject} />
        <DialogConfirmComponent visible={isShowDialogDeleteProject} content={"Bạn có chắc chắn muốn xóa dự án"} onClose={onCloseDialogDeleteProject} onConfirm />
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
        <ModalOptionForAdmin isVisible={isShowModalOptionForAdmin} onClose={onCloseModalOptionForAdmin} typeOption={typeOptionForAdmin} onEditRoleProject={onEditRoleProject}/>
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
          <TouchableOpacity onPress={()=>handleEditStateProject(0,3)} style={{marginTop:5,paddingLeft:15,paddingVertical:6,backgroundColor:stateProject==0?"#EEEEEE":null}}>
            <Text style={{
              fontSize: 15,
              color: getColorStateProject(0),
              fontFamily: "OpenSans-Regular",
            }}>{getStateProject(0)} </Text>
          </TouchableOpacity>
          <TouchableOpacity  onPress={()=>handleEditStateProject(1,3)} style={{marginTop:5,paddingLeft:15,paddingVertical:6,backgroundColor:stateProject==1?"#EEEEEE":null}}>
            <Text style={{
              fontSize: 15,
              color: getColorStateProject(1),
              fontFamily: "OpenSans-Regular",
            }}>{getStateProject(1)} </Text>
          </TouchableOpacity>
          <TouchableOpacity  onPress={()=>handleEditStateProject(2,3)} style={{marginTop:5,paddingLeft:15,paddingVertical:6,backgroundColor:stateProject==2?"#EEEEEE":null}}>
            <Text style={{
              fontSize: 15,
              color: getColorStateProject(2),
              fontFamily: "OpenSans-Regular",
            }}>{getStateProject(2)} </Text>
          </TouchableOpacity>
          <TouchableOpacity  onPress={()=>handleEditStateProject(3,3)} style={{marginTop:5,paddingLeft:15,paddingVertical:6,backgroundColor:stateProject==3?"#EEEEEE":null}}>
            <Text style={{
              fontSize: 15,
              color: getColorStateProject(3),
              fontFamily: "OpenSans-Regular",
            }}>{getStateProject(3)} </Text>
          </TouchableOpacity>
        </View>
      </Modal>
        {isLoading?
            <View style={{top:'30%',position:"absolute",backgroundColor:'rgba(0,0,0,0.1)',alignItems:'center',alignSelf:'center',borderRadius:10}}>
              <LottieView style={{ height:100,width:100}} source={require('../../assets/animation/circlesRotate.json')} autoPlay loop />
            </View>:null}
      </View>
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
