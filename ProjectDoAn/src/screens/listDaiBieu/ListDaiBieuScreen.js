import React from "react";
import { Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import HeaderComponent from "../../components/header/HeaderComponent";

function ListDaiBieuScreen ({ navigation }) {

  return (
    <ImageBackground
      source={require('../../assets/images/Background_Img.png')}
      style={{ flex: 1 }}
    >
      <View>
        <HeaderComponent navigation={navigation} title={'DANH SÁCH ĐẠI BIỂU'} back />

        <View>
          <TouchableOpacity
            style={[styles.container, { margin: 12, backgroundColor: '#FF6F43' }]}
            onPress={() => navigation.navigate('ListCanBoScreen')}
          >
            <Image source={require('../../assets/images/IconDSCB.png')} style={styles.IconImg} />
            <Text style={styles.TextItem} >DANH SÁCH CÁN BỘ</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.container, { marginLeft: 12, marginRight: 12, backgroundColor: '#2E98E9' }]}
            onPress={() => navigation.navigate('TTHCScreen')}
          >
            <Image source={require('../../assets/images/IconTTHC.png')} style={styles.IconImg} />
            <Text style={styles.TextItem} >THÔNG TIN HẬU CẦN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  IconImg: {
    width: Dimensions.get('window').width * 0.2,
    height: Dimensions.get('window').width * 0.2,
  },
  TextItem: {
    marginLeft: 20,
    color: '#ffffff',
    fontSize: 16,
  },
});

export default ListDaiBieuScreen;
