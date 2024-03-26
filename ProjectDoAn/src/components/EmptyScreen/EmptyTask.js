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


export  const EmptyTask =React.memo(() => {

    return (
        <View style={{marginTop:10,justifyContent:'center',alignItems:'center'}}>
          <Image
            source={require('../../../src/assets/images/empty_box.png')} // Đường dẫn đến tập tin ảnh PNG
            style={{ width: 200, height: 200 }} // Kích thước của ảnh
          />
          <Text style={{fontSize:17, color:"black",fontFamily:"OpenSans-SemiBold"}}>{"Không có công việc nào"}</Text>

        </View>



    );
  }
)
const styles = StyleSheet.create({
  container: {
    display:"flex",
  },

});


