import React from "react";
import { Text, View } from "react-native";
import RenderActionReport from "./RenderActionReport";
import { useSelector } from "react-redux";
import { getTimeDifference } from "../../../utils/ConverPickerDate";

   const RenderItemReportTask = (props) => {
             const {item,assignUser, targetUser,openAnserReport,openAcceptAnswerReport} = props
     const dataCurrentUser = useSelector(state => state.auth.dataCurrentUser);
  return (
    <View style={{
      marginTop: 5,
      paddingTop: 5,
      paddingBottom:10,
      paddingHorizontal: 10,
      borderRadius: 10,
      borderColor: "#DDDDDD",
      borderWidth:1.5,
      justifyContent: "flex-start",

    }}>
      <Text style={{ fontSize: 13, color: 'black' , backgroundColor:"#f4f7fc",alignSelf:"flex-start",padding:3}}>{getTimeDifference(item?.timeCreate)}</Text>
      <View style={{ flexDirection:"row",marginTop:5 }}>
        <Text numberOfLines={2} style={{
          fontSize: 14,
          color: "black",
          fontFamily: "Roboto-Bold",
          textAlign: "left",
        }}>{props.item.fullName+":"} <Text numberOfLines={2} style={{
          fontSize: 14,
          color: item?.type==0?"#0066FF":"#00CC33",
          fontFamily: "Roboto-Bold",
          textAlign: "left",
          flexWrap:"wrap"
        }}>{props.item.type==0?"Yêu cầu báo cáo công việc":"Báo cáo công việc"}</Text></Text>
      </View>

      <View style={{ flexDirection:"row", marginTop:5 }}>
        <Text style={{
          fontSize: 14,
          color: "black",
          fontFamily: "Roboto-Bold",
        }}>{"Ý kiến : "} <Text  style={{
          fontSize: 14,
          color: "black",
          fontFamily: "OpenSans-Regular",
          marginHorizontal:10,
          flexWrap:"wrap"
        }}>{item.content}</Text></Text>
      </View>

      <View style={{alignSelf:"flex-end",marginTop:5}}>
          <RenderActionReport openAcceptAnswerReport={openAcceptAnswerReport} openAnserReport={openAnserReport} item={item} assignUser={assignUser} targetUser = {targetUser} currentUserId ={dataCurrentUser?.userId}/>
      </View>

    </View>
  );
}
export  default React.memo(RenderItemReportTask)
