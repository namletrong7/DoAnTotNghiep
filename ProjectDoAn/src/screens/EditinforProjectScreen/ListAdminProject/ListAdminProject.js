/*
*  Đây là modal hiển thị danh sách user của project sử dụng ở màn hình add Task
* */
import React, { useState } from "react";
import {View, Text, TouchableOpacity, FlatList, Pressable} from "react-native";
import IconArrowUp from "../../../assets/icons/IconArrowLeft";
import IconArrowDown from "../../../assets/icons/IconArrowDown";
import IconGroupPeople2 from "../../../assets/icons/IconGroupPeople2";
import {ItemUserMemberProject} from "../ItemUserMember/itemUserMemberProject";
import IconUserAdmin from "../../../assets/icons/IconUserAdmin";

const ListAdminProject = ({listAdmin,handleItem}) => {
    const [isShowOption, setIsShowOption]=useState(true);
    return (
        <View>
                 <Pressable onPress={()=>setIsShowOption(!isShowOption)} style={{flexDirection:'row', justifyContent:'space-between',alignItems:"center",marginTop:25}}>
                     <View style={{flexDirection:'row'}}>
                         <IconUserAdmin/>
                         <Text style={{
                             fontSize: 15,
                             color: "black",
                             marginLeft:10,
                             fontFamily: "OpenSans-Regular",
                         }}>{"Quản trị viên "}<Text style={{
                             fontSize: 15,
                             color: "black",
                             marginLeft:10,
                             fontFamily: "OpenSans-Regular",
                         }}>{'('+listAdmin?.length+')'}</Text></Text>
                     </View>
                     {isShowOption?<IconArrowDown width={10} height={10} color={'black'}/>: <IconArrowUp width={10} height={10} color={'black'}/>}
                 </Pressable>
            {isShowOption?
            <View style={{marginTop:10,paddingHorizontal:20}}>
                <FlatList
                    data={listAdmin}
                    renderItem={({item}) => <ItemUserMemberProject item={item} handleItem={handleItem} typeOption={0}/>}
                    scrollEnabled={false}
                    keyExtractor={item => item.userId}
                />
            </View>:null}

        </View>
    );
}


export default React.memo(ListAdminProject);
