// MyScreen1.js
import React, { useEffect, useMemo, useRef } from "react";
import {View, Text, FlatList, ScrollView, TouchableOpacity, ActivityIndicator} from "react-native";
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

const TaskProjectDoing = ({navigation,route}) => {
  const { projectId } = route?.params;
  const dispatch  = useDispatch();
  const dataListTaskProjectDoing = useSelector(state => state.task?.dataListTaskProjectDoing);
  const isGetTaskProjectDoing = useSelector(state => state.task?.isGetTaskProjectDoing);
  //console.log(isGetTaskProjectDoing)
  useEffect(()=>{
    dispatch(actionGetTaskDoingProject(projectId))

  },[])
  return (
    <LinearGradient colors={['#faefcb', '#eaf1e0', '#deedda']} style={{flex:1, paddingBottom:120, justifyContent:"center"}}>
      {isGetTaskProjectDoing ? <ActivityIndicator size="large" color="#4577ef"/>:
          (dataListTaskProjectDoing?.length > 0 ?
              (<FlatList
                  data={dataListTaskProjectDoing}
                  initialNumToRender={5}
                  renderItem={({item}) => <ItemTask item={item} navigation={navigation}/>}
                  scrollEnabled={true}
                  keyExtractor={item => item.taskId}
              />) : (<EmptyTask/>))

      }
</LinearGradient>
  );
};

export default React.memo(TaskProjectDoing);
