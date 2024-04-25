/**
 * Componet hiển thị danh sách file đính kèm của 1 công việc nhiệm vụ được giao
 */

import React, { useEffect, useState } from "react";
import {
    Dimensions,
    FlatList, KeyboardAvoidingView,
    SafeAreaView, ScrollView,
    StyleSheet,
    Text, TextInput,
    TouchableOpacity,
    useWindowDimensions,
    View,
} from "react-native";


import { useDispatch, useSelector } from "react-redux";
import IconArrowDown from "../../../assets/icons/IconArrowDown";
import IconArrowUp from "../../../assets/icons/IconArrowLeft";;
import ItemCheckList from "./ItemCheckList";
import IconSub from "../../../assets/icons/IconSub";
import IconSubTask from "../../../assets/icons/IconSubTask";
import IconPlus from "../../../assets/icons/IconPlus";
import InputCheckList from "./InputCheckList";
import SendCommentComponent from "../../../components/sendComentComponet/SendCommentComponent";


export const ListCheckList = React.memo(({taskId}) => {

  // const dataReport = useSelector(state => state.task.detailTask.dataReport);
    const dataCheckList = useSelector(state => state.task.dataCheckList);
  const [seeAll, setSeeAll] = useState(true);



    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.header} onPress= {() => {setSeeAll(!seeAll)} }>
          <View style={{flexDirection:"row",alignItems:"center"}}>
            <IconSubTask />
            <Text style={{fontSize:18, color:"black",fontFamily:"OpenSans-SemiBold",marginLeft:"5%"}} numberOfLines={10}>{"CheckList"}</Text>
          </View>
          {seeAll? <IconArrowDown/>:<IconArrowUp/>}
        </TouchableOpacity>
        {seeAll ? (
         <FlatList
              data={dataCheckList}
              scrollEnabled={false}
              renderItem={({ item }) => <ItemCheckList item={item} />}
              keyExtractor={(item, index) => index.toString()}
            />
        ) : null}
        {dataCheckList?.length==0&&
        <Text style={{fontSize: 14, color: "black", fontFamily: "OpenSans-Regular",alignSelf:'center', marginTop: 15}}
              numberOfLines={10}>{"không có check list nào"}</Text>}
              <InputCheckList taskId={taskId}/>


      </View>
    );
  },
);
const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginTop: 19,
  },
  header:{
    flexDirection:"row",justifyContent:"space-between"
  }

});

// export default React.memo(ListFileAttachComponent);
