/**
 * Componet hiên thị loadmore comment
 */

import React, { useEffect, useState } from "react";
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import ShimmerPlaceholder, { createShimmerPlaceholder } from "react-native-shimmer-placeholder";
import LinearGradient from "react-native-linear-gradient";
import FastImage from "react-native-fast-image";

export  const ShimmerEffectCommentComponent =React.memo((props) => {
  console.log("render lai shimmerComponent")
  const [isVisible, setIsVisible] = useState(false);

  useEffect(()=>{
    console.log("didmount shimmerComponent")
    // Thiết lập một timeout để đặt myVariable thành true sau 2500ms
    setTimeout(() => {
      setIsVisible( true );
    }, 2500);
  },[])
  const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
    return (
      <View>
        <View style={{flexDirection:"row",marginTop:10}}>
          <ShimmerPlaceholder visible={isVisible} style={{borderRadius:25}}
                              width={50}
                              height={50}
                              LinearGradient={LinearGradient}>
          </ShimmerPlaceholder>
          <View style={{marginLeft:10}}>
            <ShimmerPlaceholder visible={isVisible} style={{borderRadius:10,backgroudColor:"red"}}
                                width={250}
                                height={20}
                                LinearGradient={LinearGradient}>
            </ShimmerPlaceholder>
            <ShimmerPlaceholder visible={isVisible} style={{borderRadius:10,marginTop:10}}
                                width={100}
                                height={20}
                                LinearGradient={LinearGradient}>
            </ShimmerPlaceholder>
            <ShimmerPlaceholder visible={isVisible} style={{borderRadius:20,marginTop:10}}
                                width={100}
                                height={70}
                                LinearGradient={LinearGradient}>
            </ShimmerPlaceholder>
          </View>
        </View>
        <View style={{flexDirection:"row",marginTop:10}}>
          <ShimmerPlaceholder visible={isVisible} style={{borderRadius:25}}
                              width={50}
                              height={50}
                              LinearGradient={LinearGradient}>
          </ShimmerPlaceholder>
          <View style={{marginLeft:10}}>
            <ShimmerPlaceholder visible={isVisible} style={{borderRadius:10,backgroudColor:"red"}}
                                width={250}
                                height={20}
                                LinearGradient={LinearGradient}>
            </ShimmerPlaceholder>
            <ShimmerPlaceholder visible={isVisible} style={{borderRadius:10,marginTop:10}}
                                width={100}
                                height={20}
                                LinearGradient={LinearGradient}>
            </ShimmerPlaceholder>
            <ShimmerPlaceholder visible={isVisible} style={{borderRadius:20,marginTop:10}}
                                width={100}
                                height={70}
                                LinearGradient={LinearGradient}>
            </ShimmerPlaceholder>
          </View>
        </View>
        <View style={{flexDirection:"row",marginTop:10}}>
          <ShimmerPlaceholder visible={isVisible} style={{borderRadius:25}}
                              width={50}
                              height={50}
                              LinearGradient={LinearGradient}>
          </ShimmerPlaceholder>
          <View style={{marginLeft:10}}>
            <ShimmerPlaceholder visible={isVisible} style={{borderRadius:10,backgroudColor:"red"}}
                                width={250}
                                height={20}
                                LinearGradient={LinearGradient}>
            </ShimmerPlaceholder>
            <ShimmerPlaceholder visible={isVisible} style={{borderRadius:10,marginTop:10}}
                                width={100}
                                height={20}
                                LinearGradient={LinearGradient}>
            </ShimmerPlaceholder>
            <ShimmerPlaceholder visible={isVisible} style={{borderRadius:20,marginTop:10}}
                                width={100}
                                height={70}
                                LinearGradient={LinearGradient}>
            </ShimmerPlaceholder>
          </View>
        </View>
      </View>


    );
  }
)
const styles = StyleSheet.create({
  container: {
    display:"flex",
  },

});


