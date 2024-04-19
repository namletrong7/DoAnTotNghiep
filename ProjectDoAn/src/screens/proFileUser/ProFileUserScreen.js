import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ImageBackground, Dimensions, Image, SafeAreaView, FlatList, ScrollView, RefreshControl,
} from "react-native";
import {  actionLogout } from "../../redux-store/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import HeaderComponent from "../../components/header/HeaderComponent";

import ItemTask from "../../components/itemTask/ItemTask";
import FastImage from "react-native-fast-image";
import { getValuePositionLevel } from "../../utils/GetValuePosition";
import IconMessage from "../../assets/icons/IconMessage";
import IconPhone from "../../assets/icons/IconPhone";

import FlashMessage, { showMessage } from "react-native-flash-message";
import { actionGetProfileUser } from "../../redux-store/actions/user";
import { ShimmerProfileUser } from "./shimmerProfileUser/ShimerProfileUser";
import { baseUrlAvatarUser } from "../../api/ConstBaseUrl";
import IconProfileUse from "../../assets/icons/IconProfileUse";
import Animated, { FadeIn, SlideInDown, SlideInRight, SlideOutLeft, SlideOutRight } from "react-native-reanimated";


const ProFileUserScreen = ({ navigation ,route }) => {
    const {userId}=route?.params
  const dispatch = useDispatch();
  const widthScreen = Dimensions.get('window').width
  const heightScreen = Dimensions.get('window').height
  const [refreshing, setRefreshing] = useState(false);
  const isGetProfileUser = useSelector(state => state.user.isGetProfileUser);
  const dataUser = useSelector(state => state.user.dataProfileUser);

  useEffect(()=>{

    dispatch(actionGetProfileUser(route?.params?.userId))
  },[userId])
  const handleGetProfileUser=useCallback(()=> {
    setRefreshing(true);
    dispatch(actionGetProfileUser(route?.params?.userId))
    setRefreshing(false);
  },[userId])
   const RenderContent = (props) =>{
    return(
      <View style={{flexDirection:"row",alignItems:"center",marginTop:10,flex:1}}>
          <View style={{width:10, height:10, borderRadius:10/2, backgroundColor:"#3366CC",marginLeft:10}}/>
          <Text style={{fontSize:14, color:"black",fontFamily:"OpenSans-Regular",marginLeft:10,flex:0.4}}>{props?.title || "số điện thoại"}</Text>
          <Text style={{fontSize:14, color:"black",fontFamily:"OpenSans-Regular",marginLeft:4,flex:0.6}}>{props?.content ||"0337356550"}</Text>
      </View>
    )
   }
  const RenderContactIcon = React.memo(() =>{
    return(
      <View style={{flexDirection:"row",marginTop:20,marginBottom:20,justifyContent:"space-between"}}>
        <TouchableOpacity onPress={()=>{
          showMessage({
            message: "Tính năng đang được phát triển",
            type: "warning",
            duration: 1000,
            icon: { icon: "warning", position: 'left' }
          });
        }} style={{alignItems:"center"}}>
          <IconMessage/>
          <Text style={{fontSize:14, color:"black",fontFamily:"OpenSans-Regular"}}>{'Trò chuyện'}</Text>
        </TouchableOpacity  >
        <TouchableOpacity  onPress={()=>{navigation.navigate("UserPageScreen",{userId:userId})}}  style={{alignItems:'center',marginLeft:-20}}>
          <IconProfileUse/>
          <Text style={{fontSize:14, color:"black",fontFamily:"OpenSans-Regular"}}>{'Trang cá nhân'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
          showMessage({
            message: "Tính năng đang được phát triển",
            type: "warning",
            duration: 1000,
            icon: { icon: "warning", position: 'left' }
          });
        }}  style={{alignItems:'center'}}>
          <View style={{alignItems:'center', justifyContent:'center'}}>
            <View style={{height:40, width:40, borderRadius:40/2, backgroundColor:"black",opacity:0.15}}>
            </View>
            <IconPhone style={{position:"absolute"}}/>
          </View>
          <Text style={{fontSize:14, color:"black",fontFamily:"OpenSans-Regular"}}>{'Gọi điện'}</Text>

        </TouchableOpacity>
      </View>
    )
  })

  return (
    <Animated.View
      entering={SlideInRight.duration(500)} exiting={SlideOutLeft.duration(500)}
      style={{ flex: 1}}
    >
    <View style={{backgroundColor:"#F0F0F0",height:'100%'}}>
      <HeaderComponent title={"Thông tin nhân viên"} navigation={navigation} back/>
      <ScrollView contentContainerStyle={{marginHorizontal:20,marginTop:20}}
                  refreshControl={
                    <RefreshControl
                      refreshing={refreshing}
                      onRefresh={handleGetProfileUser}
                    />
                  }>
        <View>
          {isGetProfileUser?(<ShimmerProfileUser/>):
              <View>
                <TouchableOpacity onPress={()=>{navigation.navigate("ViewImageScreen",{imgageUrl:baseUrlAvatarUser+dataUser?.avatarUser})}}>
                  <FastImage
                    style={{
                      width: 100,
                      height: 100,
                      borderRadius: 100 / 2,
                      overflow: "hidden",
                      alignSelf: "center",
                    }}
                    source={{
                      uri: (baseUrlAvatarUser+dataUser?.avatarUser)||'https://img.freepik.com/free-psd/3d-illustration-person_23-2149436192.jpg?w=740&t=st=1712574436~exp=1712575036~hmac=45f0ec209d444e0275361139f242a77a592eab1547c026daedddafe25dd6fe72'
                    }}
                    resizeMode={FastImage.resizeMode.stretch}
                  />
                </TouchableOpacity>


                <Text style={{fontSize:17, color:"black",fontFamily:"OpenSans-SemiBold",fontWeight:'700',marginTop:20,alignSelf:"center"}}>{dataUser?.fullName||''}</Text>
                <RenderContactIcon/>
                <RenderContent title={"Số điện thoại:"} content={dataUser?.phoneNumber||''}/>
                <RenderContent title={"Email:"} content={dataUser?.email||''}/>
                <Text style={{fontSize:16, color:"black",fontFamily:"OpenSans-SemiBold",fontWeight:'700',marginTop:30}}>{"Chức vụ, phòng ban"}</Text>
                <RenderContent title={"Chức vụ: "} content={getValuePositionLevel(dataUser?.positionLevel||0)}/>
                <RenderContent title={"Phòng ban: "} content={dataUser?.departmentName||''}/>
                <RenderContent title={"Chuyên môn: "} content={dataUser?.jobtitleName||''}/>
              </View>}



        </View>

      </ScrollView>
    </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});

export default React.memo(ProFileUserScreen);
