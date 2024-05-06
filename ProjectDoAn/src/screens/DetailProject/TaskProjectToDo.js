// MyScreen1.js
import React, { useEffect, useMemo, useRef, useState } from "react";
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
import { actionGetTargetTaskByEndDay, actionGetTaskToDoProject } from "../../redux-store/actions/task";
import { EmptyTask } from "../../components/EmptyScreen/EmptyTask";
import LinearGradient from "react-native-linear-gradient";

const TaskProjectToDo = ({navigation,route}) => {
  const { projectId } = route?.params;
  const dispatch  = useDispatch();
  const dataListTaskProjectTodo = useSelector(state => state.task.dataListTaskProjectTodo);
  const isGetTaskProjectTodo = useSelector(state => state.task?.isGetTaskProjectTodo);
  const [refreshing, setRefreshing] = useState(false);
  useEffect(()=>{
    dispatch(actionGetTaskToDoProject(projectId))

  },[])
  const handleRefresh = () => {
    setRefreshing(true); // Đặt trạng thái là đang làm mới
    dispatch(actionGetTaskToDoProject(projectId))
    setRefreshing(false);
  };
  return (
    <LinearGradient colors={['#faefcb', '#eaf1e0', '#deedda']} style={{flex:1, paddingBottom:120, justifyContent:"center"}}>
      {isGetTaskProjectTodo ? <ActivityIndicator size="large" color="#4577ef"/>:
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
              />
          )

      }
    </LinearGradient>
  );
};

export default React.memo(TaskProjectToDo);
