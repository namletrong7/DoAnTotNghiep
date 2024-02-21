import React from "react";
import { Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import HeaderComponent from "../../../components/header/HeaderComponent";

function ThongTinHauCan({ navigation }) {

  return (
    <ImageBackground
      source={require('../../../assets/images/Background_Img.png')}
      style={{ flex: 1 }}
    >
      <View>
        <HeaderComponent navigation={navigation} title={'DANH SÁCH ĐẠI BIỂU'} back />

        <View>
          <TouchableOpacity
            style={[styles.container, { margin: 12,}]}
          >
            <Text style={styles.TextItem} >Chức năng đang phát triển</Text>
          </TouchableOpacity>

        </View>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: Dimensions.get('window').width * 0.15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  TextItem: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ThongTinHauCan;
