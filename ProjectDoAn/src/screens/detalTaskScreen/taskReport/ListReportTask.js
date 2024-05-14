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
import IconArrowUp from "../../../assets/icons/IconArrowLeft";
import IconComment from "../../../assets/icons/IconComment";
import IconAttachFile from "../../../assets/icons/IconAttachFile";
import IconReport from "../../../assets/icons/IconReport";
import RenderItemReportTask from "./RenderItemReportTask";


export const ListReportTask = React.memo((props) => {

  const dataReport = useSelector(state => state.task.detailTask.dataReport);
  const [seeAll, setSeeAll] = useState(true);


    return (
      <View style={styles.container}>
        <TouchableOpacity style={{flexDirection:"row",justifyContent:"space-between"}} onPress= {() => {setSeeAll(!seeAll)} }>
          <View style={{flexDirection:"row",alignItems:"center"}}>
            <IconReport width={20} height={20}/>
            <Text style={{fontSize:18, color:"black",fontFamily:"OpenSans-SemiBold",marginLeft:"5%"}} numberOfLines={10}>{"Báo cáo"}</Text>
          </View>
          {seeAll? <IconArrowDown/>:<IconArrowUp/>}
        </TouchableOpacity>
        {seeAll ? (
          dataReport?.length > 0 ? <FlatList
              data={dataReport}
              scrollEnabled={false}
              renderItem={({ item }) => <RenderItemReportTask item={item} />}
              keyExtractor={(item, index) => index.toString()}
            /> :
            <Text style={{ fontSize: 14, color: "black", fontFamily: "OpenSans-Regular", marginTop: 15 }}
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
    backgroundColor:"white",
    padding:7,
    borderRadius:7
  },

});

// export default React.memo(ListFileAttachComponent);
