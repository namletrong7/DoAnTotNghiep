import { Text, TextInput, View } from "react-native";
import React, { useEffect } from "react";
import IconContent from "../../assets/icons/ItemContent";
import IconEdit2 from "../../assets/icons/IconEdit2";

 export const TextInputComponent =React.memo((props)=> {
   return (
     <View style={{ marginVertical: 10 }}>
       <Text style={{ fontSize: 15, color: "black", fontFamily: "OpenSans-SemiBold" }}>{props.title}</Text>
         <View style={{borderRadius: 10, backgroundColor: "#DDDDDD",flexDirection:'row',alignItems:'center',paddingHorizontal:5}} >
             <IconEdit2 width={20} height={20}/>
             <TextInput
                 value={props.textInput}
                 onChangeText={props.setTextInput}
                 multiline
                 placeholder={props.placeHolder}
                 style={{ height: props.height,flex:1, textAlignVertical:"top", fontSize:14, fontFamily: "OpenSans-Regular" }}
             />
         </View>

     </View>
   )
 })
