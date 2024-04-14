import { Text, TouchableOpacity, View} from "react-native";
import IconReport from "../../../assets/icons/IconReport";
import IconPin from "../../../assets/icons/IconProhress";
import IconChangehuman from "../../../assets/icons/IconChangeHuman";
import IconCalendar from "../../../assets/icons/IconCalendar";
import React, {useCallback} from "react";
import {useSelector} from "react-redux";
import { ScrollView } from 'react-native-gesture-handler';
import {
    BottomSheetBackdrop,
    BottomSheetModal,
    BottomSheetModalProvider,
    BottomSheetScrollView
} from "@gorhom/bottom-sheet";
import {getColorBackgroundPriority, getColorPriority, getValuePriority} from "../../../utils/GetPriority";
import IconDelete from "../../../assets/icons/IconDelete";

/**
 * Created by TuanTQd on 21/03/2024
 */
 export  const RenderActionTask=React.memo((props)=>{
    const currentUser = useSelector(state => state.auth.dataCurrentUser.userId);
    const renderBackdrop = useCallback(
        (props) => {
            return <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />;
        },
        []
    );
    // const closeActionTab=()=>{
    //   props.refChangeActionTab.current?.dismiss();
    // }

    return(
        <BottomSheetModalProvider>
            <BottomSheetModal
                ref={props.refChangeActionTab}
                enablePanDownToClose={true}
                backdropComponent={renderBackdrop}
                snapPoints={['58%']}>
                <ScrollView  >
                    <View style={{paddingHorizontal:20, backgroundColor:"white",paddingBottom:200,justifyContent:"center"}}>
                        {props.targetUser===currentUser&&
                        <TouchableOpacity onPress={props.openDialogReport} style={{flexDirection:"row",marginTop:10}}>
                            <IconReport/>
                            <Text style={{fontSize:14, color:"black",fontFamily:"OpenSans-Regular",marginLeft:10}}>{"Báo cáo"}</Text>
                        </TouchableOpacity>}
                        {props.assignUser===currentUser&&
                        <TouchableOpacity onPress={props.openDialogRequestReport} style={{flexDirection:"row",marginTop:20}}>
                            <IconReport/>
                            <Text style={{fontSize:15, color:"black",fontFamily:"OpenSans-Regular",marginLeft:10,}}>{"Y/C Báo cáo"}</Text>
                        </TouchableOpacity>}
                        <TouchableOpacity onPress={props.openDialogProgress} style={{flexDirection:"row",marginTop:20}}>
                            <IconPin/>
                            <Text style={{fontSize:15, color:"black",fontFamily:"OpenSans-Regular",marginLeft:10}}>{"Tiến độ"}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{props.openBottomEditUser(0)}} style={{flexDirection:"row",marginTop:20}}>
                            <IconChangehuman/>
                            <Text style={{fontSize:15, color:"black",fontFamily:"OpenSans-Regular",marginLeft:10}}>{"Thay đổi người giao"}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{props.openBottomEditUser(1)}} style={{flexDirection:"row",marginTop:20}}>
                            <IconChangehuman/>
                            <Text style={{fontSize:15, color:"black",fontFamily:"OpenSans-Regular",marginLeft:10}}>{"Thay đổi người xử lý"}</Text>
                        </TouchableOpacity>

                        <View style={{flexDirection:"row",marginTop:20}}>
                            <IconCalendar  width={25}
                                           height={25}/>
                            <Text style={{fontSize:15, color:"black",fontFamily:"OpenSans-Regular",marginLeft:10}}>{"Thay đổi ngày bắt đầu"}</Text>
                        </View>
                        <View style={{flexDirection:"row",marginTop:20}}>
                            <IconCalendar  width={25}
                                           height={25}/>
                            <Text style={{fontSize:15, color:"black",fontFamily:"OpenSans-Regular",marginLeft:10}}>{"Gia hạn xử lý"}</Text>
                        </View>
                        <TouchableOpacity onPress={props.onpenDialogDelete} style={{flexDirection:"row",marginTop:20}}>
                            <IconDelete />
                            <Text style={{fontSize:15, color:"black",fontFamily:"OpenSans-Regular",marginLeft:10}}>{"Xóa công việc"}</Text>
                        </TouchableOpacity>

                    </View>
                </ScrollView>
            </BottomSheetModal>
        </BottomSheetModalProvider>

    )
})

