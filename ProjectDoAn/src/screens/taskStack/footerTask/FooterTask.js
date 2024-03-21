/**
 * Componet itemtask : thiết kế item cho 1 công việc trên danh sách
 */
/**
 * Componet hiển thị nội dung từng ngày họp cụ thể
 */
import React from 'react';
import {
  TouchableOpacity,
  View,
} from "react-native";
import ShimmerPlaceholder from "react-native-shimmer-placeholder";
import LinearGradient from "react-native-linear-gradient";




export  const FooterTask=React.memo(()=>{

  return(
    <View style={{paddingVertical:3,}}>
      <View style={{flexDirection:"row", justifyContent:"space-between",paddingHorizontal:15, }}>
        <View >
          <ShimmerPlaceholder visible={false} style={{borderRadius:5}}
                              width={150}
                              height={20}
                              LinearGradient={LinearGradient}>
          </ShimmerPlaceholder>
          <ShimmerPlaceholder visible={false} style={{borderRadius:5, marginTop:10}}
                              width={50}
                              height={20}
                              LinearGradient={LinearGradient}>
          </ShimmerPlaceholder>
        </View>

        <View style={{flexDirection:"row"}}>
          <ShimmerPlaceholder visible={false} style={{borderRadius:10}}
                              width={20}
                              height={20}
                              LinearGradient={LinearGradient}>
          </ShimmerPlaceholder>
          <ShimmerPlaceholder visible={false} style={{borderRadius:10,marginLeft:-7}}
                              width={20}
                              height={20}
                              LinearGradient={LinearGradient}>
          </ShimmerPlaceholder>
        </View>

      </View>
      <View style={{height:1, backgroundColor:"#DDDDDD", width:"100%", marginVertical:3}}/>

    </View>
  )
})
