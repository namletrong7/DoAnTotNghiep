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
import IconAddUser from "../../assets/icons/IconAddUser";
import IconInfor from "../../assets/icons/IconInfor";
import IconBack from "../../assets/icons/IconBack";

import {  TopTabTask1 } from "./toptab/TopTabTask";
import {  getStateProject } from "../../utils/GetPriority";
import {  actionGetDetailProject } from "../../redux-store/actions/project";
import { BottomEditUser } from "../EditinforProjectScreen/BottomEditUser";
import LinearGradient from "react-native-linear-gradient";





const DetailProjectScreen = ({ navigation ,route}) => {
   const {itemProject, projectId} =  route?.params
  const dispatch  = useDispatch();
  const snapPoints = useMemo(() => ['50%', "80%",'99%'], []);
  const bottomEditUserRef = useRef(null);

  const dataDetailProject = useSelector(state => state.project?.dataDetailProject);
  useEffect(()=>{
    dispatch(actionGetDetailProject(itemProject?.projectId || projectId))
  },[])









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
         <TouchableOpacity onPress={()=>{navigation.navigate("EditInforProjectScreen",{projectId: itemProject?.projectId || projectId})}}>
           <IconInfor/>
         </TouchableOpacity>
       </View>
     </View>

          <View  style={{height:"100%"}}>
               <TopTabTask1 projectId={itemProject?.projectId || projectId}/>
          </View>
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
