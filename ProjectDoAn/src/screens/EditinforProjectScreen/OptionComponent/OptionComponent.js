/*
*  Đây là modal hiển thị danh sách user của project sử dụng ở màn hình add Task
* */
import React, { useState } from "react";
import {View, Text, Modal, TouchableOpacity, StyleSheet, FlatList, ActivityIndicator, Pressable} from "react-native";
import FastImage from "react-native-fast-image";
import { useSelector } from "react-redux";
import IconSetting from "../../../assets/icons/IconSetting";
import IconArrowUp from "../../../assets/icons/IconArrowLeft";
import IconUserLeave from "../../../assets/icons/IconUserLeave";
import IconDelete from "../../../assets/icons/IconDelete";
import IconArrowRight from "../../../assets/icons/IconArrowRigth";
import IconArrowDown from "../../../assets/icons/IconArrowDown";

const OptionComponent = ({onShowDialogLeave,onShowDialogLeaveProject,isAdmin, isMember}) => {
    const [isShowOption, setIsShowOption]=useState(true);

    return (
        <TouchableOpacity>

                 <Pressable onPress={()=>setIsShowOption(!isShowOption)} style={{flexDirection:'row', justifyContent:'space-between',alignItems:"center",marginTop:20}}>
                     <View style={{flexDirection:'row'}}>
                         <IconSetting/>
                         <Text style={{
                             fontSize: 15,
                             color: "black",
                             marginLeft:10,
                             fontFamily: "OpenSans-Regular",
                         }}>{"Tùy chọn"}</Text>
                     </View>
                     {isShowOption?<IconArrowDown width={10} height={10} color={'black'}/>: <IconArrowUp width={10} height={10} color={'black'}/>}
                 </Pressable>
            {isShowOption?
            <View style={{marginTop:10,paddingHorizontal:20}}>
                {/*là thành viên dự án thì mới có quyền rời dự án*/}
                {isMember?
                <TouchableOpacity onPress={onShowDialogLeave} style={{flexDirection:'row',alignItems:"center"}}>
                    <IconUserLeave/>
                    <Text style={{
                        fontSize: 15,
                        color: "black",
                        marginLeft:10,
                        fontFamily: "OpenSans-Regular",
                    }}>{"Rời dự án"}</Text>
                </TouchableOpacity>:null}
                {/*là quản trị viên thì mới quyền xóa dự án*/}
                {isAdmin?
                    <TouchableOpacity onPress={onShowDialogLeaveProject} style={{flexDirection:'row',alignItems:"center",top:10}}>
                        <IconDelete width={24} height={24}/>
                        <Text style={{
                            fontSize: 15,
                            color: "black",
                            marginLeft:10,
                            fontFamily: "OpenSans-Regular",
                        }}>{"Xóa dự án"}</Text>

                </TouchableOpacity>:null}
            </View>:null}

        </TouchableOpacity>
    );
}


export default React.memo(OptionComponent);
