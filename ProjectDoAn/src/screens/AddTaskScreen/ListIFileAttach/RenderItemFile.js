import { Text, TouchableOpacity } from "react-native";
import IconFileSmall from "../../../assets/icons/IconFileSmall";
import IconX from "../../../assets/icons/IconX";
import React from "react";

export const  RenderItemFile = React.memo((props) => {
  return(
    <TouchableOpacity onPress={()=>props.handleDelete(props.index)} style={{marginTop: 5,paddingVertical:5,paddingHorizontal:5, borderRadius:20, backgroundColor:"#CCCCCC",flexDirection:"row", alignItems:"center",justifyContent:"space-around",flex:0.5,height:50,marginRight:5}}>
      <IconFileSmall/>
      <Text style={{marginLeft:10,flex:0.9,fontSize:13, color:"black",fontFamily:"OpenSans-SemiBold",marginRight:10, }}>{props.item.name}</Text>
      <IconX/>
    </TouchableOpacity>
  )
})
