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

    const dispatch = useDispatch();
    const {assignUser,targetUser,currenUser}= props
  //  console.log(currenUser === targetUser && assignUser==1)
    const [seeAll, setSeeAll] = useState(true); // xem có nên xem hết file hay không
    const dataListBaoCao = [
      {
        "reportId": "0",
        "taskId": "T001",
        "createUser": "1",
        "type": "0",
        "status": "0",
        "content": "dd",
        "fullName": "John Doe"
      },
      {
        "reportId": "1",
        "taskId": "T001",
        "createUser": "1",
        "type": "1",
        "status": "1",
        "content": "em xin phép dc trình bày: " +
          "phẩm của chúng ta như vậy, em có biết là tổn thất của chúng ta lần này lớn đến nhương nào hay không",
        "fullName": "John Doe"
      }
    ]


    // useEffect(() => {
    //   dispatch(actionGetFileAttach(props.taskId))
    // }, []);
   // const RenderActionReport=(props)=>{
   //   const {item} = props
   //   if(item.type==0)// neu báo cáo có kiểu type=0 là yêu cầu báo cáo
   //   {
   //     return (
   //       <View style={{alignSelf:"flex-end", marginTop:15}}>
   //         {currenUser == targetUser && item.status == 0 ? (
   //           <View style={{ backgroundColor: "#c0dbf5", borderRadius: 10, paddingVertical: 7 , width:70, alignItems:"center", borderWidth:1, borderColor:"#1281e9"}}>
   //             <Text style={{color:"#148eff"}}>{"Báo cáo"}</Text>
   //           </View>
   //         ) : null}
   //       </View>
   //
   //     )
   //   }
   //   if(item.type==1)// neu là báo cáo công việc
   //   {
   //     return (
   //       <View style={{alignSelf:"flex-end", marginTop:15,}}>
   //         {currenUser == assignUser && item.status == 1 ? (
   //           <View style={{flexDirection:"row"}}>
   //             <View style={{ backgroundColor: "#fcd3d3", borderRadius: 10, paddingVertical: 7 , width:70, alignItems:"center", borderWidth:1, borderColor:"#fd1818"}}>
   //               <Text style={{color:"#fd1818"}}>{"Từ chối"}</Text>
   //             </View>
   //             <View style={{ marginLeft:10, backgroundColor: "#c0dbf5", borderRadius: 10, paddingVertical: 7 , width:70, alignItems:"center", borderWidth:1, borderColor:"#1281e9"}}>
   //               <Text style={{color:"#148eff"}}>{"Duyệt"}</Text>
   //             </View>
   //           </View>
   //
   //         ) : null}
   //       </View>
   //
   //     )
   //   }
   //
   //
   // }

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
          dataListBaoCao?.length > 0 ? <FlatList
              data={dataListBaoCao}
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
