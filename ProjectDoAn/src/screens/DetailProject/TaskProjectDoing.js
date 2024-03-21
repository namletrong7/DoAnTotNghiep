// MyScreen1.js
import React, { useEffect, useMemo, useRef } from "react";
import { View, Text, FlatList, ScrollView, TouchableOpacity } from "react-native";
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

const TaskProjectDoing = ({navigation,route}) => {
  const { projectId } = route?.params;
  const dispatch  = useDispatch();
  const dataListTaskProjectDoing = useSelector(state => state.task.dataListTaskProjectDoing);
  useEffect(()=>{
    dispatch(actionGetTaskDoingProject(projectId))

  },[])
  return (
    <View style={{flex:1, paddingBottom:120, justifyContent:"center"}}>
    {dataListTaskProjectDoing.length>0?
        (<FlatList
          data={dataListTaskProjectDoing}
          renderItem={({item}) => <ItemTask item={item} navigation={navigation}  />}
          scrollEnabled={true}
          keyExtractor={item => item.taskId}
        />):(    <Text style={{fontSize:15, color:"black",fontFamily:"OpenSans-SemiBold",fontWeight:'700',alignSelf:"center"}}>{"Không có công việc nào"}</Text>)}
</View>
  );
};

export default React.memo(TaskProjectDoing);
