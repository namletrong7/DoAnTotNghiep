// MyScreen1.js
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { View, Text, FlatList, ScrollView, TouchableOpacity, ActivityIndicator, RefreshControl } from "react-native";
import renderer from "react-test-renderer";
import ItemTask from "../../components/itemTask/ItemTask";
import IconMessage from "../../assets/icons/IconMessage";
import IconPhone from "../../assets/icons/IconPhone";
import IconMail from "../../assets/icons/IconMail";
import FlashMessage from "react-native-flash-message";
import FastImage from "react-native-fast-image";
import { getValuePositionLevel } from "../../utils/GetValuePosition";
import { useDispatch, useSelector } from "react-redux";
import { actionGetDetailProject } from "../../redux-store/actions/project";
import {
  actionGetMoreTaskToDoProject,
  actionGetTargetTaskByEndDay,
  actionGetTaskToDoProject
} from "../../redux-store/actions/task";
import { EmptyTask } from "../../components/EmptyScreen/EmptyTask";
import LinearGradient from "react-native-linear-gradient";
import LottieView from "lottie-react-native";
import IconLoadMore from "../../assets/icons/IconLoadMorer";
import {FooterTask} from "../taskStack/footerTask/FooterTask";

const TaskProjectToDo = ({navigation,route}) => {
  const { projectId } = route?.params;
  const dispatch  = useDispatch();
  const dataListTaskProjectTodo = useSelector(state => state.task.dataListTaskProjectTodo);
  const isGetTaskProjectTodo = useSelector(state => state.task?.isGetTaskProjectTodo);
  const isGetMoreTaskProjectTodo = useSelector(state => state.task?.isGetMoreTaskProjectTodo);

  const [refreshing, setRefreshing] = useState(false);
  console.log('render lại task project todo')
  useEffect(()=>{
    dispatch(actionGetTaskToDoProject(projectId))

  },[])
  const handleRefresh = useCallback(() => {
    setRefreshing(true); // Đặt trạng thái là đang làm mới
    dispatch(actionGetTaskToDoProject(projectId))
    setRefreshing(false);
  },[]);
  const handleLoadMore=()=>{
    dispatch(actionGetMoreTaskToDoProject(projectId))
  }
  return (
    <LinearGradient colors={['#faefcb', '#eaf1e0', '#deedda']} style={{flex:1, paddingBottom:120, justifyContent:"center"}}>
      {isGetTaskProjectTodo ? <LottieView style={{ height:100,marginTop:10}} source={require('../../assets/animation/circlesRotate.json')} autoPlay loop />:
              (<FlatList
                  data={dataListTaskProjectTodo}
                  renderItem={({item}) => <ItemTask item={item} navigation={navigation}/>}
                  scrollEnabled={true}
                  keyExtractor={item => item.taskId}
                  ListEmptyComponent={<EmptyTask/>}
                  refreshControl={
                    <RefreshControl
                      refreshing={refreshing}
                      onRefresh={handleRefresh}
                    />}
                  ListFooterComponent={
                    <View>
                      {isGetMoreTaskProjectTodo?<FooterTask/>:null}
                      {dataListTaskProjectTodo?.length > 0 ? (
                      <TouchableOpacity onPress={handleLoadMore} style={{ flexDirection: "row", marginTop: 10 ,paddingBottom:20,alignSelf:'center'}}>
                        <IconLoadMore />
                        <Text style={{ fontSize: 17, color: "black", marginLeft: 5, fontFamily: "OpenSans-Regular" }}>
                          {"Nhấn để tải thêm task..."}
                        </Text>
                      </TouchableOpacity>
                      ) : null}
                    </View>

                  }
              />
          )

      }
    </LinearGradient>
  );
};

export default React.memo(TaskProjectToDo);
