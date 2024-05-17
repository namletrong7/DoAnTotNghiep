import { Text, TextInput, View } from "react-native";
import React, { useEffect } from "react";
import IconContent from "../../assets/icons/ItemContent";
import IconEdit2 from "../../assets/icons/IconEdit2";

 export const TextInputComponent =React.memo((props)=> {
    const {title,textInput,setTextInput,placeHolder,height,inputRef,background, setBackground} = props
   return (
     <View style={{ marginVertical: 10 }}>
       <Text style={{ fontSize: 15, color: "black", fontFamily: "OpenSans-SemiBold" }}>{title} <Text style={{ fontSize: 15, color: "red", fontFamily: "OpenSans-SemiBold" }}>*</Text></Text>
         <View style={{borderRadius: 10, backgroundColor: "#DDDDDD",marginTop:5,flexDirection:'row',justifyContent:'center',paddingHorizontal:5, borderColor:background, borderWidth:0.7}} >
             <TextInput
                 value={textInput}
                 ref={inputRef}
                 onChangeText={setTextInput}
                 onFocus={()=>{setBackground('#148EFF')}}
                 onBlur={()=>{setBackground("transparent")}}
                 multiline
                 placeholder={placeHolder}
                 style={{ height: height,flex:1, textAlignVertical:"center", fontSize:14, fontFamily: "OpenSans-Regular"}}
             />
         </View>
         {background==='red'?
         <Text style={{ fontSize: 12, color: "red", fontFamily: "OpenSans-SemiBold" }}>{"Vui long nhap tieu de task"} </Text>:null}

     </View>
   )
 })
