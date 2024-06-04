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
  actionGetTaskDoingProject,
  actionGetTaskDoneProject,
  actionGetTaskToDoProject,
} from "../../redux-store/actions/task";
import { EmptyTask } from "../../components/EmptyScreen/EmptyTask";
import LinearGradient from "react-native-linear-gradient";
import LottieView from "lottie-react-native";

const TaskProjectDone = ({navigation,route}) => {
  const { projectId,objectFilter } = route?.params;
  const dispatch  = useDispatch();
  const dataListTaskProjectDone = useSelector(state => state.task.dataListTaskProjectDone);
  const isGetTaskProjectDone = useSelector(state => state.task?.isGetTaskProjectDone);
  const [refreshing, setRefreshing] = useState(false);
  console.log('render lại task project done')
  useEffect(()=>{
    dispatch(actionGetTaskDoneProject(projectId,objectFilter.assignUser?.userId,objectFilter.targetUser?.userId))
  },[])
  const handleRefresh = useCallback(() => {
    setRefreshing(true); // Đặt trạng thái là đang làm mới
    dispatch(actionGetTaskDoneProject(projectId,objectFilter.assignUser?.userId,objectFilter.targetUser?.userId))
    setRefreshing(false);
  },[projectId]);
  return (
    <LinearGradient colors={['#faefcb', '#eaf1e0', '#deedda']} style={{flex:1, paddingBottom:120, justifyContent:"center"}}>
      {isGetTaskProjectDone ? <LottieView style={{ height:100,marginTop:10}} source={require('../../assets/animation/circlesRotate.json')} autoPlay loop />:
              (<FlatList
                  data={dataListTaskProjectDone}
                  initialNumToRender={5}
                  renderItem={({item}) => <ItemTask item={item} navigation={navigation}/>}
                  scrollEnabled={true}
                  ListEmptyComponent={<EmptyTask/>}
                  refreshControl={
                    <RefreshControl
                      refreshing={refreshing}
                      onRefresh={handleRefresh}
                    />}
                  keyExtractor={item => item.taskId}
              />)

      }
    </LinearGradient>
  );
};

export default React.memo(TaskProjectDone);
