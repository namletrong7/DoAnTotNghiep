import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import IconHome from "../../assets/icons/IconHome";
import IconUser from "../../assets/icons/IconUser";
import IconSetting from "../../assets/icons/IconSetting";
import IconLogOut from "../../assets/icons/IconLogOut";
import IconPenBox from "../../assets/icons/IconPenBox";
import IconChat from "../../assets/icons/IconChat";
import { actionLogout } from "../../redux-store/actions/auth";
import { useDispatch } from "react-redux";

const TabBarScreen = ({ navigation, toggleShowTabBar }) => {

  const dispatch = useDispatch();

  const handleLogout = async () => {
    dispatch(actionLogout());
  };

  return (
    <View style={[styles.container, { marginTop: Dimensions.get('window').height * 0.1, alignItems: 'center' }]}>
      <TouchableOpacity style={{ padding: 20 }} onPress={toggleShowTabBar}>
        <IconHome />
      </TouchableOpacity>

      <View style={{ marginTop: 10, backgroundColor: '#ffffff', height: 1, width: '60%' }}></View>

      <View style={{ marginTop: 30, height: Dimensions.get('window').height * 0.4, justifyContent: 'space-around', alignItems: 'flex-start', width: '80%' }} >
        <TouchableOpacity style={styles.itemMenu} onPress={() => navigation.navigate('CaNhanHoaScreen')}>
          <IconUser />
          <Text style={styles.itemMenuText} >Cá nhân hoá</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.itemMenu}>
          <IconPenBox />
          <Text style={styles.itemMenuText} >Hướng dẫn sử dụng</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.itemMenu}>
          <IconSetting />
          <Text style={styles.itemMenuText} >Hỗ trợ kỹ thuật</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.itemMenu}>
          <IconChat />
          <Text style={styles.itemMenuText} >Giới thiệu</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.itemMenu} onPress={handleLogout}>
          <IconLogOut />
          <Text style={styles.itemMenuText} >Đăng xuất</Text>
        </TouchableOpacity>

      </View>

      <TouchableOpacity style={{ position: 'absolute', bottom: 30 }}>
        <Text style={{ color: '#ffffff' }} >Phiên bản 1.0.0(1)</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemMenu: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemMenuText: {
    color: '#ffffff',
    marginLeft: 10,
  }
});

export default TabBarScreen;
