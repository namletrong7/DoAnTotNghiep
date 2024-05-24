import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  FlatList,
  RefreshControl,
  Platform,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import HeaderComponent from "../../components/header/HeaderComponent";

import LottieView from "lottie-react-native";

import LinearGradient from "react-native-linear-gradient";
import { actionGetListNotify, actionGetMoreListNotify } from "../../redux-store/actions/task";
import { ItemNotify } from "./ItemNotify";

const NotifiScreen = ({ navigation }) => {

  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const dataListNotify = useSelector(state => state.task?.dataListNotify);
  const isGetNotify = useSelector(state => state.task?.isGetNotify);
  const isGetMoreNotify = useSelector(state => state.task?.isGetMoreNotify);
  useEffect(()=>{
    dispatch(actionGetListNotify())
  },[])
  const handleRefresh =useCallback(() => {
    setRefreshing(true); // Đặt trạng thái là đang làm mới
    dispatch(actionGetListNotify())
    setRefreshing(false);
  },[]);

  const loadMoreData = useCallback(() => {
     dispatch(actionGetMoreListNotify())
  },[]);
  const renderFooter = React.memo(() => {
    if (!isGetMoreNotify) return null;
    return (
      <View>
        <LottieView style={{ height:100,width:100,alignSelf:'center'}} source={require('../../assets/animation/loading2.json')} autoPlay loop />
      </View>
    );
  });

  return (
    <View style={{height:'100%',backgroundColor:"#F0F0F0"}}>
      <HeaderComponent title={"THÔNG BÁO"} navigation={navigation}/>
        <View   style={{flex:1,paddingBottom:Platform.isPad?"10%":"17%"}} >
          <FlatList
            data={dataListNotify}
            renderItem={({item}) => <ItemNotify item={item} navigation = {navigation} dispatch={dispatch} />}
            scrollEnabled={true}
            initialNumToRender={10}
            keyExtractor={item => item.notifyUserId}
            onEndReached={loadMoreData}
            onEndReachedThreshold={0.02}
            ListFooterComponent={renderFooter}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={handleRefresh}
              />}
          />
          {isGetNotify?
          <View style={{position:"absolute", flex:1,alignSelf:"center",height:'100%',justifyContent:'center'}}>
            <LottieView style={{ height:150,width:150}} source={require('../../assets/animation/circlesRotate.json')} autoPlay loop />
          </View>:null}

        </View>
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
