import { Text, TextInput, View } from "react-native";
import React, { useEffect } from "react";

 export const TextInputComponent =React.memo((props)=> {
   return (
     <View style={{ marginVertical: 10 }}>
       <Text style={{ fontSize: 17, color: "black", fontFamily: "OpenSans-SemiBold" }}>{props.title}</Text>
       <TextInput
         value={props.textInput}
         onChangeText={props.setTextInput}
         multiline
         placeholder={props.placeHolder}
         style={{ height: props.height, borderRadius: 10, borderColor: "#4577ef", borderWidth: 0.5, marginTop: 10, textAlignVertical:"top", fontSize:14, fontFamily: "OpenSans-Regular" }}
       />
     </View>
   )
 })
