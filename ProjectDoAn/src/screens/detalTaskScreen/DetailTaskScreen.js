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
  TouchableWithoutFeedback,
  ImageBackground, Dimensions, Image, SafeAreaView, FlatList, TextInput, ScrollView, KeyboardAvoidingView,
} from "react-native";
import { actionAddComment, actionLogout } from "../../redux-store/actions/auth";
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
  // const listComment = useSelector(state => state.auth.listComment);
  const [redMoreContent, setRedMoreContent] = useState(false); // bến xác định xem có đọc thêm nội dung khi nó quá dài hya không
  const [edtComment, setEdtComment] = useState(""); // nội dung bình luận của bạn
  // Lấy thông tin kích thước của màn hình
  const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
  const [isShowChangeConent, setIsShowChangeConent] = useState(true); // hiển thị dialog chỉnh sửa thông tin
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
  const dataDetailTask = useMemo(()=>{
    return{
      "taskId":1,
      "status":1,
      "state":1,
      "assignUser":1,
      "targetUser":1,
      "priority":2,
      "progress":30,
      "title":"Nội dung của tiêu đè nhiệm vụ",
      "content":"Theo đó, loạt biện pháp được đưa ra ngày 23/2 sẽ nhắm vào những cá nhân có liên quan đến việc bắt Navalny tại Nga cũng như lĩnh vực tài chính, cơ sở công nghiệp quốc phòng, mạng lưới mua sắm Nga và những thực thể trốn tránh lệnh trừng phạt trên nhiều châu lục.\n" +
        "\n" +
        "Các biện pháp trừng phạt mới nhất sẽ đặc biệt nhắm vào hệ thống thẻ tín dụng Mir, do Nga thiết lập để tránh phụ thuộc vào các mạng lưới thanh toán có trụ sở tại Mỹ.\n" +
        "\n" +
        "Bộ Tài chính cũng cho biết họ đang nhắm tới các quỹ đầu tư và ngân hàng khu vực để tác động tới \"cơ sở hạ tầng tài chính cốt lõi của Nga\".\n" +
        "\n" +
        "\"Chúng sẽ đảm bảo ông Putin phải trả giá thậm chí còn đắt hơn nữa\", Tổng thống Mỹ nhấn mạnh.",  // nội dung của nhiệm vụ
      "startDay":"20/2/2024",  // ngày baet đầu
      "endDay":"22/23/2024",    // ngày kết thúc
      "updatedDate":"323333",     // ngày cập nhâp
      "createdDate":"10/08/2001" , // ngày tạo
      "assignFullName":"lê trọng nam",  // tên của người giao
      "assignAvatar":'https://image.baophapluat.vn/1200x630/Uploaded/2024/hfobhvwbucqaow/2022_10_29/1-a-hau-chinh-thuc-tu-bo-danh-hieu-a-hau-5-miss-grand-international-2022-1666949899-1-586.jpg',    // ảnh của người giao
      "targetFullName":"Phạm thị thanh hà",  // tên của người xử lý chính
      "targetAvatar":'https://cafebiz.cafebizcdn.vn/162123310254002176/2023/10/25/395077889-7098397910172002-7185806433740806974-n-4208-1698218520400-169821852049895214161.jpg',    // ảnh của người xử lý chính
      "fileAttach":[
        {
          "fileId":1 ,
          "fileName":"báo cáo tỉnh ủy thangsdjbvsjvdbv.xls",
          "filePath":"djksbjbf",
          "extension":"xls",
        },
        {
          "fileId":2 ,
          "fileName":"file dánh giá sơ bộ hệ thống lấy tín nhiệm .doc",
          "filePath":"djksbjbf",
          "extension":"doc",
        },
        {
          "fileId":3 ,
          "fileName":"ảnh đại diện.jpg",
          "filePath":"djksbjbf",
          "extension":"jpg",
        },
        {
          "fileId":4 ,
          "fileName":"báo cáo .pdf",
          "filePath":"djksbjbf",
          "extension":"pdf",
        }
      ],
      "commentTask":[
        {
          "commentId":1 ,
          "userId":1,
          "avatarUser":"https://giaydankinhgiahuy.com/images/products/2022/12/01/tranh-dan-tuong-cho-be-tinker-bell-1-560.jpg",
          "fullName":"Vũ đình tuán anh",
          "content":"em xin phsdvvép có ý kiến Ạ",
          "createdDate":"10/1/2023"
        },
        {
          "commentId":2 ,
          "userId":1,
          "avatarUser":"https://image.spreadshirtmedia.com/image-server/v1/products/T1459A842PA3861PT28D1041542718W10000H10000/views/1,width=550,height=550,appearanceId=842,backgroundColor=F2F2F2/cute-duck-with-knife-funny-duck-gift-sticker.jpg",
          "fullName":"Vũ đình tuán",
          "content":"em xin pdsfvdhép có ý kiến Ạ",
          "createdDate":"10/1/2023"
        },
        {
          "commentId":3 ,
          "userId":1,
          "avatarUser":"https://i-giaitri.vnecdn.net/2012/09/14/Nemo-1347533981.jpg",
          "fullName":"Phạm thị phương Anh",
          "content":"em xin phép crgevvvsmvewvnldkvnldkvnbdlkjvnlkjvnlkjvnlkvnó ý kiến Ạ",
          "createdDate":"10/1/2023"
        },
        {
          "commentId":4,
          "userId":1,
          "avatarUser":"data:image/jpeg;base64,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",
          "fullName":"Nguyễn thị thanh hiền",
          "content":"em xin phép có ý kiến Ạ",
          "createdDate":"10/1/2023"
        },

      ],
    }
  },[])
  return (
    <View>
      <FlashMessage position={"top"}  />
      <KeyboardAwareScrollView
        extraScrollHeight={100}
        style={{paddingHorizontal:15}}
        keyboardShouldPersistTaps="handled"
        keyboardVerticalOffset={100}>

          <View style={{marginTop:15}}>
            <Text style={{fontSize:24, color:"black",fontFamily:"OpenSans-SemiBold",fontWeight:'700'}}>{dataDetailTask.title}</Text>
          </View>

          <View style={{padding:8, borderRadius:16, backgroundColor:getColorBackgroundPriority(dataDetailTask.priority),width:  screenWidth * 0.25 ,alignItems:"center",marginTop:10}}>
            <Text style={{fontSize:15, color:getColorPriority(dataDetailTask.priority),fontFamily:"OpenSans-Regular"}}>{getValuePriority(dataDetailTask.priority)}</Text>
          </View>

          <View style={{flexDirection:"row", justifyContent:"space-between",marginTop:10}}>
            <View style={{flexDirection:"column", justifyContent:"flex-start"}}>
              <Text style={{fontSize:15, color:"#999999",fontFamily:"OpenSans-Regular"}}>{"Ngày bắt đầu"}</Text>
              <View style={{flexDirection:"row",alignItems:"center",marginTop:10}}>
                <IconCalendar/>
                <Text style={{fontSize:15, color:"black",fontFamily:"OpenSans-Regular",marginLeft:10}}>{dataDetailTask.startDay}</Text>
              </View>
            </View>

            <View style={{flexDirection:"column", justifyContent:"flex-start"}}>
              <TouchableOpacity style={{flexDirection:"row", justifyContent:"center"}}>
                <Text style={{fontSize:15, color:"#999999",fontFamily:"OpenSans-Regular",marginRight:5}}>{"Ngày kết thúc"}</Text>
                <IconEdit/>
              </TouchableOpacity>
              <View style={{flexDirection:"row",alignItems:"center",marginTop:10}}>
                <IconCalendar/>
                <Text style={{fontSize:15, color:"black",fontFamily:"OpenSans-Regular",marginLeft:10}}>{dataDetailTask.endDay}</Text>
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
                    uri: dataDetailTask.assignAvatar
                  }}
                  resizeMode={FastImage.resizeMode.stretch}

                />
                <Text style={{fontSize:15, color:"black",fontFamily:"OpenSans-Regular",marginLeft:5}}>{dataDetailTask.assignFullName}</Text>
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
                    uri: dataDetailTask.targetAvatar
                  }}
                  resizeMode={FastImage.resizeMode.stretch}

                />
                <Text style={{fontSize:15, color:"black",fontFamily:"OpenSans-Regular"}}>{dataDetailTask.targetFullName}</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity style={{flexDirection:"row",marginTop:15,alignItems:"center",justifyContent:"space-between"}}>
            <Text style={{fontSize:18, color:"black",fontFamily:"OpenSans-SemiBold"}} numberOfLines={10}>{"Độ hoàn thiện"}</Text>
            <IconEdit/>
          </TouchableOpacity>

          <View style={{flexDirection:"row",marginTop:0,alignSelf:"center",justifyContent:"center"}}>
            <View style={{marginTop:20,backgroundColor:"#CCCCCC",height:10, borderRadius:50,width:screenWidth * 0.8}}>
              <View style={{flex:1,backgroundColor:"#4577ef",borderRadius:50,width:dataDetailTask.progress+"%"}}></View>
            </View>
            <Text style={{fontSize:15, color:"#999999",fontFamily:"OpenSans-Regular",marginTop:9,marginLeft:10,alignSelf:"center"}} numberOfLines={2}>{dataDetailTask.progress+"%"}</Text>
          </View>
          <TouchableOpacity style={{flexDirection:"row",marginTop:15,alignItems:"center",justifyContent:"space-between"}}>
            <Text style={{fontSize:18, color:"black",fontFamily:"OpenSans-SemiBold"}} numberOfLines={10}>{"Nội dung công việc"}</Text>
            <IconEdit/>
          </TouchableOpacity>
          <View style={{marginTop:10}}>
          <Text style={{fontSize:16, color:"black",fontFamily:"OpenSans-Regular"}} numberOfLines={redMoreContent?null:6}>{dataDetailTask.content}</Text>
        </View>
          <TouchableOpacity style={{marginTop:2}} onPress={() =>{setRedMoreContent(!redMoreContent)}}>
            <Text style={{fontSize:13, color:"#33CCFF",fontFamily:"OpenSans-SemiBold"}} numberOfLines={10}>{redMoreContent?"Rút gọn..":"Đọc thêm..."}</Text>
         </TouchableOpacity>
          <ListFileAttachComponent data = {dataDetailTask.fileAttach}/>
          <ListCommentComponet/>
      </KeyboardAwareScrollView>
        <SendCommentComponent/>
        <ModalChaneConent visible={false} onClose = {()=>{setIsShowChangeConent(false)}}  />
    </View>
  );
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


