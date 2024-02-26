/**
 * Màn hình chi tiết công việc
 */

import React, { memo, useEffect, useMemo, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,ActivityIndicator,
  ImageBackground, Dimensions, Image, SafeAreaView, FlatList, TextInput, ScrollView, KeyboardAvoidingView,
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



export const DetailTaskScreen = React.memo(({navigation})=>{

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const dataDetailTask = useSelector(state => state.auth.dataDetailTask);
  // const listComment = useSelector(state => state.auth.listComment);
  const [redMoreContent, setRedMoreContent] = useState(false); // bến xác định xem có đọc thêm nội dung khi nó quá dài hya không
  const [edtComment, setEdtComment] = useState(""); // nội dung bình luận của bạn
  // Lấy thông tin kích thước của màn hình
  const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
  const [isShowChangeConent, setIsShowChangeConent] = useState(false); // hiển thị dialog chỉnh sửa thông tin
  var toan =1 ;

    console.log("render lại màn hình detail task");

    const toastMessage= () =>{
    showMessage({
      message: "Bạn đã nhập đúng thông tin",
      type: "success",
      duration: 1000,
      icon: { icon: "warning", position: 'left' }
    });
  }
  useEffect(()=>{
    setIsLoading(true);

    // Thực hiện công việc cần thiết (ví dụ: gọi API, xử lý dữ liệu, ...)
    // Sau khi công việc hoàn thành, ẩn ActivityIndicator
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Giả sử công việc mất 2 giây
  },[])
  // ham thực hiện action thêm dataFake vào trong reducer
  async function addDataFake() {
    await dispatch(actionAddDataFake())
  }
   const changTitleTask=async (newTitle) => {
     await dispatch(actionChangeTitleTask(newTitle))
     setIsShowChangeConent(false)
   }
  return (
    <View>
      <FlashMessage position={"top"}  />
      <KeyboardAwareScrollView
        style={{paddingHorizontal:15}}
        keyboardShouldPersistTaps="handled">
        {isLoading?<ActivityIndicator size="large" color="#0000ff" />:
        <View>


        <TouchableOpacity onPress={()=>{setIsShowChangeConent(true)}} style={{flexDirection:"row", justifyContent:"center",marginTop:15}}>
          <Text style={{fontSize:24, color:"black",fontFamily:"OpenSans-SemiBold",fontWeight:'700',marginRight:10}}>{dataDetailTask?.title|| ''}</Text>
          <IconEdit/>
        </TouchableOpacity>


          <TouchableOpacity onPress={()=>{changTitleTask()}} style={{padding:8, borderRadius:16, backgroundColor:getColorBackgroundPriority(dataDetailTask?.priority|| 0),width:  screenWidth * 0.25 ,alignItems:"center",marginTop:10}}>
            <Text style={{fontSize:15, color:getColorPriority(dataDetailTask?.priority|| 0),fontFamily:"OpenSans-Regular"}}>{getValuePriority(dataDetailTask?.priority||0)}</Text>
          </TouchableOpacity>

          <View style={{flexDirection:"row", justifyContent:"space-between",marginTop:10}}>
            <View style={{flexDirection:"column", justifyContent:"flex-start"}}>
              <TouchableOpacity style={{flexDirection:"row", justifyContent:"center"}}>
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



          <View style={{flexDirection:"row", justifyContent:"space-between",marginTop:10,flex:1}}>

            <View style={{flexDirection:"column", justifyContent:"flex-start",flex:0.5}}>
              <TouchableOpacity style={{flexDirection:"row", justifyContent:"center"}}>
              <Text style={{fontSize:15, color:"#3366FF",fontFamily:"OpenSans-Regular"}}>{"Người giao việc:"}</Text>
                <IconEdit/>
              </TouchableOpacity>
              <View style={{flexDirection:"row",alignItems:"center",marginTop:10}}>
                <FastImage
                  style={{ width: 30, height: 30,borderRadius: 30/2 ,overflow: "hidden", borderWidth: 1,borderColor:"#99CCFF"}}
                  source={{
                    uri: dataDetailTask?.assignAvatar||''
                  }}
                  resizeMode={FastImage.resizeMode.stretch}

                />
                <Text style={{fontSize:15, color:"black",fontFamily:"OpenSans-Regular",marginLeft:5}}>{dataDetailTask?.assignFullName||''}</Text>
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
                    uri: dataDetailTask?.targetAvatar||''
                  }}
                  resizeMode={FastImage.resizeMode.stretch}

                />
                <Text style={{fontSize:15, color:"black",fontFamily:"OpenSans-Regular"}}>{dataDetailTask?.targetFullName||""}</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity style={{flexDirection:"row",marginTop:15,alignItems:"center",justifyContent:"space-between"}}>
            <Text style={{fontSize:18, color:"black",fontFamily:"OpenSans-SemiBold"}} numberOfLines={10}>{"Độ hoàn thiện"}</Text>
            <IconEdit/>
          </TouchableOpacity>

          <View style={{flexDirection:"row",marginTop:0,alignSelf:"center",justifyContent:"center"}}>
            <View style={{marginTop:20,backgroundColor:"#CCCCCC",height:10, borderRadius:50,width:screenWidth * 0.8}}>
              <View style={{flex:1,backgroundColor:"#4577ef",borderRadius:50,width:dataDetailTask?.progress||0+"%"}}></View>
            </View>
            <Text style={{fontSize:15, color:"#999999",fontFamily:"OpenSans-Regular",marginTop:9,marginLeft:10,alignSelf:"center"}} numberOfLines={2}>{dataDetailTask?.progress||0+"%"}</Text>
          </View>
          <TouchableOpacity style={{flexDirection:"row",marginTop:15,alignItems:"center",justifyContent:"space-between"}}>
            <Text style={{fontSize:18, color:"black",fontFamily:"OpenSans-SemiBold"}} numberOfLines={10}>{"Nội dung công việc"}</Text>
            <IconEdit/>
          </TouchableOpacity>
          <View style={{marginTop:10}}>
          <Text style={{fontSize:16, color:"black",fontFamily:"OpenSans-Regular"}} numberOfLines={redMoreContent?null:6}>{dataDetailTask?.content||''}</Text>
        </View>
          <TouchableOpacity style={{marginTop:2}} onPress={() =>{setRedMoreContent(!redMoreContent)}}>
            <Text style={{fontSize:13, color:"#33CCFF",fontFamily:"OpenSans-SemiBold"}} numberOfLines={10}>{redMoreContent?"Rút gọn..":"Đọc thêm..."}</Text>
         </TouchableOpacity>
          <ListFileAttachComponent/>
          <ListCommentComponet/>
        </View>}
      </KeyboardAwareScrollView>
      {isLoading?null:<SendCommentComponent/>}
        <ModalChaneConent visible={isShowChangeConent} onClose = {()=>{setIsShowChangeConent(false)}} onEdit={changTitleTask}/>
    </View>
  );
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


