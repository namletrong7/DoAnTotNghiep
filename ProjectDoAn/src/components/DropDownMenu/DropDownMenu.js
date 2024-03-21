import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect } from "react";
import { Dropdown } from "react-native-element-dropdown";

export const DropDownMenu =React.memo((props)=> {

  return (
    <View style={{marginTop:10}}>
      <Text style={{ fontSize: 17, color: "black", fontFamily: "OpenSans-SemiBold" }}>{props.title}</Text>



      <Dropdown
        style={{
          height: 50,
          borderColor: '#4577ef',
          borderWidth: 0.5,
          borderRadius: 8,
          paddingHorizontal: 8,
          marginTop:10
        }}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={[styles.selectedTextStyle,{fontSize:14, color:"black", fontFamily:"OpenSans-SemiBold"}]}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        placeholder={props.label}
        itemTextStyle={{fontSize:14, color:"black", fontFamily:"OpenSans-SemiBold"}}
        data={props?.data||[]}
        search
        maxHeight={200}
        labelField="label"
        valueField="value"
        searchPlaceholder="Tim kiếm.."
        value={props?.value}
        onChange={props.onSelectItem}
      />
    </View>

  )
})
const styles = StyleSheet.create({
  container: {
    display:"flex",
    backgroundColor:"#EEEEEE"
  },
  dropdown: {
    height: 50,
    borderColor: '#4577ef',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
});
