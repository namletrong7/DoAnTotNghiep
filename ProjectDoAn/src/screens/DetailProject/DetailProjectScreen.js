import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ImageBackground, Dimensions, Image, SafeAreaView, FlatList, ScrollView, StatusBar,
} from "react-native";
import Animated, { FadeIn, SlideInDown, SlideInRight, SlideOutLeft, SlideOutRight } from "react-native-reanimated";
import { useDispatch, useSelector } from "react-redux";
import FastImage from "react-native-fast-image";

import { baseUrlAvatarUser } from "../../api/ConstBaseUrl";

import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import {useRef} from "react/index";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import IconProject from "../../assets/icons/IconProject";
import IconAddUser from "../../assets/icons/IconAddUser";
import IconInfor from "../../assets/icons/IconInfor";
import IconBack from "../../assets/icons/IconBack";

import {  TopTabTask1 } from "./toptab/TopTabTask";
import {  getStateProject } from "../../utils/GetPriority";
import {  actionGetDetailProject } from "../../redux-store/actions/project";
import {convertDateDB} from "../../utils/ConverPickerDate";
import { BottomEditUser } from "./BottomEditUser";




const DetailProjectScreen = ({ navigation ,route}) => {
   const {itemProject} =  route?.params
  const dispatch  = useDispatch();
  const snapPoints = useMemo(() => ['50%', "80%",'99%'], []);
  const bottomSheetRef = useRef(null);  // cho bottom thoong tin project
  const bottomEditUserRef = useRef(null);  // cho bottom thoong tin project

  const dataDetailProject = useSelector(state => state.project?.dataDetailProject);
  useEffect(()=>{
    dispatch(actionGetDetailProject(itemProject.projectId))
  },[])



  // @ts-ignore
  const renderBackdrop = useCallback(
    (props) => {
      return <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />;
    },
    []
  );
  // hàm mở ra bottom sheet thông tin của project
  const handelOpenDetail = useCallback(() => {
    bottomSheetRef.current?.present();
  }, []);
  // hàm mở ra bottom sheet thông tin của project
  const handelOpenEditUser = useCallback(() => {
    bottomEditUserRef.current?.present();
  }, []);
  const handelCloseEditUser = useCallback(() => {
    bottomEditUserRef.current?.dismiss();
  }, [bottomEditUserRef]);
const ItemUserMemer=(props)=>{
    const {item}= props
  return (
    <View style={{flexDirection:"row", borderRadius:14, backgroundColor:"#DDDDDD", flex:0.5, marginHorizontal:10,marginVertical:5,paddingVertical:5, alignItems:'center'}}>
      <FastImage
        style={{ width: 30, height: 30,borderRadius: 30/2 ,overflow: "hidden",marginLeft:3}}
        source={{
          uri: (baseUrlAvatarUser+item?.avatarUser)||''
        }}
        resizeMode={FastImage.resizeMode.preload}

      />
      <Text style={{fontSize:13,flexWrap:"wrap", color:"black",fontFamily:"OpenSans-Regular",marginLeft:5,flex:1}}>{item.fullName}</Text>
    </View>
  )
}


  return (
    <Animated.View
      entering={SlideInRight.duration(500)} exiting={SlideOutLeft.duration(500)}
      style={{ flex: 1}}
    >
    <View style={{backgroundColor:"#F0F0F0", height:"100%"}}>
     <View style={{flexDirection:"row",paddingTop:Platform.OS==='ios'?(StatusBar.currentHeight+50):(StatusBar.currentHeight), backgroundColor:"#6699FF", paddingLeft:10, paddingVertical:5, justifyContent:"flex-start",alignItems:"center",display:'flex'}}>
         <TouchableOpacity onPress={()=>{navigation.goBack()}}>
           <IconBack/>
         </TouchableOpacity>
          <IconProject/>
           <View style={{justifyContent:"flex-start", flex:0.7}}>
             <Text numberOfLines={1} style={{fontSize:17, color:"black",fontFamily:"Roboto-Bold",marginLeft:5}}>{itemProject?.nameProject}</Text>
             <Text style={{fontSize:13, color:"black",fontFamily:"OpenSans-Regular",marginLeft:5, marginTop:5}}>{getStateProject(itemProject?.state)}</Text>
           </View>
       <View style={{flexDirection:"row", justifyContent:"space-between",display:"flex", height:'100%', alignItems:"center", flex:0.25}}>
         <TouchableOpacity onPress={()=>{handelOpenEditUser()}} >
           <IconAddUser/>
         </TouchableOpacity>
         <TouchableOpacity onPress={()=>{handelOpenDetail()}}>
           <IconInfor/>
         </TouchableOpacity>
       </View>
     </View>


      <GestureHandlerRootView  style={{ borderRadius:16,  display:"flex"}}>
          <View style={{height:"100%"}}>
               <TopTabTask1 projectId={itemProject?.projectId}/>
          </View>
        <BottomEditUser handelCloseEditUser={handelCloseEditUser} projectId={itemProject?.projectId} bottomSheetRef={bottomEditUserRef} renderBackdrop={renderBackdrop} snapPoints={snapPoints} dataUserChoose={dataDetailProject?.dataMember}/>
        <BottomSheetModalProvider>
          <BottomSheetModal
              ref={bottomSheetRef}
              index={1}
              enablePanDownToClose={true}
              backdropComponent={renderBackdrop}
              snapPoints={snapPoints}>
            <BottomSheetScrollView  >
              <View style={{paddingHorizontal:10, backgroundColor:"white"}}>
                  <Text style={{fontSize:24, color:"black",fontFamily:"OpenSans-SemiBold",fontWeight:'700',marginRight:10}}>{dataDetailProject?.nameProject}</Text>
                <TouchableOpacity style={{flexDirection:"row", marginTop:10}}>
                  <Text style={{fontSize:15, color:"black",fontFamily:"OpenSans-Regular",marginRight:5}}>{"Ngày bắt đầu dự án: "}</Text>
                  <View  style={{padding:5, borderRadius:6, backgroundColor:"#DDDDDD", flexDirection:"row"}}>
                    <Text style={{fontSize:15, color:"black",fontFamily:"OpenSans-Regular",marginRight:5}}>{convertDateDB(dataDetailProject?.startDay)}</Text>
                  </View>

                </TouchableOpacity>
                <TouchableOpacity  style={{flexDirection:"row", marginTop:10}}>
                  <Text style={{fontSize:15, color:"black",fontFamily:"OpenSans-Regular",marginRight:5}}>{"Ngày kết thúc dự án: "}</Text>
                  <View  style={{padding:5, borderRadius:6, backgroundColor:"#DDDDDD", flexDirection:"row"}}>
                    <Text style={{fontSize:15, color:"black",fontFamily:"OpenSans-Regular",marginRight:5}}>{convertDateDB(dataDetailProject?.endDay)}</Text>
                  </View>

                </TouchableOpacity>
                <Text style={{fontSize:17, color:"black",fontFamily:"OpenSans-SemiBold",fontWeight:'700',marginRight:10,marginTop:10}}>{"Người tạo dự án: "}  <Text style={{fontSize:15, color:"black",fontFamily:"OpenSans-Regular",marginRight:5}}>{dataDetailProject?.createFullName}</Text></Text>
                <Text style={{fontSize:17, color:"black",fontFamily:"OpenSans-SemiBold",fontWeight:'700',marginRight:10,marginTop:10}}>{"Thành viên tham gia dự án"}</Text>
                <FlatList
                  data={dataDetailProject?.dataMember}
                  renderItem={({item}) => <ItemUserMemer item={item}  />}
                  scrollEnabled={false}
                  horizontal={false}
                  numColumns={2}
                  keyExtractor={item => item.userId}
                />
              </View>
            </BottomSheetScrollView>
          </BottomSheetModal>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
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
  }
});

export default DetailProjectScreen;
