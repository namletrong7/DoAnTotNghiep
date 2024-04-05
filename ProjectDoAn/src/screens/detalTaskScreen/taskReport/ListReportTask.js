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


export const ListReportTask = React.memo((props) => {

  const dataReport = useSelector(state => state.task.detailTask.dataReport);
  const [seeAll, setSeeAll] = useState(true);

    const RenderItemReport = (props) => {
      const {item} = props
      return (
        <View style={{
          marginTop: 10,
          paddingTop: 10,
          paddingBottom:20,
          paddingHorizontal: 10,
          borderRadius: 10,
          backgroundColor: "#DDDDDD",
          justifyContent: "flex-start",

        }}>
          <View style={{ flexDirection:"row" }}>
            <Text numberOfLines={2} style={{
              fontSize: 15,
              color: "black",
              fontFamily: "Roboto-Bold",
              textAlign: "left",
            }}>{props.item.fullName+":"} <Text numberOfLines={2} style={{
              fontSize: 17,
              color: item?.type==0?"#0066FF":"#00CC33",
              fontFamily: "Roboto-Bold",
              textAlign: "left",
              marginHorizontal:10,
              flexWrap:"wrap"
            }}>{props.item.type==0?"Yêu cầu báo cáo tiến công việc":"Báo cáo tiến độ công việc"}</Text></Text>
          </View>

          <View style={{ flexDirection:"row", marginTop:10 }}>
            <Text style={{
              fontSize: 15,
              color: "black",
              fontFamily: "Roboto-Bold",
              textAlign: "left",
            }}>{"Ý kiến : "} <Text  style={{
              fontSize: 15,
              color: "black",
              fontFamily: "Roboto-Italic",
              textAlign: "left",
              marginHorizontal:10,
              flexWrap:"wrap"
            }}>{item.content}</Text></Text>
          </View>
            {/*<RenderActionReport item={item}/>*/}


        </View>
      );
    };
    return (
      <View style={styles.container}>

        <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between" }} onPress={() => {
          setSeeAll(!seeAll);
        }}>
          <Text style={{ fontSize: 18, color: "black", fontFamily: "OpenSans-SemiBold" }}
                numberOfLines={10}>{"Danh sách báo cáo"}</Text>
          <View>
            {seeAll ? <IconArrowDown /> : <IconArrowUp />}
          </View>
        </TouchableOpacity>
        {seeAll ? (
          dataReport?.length > 0 ? <FlatList
              data={dataReport}
              scrollEnabled={false}
              renderItem={({ item }) => <RenderItemReport item={item} />}
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
