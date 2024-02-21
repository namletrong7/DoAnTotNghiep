import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ImageBackground, Dimensions, Image,
} from "react-native";
import {  actionLogout } from "../../redux-store/actions/auth";
import { useDispatch } from "react-redux";
import HeaderComponent from "../../components/header/HeaderComponent";
import TabBarScreen from "../tabbar/TabBarScreen";

const HomeScreen = ({ navigation }) => {

  const dispatch = useDispatch();

  const [showTabBar, setShowTabBar] = useState(false);

  const toggleShowTabBar = () => {
    setShowTabBar(!showTabBar);
  };


  return (
    <ImageBackground
      source={require('../../assets/images/background_home.png')}
      style={styles.container}
    >
      <View style={styles.container}>
        <HeaderComponent navigation={navigation} toggleShowTabBar={toggleShowTabBar} />

        <View style={{ width: '100%', alignItems: 'center' }}>
          <TouchableOpacity style={styles.notification} >
            <Text style={{ color: '#ffffff' }}>Không có lịch họp</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', marginLeft: Dimensions.get('window').height * 0.01, }}>
          <TouchableOpacity style={styles.itemMenu} >
            <Image source={require('../../assets/images/TLNew.png')} style={styles.IconImg} />
            <Text style={styles.TextItem} >Tài liệu họp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.itemMenu} onPress={() => navigation.navigate('CTHScreen')} >
            <Image source={require('../../assets/images/CTHNew.png')} style={styles.IconImg} />
            <Text style={styles.TextItem} >Chương trình họp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.itemMenu} >
            <Image source={require('../../assets/images/DKPB.png')} style={styles.IconImg} />
            <Text style={styles.TextItem} >Đăng kí phát biểu, tranh luận</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.itemMenu} >
            <Image source={require('../../assets/images/XYKNew.png')} style={styles.IconImg} />
            <Text style={styles.TextItem} >Xin ý kiến</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.itemMenu} >
            <Image source={require('../../assets/images/BQNew.png')} style={styles.IconImg} />
            <Text style={styles.TextItem} >Biểu Quyết</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.itemMenu} onPress={() => navigation.navigate('LDBScreen')} >
            <Image source={require('../../assets/images/DSDB_YL.png')} style={styles.IconImg} />
            <Text style={styles.TextItem} >Danh sách Đại biểu</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.itemMenu} >
            <Image source={require('../../assets/images/TBNew.png')} style={styles.IconImg} />
            <Text style={styles.TextItem} >Thông báo</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.itemMenu} >
            <Image source={require('../../assets/images/VTNH.png')} style={styles.IconImg} />
            <Text style={styles.TextItem} >Vị trí ngồi họp</Text>
          </TouchableOpacity>

        </View>

        {showTabBar && (
          <TouchableOpacity style={{ flex: 1, position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }} onPress={toggleShowTabBar} >
            <TouchableWithoutFeedback>
              <View style={{ position: "absolute", top: 0, bottom: 0, backgroundColor: "rgba(3,3,3,0.8)", width: "70%" }} >
                <TabBarScreen toggleShowTabBar={toggleShowTabBar} navigation={navigation} />
              </View>
            </TouchableWithoutFeedback>
          </TouchableOpacity>
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  notification: {
    marginTop: 20,
    marginBottom: 20,
    width: '70%',
    height: Dimensions.get('window').height * 0.14,
    backgroundColor: '#040739',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ffffff',
    borderRadius: 10,
    borderWidth: 1,
  },
  itemMenu: {
    alignItems: 'center',
    marginBottom: 10,
    width: Dimensions.get('window').width * 0.31,
    padding: Dimensions.get('window').width * 0.02,
  },
  IconImg: {
    width: Dimensions.get('window').width * 0.2,
    height: Dimensions.get('window').width * 0.2,
  },
  TextItem: {
    marginTop: 5,
    color: '#ffffff',
    textAlign: 'center',
  }
});

export default HomeScreen;
