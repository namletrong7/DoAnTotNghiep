import React from "react";
import { Text, View } from "react-native";

   const RenderItemReportTask = (props) => {
  const {item} = props
  return (
    <View style={{
      marginTop: 10,
      paddingTop: 10,
      paddingBottom:20,
      paddingHorizontal: 10,
      borderRadius: 10,
      borderColor: "#DDDDDD",
      borderWidth:1.5,
      justifyContent: "flex-start",

    }}>
      <View style={{ flexDirection:"row" }}>
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

      <View style={{ flexDirection:"row", marginTop:10 }}>
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



    </View>
  );
}
export  default React.memo(RenderItemReportTask)
