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

export  const ShimmerProfileUser =React.memo((props) => {
  const [isVisible, setIsVisible] = useState(false);
  const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
    return (
      <View>
        <View style={{flexDirection:"column",marginTop:10, alignItems:"center", justifyContent:'center'}}>
          <ShimmerPlaceholder visible={isVisible} style={{borderRadius:50}}
                              width={100}
                              height={100}
                              LinearGradient={LinearGradient}>
          </ShimmerPlaceholder>
          <View style={{marginTop:50}}>
            <View style={{flexDirection:"row",justifyContent:'space-between'}}>
              <ShimmerPlaceholder visible={isVisible} style={{borderRadius:10,backgroudColor:"red"}}
                                  width={40}
                                  height={40}
                                  LinearGradient={LinearGradient}>
              </ShimmerPlaceholder>
              <ShimmerPlaceholder visible={isVisible} style={{borderRadius:10,backgroudColor:"red"}}
                                  width={40}
                                  height={40}
                                  LinearGradient={LinearGradient}>
              </ShimmerPlaceholder>
              <ShimmerPlaceholder visible={isVisible} style={{borderRadius:10,backgroudColor:"red"}}
                                  width={40}
                                  height={40}
                                  LinearGradient={LinearGradient}>
              </ShimmerPlaceholder>
            </View>

            <ShimmerPlaceholder visible={isVisible} style={{borderRadius:10,marginTop:30}}
                                width={screenWidth*0.7}
                                height={20}
                                LinearGradient={LinearGradient}>
            </ShimmerPlaceholder>
            <ShimmerPlaceholder visible={isVisible} style={{borderRadius:10,marginTop:30}}
                                width={screenWidth*0.7}
                                height={20}
                                LinearGradient={LinearGradient}>
            </ShimmerPlaceholder>
            <ShimmerPlaceholder visible={isVisible} style={{borderRadius:10,marginTop:30}}
                                width={screenWidth*0.7}
                                height={20}
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


