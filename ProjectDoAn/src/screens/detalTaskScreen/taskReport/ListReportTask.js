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
  const {assignUser,targetUser,openAnserReport,openAcceptAnswerReport} = props
  const dataReport = useSelector(state => state.task.detailTask.dataReport);
  const [seeAll, setSeeAll] = useState(true);
  // const fakdeData=[
  //   {
  //     "reportId": "33",
  //     "taskId": "5xvk2sj",
  //     "createUser": "0",
  //     "type": "0",
  //     "status": "0",
  //     "content": "Test",
  //     "parentId": null,
  //     "timeCreate": "2024-05-14 20:18:52",
  //     "fullName": "Vũ đình tuấn anh"
  //   },
  //   {
  //     "reportId": "32",
  //     "taskId": "5xvk2sj",
  //     "createUser": "0",
  //     "type": "0",
  //     "status": "0",
  //     "content": "Yêu cầu nha",
  //     "parentId": null,
  //     "timeCreate": null,
  //     "fullName": "Vũ đình tuấn anh"
  //   },
  //   {
  //     "reportId": "10",
  //     "taskId": "5xvk2sj",
  //     "createUser": "0",
  //     "type": "0",
  //     "status": "0",
  //     "content": "Báo cáo ngay cho tôi ngay ko để tình trạng như vậy được",
  //     "parentId": null,
  //     "timeCreate": null,
  //     "fullName": "Vũ đình tuấn anh"
  //   },
  //   {
  //     "reportId": "9",
  //     "taskId": "5xvk2sj",
  //     "createUser": "0",
  //     "type": "1",
  //     "status": "0",
  //     "content": "Cong việc hiện tại đang rất là tiến triển tốt ạ",
  //     "parentId": null,
  //     "timeCreate": null,
  //     "fullName": "Vũ đình tuấn anh"
  //   },
  //   {
  //     "reportId": "8",
  //     "taskId": "5xvk2sj",
  //     "createUser": "0",
  //     "type": "1",
  //     "status": "2",
  //     "content": "Ủa em báo cáo nha",
  //     "parentId": null,
  //     "timeCreate": null,
  //     "fullName": "Vũ đình tuấn anh"
  //   },
  //   {
  //     "reportId": "7",
  //     "taskId": "5xvk2sj",
  //     "createUser": "0",
  //     "type": "0",
  //     "status": "0",
  //     "content": "Tuấn anh báo cáo tiến độ công việc nhé",
  //     "parentId": null,
  //     "timeCreate": null,
  //     "fullName": "Vũ đình tuấn anh"
  //   }
  // ]

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
           <FlatList
              data={dataReport}
              scrollEnabled={false}
              ListEmptyComponent={ <Text style={{ fontSize: 14, color: "black", fontFamily: "OpenSans-Regular", marginTop: 15,alignSelf:'center' }}
                                         numberOfLines={10}>{"Không có báo cáo nào cho công việc này"}</Text>}
              renderItem={({ item }) => <RenderItemReportTask openAcceptAnswerReport={openAcceptAnswerReport} openAnserReport={openAnserReport} item={item} assignUser={assignUser} targetUser={targetUser} />}
              keyExtractor={(item, index) => index.toString()}
            />
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
