import { Text, TouchableOpacity } from "react-native";
import IconFileSmall from "../../../assets/icons/IconFileSmall";
import IconX from "../../../assets/icons/IconX";
import React from "react";

export const  RenderItemFile = React.memo((props) => {
  return(
    <TouchableOpacity onPress={()=>props.handleDelete(props.index)} style={{marginTop: 5, borderRadius:10,paddingVertical:2, borderWidth:1,borderColor:"#168cfa", alignItems:"center",height:90,width:70,marginRight:5}}>
        <IconX height={15} width={15} style={{alignSelf:"flex-end"}}/>
        <IconFileSmall/>
      <Text numberOfLines={3} style={{fontSize:10, color:"black",fontFamily:"OpenSans-Regular",marginHorizontal:5}}>{props.item?.name}</Text>
    </TouchableOpacity>
  )
})
