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
import { actionGetTaskDoingProject, actionGetTaskToDoProject } from "../../redux-store/actions/task";
import { EmptyTask } from "../../components/EmptyScreen/EmptyTask";
import LinearGradient from "react-native-linear-gradient";
import LottieView from "lottie-react-native";

const TaskProjectDoing = ({navigation,route}) => {
  const { projectId } = route?.params;
  const dispatch  = useDispatch();
  const dataListTaskProjectDoing = useSelector(state => state.task?.dataListTaskProjectDoing);
  const isGetTaskProjectDoing = useSelector(state => state.task?.isGetTaskProjectDoing);
  const [refreshing, setRefreshing] = useState(false);

  //console.log(isGetTaskProjectDoing)
  useEffect(()=>{
    dispatch(actionGetTaskDoingProject(projectId))

  },[])
  const handleRefresh = useCallback(() => {
    setRefreshing(true); // Đặt trạng thái là đang làm mới
    dispatch(actionGetTaskDoingProject(projectId))
    setRefreshing(false);
  },[]);
  return (
    <LinearGradient colors={['#faefcb', '#eaf1e0', '#deedda']} style={{flex:1, paddingBottom:120, justifyContent:"center"}}>
      {isGetTaskProjectDoing ? <LottieView style={{ height:100,marginTop:10}} source={require('../../assets/animation/circlesRotate.json')} autoPlay loop />:
              (<FlatList
                  data={dataListTaskProjectDoing}
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

export default React.memo(TaskProjectDoing);
