import { BottomSheetModal, BottomSheetModalProvider, BottomSheetScrollView } from "@gorhom/bottom-sheet";
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { convertDateDB } from "../../../utils/ConverPickerDate";
import React, { useEffect, useState } from "react";
import ListUserChoose from "../../AddProjectScreen/ListUserChoose/ListUserChoose";
import IconSearch from "../../../assets/icons/IconSearch";
import { actionEditUserProject, actionsearchUser } from "../../../redux-store/actions/user";
import { useDispatch } from "react-redux";
import ListUserSearch from "../../AddProjectScreen/ListUserSearch/ListUserSearch";
import { checkMember } from "../../AddProjectScreen/Utils/CheckMember";
import { drawAsImage } from "@shopify/react-native-skia";
import { showMessage } from "react-native-flash-message";
import { ScrollView } from "react-native-gesture-handler";

export const BottomEditUser=React.memo((props)=>{
  const {bottomSheetRef,renderBackdrop,dataUserChoose,snapPoints,projectId,handelCloseEditUser}= props
  const [dataUser, setDataUser]=useState(dataUserChoose);
  const [textSearch, settextSearch]=useState("");// tieeu de của project
  const dispatch  = useDispatch();

  useEffect(()=>{
    setDataUser(dataUserChoose)
  },[dataUserChoose])
  const handleSearchUser=value=>{
    settextSearch(value)
    dispatch(actionsearchUser(value))
  }
  const handleChooseUser=(itemCheck)=> {  // hàm nhấn vào để chọn user trong ds tìm kiếm
    if (checkMember(itemCheck, dataUser)) { // nếu đã nằm trong ds dc chọn
      const newDataUserChoose = dataUser.filter(item => item.userName !== itemCheck.userName);
      setDataUser(newDataUserChoose);
    } else { // nếu người đó chưa nằm trong  danh sách được chọn
      setDataUser([...dataUser, itemCheck])
    }
  }
 function handlOnClose(){
    setDataUser(dataUserChoose)
 }
  const handleDeleleUser=(userId)=>{
    // Tạo một bản sao của danh sách
    const updatedData = [...dataUser];
    const index = updatedData.findIndex(user => user.userId === userId);
    if (index !== -1) {
      updatedData.splice(index, 1);
    }
    // Cập nhật state để kích thích việc render lại
    setDataUser(updatedData);
  }
  async function handleEditUserProject() {
    if (dataUser === dataUserChoose) {
      showMessage({
        message: "Thành viên dự án không có thay đổi gì so với ban đầu vui lòng kiểm tra lại ",
        type: "warning",
        duration: 1500,
        icon: { icon: "warning", position: 'left' }
      });
      return;
    } else {
      await dispatch(actionEditUserProject({
        "projectId": projectId,
        "listUser": dataUser
      },projectId))
    }
    handelCloseEditUser()
  }
  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomSheetRef}
        index={2}
        onDismiss={handlOnClose}
        enablePanDownToClose={true}
        backdropComponent={renderBackdrop}
        snapPoints={snapPoints}>
        <ScrollView style={{backgroundColor:"white"}} >
          <View style={{paddingHorizontal:10, backgroundColor:"white",marginBottom:"40%"}}>
            <Text style={{fontSize:18,alignSelf:'center',marginVertical:10, color:"black",fontFamily:"OpenSans-SemiBold",fontWeight:'700',marginRight:10}}>{"Chỉnh sửa thành viên tham gia dự án"}</Text>
            <Text style={{fontSize:15,alignSelf:'flex-start',marginVertical:10, color:"black",fontFamily:"OpenSans-SemiBold",fontWeight:'700',marginRight:10}}>{"Các thành viên đang tham gia dự án:"}</Text>
            <ListUserChoose dataUserChoose={dataUser} handleItem={handleDeleleUser}/>
            <Text style={{fontSize:15,alignSelf:'flex-start',marginVertical:10, color:"black",fontFamily:"OpenSans-SemiBold",fontWeight:'700',marginRight:10}}>{"Tìm kiếm thành viên thành viên"}</Text>
            <KeyboardAvoidingView keyboardVerticalOffset={10} behavior='padding' >
              <View style={{ flexDirection: "row",alignItems:'center', borderRadius: 15,marginVertical:10 ,  backgroundColor:"#EEEEEE",paddingHorizontal:10, paddingVertical:Platform.OS==='ios'?5:0,marginLeft:5,flex:1}}>
                <IconSearch/>
                <TextInput
                    value={textSearch}
                    onChangeText={handleSearchUser}
                    style={{ color: 'black', fontSize: 15, fontFamily: "OpenSans-Regular" }}
                    placeholder="Tim kiếm thành viên..."
                    placeholderTextColor={"#888888"}
                />
              </View>
            </KeyboardAvoidingView>
            <ListUserSearch dataUserChoose={dataUser} handleChooseUser={handleChooseUser}/>
            <TouchableOpacity onPress={handleEditUserProject} style={{height:50,alignSelf:'center', paddingHorizontal:9, borderRadius:17, backgroundColor:"#daeefd", marginTop:30,alignItems:'center', justifyContent:'center'}}>
              <Text style={{
                fontSize: 15,
                color: "#2f88dc",
                fontFamily: "OpenSans-SemiBold",
              }}>{"Cập nhật thành viên"}</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  )
})
