import { Text, TouchableOpacity, View } from "react-native";
import IconFileSmall from "../../../assets/icons/IconFileSmall";
import IconX from "../../../assets/icons/IconX";
import React from "react";
import IconDelete from "../../../assets/icons/IconDelete";
import IconFile from "../../../assets/icons/IconFile";
import IconFileSmallViolet from "../../../assets/icons/IconFileSmallViolet";
import { formatFileSize } from "../../../utils/formatFileSize";

export const  ItemFile = React.memo((props) => {
  return(
    <View style={{marginTop: 5, borderRadius:8,paddingVertical:10, borderWidth:1,borderColor:"#c4acfc",paddingHorizontal:5,borderStyle:"dotted",flexDirection:"row"}}>
        <IconFileSmallViolet style={{alignSelf:"center"}}  width={30} height={30} />
      <View style={{flex:0.99,alignSelf:'center'}}>
        <Text numberOfLines={2} style={{fontSize:15,flex:1,flexWrap:'wrap', color:"black",fontFamily:"OpenSans-SemiBold",marginHorizontal:5}}>{props.item?.name}</Text>
        <Text numberOfLines={2} style={{marginTop:5,fontSize:15, color:"black",fontFamily:"OpenSans-Regular",marginHorizontal:5}}>{formatFileSize(props.item?.size)}</Text>
      </View>

       <TouchableOpacity  onPress={()=>props.handleDelete(props.index)} style={{alignSelf:"center"}} >
         <IconDelete  width={20} height={20}/>
       </TouchableOpacity>

    </View>
  )
})
