/**
 * Componet hiển thị danh sách file đính kèm của 1 công việc nhiệm vụ được giao
 */

import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  SafeAreaView, ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";

import AppNavigator from "../../navigation/AppNavigator";
import IconFlag from "../../assets/icons/IconArrowDown";
import FastImage from 'react-native-fast-image'
import { getColorBackgroundPriority, getColorPriority, getValuePriority } from "../../utils/GetPriority";
import IconPdf from "../../assets/icons/IconPdf";
import IconDoc from "../../assets/icons/IconDoc";
import IconXLS from "../../assets/icons/IconXLS";
import IconFile from "../../assets/icons/IconFile";
import IconDownLoad from "../../assets/icons/IconDownLoad";
import IconArrowDown from "../../assets/icons/IconArrowDown";
import IconArrowUp from "../../assets/icons/IconArrowLeft";
import { ShimmerEffectCommentComponent } from "../shimmerEfffect/ShimmerEffectComment/ShimmerEffectCommentComponent";


 export  const ListFileAttachComponent =React.memo((props) => {
  const [seeAll, setSeeAll] = useState(true); // xem có nên xem hết file hay không
  console.log("redner lại list file ");
  console.log(props);
  useEffect(() => {
    console.log("did mout lại list file");
  }, []);
  const RenderIcon = (props) => {
    var Extension =  props.extension.toLowerCase()
    if(Extension==='pdf'){
      return(
        <IconPdf/>
      )
    }
     else if (Extension==='doc' || Extension==='docx') {
      return (
        <IconDoc />
      )
    }
    else if (Extension==='xls' || Extension==='xlsx'){
        return(
          <IconXLS/>
        )
    }else{
        return (
          <IconFile/>
        )
    }

  };

  const RenderItemFile = (props) => {
    return(
      <View style={{marginTop: 10,paddingVertical:5,paddingHorizontal:5, borderRadius:16, backgroundColor:"white",flexDirection:"row", alignItems:"center",justifyContent:"flex-start",flex:1}}>
        <View style={{flex:0.1}}>
          <RenderIcon extension = {props.item.extension}/>
        </View>
        <Text numberOfLines={2} style={{fontSize:15, color:"black",fontFamily:"OpenSans-Regular",textAlign:"left",maxWidth:'70%',flex:0.8}}>{props.item.fileName}</Text>
        <View style={{flex:0.1}}>
        <IconDownLoad/>
        </View>
      </View>
    )
  };
  return (
    <View style={styles.container}>

      <TouchableOpacity style={{flexDirection:"row",justifyContent:"space-between"}} onPress={() => {setSeeAll(!seeAll)}}>
        <Text style={{fontSize:18, color:"black",fontFamily:"OpenSans-SemiBold"}} numberOfLines={10}>{"File đính kèm"}</Text>
         <View>
           {seeAll? <IconArrowDown/>:<IconArrowUp/>}
         </View>
      </TouchableOpacity>
      {seeAll?(
        props?.data?.length>0?  <FlatList
            data={props.data}
            scrollEnabled={false}
            renderItem={({item}) => <RenderItemFile item={item} />}
            keyExtractor={item => item.fileId}
          />:
          <Text style={{fontSize:15, color:"black",fontFamily:"OpenSans-Regular",marginTop:15}} numberOfLines={10}>{"Không có file đính kèm cho công việc này"}</Text>
        ):null}

    </View>
  );
}
)
const styles = StyleSheet.create({
  container: {
    display:"flex",
    marginTop: 19
  },

});

// export default React.memo(ListFileAttachComponent);
