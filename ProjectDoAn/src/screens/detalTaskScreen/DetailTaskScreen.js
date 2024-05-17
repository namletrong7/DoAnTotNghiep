/**
 * Màn hình chi tiết công việc
 */

import React, {memo, useCallback, useEffect, useMemo, useState} from "react";
import Clipboard from '@react-native-clipboard/clipboard';
import RenderHtml from 'react-native-render-html';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    SafeAreaView,
    ScrollView,
    KeyboardAvoidingView,
    RefreshControl, StatusBar,
} from "react-native";
import { actionChangeTitleTask, } from "../../redux-store/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import Animated, { FadeIn, SlideInDown, SlideInRight, SlideOutLeft, SlideOutRight } from "react-native-reanimated";
import {
    getBackgroundStateTask,
    getColorBackgroundPriority,
    getColorPriority, getColorTextStateTask, getState,
    getValuePriority,
} from "../../utils/GetPriority";
import ListCommentComponet from "../../components/listCommentComponent/ListCommentComponet";
import FastImage from "react-native-fast-image";
import SendCommentComponent from "../../components/sendComentComponet/SendCommentComponent";
import { ListFileAttachComponent } from "../../components/listFileAttachComponent/ListFileAttachComponent";
import IconEdit from "../../assets/icons/IconEdit";
import LoadingComponent from "../../components/loadingComponent/LoadingComponent";
import { actionChangeDayTask, actionGetDetailTask } from "../../redux-store/actions/task";

import { baseUrlAvatarUser } from "../../api/ConstBaseUrl";
import { ListReportTask } from "./taskReport/ListReportTask";

import {GestureHandlerRootView} from "react-native-gesture-handler";
import {useRef} from "react/index";
import {BottomChangePriority} from "./bottomChangePriority/BottomChangePriority";
import DialogReport from "./dialogReport/DialogReport";
import DialogProgress from "./DialogProgress/DialogProgress";
import {RenderActionTask} from "./ActionTab/RenderActionTab";
import IconArrowDown from "../../assets/icons/IconArrowDown";
import IconBack from "../../assets/icons/IconBack";
import IconMenu from "../../assets/icons/IconMenu";
import {RenderActionComment} from "./ActionComment/RenderActionComment";
import { showMessage } from "react-native-flash-message";
import DialogEditComment from "./DialogEditComment/DialogEditComment";;
import IconAttachFile from "../../assets/icons/IconAttachFile";
import { BottomEditUserTask } from "./BottomEditUserTask/BottomEditUserTask";
import DialogChangContent from "../../components/changeConentComponent/ModalChangeContent";
import DialogConfirmComponet from "../../components/DialogConfirmComponent/DialogConfirmComponet";
import { ProgressTaskComponent } from "../../components/ProgressTaskComponent/ProgressTaskComponent";
import IconContent from "../../assets/icons/ItemContent";
import IconProhress from "../../assets/icons/IconProhress";
import IconBookMark from "../../assets/icons/IconBookMark";
import IconUnBookMark from "../../assets/icons/IconUnBookMark";
import LinearGradient from "react-native-linear-gradient";
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from "moment/moment";
import ListCheckList from "./CheckList/ListCheckList";

import LottieView from "lottie-react-native";
import DialogAnswerReport from "./dialogReport/DialogAnswerReport";
import DialogAcceptAnswerReport from "./dialogReport/DialogAcceptAnswerReport";
import IconReport from "../../assets/icons/IconReport";
import IconArrowUp from "../../assets/icons/IconArrowLeft";
import IconContent2 from "../../assets/icons/IconContent";






