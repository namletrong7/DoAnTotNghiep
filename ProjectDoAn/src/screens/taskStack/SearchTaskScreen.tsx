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
  KeyboardAvoidingView
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

 type propsType ={
        navigation:any
}
const SearchTaskScreen : React.FC<propsType>= ({ navigation  }) => {
  const dispatch  = useDispatch();
  const [content, setContent] = useState("");
  const dataSearchTask = useSelector(state => state.task?.dataSearchTask);
  const handleSearchTask=(value:string):void=>{
            setContent(value)
           dispatch(actionSearchTask(value))
  }
  const handleReset=()=>{
    dispatch({
             type:"RESET_SEARCH_TASK"
             })
  }
  // useEffect(
  //   React.useCallback(() => {
  //     return () => {
  //       dispatch({
  //         type:"RESET_SEARCH_TASK"
  //       })
  //     };
  //   }, [])
  // );
  return (
    <Animated.View
      entering={SlideInRight.duration(500)} exiting={SlideOutLeft.duration(500)}
      style={{ flex: 1}}
    >
      <View style={{backgroundColor:"#F0F0F0",height:'100%'}}>
        <HeaderComponent title={"Tìm kiếm công việc"} navigation={navigation} back/>
        <ScrollView contentContainerStyle={{}}>

            <KeyboardAvoidingView keyboardVerticalOffset={10} behavior='padding' style={{ flexDirection: "row",alignItems:'center',marginBottom:10, borderRadius: 10, flex: 1 ,  backgroundColor:"#FFFFFF",paddingHorizontal:10, paddingVertical:Platform.OS==='ios'?5:0,marginLeft:5}}>
              <TextInput
                style={{ color: 'black', fontSize: 15, fontFamily: "OpenSans-Regular", flex: 1 }}
                placeholder="Nhập tiêu đề công việc cần tìm .."
                onChangeText={handleSearchTask}
                value={content}
              />
              <TouchableOpacity onPress={handleReset}>
                <IconSearch width={25} height={25}/>
              </TouchableOpacity>
            </KeyboardAvoidingView>
          {dataSearchTask?.length > 0 ?
          (<FlatList
          data={dataSearchTask}
          initialNumToRender={5}
          renderItem={({item}) => <ItemTask item={item} navigation={navigation}/>}
          scrollEnabled={false}
          keyExtractor={item => item.taskId}
        />) : (<EmptyTask/>)}
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
