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
import { actionGetTaskToDoProject } from "../../redux-store/actions/task";

const TaskProjectToDo = ({navigation,route}) => {
  const { projectId } = route?.params;
  const dispatch  = useDispatch();
  const dataListTaskProjectTodo = useSelector(state => state.task.dataListTaskProjectTodo);
  const isGetTaskProjectTodo = useSelector(state => state.task?.isGetTaskProjectTodo);
  useEffect(()=>{
    dispatch(actionGetTaskToDoProject(projectId))

  },[])
  return (
    <View style={{flex:1, paddingBottom:120, justifyContent:"center"}}>
      {isGetTaskProjectTodo ? <ActivityIndicator size="large" color="#4577ef"/>:
          (dataListTaskProjectTodo?.length > 0 ?
              (<FlatList
                  data={dataListTaskProjectTodo}
                  renderItem={({item}) => <ItemTask item={item} navigation={navigation}/>}
                  scrollEnabled={true}
                  keyExtractor={item => item.taskId}
              />) : (<Text style={{
                fontSize: 15,
                color: "black",
                fontFamily: "OpenSans-SemiBold",
                fontWeight: '700',
                alignSelf: "center"
              }}>{"Không có công việc nào"}</Text>))

      }
    </View>
  );
};

export default React.memo(TaskProjectToDo);
