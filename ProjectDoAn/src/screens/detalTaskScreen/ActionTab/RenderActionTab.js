import {Text, TouchableOpacity, View} from "react-native";
import IconReport from "../../../assets/icons/IconReport";
import IconPin from "../../../assets/icons/IconProhress";
import IconDone from "../../../assets/icons/IconDone";
import IconChangehuman from "../../../assets/icons/IconChangeHuman";
import IconCalendar from "../../../assets/icons/IconCalendar";
import React from "react";
import {useSelector} from "react-redux";

/**
 * Created by TuanTQd on 21/03/2024
 */
 export  const RenderActionTask=React.memo((props)=>{
    const currentUser = useSelector(state => state.auth.dataCurrentUser.userId);
    return(
        <View style={{marginTop:10}}>
            <View style={{flexDirection:"row", justifyContent:"space-around", flexWrap:"wrap"}}>
                {props.targetUser==currentUser&&
                <TouchableOpacity onPress={props.openDialogReport} style={{flexDirection:"row"}}>
                    <IconReport/>
                    <Text style={{fontSize:14, color:"#0066FF",fontFamily:"OpenSans-Regular",marginLeft:5}}>{"Báo cáo"}</Text>
                </TouchableOpacity>}
                <TouchableOpacity onPress={props.openDialogProgress} style={{flexDirection:"row"}}>
                    <IconPin/>
                    <Text style={{fontSize:14, color:"#0066FF",fontFamily:"OpenSans-Regular",marginLeft:5}}>{"Tiến độ"}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={props.openDialogDone} style={{flexDirection:"row"}}>
                    <IconDone/>
                    <Text style={{fontSize:14, color:"#0066FF",fontFamily:"OpenSans-Regular",marginLeft:5}}>{"Hoàn thành"}</Text>
                </TouchableOpacity>
                <View style={{flexDirection:"row",marginTop:10}}>
                    <IconChangehuman/>
                    <Text style={{fontSize:14, color:"#0066FF",fontFamily:"OpenSans-Regular",marginLeft:5}}>{"Thay đổi người giao"}</Text>
                </View>
                <View style={{flexDirection:"row",marginTop:10}}>
                    <IconChangehuman/>
                    <Text style={{fontSize:14, color:"#0066FF",fontFamily:"OpenSans-Regular",marginLeft:5}}>{"Thay đổi người xử lý"}</Text>
                </View>
                {props.assignUser==currentUser&&
                <TouchableOpacity onPress={props.openDialogRequestReport} style={{flexDirection:"row",marginTop:10}}>
                    <IconReport/>
                    <Text style={{fontSize:14, color:"#0066FF",fontFamily:"OpenSans-Regular",marginLeft:5,}}>{"Y/C Báo cáo"}</Text>
                </TouchableOpacity>}
                <View style={{flexDirection:"row",marginTop:10}}>
                    <IconCalendar/>
                    <Text style={{fontSize:14, color:"#0066FF",fontFamily:"OpenSans-Regular",marginLeft:5}}>{"Gia hạn"}</Text>
                </View>
            </View>



        </View>


    )
})
