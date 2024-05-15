import {Dimensions, StyleSheet, Text, View} from "react-native";
import IconLoadMore from "../../../assets/icons/IconLoadMorer";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import {ItemBoard} from "./ItemBoard";
import IconProgress from "../../../assets/icons/IconProgress";
import IconUnTick from "../../../assets/icons/IconUnTick";
import IconTickGreen from "../../../assets/icons/IconTickGreen";
import IconDone from "../../../assets/icons/IconDone";
import IconCalendar from "../../../assets/icons/IconCalendar";
import IconTodo from "../../../assets/icons/IconTodo";
import {useSelector} from "react-redux";
export const BoardTask = React.memo(() =>{
    const dataNumTask = useSelector(state => state.auth.dataNumTask);
     return (
         <View>
             <View style={styles.container}>
                 <View style={[styles.containerBoard,{backgroundColor:"#836FFF"}]}>
                     <View style={styles.backgroundIcon}>
                         <IconProgress/>
                     </View>
                     <View >
                         <Text style={styles.textStyleTitle}>{"Đang xử lý"}</Text>
                         <Text style={styles.textStyleContent}>{dataNumTask?.numTaskDoing+" công việc"}</Text>
                     </View>
                 </View>
                 <View style={[styles.containerBoard,{backgroundColor:'#7FFFD4'}]}>
                     <View style={styles.backgroundIcon}>
                         <IconDone color={"white"}/>
                     </View>
                     <View >
                         <Text style={styles.textStyleTitle}>{"Đã hoàn thành"}</Text>
                         <Text style={styles.textStyleContent}>{dataNumTask?.numTaskDone+" công việc"}</Text>
                     </View>
                 </View>
             </View>
             <View style={styles.container}>
                 <View style={[styles.containerBoard,{backgroundColor:"#CD853F"}]}>
                     <View style={styles.backgroundIcon}>
                         <IconCalendar color={"white"}/>
                     </View>
                     <View >
                         <Text style={styles.textStyleTitle}>{"Quá hạn"}</Text>
                         <Text style={styles.textStyleContent}>{dataNumTask?.numTaskOutDate+" công việc"}</Text>
                     </View>
                 </View>
                 <View style={[styles.containerBoard,{backgroundColor:"#CCCCCC"}]}>
                     <View style={styles.backgroundIcon}>
                         <IconTodo/>
                     </View>
                     <View >
                         <Text style={styles.textStyleTitle}>{"Cần xử lý"}</Text>
                         <Text style={styles.textStyleContent}>{"20 công việc"}</Text>
                     </View>
                 </View>
             </View>
         </View>

     )
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:"row",
        justifyContent:'space-between',
        marginVertical:5,
    },
    containerBoard:{
        flex:0.49,borderRadius:10,flexDirection:'row',paddingHorizontal:5, paddingVertical:9,backgroundColor:"red",
        alignItems:'center',
    },
    textStyleTitle:{
        fontSize: 14, color: "black",marginLeft:5, fontFamily: "OpenSans-SemiBold",flex:1
    },
    textStyleContent:{
        fontSize: 11, color: "black",marginLeft:5, fontFamily: "OpenSans-Regular",flex:1
    },
    backgroundIcon:{
        width:33, height:33, borderRadius:33/2,backgroundColor:"#999999",alignItems:'center',justifyContent:'center'
    }

});
