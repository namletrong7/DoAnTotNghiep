/**
 * Componet hiển thị danh sách file đính kèm của 1 công việc nhiệm vụ được giao
 */

import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  SafeAreaView, ScrollView,
  StyleSheet,
  Text,
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


export const ListCheckList = React.memo((props) => {

  // const dataReport = useSelector(state => state.task.detailTask.dataReport);

  const data= [
    {
      "checkId": "2",
      "taskId": "vjkdbjbv",
      "creatUser": "0",
      "status": "1",
      "content": "kiểm tra nội dung",
      "avatarUser": "anhvtd.png"
    },
    {
      "checkId": "1",
      "taskId": "tasksdkjvbkbv",
      "creatUser": "0",
      "status": "1",
      "content": "kiểm tra tài khoản",
      "avatarUser": "anhvtd.png"
    }
  ]
  const [seeAll, setSeeAll] = useState(true);


    return (
      <View style={styles.container}>
        <TouchableOpacity style={{flexDirection:"row",justifyContent:"space-between"}} onPress= {() => {setSeeAll(!seeAll)} }>
          <View style={{flexDirection:"row",alignItems:"center"}}>
            <IconSubTask />
            <Text style={{fontSize:18, color:"black",fontFamily:"OpenSans-SemiBold",marginLeft:"5%"}} numberOfLines={10}>{"CheckList"}</Text>
          </View>
          {seeAll? <IconArrowDown/>:<IconArrowUp/>}
        </TouchableOpacity>
        {seeAll ? (
          data?.length > 0 ? <FlatList
              data={data}
              scrollEnabled={false}
              renderItem={({ item }) => <ItemCheckList item={item} />}
              keyExtractor={(item, index) => index.toString()}
            /> :
            <Text style={{ fontSize: 15, color: "black", fontFamily: "OpenSans-Regular", marginTop: 15 }}
                  numberOfLines={10}>{"Không có báo cáo nào cho công việc này"}</Text>
        ) : null}

      </View>
    );
  },
);
const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginTop: 19,
  },

});

// export default React.memo(ListFileAttachComponent);
