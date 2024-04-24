import { Text, TouchableOpacity, View } from "react-native";
import IconDate from "../../assets/icons/IconDate";
import React, { useState } from "react";
import DateTimePicker from "react-native-modal-datetime-picker";
import { converPickerDate } from "../../utils/ConverPickerDate";
import IconCalendar from "../../assets/icons/IconCalendar";
import IconLich from "../../assets/icons/IconLich";

 export  const DatePickerComponent =React.memo((props)=>{



  return(
    <TouchableOpacity onPress={props.setShowModal} style={{flexDirection:'row',marginTop:15,alignItems:'center'}}>
        <IconLich/>
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
    </TouchableOpacity>
  )
})
