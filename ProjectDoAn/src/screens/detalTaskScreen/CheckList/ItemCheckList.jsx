import React, { useEffect, useState } from "react";
import { Text, Touchable, TouchableOpacity, View } from "react-native";
import IconTick from "../../../assets/icons/IconTick";
import IconUnlike from "../../../assets/icons/IconUnlike";
import IconUnTick from "../../../assets/icons/IconUnTick";
import FastImage from "react-native-fast-image";
import { baseUrlAvatarUser } from "../../../api/ConstBaseUrl";
import IconTickGreen from "../../../assets/icons/IconTickGreen";
import { actionSetStatusCheckList } from "../../../redux-store/actions/task";

 export const ItemCheckList = React.memo((props) => {
  const { item ,dispatch} = props;
  const [status, setStatus] = useState(0);

  useEffect(()=>{
       setStatus(item.status)
  },[item.status])
  const handleChangeStatus=async () => {
    if (status == 0) {
      setStatus(1)
      await dispatch(actionSetStatusCheckList(1, item.checkId))
    } else if (status == 1) {
      setStatus(0)
      await dispatch(actionSetStatusCheckList(0, item.checkId))
    }
  }
  return (
    <View style={{
       flexDirection:'row',
      marginLeft:10,
      marginVertical:5,
      justifyContent: "space-between",
        flex:1,
        alignItems:'center'

    }}>
      <View style={{ flexDirection: "row" ,flex:1,marginRight:20}}>
        <TouchableOpacity onPress={handleChangeStatus}>
          {status==0?<IconUnTick/>:<IconTickGreen/>}
        </TouchableOpacity>
        <Text  style={{
          fontSize: 15,
          color: "black",
          fontFamily: "OpenSans-Regular",
          marginHorizontal:10,
          flexWrap:"wrap",
            textDecorationLine: status==1?"line-through":"none"
        }}>{item.content}</Text>
      </View>
      <FastImage
        style={{ width: 20, height: 20,borderRadius: 20/2 ,overflow: "hidden"}}
        source={{
          uri: (baseUrlAvatarUser+item?.avatarUser)||''
        }}
        resizeMode={FastImage.resizeMode.stretch}

      />
    </View>
  );
});
