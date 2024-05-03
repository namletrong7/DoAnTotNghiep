import React from "react";
import {
  View,

  StyleSheet, StatusBar, TouchableOpacity, SafeAreaView, Text, Image,
} from "react-native";
import LogoApp from "../../assets/icons/LogoApp";


const SplashScreen  = () => {
  return (
    <View style={{backgroundColor:"white",height:'100%',alignItems:'center', justifyContent:'center'}}>
    <LogoApp/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  } ,

});

export default React.memo(SplashScreen);
