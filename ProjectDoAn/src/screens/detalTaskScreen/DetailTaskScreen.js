/**
 * Màn hình chi tiết công việc
 */

import React, { memo, useEffect, useMemo, useState } from "react";
import HTMLView from 'react-native-htmlview';
import RenderHtml from 'react-native-render-html';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ActivityIndicator,
  ImageBackground,
  Dimensions,
  Image,
  SafeAreaView,
  FlatList,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  RefreshControl, Platform,
} from "react-native";
import {
  actionAddComment,
  actionAddDataFake,
  actionChangeTitleTask,
  actionLogout,
} from "../../redux-store/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import HeaderComponent from "../../components/header/HeaderComponent";
import { getColorBackgroundPriority, getColorPriority, getValuePriority } from "../../utils/GetPriority";
import ListCommentComponet from "../../components/listCommentComponent/ListCommentComponet";
import FastImage from "react-native-fast-image";
import IconCalendar from "../../assets/icons/IconCalendar";
import SendCommentComponent from "../../components/sendComentComponet/SendCommentComponent";
import { ListFileAttachComponent } from "../../components/listFileAttachComponent/ListFileAttachComponent";
import FlashMessage, { showMessage } from "react-native-flash-message"
import ModalComponent from "../../components/changeConentComponent/ModalChangeContent";
import ModalChaneConent from "../../components/changeConentComponent/ModalChangeContent";
import IconEdit from "../../assets/icons/IconEdit";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import LoadingComponent from "../../components/loadingComponent/LoadingComponent";
import { actionGetDetailTask } from "../../redux-store/actions/task";
import { useRoute } from "@react-navigation/native";
import { baseUrlAvatarUser } from "../../api/ConstBaseUrl";
import { ListReportTask } from "./taskReport/ListReportTask";
import { useWindowDimensions } from 'react-native';
import WebView from "react-native-webview";



