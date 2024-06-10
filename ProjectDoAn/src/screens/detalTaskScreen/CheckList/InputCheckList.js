import React, {useEffect, useState} from "react";
import {StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity, View} from "react-native";
import IconUnTick from "../../../assets/icons/IconUnTick";
import IconPlus from "../../../assets/icons/IconPlus";
import {useDispatch} from "react-redux";
import {actionAddCheckList} from "../../../redux-store/actions/task";



const InputCheckList = (props) => {
    const {taskId}=props
    const [content, setContent] = useState('');
    const dispatch = useDispatch();
    const addCheckList=async () => {
        await dispatch(actionAddCheckList(taskId, content))
        setContent('')
    }
    return (
      <KeyboardAvoidingView keyboardVerticalOffset={10} behavior='padding'>
        <View style={styles.container}>
            <IconUnTick/>
            <TextInput
                multiline
                value={content}
                onChangeText={setContent}
                placeholderTextColor={"gray"}
                placeholder={"Nhập nội dung checklist.."}
                style={styles.textinput}
            />
            <TouchableOpacity onPress={addCheckList} style={{paddingHorizontal:7, paddingVertical:4, backgroundColor:"#CCCCCC",borderRadius:14}}>
                <IconPlus width={22} height={22}/>
            </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
};
const styles = StyleSheet.create({
    container: {
        flexDirection:"row",flex:1,marginLeft:10,alignItems:"center",maxHeight:50
    },
    textinput:{
        flex:1,color:'black', fontSize:14, fontFamily: "OpenSans-Regular"
    }

});
export default React.memo(InputCheckList);
