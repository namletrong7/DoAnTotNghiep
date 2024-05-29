import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {getColorStateProject, getStateProject} from "../../../utils/GetPriority";
import Modal from "react-native-modal";
import IconUserLeave from "../../../assets/icons/IconUserLeave";
import IconAddUser from "../../../assets/icons/IconAddUser";

/**
 * Created by TuanTQd on 28/5/24
 */
export const ModalOptionForAdmin=React.memo(({isVisible,onClose,typeOption,onEditRoleProject})=>{
    return (
        <Modal
            onBackdropPress={onClose}
            onBackButtonPress={onClose}
            animationType="slide"
            swipeDirection='down'
            onSwipeComplete={onClose}
            animationIn={"bounceInUp"}
            animationOut={"bounceOutDown"}
            animationInTiming={900}
            animationOutTiming={500}
            backdropTransitionInTiming={1000}
            backdropTransitionOutTiming={500}
            transparent={true}
            visible={isVisible}
            style={{  justifyContent: "flex-end",
                margin: 0,}}
        >
            <View  style={styles.modalContainer} >
                 <TouchableOpacity onPress={()=>onEditRoleProject(2)} style={styles.rowContent}>
                       <IconUserLeave/>
                       <Text style={styles.textStyle}>{"Xóa khỏi dự án"} </Text>
                 </TouchableOpacity>
                {typeOption===0?
                <TouchableOpacity onPress={()=>onEditRoleProject(0)} style={styles.rowContent}>
                    <IconUserLeave/>
                    <Text style={styles.textStyle}>{"Gỡ vai trò quản trị viên"} </Text>
                </TouchableOpacity>:null}
                {typeOption===1?
                <TouchableOpacity onPress={()=>onEditRoleProject(1)} style={styles.rowContent}>
                <IconAddUser/>
                    <Text style={styles.textStyle}>{"Thêm làm quản trị viên"} </Text>
                </TouchableOpacity>:null}
            </View>
        </Modal>
    )
})
const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: "#f5f5f5",
        paddingTop: 12,
        paddingHorizontal: 12,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        height: '15%',
        paddingBottom: 20,
        borderColor:'#444444',
        borderWidth:0.5
    },
    rowContent:{
        flexDirection:"row",marginTop:15
    },
    textStyle:{
        fontSize: 15,
        color: 'black',
        fontFamily: "OpenSans-Regular",
        paddingHorizontal: 10
    }

});
