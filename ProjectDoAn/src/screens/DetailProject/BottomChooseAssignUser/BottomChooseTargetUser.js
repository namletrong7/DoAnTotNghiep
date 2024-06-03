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

import React, { useCallback, useEffect, useState } from "react";
import ListUserChoose from "../../AddProjectScreen/ListUserChoose/ListUserChoose";
import IconSearch from "../../../assets/icons/IconSearch";
import { actionEditUserProject, actionsearchUser } from "../../../redux-store/actions/user";
import { useDispatch, useSelector } from "react-redux";
import ListUserSearch from "../../AddProjectScreen/ListUserSearch/ListUserSearch";
import { checkMember } from "../../AddProjectScreen/Utils/CheckMember";

import { showMessage } from "react-native-flash-message";
import { ScrollView } from "react-native-gesture-handler";
import { ItemUserSearch } from "../../AddProjectScreen/ListUserSearch/ItemUserSearch";
import { ItemMember } from "./ItemMember";
import IconTick from "../../../assets/icons/IconTick";
import IconUnTick from "../../../assets/icons/IconUnTick";
import FastImage from "react-native-fast-image";
import { baseUrlAvatarUser } from "../../../api/ConstBaseUrl";

export const BottomChooseTargetUser=React.memo((props)=>{
  const {bottomSheetRef,renderBackdrop,snapPoints,assignUser,handleChooseAssignUser,handleFilterTask}= props
  const [textSearch, settextSearch]=useState("");
  const dispatch  = useDispatch();
  const dataDetailProject = useSelector(state => state.project?.dataDetailProject);



  const handleSearchUser = useCallback((value) => {
    settextSearch(value);
  }, []);



  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomSheetRef}
        index={0}
        enablePanDownToClose={true}
        backdropComponent={renderBackdrop}
        snapPoints={snapPoints}>
        <KeyboardAvoidingView keyboardVerticalOffset={10} behavior='padding' >
        <ScrollView style={{backgroundColor:"white",marginBottom:"10%"}} >
          <View style={{paddingHorizontal:10, backgroundColor:"white",marginBottom:"40%"}}>
            <Text style={{fontSize:18,alignSelf:'center',marginVertical:10, color:"black",fontFamily:"OpenSans-SemiBold",fontWeight:'700',marginRight:10}}>{"Lọc theo người xử lý"}</Text>
            <Text style={{fontSize:15,alignSelf:'flex-start',marginVertical:10, color:"black",fontFamily:"OpenSans-Regular",fontWeight:'700',marginRight:10}}>{"Đã chọn"}</Text>
            <View  style={{flexDirection:"row",flex:1, marginHorizontal:5,marginVertical:2,paddingVertical:3, alignItems:'center'}}>
              <FastImage
                style={{ width: 25, height: 25,borderRadius: 25/2 ,overflow: "hidden",marginLeft:10}}
                source={{
                  uri: (baseUrlAvatarUser+assignUser?.avatarUser)||''
                }}
                resizeMode={FastImage.resizeMode.preload}

              />
              <View style={{flex:0.9}}>
                <Text style={{fontSize:15,flexWrap:"wrap", color:"black",  fontFamily: "OpenSans-SemiBold",marginLeft:5,flex:1}}>{assignUser?.fullName}</Text>
                <Text style={{fontSize:15,flexWrap:"wrap", color:"black",   fontFamily: "OpenSans-Regular",marginLeft:5,flex:1,marginTop:3}}>{assignUser?.userName}</Text>
              </View>
            </View>
              <View style={{ flexDirection: "row",alignItems:'center', borderRadius: 15,marginVertical:10 ,  backgroundColor:"#EEEEEE",paddingHorizontal:10, paddingVertical:Platform.OS==='ios'?5:0,marginLeft:5,flex:1}}>
                <IconSearch/>
                <TextInput
                  value={textSearch}
                  onChangeText={handleSearchUser}
                  style={{ color: 'black',flex:1, fontSize: 15, fontFamily: "OpenSans-Regular" }}
                  placeholder="Tim kiếm nhân viên..."
                  placeholderTextColor={"#888888"}
                />
              </View>
            <FlatList
              data={dataDetailProject?.dataMember}
              renderItem={({item}) => <ItemMember handleChooseAssignUser={handleChooseAssignUser} item={item} assignUser={assignUser} />}
              scrollEnabled={false}
              keyExtractor={item => item.userId}
            />
          </View>
        </ScrollView>
          <TouchableOpacity onPress={handleFilterTask} style={{height:50,alignSelf:'center',bottom:'10%',position:'absolute', paddingHorizontal:9, borderRadius:17, backgroundColor:"#daeefd",alignItems:'center', justifyContent:'center'}}>
            <Text style={{
              fontSize: 15,
              color: "#2f88dc",
              fontFamily: "OpenSans-SemiBold",
            }}>{"Hiển thị kết quả"}</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  )
})
