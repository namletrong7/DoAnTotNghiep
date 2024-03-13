import React, {useCallback, useMemo, useState} from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ImageBackground, Dimensions, Image, SafeAreaView, FlatList, ScrollView, StatusBar,
} from "react-native";
import {  actionLogout } from "../../redux-store/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import HeaderComponent from "../../components/header/HeaderComponent";


import ItemTask from "../../components/itemTask/ItemTask";
import FastImage from "react-native-fast-image";
import LottieView from "lottie-react-native";
import IconPlus from "../../assets/icons/IconPlus";
import { baseUrlAvatarUser } from "../../api/ConstBaseUrl";
import ItemProject from "../../components/itemProject/ItemProject";
import IconArrowRight from "../../assets/icons/IconArrowRigth";
import IconArrowDown from "../../assets/icons/IconArrowDown";
import IconArrowDownDouble from "../../assets/icons/IconDoubleDown";
import BottomSheet, {BottomSheetBackdrop, BottomSheetModal, BottomSheetModalProvider} from "@gorhom/bottom-sheet";
import {useRef} from "react/index";
import {GestureDetector} from "react-native-gesture-handler/src/handlers/gestures/GestureDetector";
import {GestureHandlerRootView, PanGestureHandler} from "react-native-gesture-handler";

const HomeScreen = ({ navigation }) => {

  const dispatch = useDispatch();
  const dataCurrentUser = useSelector(state => state.auth.dataCurrentUser);


  const snapPoints = useMemo(() => ['50%', "60%", '80%'], []);
  const bottomSheetRef = useRef(null);
  const renderBackdrop = useCallback(
      (props: any) => <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />,
      []
  );
  function handelOpenModal (){
    bottomSheetRef.current?.present();
  }

  var fakeDataListProject=[
    {
      "projectId": "P001",
      "nameProject": "Du an thien nguyen ca nhan cua phong hanh chinh va ke hoach tong hop",
      "startDay": "10/08/2001",
      "endDay":"10/08/2001",
      "createUser": 1,
      "state":1

    },
    {
      "projectId": "P002",
      "nameProject": "Du an nhan ai cong dien len ban",
      "startDay": "10/08/2001",
      "endDay":"10/08/2001",
      "createUser": 1,
      "state":1

    },
    {
      "projectId": "P003",
      "nameProject": "Test 3",
      "startDay": "10/08/2001",
      "endDay":"10/08/2001",
      "createUser": 1,
      "state":1

    }
  ]




  return (
    <SafeAreaView style={{backgroundColor:"#F0F0F0",marginTop:StatusBar.currentHeight, flex:1}}>
      <ScrollView>
        <View style={{paddingHorizontal:10}}>
          <View style={{marginVertical:10,}}>
            <View style={{flexDirection:"row",justifyContent:"space-between",}}>
              <Image
                source={require('../../assets/images/logo.png')}
                style={{  width: 200,
                  height: 60,
                  alignSelf:"flex-start" }}
              />
              <FastImage
                style={{ width: 60, height: 60,borderRadius: 60/2 ,overflow: "hidden",alignSelf:"center"}}
                source={{
                  uri: (baseUrlAvatarUser+dataCurrentUser?.avatarUser)||'https://raw.githubusercontent.com/gist/vinhjaxt/fa4208fd6902dd8b2f4d944fa6e7f2af/raw/454f58aeac4fdeb459476eae7128dc6ff57df25f/logo-hvktmm.png'
              }}
                resizeMode={FastImage.resizeMode.stretch}/>

            </View>
             <View style={{flexDirection:"row", }}>
               <View>
                 <Text style={{fontSize:30, color:"black",fontFamily:"Roboto-Bold",marginLeft:5}}>{"Hello,"}</Text>
                 <Text style={{fontSize:30, color:"black",fontFamily:"Roboto-Bold",marginLeft:5}}>{(dataCurrentUser?.fullName)||'Vu thi thu ha'}</Text>
               </View>
               <LottieView style={{width:90, height:90, alignSelf:"center",marginLeft:-80,marginTop:-20}} source={require('../../assets/animation/cat.json')} autoPlay loop />
             </View>

          </View>
          <Text style={{fontSize:20, color:"black",fontFamily:"Roboto-Bold",marginVertical:5}}>{'Dự án bạn tham gia'}</Text>
            {/*<FlatList*/}
            {/*  data={fakeDataListTask}*/}
            {/*  renderItem={({item}) => <ItemTask item={item} navigation = {navigation} />}*/}
            {/*  scrollEnabled={false}*/}
            {/*  keyExtractor={item => item.taskId}*/}
            {/*/>*/}
            <View style={{backgroundColor:"#DDDDDD", paddingVertical:20, borderRadius:10, marginBottom:20}}>
              <FlatList
                data={fakeDataListProject}
                renderItem={({item}) => <ItemProject item={item} navigation = {navigation} />}
                scrollEnabled={false}
                keyExtractor={item => item.projectId}
              />

            </View>
          <TouchableOpacity onPress={()=>{handelOpenModal()}} style={{backgroundColor:"white",marginHorizontal:100, alignItems:'center', paddingVertical:3, borderRadius:40,marginTop:-26}}>
            <Text style={{fontSize:15, color:"black",fontFamily:"OpenSans-Regular",fontWeight:"bold"}}>{"Xem thêm"}</Text>
            <IconArrowDownDouble/>
          </TouchableOpacity>

        </View>
      </ScrollView>
      {/*<TouchableOpacity onPress={()=>{navigation.navigate("AddTaskScreen")}} style={{justifyContent:'center', alignItems:'center',position:"absolute",right:20, bottom:0, width:50, height:50, borderRadius:25, backgroundColor:"gray"}}>*/}
      {/*   <IconPlus/>*/}
      {/*</TouchableOpacity>*/}

      <GestureHandlerRootView  style={{ borderRadius:16,flex:1 , backgroundColor:"green"}}>
        <BottomSheetModalProvider>
          <BottomSheetModal
              ref={bottomSheetRef}
              index={1}
              enablePanDownToClose={true}
              backdropComponent={renderBackdrop}
              snapPoints={snapPoints}>
            <View style={{backgroundColor:"red", height: '100%'}}>
              <Text style={{fontSize:15, color:"black",fontFamily:"OpenSans-Regular",fontWeight:"bold"}}>{"Botom sheet"}</Text>
            </View>
          </BottomSheetModal>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </SafeAreaView>
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
  },	contentContainer: {
    flex: 1,
    alignItems: 'center'
  },
  containerHeadline: {
    fontSize: 24,
    fontWeight: '600',
    padding: 20,
    color: '#fff'
  }
});

export default HomeScreen;
