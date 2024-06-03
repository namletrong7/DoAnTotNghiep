import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ImageBackground, Dimensions, Image, SafeAreaView, FlatList, StatusBar,
} from "react-native";
import Animated, {  SlideInRight, SlideOutLeft } from "react-native-reanimated";
import { useDispatch, useSelector } from "react-redux";
import {useRef} from "react/index";

import IconProject from "../../assets/icons/IconProject";

import IconInfor from "../../assets/icons/IconInfor";
import IconBack from "../../assets/icons/IconBack";

import {  TopTabTask1 } from "./toptab/TopTabTask";
import {  getStateProject } from "../../utils/GetPriority";
import {  actionGetDetailProject } from "../../redux-store/actions/project";

import LinearGradient from "react-native-linear-gradient";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { BottomChooseAssignUser } from "./BottomChooseAssignUser/BottomChooseAssignUser";
import { BottomChooseTargetUser } from "./BottomChooseAssignUser/BottomChooseTargetUser";
import { actionFilterTaskProject } from "../../redux-store/actions/task";






const DetailProjectScreen = ({ navigation ,route}) => {
   const {itemProject, projectId} =  route?.params
  const dispatch  = useDispatch();
  const snapPoints = useMemo(() => ['50%', "80%",'99%'], []);
  const [objectFilter, setSetObjectFilter] = useState({
    assignUser:null,
    targetUser:null,
    type:null
  });
  const dataDetailProject = useSelector(state => state.project?.dataDetailProject);
  const bottomSelectAssignUser = useRef(null);  // bottom chọn người duyệt để lọc theo người duyệt
  const bottomSelectTargetUser = useRef(null);  // bottom chọn người duyệt để lọc theo người xử lý
  useEffect(()=>{
    dispatch(actionGetDetailProject(itemProject?.projectId || projectId))
  },[])

  const renderBackdrop = useCallback(
    (props) => {
      return <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />;
    },
    []
  );

// hàm mở ra bottom sheet thông tin của project
  const openBottomSelectAssignUser = useCallback(() => {
    bottomSelectAssignUser.current?.present();
  }, []);
  const closeBottomSelectAssignUser = useCallback(() => {
    bottomSelectAssignUser.current?.dismiss();
  }, []);
  // hàm mở ra bottom sheet thông tin của project
  const openBottomSelectTargetUser = useCallback(() => {
    bottomSelectTargetUser.current?.present();
  }, []);
  const closeBottomSelectTargetUser = useCallback(() => {
    bottomSelectTargetUser.current?.dismiss();
  }, []);

// hàm nhấn chọn người duyệt
  const handleChooseAssignUser=(item)=>{
    setSetObjectFilter({
      ...objectFilter, assignUser: item
    })
  }
  const handleChooseTargetUser=(item)=>{
    setSetObjectFilter({
      ...objectFilter, targetUser: item
    })
  }
  const handleFilterTask=()=>{
    closeBottomSelectAssignUser();
    dispatch(actionFilterTaskProject(projectId||itemProject?.projectId,objectFilter?.assignUser?.userId, objectFilter?.targetUser?.userId))
  }



  return (
    <Animated.View
      entering={SlideInRight.duration(500)} exiting={SlideOutLeft.duration(500)}
      style={{ flex: 1}}
    >
    <LinearGradient colors={['#faefcb', '#eaf1e0', '#deedda']} style={{ height:"100%"}}>
     <View style={{flexDirection:"row",paddingTop:Platform.OS==='ios'?(StatusBar.currentHeight+50):(StatusBar.currentHeight), paddingLeft:10, paddingVertical:5,alignItems:"center",display:'flex'}}>
         <TouchableOpacity onPress={()=>{navigation.goBack()}}>
           <IconBack/>
         </TouchableOpacity>
          <IconProject/>
           <View style={{alignSelf:'flex-end',flex:0.7}}>
             <Text numberOfLines={1} style={{fontSize:17, color:"black",fontFamily:"Roboto-Bold",marginLeft:5}}>{itemProject?.nameProject || dataDetailProject?.nameProject}</Text>
             <Text style={{fontSize:13, color:"black",fontFamily:"OpenSans-Regular",marginLeft:5, marginTop:5}}>{getStateProject(itemProject?.state || dataDetailProject?.state)}</Text>
           </View>
       <View style={{flexDirection:"row", justifyContent:"flex-end",display:"flex",flex:0.3, height:'100%', alignItems:"center"}}>
         <TouchableOpacity onPress={openBottomSelectTargetUser}>
           <IconInfor/>
         </TouchableOpacity>
       </View>
     </View>
      <GestureHandlerRootView style={{ borderRadius:16,  display:"flex"}}>
          <View  style={{height:"100%"}}>
               <TopTabTask1 projectId={itemProject?.projectId || projectId} objectFilter={objectFilter}/>
          </View>
      <BottomChooseAssignUser handleChooseAssignUser={handleChooseAssignUser} bottomSheetRef={bottomSelectAssignUser} renderBackdrop={renderBackdrop} snapPoints={snapPoints} assignUser={objectFilter.assignUser} handleFilterTask={handleFilterTask} />
        <BottomChooseTargetUser handleChooseAssignUser={handleChooseTargetUser} bottomSheetRef={bottomSelectTargetUser} renderBackdrop={renderBackdrop} snapPoints={snapPoints} assignUser={objectFilter.targetUser} handleFilterTask={handleFilterTask}/>
      </GestureHandlerRootView>
    </LinearGradient>
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