export const DetailTaskScreen = React.memo(({navigation,route})=>{

  const { taskId } = route?.params || "T001";
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const [isBookMark, setisBookMark] = useState(false);
  // láy data detail task từ  reducer có dược
  const dataDetailTask = useSelector(state => state.task.detailTask);
  const isGetDetailTask = useSelector(state => state.task.isGetDetailTask);
  const currentUser = useSelector(state => state.auth.dataCurrentUser.userId);
  const [redMoreContent, setRedMoreContent] = useState(false); // bến xác định xem có đọc thêm nội dung khi nó quá dài hya không
  // Lấy thông tin kích thước của màn hình
  const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
  const [isShowChangeConent, setIsShowChangeConent] = useState(false); // hiển thị dialog chỉnh sửa thông tin
  const refChangePriority = useRef(null); // ref cho bottm sheet chinh sau priority

  const [isVisibleReport, setIsVisibleReport] = useState(false);
  const [isVisibleRequestReport, setisVisibleRequestReport] = useState(false);
  const [isVisibleAnswerReport, setIsVisibleAnswerReport] = useState(false);
  const [isVisibleAcceptAnswerReport, setIsVisibleAcceptAnswerReport] = useState(false);  // dialog cháp nhận oặc từ chối
  const [typeAcceptAnswer, setTypeAcceptAnswer] = useState(null);
  const [isVisibleProgress, setIsVisibleProgress] = useState(false);
  const [isVisibleEditComment, setIsVisibleEditComment] = useState(false);
  const [isVisibleDeleteTask, setIsVisibleDeleteTask] = useState(false);
  const [commentSelected, setCommentSelected] = useState(null);  // comment duoc chon
  const [reportSelected, setReportSelected] = useState({});  // báo cáo duoc chon
  const refChangeActionTab = useRef(null);
  const refChangeActionComment = useRef(null);
  const refChangeEditUser = useRef(null); // hiern thị bottom sheet thya dỏi user
  const [typeEditUser, setTypeEditUser] = useState(0); // type cho bottom chỉnh sửa user giao hay xử lý
  const [isVisibleChangeDay, setIsVisibleChangeDay] = useState(false);  // hiển thị dialog chỉnh sửa ngay bat đâu v ngày kết thúc của task
  const [typeChangeDay, setTypeChangeDay] = useState(0);  // xác định xem thay đổi ngày bát đầu hay ngày kết thúc của công việc

  const handelOpenChangePriority = useCallback(() => {// hàm mở ra bottom sheet thay doi proority
    refChangePriority.current?.present();
  },[]);

  useEffect( () => {

     dispatch(actionGetDetailTask(taskId))

  },[taskId])
   const onRefresh = useCallback(() => {
    // Đặt refreshing thành true để thể hiện quá trình load lại
    setRefreshing(true);
    dispatch(actionGetDetailTask(taskId))
    // Gọi hàm hoặc thực hiện các tác vụ cần thiết khi load lại
    // ...

    // Sau khi hoàn thành, đặt refreshing về false để kết thúc quá trình load lại
    setRefreshing(false);
  },[taskId,setRefreshing]);

    const closeDialogReport=useCallback(()=>{
      setIsVisibleReport(false)
    },[])
  const closeDialogRequestReport=useCallback(()=>{
    setisVisibleRequestReport(false)
  },[])
  const closeDialogProgress=useCallback(()=>{
    setIsVisibleProgress(false)
  },[])
  const closeDialogEditComment=useCallback(()=>{
    setIsVisibleEditComment(false)
  },[])
  const closeDialogDeleteTask=useCallback(()=>{
    setIsVisibleDeleteTask(false)
  },[])
  const openDialogDeleteTask=useCallback(()=>{
    setIsVisibleDeleteTask(true)
  },[])
  const openDialogReport=useCallback(()=>{
        setIsVisibleReport(true)
  },[])
  const openDialogRequestReport=useCallback(()=>{
    setisVisibleRequestReport(true)
  },[])
    const openDialogProgress=useCallback(()=>{
        setIsVisibleProgress(true)
    },[])
  const openDialogEditComment=useCallback(()=>{
    setIsVisibleEditComment(true)
  },[])
  const closeAnserReport=useCallback(()=>{  // đóng trả lời yêu cầu báo cáo
    setIsVisibleAnswerReport(false)
  },[])
  const openAnswerReport=useCallback((item)=>{   // mở trả lời yêu cầu báo cáo
    setReportSelected(item)
    setIsVisibleAnswerReport(true)
  },[])
  const closeAcceptAnswerReport=useCallback(()=>{  // đóng hỏi : từ choi hay chấp nhận báo cáo
    setIsVisibleAcceptAnswerReport(false)
  },[])
  const openAcceptAnswerReport=useCallback((item,type)=>{   // mở trả lời yêu cầu báo cáo
    setReportSelected(item)
    setTypeAcceptAnswer(type)
    setIsVisibleAcceptAnswerReport(true)
  },[])
    const openActionTab=useCallback(()=>{
        if(currentUser==dataDetailTask.assignUser || currentUser==dataDetailTask.targetUser){
            refChangeActionTab.current?.present();
        }
       else{
            showMessage({
                message: "Bạn không đủ quyền hạn với công việc này",
                type: "warning",
                duration: 2000,
                icon: { icon: "warning", position: 'left' }
            });
           return ;
        }
    },[currentUser,dataDetailTask])
    const openActionComment=useCallback((item)=>{
        setCommentSelected(item)
        refChangeActionComment.current?.present();
    },[])
    const openBottomEditUser=useCallback((type)=>{
      setTypeEditUser(type)
      refChangeEditUser.current?.present();
      refChangeActionTab.current?.dismiss()
    },[])
  const openChangeDay=useCallback((type)=>{
    setTypeChangeDay(type)
   setIsVisibleChangeDay(true)
  },[])
  const closeChangeDay=useCallback(()=>{
    setIsVisibleChangeDay(false)
  },[])
  const handleChangeDayTask=useCallback((date)=>{
   dispatch(actionChangeDayTask(taskId,typeChangeDay,moment(date).format('YYYY-MM-DD')))
    setIsVisibleChangeDay(false)
  },[taskId, typeChangeDay])
   const changTitleTask=useCallback(async (newTitle) => {
     showMessage({
       message: "Chỉnh sửa tiêu đề thành công",
       type: "success",
       duration: 1000,
       icon: { icon: "success", position: 'left' }
     });
     await dispatch(actionChangeTitleTask(newTitle))
     setIsShowChangeConent(false)
   },[actionChangeTitleTask])

    const copyToClipboard =useCallback(()=>{
        Clipboard.setString(commentSelected?.content);
        refChangeActionComment.current?.dismiss()
    },[commentSelected])

  return (
    <Animated.View
      entering={SlideInRight.duration(1000)} exiting={SlideOutLeft.duration(500)}
      style={{ flex: 1}}
    >
    <LinearGradient  colors={['#e3efdd', '#faeeca', '#deedda']} style={{height:"100%",backgroundColor:"#EEEEEE"}}>
        <SafeAreaView style={{height:StatusBar.currentHeight}}>
            <StatusBar
                translucent
                backgroundColor={'black'}
            />
        </SafeAreaView>
        <View style={{flexDirection:"row", paddingHorizontal:4,height:50, justifyContent:"space-between",alignItems:"center",display:'flex'}}>
            <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                <IconBack/>
            </TouchableOpacity>
            <Text numberOfLines={1} style={{fontSize:17, color:"black",fontFamily:"Roboto-Bold",marginLeft:5}}>{"Chi tiết công việc"}</Text>
            <View  style={{ flexDirection:"row"}}>
              <TouchableOpacity  onPress={()=>{setisBookMark(!isBookMark)}}>
                {isBookMark?<IconBookMark width={20} height={20}/>:<IconUnBookMark width={20} height={20}/>}
              </TouchableOpacity>
              <TouchableOpacity style={{marginHorizontal:13}} onPress={()=>{navigation.navigate("AddFileAttachScreen",{taskId: taskId})}}>
                <IconAttachFile width={20} height={20}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={openActionTab} >
                <IconMenu width={20} height={20}/>
              </TouchableOpacity>
            </View>
        </View>
        <GestureHandlerRootView  style={{ borderRadius:16,flex:1}}>
          <ScrollView
            contentContainerStyle={{paddingHorizontal:5,paddingBottom:200}}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
              />
            }
            showsVerticalScrollIndicator={false}>
            {isGetDetailTask?<LottieView style={{ height:100,marginTop:10}} source={require('../../assets/animation/circlesRotate.json')} autoPlay loop />
              :
            <View>
            <TouchableOpacity onPress={()=>{setIsShowChangeConent(true)}} style={{marginTop:15}}>
              <Text style={{fontSize:20, color:"black",fontFamily:"OpenSans-SemiBold",textAlign:"center"}}>{dataDetailTask?.title|| ''}</Text>
            </TouchableOpacity>
              <View style={{backgroundColor:'white', borderRadius:14,paddingHorizontal:5,marginTop:5,paddingBottom:10,paddingVertical:5}}>
                <TouchableOpacity style={{flexDirection:"row",justifyContent:"space-between"}}>
                  <View style={{flexDirection:"row",alignItems:"center"}}>
                    <IconContent2 width={22} height={22}/>
                    <Text style={{fontSize:18, color:"#007AFE",fontFamily:"OpenSans-SemiBold",marginLeft:"5%"}} numberOfLines={10}>{"Nội dung công việc"}</Text>
                  </View>
                   <IconArrowDown/>
                </TouchableOpacity>
             <View style={{flexDirection:"row",alignItems:'center',marginTop:15}}>
               <Text style={{fontSize:15, color:"black",fontFamily:"OpenSans-Regular",marginRight:5,width:'35%'}}>{"Độ ưu tiên:"}</Text>
               <TouchableOpacity onPress={()=>{handelOpenChangePriority()}} style={{padding:3,paddingHorizontal:4, borderRadius:7, backgroundColor:getColorBackgroundPriority(dataDetailTask?.priority|| 0) ,alignItems:"center",flexDirection:"row"}}>
                 <View style={{width:7, height:7, borderRadius:7/2, backgroundColor:getColorPriority(dataDetailTask?.priority|| 0)}}/>
                 <Text style={{fontSize:13,marginLeft:5, color:getColorPriority(dataDetailTask?.priority|| 0),fontFamily:"OpenSans-Regular"}}>{getValuePriority(dataDetailTask?.priority||0)}</Text>
                 <IconArrowDown width={10} height={10}/>
               </TouchableOpacity>
             </View>

                <View style={{flexDirection:"row",alignItems:'center',marginTop:10}}>
                  <Text style={{fontSize:15, color:"black",fontFamily:"OpenSans-Regular",marginRight:5,width:'35%'}}>{"Trạng thái:"}</Text>
                  <View style={{backgroundColor:getBackgroundStateTask(dataDetailTask?.state),padding:3,borderRadius:16,paddingHorizontal:4,flexDirection:"row",justifyContent:'center'}}>
                    <Text style={{
                      fontSize: 13,
                      color: getColorTextStateTask(dataDetailTask?.state),
                      fontFamily: "OpenSans-Regular",
                    }}>{getState(dataDetailTask?.state)}
                      <IconArrowDown width={10} height={10}/>
                    </Text>
                  </View>
                </View>



                <View style={{flexDirection:"row",marginTop:15}}>
                    <Text style={{fontSize:15, color:"black",fontFamily:"OpenSans-Regular",marginRight:5,width:'35%'}}>{"Ngày bắt đầu:"}</Text>
                    <Text style={{fontSize:15, color:"black",fontFamily:"OpenSans-Regular"}}>{dataDetailTask?.startDay||'chưa có thông tin'}</Text>
                </View>

                  <View style={{flexDirection:"row",marginTop:15}}>
                      <Text style={{fontSize:15, color:"black",fontFamily:"OpenSans-Regular",marginRight:5,width:'35%'}}>{"Ngày kết thúc"}</Text>
                    <Text style={{fontSize:15, color:"black",fontFamily:"OpenSans-Regular"}}>{dataDetailTask?.endDay||'chưa có thông tin'}</Text>
                  </View>

                <View style={{flexDirection:"row", justifyContent:"space-between",marginTop:15,flex:1}}>
                    <Text style={{fontSize:15, color:"black",fontFamily:"OpenSans-Regular",marginRight:5,width:'35%'}}>{"Người giao:"}</Text>
                        <FastImage
                            style={{ width: 30, height: 30,borderRadius: 30/2 ,overflow: "hidden"}}
                            source={{
                                uri: baseUrlAvatarUser+dataDetailTask?.assignAvatar
                            }}
                            resizeMode={FastImage.resizeMode.stretch}

                        />
                        <Text style={{flexWrap:"wrap",alignSelf:'center',fontSize:14, color:"black",fontFamily:"OpenSans-Regular",marginLeft:5,flex:1}}>{dataDetailTask?.assignFullName||'chưa có thông tin'}</Text>
                </View>
                <View style={{flexDirection:"row", justifyContent:"space-between",marginTop:15,flex:1}}>
                    <Text style={{fontSize:15, color:"black",fontFamily:"OpenSans-Regular",marginRight:5,width:'35%'}}>{"Người xử lý:"}</Text>
                        <FastImage
                            style={{ width: 30, height: 30,borderRadius: 30/2 ,overflow: "hidden"}}
                            source={{
                                uri: (baseUrlAvatarUser+dataDetailTask?.targetAvatar)||''
                            }}
                            resizeMode={FastImage.resizeMode.stretch}

                        />
                        <Text style={{flexWrap:"wrap",fontSize:14,alignSelf:'center', color:"black",fontFamily:"OpenSans-Regular",marginLeft:5,flex:1}}>{dataDetailTask?.targetFullName||'chưa có thông tin'}</Text>
                </View>

              <View style={{flexDirection:"row",marginTop:5,alignItems:'center'}}>
                <Text style={{fontSize:15, color:"black",fontFamily:"OpenSans-Regular",width:'38%'}}>{"Tiến độ xử lý:"}</Text>
                <ProgressTaskComponent progress={dataDetailTask?.progress} priority={dataDetailTask?.priority}/>
              </View>


              <View style={{flexDirection:"row",marginTop:15,alignItems:"center",flex:1,overflow:"hidden"}}>
                <Text style={{fontSize:15, color:"black",fontFamily:"OpenSans-Regular",width:'38%'}} numberOfLines={10}>{"Nội dung công việc:"}</Text>
            <RenderHtml
                  contentWidth={screenWidth}
                  source={{html:dataDetailTask?.content}}
                  baseStyle={{marginLeft:10,flexWrap:"wrap"}}
                  renderersProps={{
                    a: {
                      onPress(event, url, htmlAttribs, target) {
                              navigation.navigate("WebViewScreen",{url:url})
                      }

                      }
                  }}
                  tagsStyles={{
                    div:{
                      color:"black",
                      fontSize:15
                    },


                  }}
                />
              </View>
        </View>
            </View>}
            <ListReportTask assignUser={dataDetailTask?.assignUser} targetUser={dataDetailTask?.targetUser} currenUser={2} openAnserReport={openAnswerReport} openAcceptAnswerReport={openAcceptAnswerReport}/>
            <ListCheckList taskId={taskId}/>
            <ListFileAttachComponent taskId={taskId}/>
            <ListCommentComponet navigation ={navigation} taskId={taskId} openActionComment={openActionComment}  />

          </ScrollView>
          <DateTimePicker
            isVisible={isVisibleChangeDay}
            mode="date"
            onCancel={closeChangeDay}
            onConfirm={handleChangeDayTask}
          />
          <BottomEditUserTask bottomSheetRef ={refChangeEditUser} taskId={taskId} type={typeEditUser}  />
             <RenderActionComment dispatch={dispatch} commentSelected={commentSelected}   refChangeActionComment={refChangeActionComment}  copyToClipboard={copyToClipboard} openDialogEditComment={openDialogEditComment}  />
            <BottomChangePriority taskId={taskId}  bottomSheetRef={refChangePriority} priority={dataDetailTask?.priority||0}/>
            <RenderActionTask refChangeActionTab={refChangeActionTab} openBottomEditUser={openBottomEditUser}  openDialogReport={openDialogReport} openDialogRequestReport={openDialogRequestReport} openDialogProgress={openDialogProgress} onpenDialogDelete={openDialogDeleteTask}  assignUser={dataDetailTask.assignUser} targetUser={dataDetailTask.targetUser} openChangeDay={openChangeDay} />
        </GestureHandlerRootView>
       <DialogReport userId={currentUser} dispatch={dispatch} taskId={taskId} visible={isVisibleReport} type={1}  title={"Báo cáo tiến độ công việc"} onClose={closeDialogReport}/>
      <DialogReport userId={currentUser} dispatch={dispatch} taskId={taskId} visible={isVisibleRequestReport} type={0}  title={"Yêu cầu báo cáo tiến độ công việc"} onClose={closeDialogRequestReport}/>
      <DialogAnswerReport visible={isVisibleAnswerReport} onClose={closeAnserReport} taskId={taskId}   dispatch={dispatch} userId={currentUser} parentId={reportSelected?.reportId}/>
       <DialogAcceptAnswerReport type={typeAcceptAnswer} visible={isVisibleAcceptAnswerReport} onClose={closeAcceptAnswerReport}  dispatch={dispatch}  userId={currentUser} taskId={taskId} reportSelected={reportSelected}/>
      <DialogProgress  taskId={taskId} visible={isVisibleProgress} onClose={closeDialogProgress} />
      <DialogConfirmComponet visible={isVisibleDeleteTask} onClose={closeDialogDeleteTask} content={"Bạn có chắc chắn xóa công việc này không"}/>
      <DialogEditComment   visible={isVisibleEditComment} onClose={closeDialogEditComment} dispatch={dispatch} comment={commentSelected} />
      <KeyboardAvoidingView keyboardVerticalOffset={10} behavior='padding' style={{ left: 0, right: 0, bottom:0,position:"absolute",backgroundColor:"#EEEEEE"}}>
          <SendCommentComponent taskId={taskId}/>
      </KeyboardAvoidingView>
        <DialogChangContent taskId={taskId} visible={isShowChangeConent} onClose = {()=>{setIsShowChangeConent(false)}} onEdit={changTitleTask}/>
    </LinearGradient>
    </Animated.View>
  );
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


