import React, { useEffect, useState } from "react";
import { Text, Touchable, TouchableOpacity, View } from "react-native";
import IconTick from "../../../assets/icons/IconTick";
import IconUnlike from "../../../assets/icons/IconUnlike";
import IconUnTick from "../../../assets/icons/IconUnTick";
import FastImage from "react-native-fast-image";
import { baseUrlAvatarUser } from "../../../api/ConstBaseUrl";

const ItemCheckList = (props) => {
  const { item } = props;
  const [status, setStatus] = useState(0);

  useEffect(()=>{
       setStatus(item.status)
  },[item.status])
  const handleTich=()=>{
     if(status==0){
       setStatus(1)
     }
     else if(status==1){
       setStatus(0)
     }
  }
  return (
    <View style={{
       flexDirection:'row',
      marginLeft:10,
      marginVertical:5,
      justifyContent: "space-between",

    }}>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={handleTich}>
          {status==0?<IconUnTick/>:<IconTick/>}

        </TouchableOpacity>
        <Text  style={{
          fontSize: 15,
          color: "black",
          fontFamily: "OpenSans-Regular",
          marginHorizontal:10,
          flexWrap:"wrap"
        }}>{item.content}</Text>
      </View>
      <FastImage
        style={{ width: 25, height: 25,borderRadius: 25/2 ,overflow: "hidden"}}
        source={{
          uri: (baseUrlAvatarUser+item?.avatarUser)||''
        }}
        resizeMode={FastImage.resizeMode.stretch}

      />
    </View>
  );
};
export default React.memo(ItemCheckList);
