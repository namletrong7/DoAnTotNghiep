import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ImageBackground, Dimensions, Image, SafeAreaView, FlatList, ScrollView, StatusBar, Platform,
} from "react-native";

import { useDispatch, useSelector } from "react-redux";

import FastImage from "react-native-fast-image";
import LottieView from "lottie-react-native";
import IconPlus from "../../assets/icons/IconPlus";
import { baseUrlAvatarUser } from "../../api/ConstBaseUrl";
import { actionGetAllProject } from "../../redux-store/actions/project";
import IconSum from "../../assets/icons/IconSum";
import ProjectChartComponet from "../../components/ProjectChart/ProjectChartComponet";
import ItemProjectVertical from "../../components/itemProject/ItemProjectVertical";
import ItemProjectHorizontal from "../../components/itemProject/ItemProjectHorizontal";
import IconArrowRight from "../../assets/icons/IconArrowRigth";
import IconSayhi from "../../assets/icons/IconSayhi";
import LinearGradient from "react-native-linear-gradient";


const HomeScreen = ({ navigation }) => {

  const dispatch = useDispatch();
  const dataCurrentUser = useSelector(state => state.auth.dataCurrentUser);
  const dataAllProject = useSelector(state => state.project.dataAllProject);
  const [isShowMoreAdd, setIsShowMoreAdd]=useState(false);// show thêm lựa chọn thêm projet hay công việc
  useEffect(()=>{
      dispatch(actionGetAllProject())
  },[])






  return (
    <LinearGradient colors={['#faefcb', '#eaf1e0', '#deedda']} style={{height:"100%"}}>
      <View style={{position:"relative",backgroundColor:"black",height:StatusBar.currentHeight}}>
        <StatusBar
          translucent
          backgroundColor={'transparent'}
        />
      </View>
      <SafeAreaView>
      <ScrollView>
        <View  style={{paddingHorizontal:10,paddingBottom:"40%",height:"100%"}}>
          <View style={{marginVertical:10}}>
            <View style={{flexDirection:"row",justifyContent:"space-between"}}>
              <FastImage
                  style={{ width: 40, height: 40,borderRadius: 40/2 ,overflow: "hidden",alignSelf:"center"}}
                  source={{
                    uri: (baseUrlAvatarUser+dataCurrentUser?.avatarUser)||'https://raw.githubusercontent.com/gist/vinhjaxt/fa4208fd6902dd8b2f4d944fa6e7f2af/raw/454f58aeac4fdeb459476eae7128dc6ff57df25f/logo-hvktmm.png'
                  }}
                  resizeMode={FastImage.resizeMode.stretch}/>
              <View style={{flexDirection:"row", flex:1}}>
                <View>
                  <Text style={{fontSize:14, color:"black",fontFamily:"OpenSans-Regular",marginLeft:5}}>{"Hello,"}</Text>
                  <Text style={{fontSize:16, color:"black",fontFamily:"Roboto-Bold",marginLeft:5,flex:1}}>{(dataCurrentUser?.fullName)||''}</Text>
                </View>
                <IconSayhi/>
              </View>


            </View>


          </View>
            <ProjectChartComponet/>
          <View style={{flexDirection:'row', justifyContent:'space-between' }}>
            <Text style={{fontSize:14, color:"black",fontFamily:"Roboto-Bold",marginVertical:5}}>{'Dự án bạn tham gia'}</Text>
            <TouchableOpacity style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center' }}>
              <Text style={{fontSize:14, color:"#6699FF",fontFamily:"Roboto-Bold"}}>{'Tất cả'}</Text>
              <IconArrowRight width={20} height={20}/>
            </TouchableOpacity>
          </View>
              <FlatList
                data={dataAllProject}
                horizontal={false}
                renderItem={({item}) => <ItemProjectVertical item={item} navigation = {navigation} />}
                scrollEnabled={false}
                keyExtractor={item => item.projectId}
              />
        </View>
      </ScrollView>
      </SafeAreaView>
      {isShowMoreAdd&&
      <View style={{position:"absolute",right:20, bottom:170, width:140}}>
        <TouchableOpacity onPress={()=>{navigation.navigate("AddProjectScreen")}} style={{justifyContent:'flex-start', alignItems:'center', paddingVertical:5, borderRadius:15, backgroundColor:"#e5f6dd",flexDirection:"row"}}>
          <IconSum height={25} width={25}/>
          <Text style={{fontSize:15, color:"#62c241",fontFamily:"Roboto-Bold",marginLeft:5,}}>{"Tạo dự án"}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate("AddTaskScreen")}} style={{justifyContent:'flex-start',marginTop:10, alignItems:'center',paddingVertical:5, borderRadius:15, backgroundColor:"#dbedfd",flexDirection:"row"}}>
          <IconSum height={25} width={25}/>
          <Text style={{fontSize:15, color:"#4191df",fontFamily:"Roboto-Bold",marginLeft:5,flex:1}}>{"Tạo công việc"}</Text>
        </TouchableOpacity>
      </View>}
      <TouchableOpacity onPress={()=>{setIsShowMoreAdd(!isShowMoreAdd)}} style={{justifyContent:'center', alignItems:'center',position:"absolute",right:20, bottom:100, width:50, height:50, borderRadius:25, backgroundColor:"gray"}}>
        <IconPlus/>
      </TouchableOpacity>

    </LinearGradient>
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
