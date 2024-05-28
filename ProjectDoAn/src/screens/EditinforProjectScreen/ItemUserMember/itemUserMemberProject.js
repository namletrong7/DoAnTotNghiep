import React from "react";
import {Pressable, Text, View} from "react-native";
import FastImage from "react-native-fast-image";
import {baseUrlAvatarUser} from "../../../api/ConstBaseUrl";
import IconLoadMore from "../../../assets/icons/IconLoadMorer";
import IconInfo from "../../../assets/icons/IconInfo";
import IconInfor from "../../../assets/icons/IconInfor";
import IconMenu from "../../../assets/icons/IconMenu";

/**
 * Created by TuanTQd on 28/5/24
 */
export const ItemUserMemberProject=React.memo((props)=>{
    const {item,handleItem,typeOption}= props
    return (
        <View style={{flexDirection:"row",alignItems:'center',justifyContent:'space-between' }}>
        <View style={{marginVertical:5, alignItems:'center',flexDirection:'row'}}>
            <FastImage
                style={{ width: 35, height: 35,borderRadius: 35/2 ,overflow: "hidden",marginLeft:3}}
                source={{
                    uri: (baseUrlAvatarUser+item?.avatarUser)||''
                }}
                resizeMode={FastImage.resizeMode.preload}

            />
            <Text style={{fontSize:13,flexWrap:"wrap", color:"black",fontFamily:"OpenSans-SemiBold",marginLeft:5}}>{item.fullName}</Text>
        </View>
            <Pressable onPress={()=>handleItem(typeOption,item)}>
                <IconMenu width={20} height={20}/>
            </Pressable>
        </View>
    )
})
