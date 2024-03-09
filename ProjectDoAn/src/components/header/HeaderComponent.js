import {
  Dimensions,
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import IconMenu from "../../assets/icons/IconMenu";
import IconArrowLeft from "../../assets/icons/IconArrowLeft";
import IconBack from "../../assets/icons/IconBack";

function HeaderComponent (props) {

  const renderHeaderHome = () => (
    <>
      <Image
        source={require('../../assets/images/banner_header.png')}
        style={styles.backgroundImage}
      />
      <View style={{ fontWeight: 'bold', color: '#212121', position: 'absolute', bottom: 0, left: 2, padding: 10, }} >
        <TouchableOpacity onPress={props.toggleShowTabBar} >
          <IconMenu />
        </TouchableOpacity>
      </View>

      <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#ffffff', position: 'absolute', bottom: 10, }}>
        Màn Hình Chính
      </Text>
    </>
  )

  const rendeHeaderLeft = () => (
    <>
      <View
        style={[styles.backgroundImage, { backgroundColor: '#6699FF' }]}
      />
      <TouchableOpacity
        style={{ fontWeight: 'bold', color: '#ffffff', position: 'absolute', bottom: 0, left: 2, padding: 10, }}
        onPress={() => props.navigation.goBack()}
      >
        <IconBack />
      </TouchableOpacity>

      <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'black', position: 'absolute', bottom: 10, }}>
        {props.title}
      </Text>
    </>
  )

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
      />
      {props.back ? rendeHeaderLeft() : renderHeaderHome()}
    </View>
  )
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: Dimensions.get('window').height * 0.1,
    top: 0,
    position: 'absolute',
  },
  container: {
    width: '100%',
    height: Dimensions.get('window').height * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HeaderComponent;
