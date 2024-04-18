import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ImageBackground,
  Dimensions,
  Image,
  SafeAreaView,
  FlatList,
  ScrollView,
  RefreshControl,
  Platform,
  TextInput,
  KeyboardAvoidingView, StatusBar
} from "react-native";
import {  actionLogout } from "../../redux-store/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import HeaderComponent from "../../components/header/HeaderComponent";

import ItemTask from "../../components/itemTask/ItemTask";
import FastImage from "react-native-fast-image";
import { getValuePositionLevel } from "../../utils/GetValuePosition";
import IconMessage from "../../assets/icons/IconMessage";
import IconPhone from "../../assets/icons/IconPhone";

import Animated, { FadeIn, SlideInDown, SlideInRight, SlideOutLeft, SlideOutRight } from "react-native-reanimated";
import IconCam from "../../assets/icons/IconCam.js";
import IconSend from "../../assets/icons/IconSend.js";
import IconSearch from "../../assets/icons/IconSearch.js";
import { EmptyTask } from "../../components/EmptyScreen/EmptyTask.js";
import { actionSearchTask } from "../../redux-store/actions/task";
import { useFocusEffect } from "@react-navigation/native";
import IconBack from "../../assets/icons/IconBack.js";
import { isNumber } from "@notifee/react-native/dist/utils";
import { ItemStaff } from "../../components/ItemStaff/ItemStaff.js";
import { ListStaffSearch } from "./ListStaffSearch/ListStaffSearch.tsx";
import { actionsearchUser } from "../../redux-store/actions/user";


 type propsType ={
        navigation:any
}
const SearchTaskScreen : React.FC<propsType>= ({ navigation  }) => {
  const dispatch  = useDispatch();
  const [content, setContent] = useState<string | number>("");
  const [typeSearch, setTypeSearch] = useState<number>(1);
  const dataSearchTask = useSelector((state:any) => state.task?.dataSearchTask);


  const handleSearchTask=(value:string):void=>{
            setContent(value)
       if(typeSearch===1){
         dispatch(actionSearchTask(value))
       }else    if(typeSearch===2){
         dispatch(actionsearchUser(value))
       }

  }
  const ItemFilter=React.memo(({ title, type }: { title: string; type: number })=>{
    return(
    <TouchableOpacity onPress={()=>{setTypeSearch(type)}} style={{backgroundColor:typeSearch===type?"#148eff":"#bed9f2",borderRadius:15,alignItems:'center',justifyContent:'center',padding:7,marginLeft:5}}>
      <Text style={{ fontSize: 13, color: typeSearch===type?"white":"#148eff", fontFamily: "OpenSans-SemiBold"}}>{title}</Text>
    </TouchableOpacity>)
  })

  const handleReset=()=>{
    dispatch({
             type:"RESET_SEARCH_TASK"
             })
  }
  return (
    <Animated.View
      entering={SlideInRight.duration(500)} exiting={SlideOutLeft.duration(500)}
      style={{ flex: 1}}
    >
      <View style={{backgroundColor:"#F0F0F0",height:'100%'}}>
        <SafeAreaView style={{height:StatusBar.currentHeight,backgroundColor:'white'}}>
          <StatusBar
            translucent
            backgroundColor={'black'}
          />
        </SafeAreaView>
        <KeyboardAvoidingView keyboardVerticalOffset={10} behavior='padding' style={{flexDirection:"row", backgroundColor:"white", paddingHorizontal:10, justifyContent:"space-between",alignItems:"center",display:'flex'}}>
          <TouchableOpacity onPress={()=>{navigation.goBack()}}>
            <IconBack/>
          </TouchableOpacity>
          <TextInput
            style={{ color: 'black',marginVertical:5, fontSize: 15, fontFamily: "OpenSans-Regular", flex: 1,marginHorizontal:15 }}
            placeholder="Nhập tiêu đề công việc cần tìm .."
            onChangeText={handleSearchTask}
            value={content}
          />
          <View  style={{ flexDirection:"row"}}>
              <TouchableOpacity onPress={handleReset}>
                <IconSearch width={25} height={25}/>
              </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{backgroundColor:"white",alignItems:'center',paddingHorizontal:10,height:50}}>
          <Text style={{ fontSize: 13, color: "#148eff", fontFamily: "OpenSans-SemiBold"}}>{"Tìm kiếm theo : "}</Text>
          <ItemFilter title={"Công việc"} type={1}/>
          <ItemFilter title={"Nhân viên"} type={2}/>
          <ItemFilter title={"Dự án"} type={3}/>
          <ItemFilter title={"Phòng ban"} type={4}/>
        </ScrollView>
        <ScrollView style={{height:"100%"}}>
          {(dataSearchTask?.length > 0 && typeSearch===1)?
          <FlatList
          data={dataSearchTask}
          renderItem={({item}) => <ItemTask item={item} navigation={navigation}/>}
          scrollEnabled={false}
          keyExtractor={item => item.taskId}
        />:null}
         <ListStaffSearch type={typeSearch} navigation={navigation}/>
        </ScrollView>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});

export default React.memo(SearchTaskScreen);
