/**
 * Componet hiên thị loadmore comment
 */

import React, { useEffect, useState } from "react";
import {
  Dimensions, Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import IconBox from "../../assets/icons/IconBox";
import IconEmptytask from "../../assets/icons/IconEmptyTask";


export  const EmptyTask =React.memo(() => {

    return (
        <View style={{marginTop:10,justifyContent:'center',alignItems:'center'}}>
        <IconEmptytask/>
          <Text style={{fontSize:17, color:"gray",fontFamily:"OpenSans-SemiBold"}}>{"Không có công việc nào"}</Text>

        </View>



    );
  }
)
const styles = StyleSheet.create({
  container: {
    display:"flex",
  },

});


