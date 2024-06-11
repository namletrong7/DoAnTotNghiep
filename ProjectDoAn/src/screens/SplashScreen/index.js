
import React, {useRef, useEffect} from 'react';
import {
  SafeAreaView,
  Image,
  Text,
  View,
  StyleSheet,
  Dimensions,
  Animated,
} from 'react-native';
import LogoApp from "../../assets/icons/LogoApp";

const SplashScreen = () => {
  const moveAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(moveAnim, {
        duration: 2000,
        toValue: Dimensions.get('window').width / 1.6,
        delay: 0,
        useNativeDriver: false,
      }),
      Animated.timing(moveAnim, {
        duration: 2000,
        toValue: 0,
        delay: 0,
        useNativeDriver: false,
      }),
    ]).start();
    Animated.timing(fadeAnim, {
      duration: 2000,
      toValue: 1,
      delay: 2000,
      useNativeDriver: false,
    }).start();
  }, [moveAnim, fadeAnim]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Animated.View
          style={ {opacity: fadeAnim}}
        >
          <LogoApp/>
        </Animated.View>
        <Animated.View style={[styles.logoContainer, {marginLeft: moveAnim}]}>
          <Image
            source={require('../../assets/images/PM.png')}
            style={{width:70, height:30}}
          />
          <Animated.View style={{opacity: fadeAnim}}>
            <Image
              source={require('../../assets/images/KMA.png')}
              style={{width:85, height:44,marginTop:-6}}
            />
          </Animated.View>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};



export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#c7e4ff',
  },
  logoText: {
    fontSize: 35,
    marginTop: 20,
    color: '#148eff',
    fontWeight: '700',
  },
  contentContainer: {
    top: '40%',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    flexDirection: 'row',
    marginTop:20
  },
});

export default React.memo(SplashScreen);
