import {Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import IconReport from "../../../assets/icons/IconReport";
import IconPin from "../../../assets/icons/IconProhress";
import IconDone from "../../../assets/icons/IconDone";
import IconChangehuman from "../../../assets/icons/IconChangeHuman";
import IconCalendar from "../../../assets/icons/IconCalendar";
import React, {useCallback} from "react";
import {useSelector} from "react-redux";
import {
    BottomSheetBackdrop,
    BottomSheetModal,
    BottomSheetModalProvider,
    BottomSheetScrollView
} from "@gorhom/bottom-sheet";
import {getColorBackgroundPriority, getColorPriority, getValuePriority} from "../../../utils/GetPriority";
import IconDelete from "../../../assets/icons/IconDelete";
import IconCopy from "../../../assets/icons/IconCopy";
import IconEdit from "../../../assets/icons/IconEdit";
import IconEdit2 from "../../../assets/icons/IconEdit2";
import { actionDeleteComment } from "../../../redux-store/actions/task";

/**
 * Created by TuanTQd on 21/03/2024
 */
 export  const RenderActionComment=React.memo((props)=>{
    const currentUser = useSelector(state => state.auth.dataCurrentUser.userId);
    const renderBackdrop = useCallback(
        (props) => {
            return <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />;
        },
        []
    );

    const handleDeleteComment=async () => {
      await props.dispatch(actionDeleteComment(props?.commentSelected?.commentId))
      props.refChangeActionComment.current?.dismiss();
    }
    return(
        <BottomSheetModalProvider>
            <BottomSheetModal
                ref={props.refChangeActionComment}
                enablePanDownToClose={true}
                backdropComponent={renderBackdrop}
                snapPoints={['35%']}>
                <BottomSheetScrollView  >
                    <View style={{paddingHorizontal:20, backgroundColor:"white",paddingBottom:200,justifyContent:"center"}}>
                        <TouchableOpacity onPress={props.copyToClipboard} style={{flexDirection:"row",marginTop:10}}>
                            <IconCopy/>
                            <Text style={{fontSize:14, color:"black",fontFamily:"OpenSans-Regular",marginLeft:10}}>{"Sao chép"}</Text>
                        </TouchableOpacity>
                        {currentUser===props?.commentSelected?.createUser&&
                        <TouchableOpacity onPress={props.openDialogEditComment} style={{flexDirection:"row",marginTop:20}}>
                            <IconEdit2/>
                            <Text style={{fontSize:15, color:"black",fontFamily:"OpenSans-Regular",marginLeft:10,}}>{"Sửa"}</Text>
                        </TouchableOpacity>}
                        {currentUser===props?.commentSelected?.createUser&&
                        <TouchableOpacity onPress={handleDeleteComment} style={{flexDirection:"row",marginTop:20}}>
                            <IconDelete />
                            <Text style={{fontSize:15, color:"black",fontFamily:"OpenSans-Regular",marginLeft:10}}>{"Xóa"}</Text>
                        </TouchableOpacity>}

                    </View>
                </BottomSheetScrollView>
            </BottomSheetModal>
        </BottomSheetModalProvider>

    )
})