export const DetailTaskScreen = React.memo(({navigation,route})=>{

  const { taskId } = route?.params||"T001";

  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);
  // láy data detail task từ  reducer có dược
  const dataDetailTask = useSelector(state => state.task.detailTask);
  const isGetDetailTask = useSelector(state => state.task.isGetDetailTask);
  const { width } = useWindowDimensions();

  // const listComment = useSelector(state => state.auth.listComment);
  const [redMoreContent, setRedMoreContent] = useState(false); // bến xác định xem có đọc thêm nội dung khi nó quá dài hya không
  // Lấy thông tin kích thước của màn hình
  const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
  const [isShowChangeConent, setIsShowChangeConent] = useState(false); // hiển thị dialog chỉnh sửa thông tin
  var toan =1 ;


  useEffect( () => {

     dispatch(actionGetDetailTask(taskId))

  },[taskId])
  const onRefresh = () => {
    // Đặt refreshing thành true để thể hiện quá trình load lại
    setRefreshing(true);
    dispatch(actionGetDetailTask(taskId))
    // Gọi hàm hoặc thực hiện các tác vụ cần thiết khi load lại
    // ...

    // Sau khi hoàn thành, đặt refreshing về false để kết thúc quá trình load lại
    setRefreshing(false);
  };
  async function addDataFake() {
    await dispatch(actionAddDataFake())
  }
   const changTitleTask=async (newTitle) => {
     showMessage({
       message: "Chỉnh sửa tiêu đề thành công",
       type: "success",
       duration: 1000,
       icon: { icon: "success", position: 'left' }
     });
     await dispatch(actionChangeTitleTask(newTitle))
     setIsShowChangeConent(false)
   }
  return (
    <View style={{height:"100%" ,backgroundColor:"#EEEEEE"}}>
      <HeaderComponent title={"Chi tiết công việc"} navigation={navigation} back/>
     <SafeAreaView>
      <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset={50}
      >
      <ScrollView
          automaticallyAdjustKeyboardInsets={true}
          keyboardShouldPersistTaps={'always'}
        contentContainerStyle={{paddingHorizontal:15,paddingBottom:200}}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        showsVerticalScrollIndicator={false}>
        {isGetDetailTask?<LoadingComponent title={"Đang load chi tiết công việc"}/>:
        <View>
        <TouchableOpacity onPress={()=>{setIsShowChangeConent(true)}} style={{flexDirection:"row", justifyContent:"center",marginTop:15}}>
          <Text style={{fontSize:24, color:"black",fontFamily:"OpenSans-SemiBold",fontWeight:'700',marginRight:10}}>{dataDetailTask?.title|| ''}</Text>
          <IconEdit/>
        </TouchableOpacity>


          <TouchableOpacity style={{padding:8, borderRadius:16, backgroundColor:getColorBackgroundPriority(dataDetailTask?.priority|| 0),width:  screenWidth * 0.3 ,alignItems:"center",marginTop:10}}>
            <Text style={{fontSize:15, color:getColorPriority(dataDetailTask?.priority|| 0),fontFamily:"OpenSans-Regular"}}>{getValuePriority(dataDetailTask?.priority||0)}</Text>
          </TouchableOpacity>

          <View style={{flexDirection:"row", justifyContent:"space-between",marginTop:10}}>
            <View style={{flexDirection:"column", justifyContent:"flex-start"}}>
              <TouchableOpacity onPress={()=>{
                showMessage({
                  message: "Simple message",
                  type: "info",
                })
              }} style={{flexDirection:"row", justifyContent:"center"}}>
                <Text style={{fontSize:15, color:"#999999",fontFamily:"OpenSans-Regular",marginRight:5}}>{"Ngày bắt đầu"}</Text>
                <IconEdit/>
              </TouchableOpacity>
              <View style={{flexDirection:"row",alignItems:"center",marginTop:10}}>
                <IconCalendar/>
                <Text style={{fontSize:15, color:"black",fontFamily:"OpenSans-Regular",marginLeft:10}}>{dataDetailTask?.startDay||''}</Text>
              </View>
            </View>

            <View style={{flexDirection:"column", justifyContent:"flex-start"}}>
              <TouchableOpacity style={{flexDirection:"row", justifyContent:"center"}}>
                <Text style={{fontSize:15, color:"#999999",fontFamily:"OpenSans-Regular",marginRight:5}}>{"Ngày kết thúc"}</Text>
                <IconEdit/>
              </TouchableOpacity>
              <View style={{flexDirection:"row",alignItems:"center",marginTop:10}}>
                <IconCalendar/>
                <Text style={{fontSize:15, color:"black",fontFamily:"OpenSans-Regular",marginLeft:10}}>{dataDetailTask?.endDay||''}</Text>
              </View>
            </View>
          </View>



          <View style={{flexDirection:"row", justifyContent:"space-around",marginTop:10,flex:1}}>

            <View style={{flexDirection:"column", justifyContent:"flex-start",flex:0.5}}>
              <TouchableOpacity style={{flexDirection:"row", justifyContent:"center"}}>
              <Text style={{fontSize:15, color:"#3366FF",fontFamily:"OpenSans-Regular"}}>{"Người giao việc:"}</Text>
                <IconEdit/>
              </TouchableOpacity>
              <View style={{flexDirection:"row",alignItems:"center",marginTop:10}}>
                <FastImage
                  style={{ width: 30, height: 30,borderRadius: 30/2 ,overflow: "hidden", borderWidth: 1,borderColor:"#99CCFF"}}
                  source={{
                    uri: (baseUrlAvatarUser+dataDetailTask?.assignAvatar)||''
                  }}
                  resizeMode={FastImage.resizeMode.stretch}

                />
                <Text style={{flexWrap:"wrap",fontSize:15, color:"black",fontFamily:"OpenSans-Regular",marginLeft:5}}>{dataDetailTask?.assignFullName||''}</Text>
              </View>
            </View>

            <View style={{flexDirection:"column", justifyContent:"flex-start",flex:0.5}}>

              <TouchableOpacity style={{flexDirection:"row", justifyContent:"center"}}>
                <Text style={{fontSize:15, color:"#00FF00",fontFamily:"OpenSans-Regular"}}>{"Người xử lý:"}</Text>
                <IconEdit/>
              </TouchableOpacity>

              <View style={{flexDirection:"row",alignItems:"center",marginTop:10}}>
                <FastImage
                  style={{ width: 30, height: 30,borderRadius: 30/2 ,overflow: "hidden", borderWidth: 1,borderColor:"#99CCFF"}}
                  source={{
                    uri: (baseUrlAvatarUser+dataDetailTask?.targetAvatar)||''
                  }}
                  resizeMode={FastImage.resizeMode.stretch}

                />
                <Text style={{flexWrap:"wrap",fontSize:15, color:"black",fontFamily:"OpenSans-Regular",marginLeft:5}}>{dataDetailTask?.targetFullName||""}</Text>
              </View>

            </View>
          </View>

          <ListReportTask assignUser={dataDetailTask.assignUser} targetUser={dataDetailTask.targetUser} currenUser={2}/>


          <TouchableOpacity style={{flexDirection:"row",marginTop:15,alignItems:"center",justifyContent:"space-between"}}>
            <Text style={{fontSize:18, color:"black",fontFamily:"OpenSans-SemiBold"}} numberOfLines={10}>{"Độ hoàn thiện"}</Text>
            <IconEdit/>
          </TouchableOpacity>

          <View style={{flexDirection:"row",marginTop:0,alignSelf:"center",justifyContent:"center"}}>
            <View style={{marginTop:20,backgroundColor:"#CCCCCC",height:10, borderRadius:50,width:screenWidth * 0.8}}>
              <View style={{flex:1,backgroundColor:"#4577ef",borderRadius:50,width:(dataDetailTask?.progress||0)+"%"}}></View>
            </View>
            <Text style={{fontSize:15, color:"#999999",fontFamily:"OpenSans-Regular",marginTop:9,marginLeft:10,alignSelf:"center"}} numberOfLines={2}>{(dataDetailTask?.progress||0)+"%"}</Text>
          </View>
          <TouchableOpacity style={{flexDirection:"row",marginTop:15,alignItems:"center",justifyContent:"space-between"}}>
            <Text style={{fontSize:18, color:"black",fontFamily:"OpenSans-SemiBold"}} numberOfLines={10}>{"Nội dung công việc"}</Text>
            <IconEdit/>
          </TouchableOpacity>
          <View style={{marginTop:10,backgroundColor:"#DDDDDD",padding:10,borderRadius:15}}>
            {/*<HTMLView*/}
            {/*  value={dataDetailTask?.content||''}*/}
            {/*/>*/}
            <RenderHtml
              contentWidth={width}
              source={{html:dataDetailTask?.content}}
            />
            {/*<WebView*/}
            {/*  originWhitelist={['*']}*/}
            {/*  source={{ html: dataDetailTask?.content }}*/}
            {/*/>*/}
        </View>
          <ListFileAttachComponent taskId={taskId}/>
          <ListCommentComponet navigation ={navigation} taskId={taskId}/>
        </View>}


      </ScrollView>
      </KeyboardAvoidingView>

     </SafeAreaView>
      <KeyboardAvoidingView style={{position: 'absolute', left: 0, right: 0, bottom: 0}}>
        <View style={styles.inputContainer}>
          <SendCommentComponent taskId={taskId}/>
        </View>

      </KeyboardAvoidingView>
        <ModalChaneConent visible={isShowChangeConent} onClose = {()=>{setIsShowChangeConent(false)}} onEdit={changTitleTask}/>
    </View>
  );
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


