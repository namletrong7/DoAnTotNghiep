import { Text, TouchableOpacity, View } from "react-native";
import IconDate from "../../assets/icons/IconDate";
import React, { useState } from "react";
import DateTimePicker from "react-native-modal-datetime-picker";
import { converPickerDate } from "../../utils/ConverPickerDate";

 export  const DatePickerComponent =React.memo((props)=>{



  return(
    <View style={{flexDirection:'row',marginTop:15}}>
      <TouchableOpacity onPress={props.setShowModal} style={{backgroundColor:"#4577ef", borderRadius:15, padding:5, height:50,width:50 , alignItems:'center', justifyContent:"center"}}>
        <IconDate/>
      </TouchableOpacity>
      <View style={{marginLeft:10 , justifyContent:"space-around"}}>
        <Text style={{ fontSize: 15, color: "black", fontFamily: "OpenSans-Regular" }}>{props?.title||''}</Text>
        <Text style={{ fontSize: 15, color: "black", fontFamily: "OpenSans-Regular" }}>{props?.dateContent||''}</Text>
      </View>
      <DateTimePicker
        isVisible={props.isShowModal||false}
        mode="date"
        onCancel={props.setHideModal}
        onConfirm={props.onConfrim}
      />
    </View>
  )
})
