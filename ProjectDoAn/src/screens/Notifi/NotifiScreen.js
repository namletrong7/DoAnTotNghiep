import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ImageBackground, Dimensions, Image, SafeAreaView, FlatList, ScrollView, StatusBar, RefreshControl,
} from "react-native";
import {  actionLogout } from "../../redux-store/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import HeaderComponent from "../../components/header/HeaderComponent";


import ItemTask from "../../components/itemTask/ItemTask";
import FastImage from "react-native-fast-image";
import LottieView from "lottie-react-native";
import IconPlus from "../../assets/icons/IconPlus";
import { baseUrlAvatarUser } from "../../api/ConstBaseUrl";
import IconBell from "../../assets/icons/IconBell";
import { getTypeNotifi } from "../../utils/GetPriority";
import IconBack from "../../assets/icons/IconBack";
import LinearGradient from "react-native-linear-gradient";
import { actionGetListNotify, actionGetTaskToDoProject } from "../../redux-store/actions/task";
import IconComment from "../../assets/icons/IconComment";
import IconNotityComment from "../../assets/icons/IconNotityComment";
import IconEdit from "../../assets/icons/IconEdit";
import IconEdit2 from "../../assets/icons/IconEdit2";
import IconReport from "../../assets/icons/IconReport";
import { ItemNotify } from "./ItemNotify";

const NotifiScreen = ({ navigation }) => {

  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const dataListNotify = useSelector(state => state.task?.dataListNotify);

  useEffect(()=>{
    dispatch(actionGetListNotify())
  },[])
  const handleRefresh = () => {
    setRefreshing(true); // Đặt trạng thái là đang làm mới
    dispatch(actionGetListNotify())
    setRefreshing(false);
  };




  return (
    <View style={{height:'100%',backgroundColor:"#F0F0F0"}}>
      <HeaderComponent title={"THÔNG BÁO"} navigation={navigation}/>
        <LinearGradient  colors={['#faefcb', '#eaf1e0', '#deedda']} style={{flex:1,paddingBottom:'20%'}} >
          <FlatList
            data={dataListNotify}
            renderItem={({item}) => <ItemNotify item={item} navigation = {navigation} dispatch={dispatch} />}
            scrollEnabled={true}
            initialNumToRender={10}
            keyExtractor={item => item.notifyUserId}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={handleRefresh}
              />}
          />
        </LinearGradient>
    </View>
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

export default NotifiScreen;
