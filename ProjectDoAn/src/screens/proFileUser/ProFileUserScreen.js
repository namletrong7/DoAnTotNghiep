import React, { useEffect, useState } from "react";
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
import IconMail from "../../assets/icons/IconMail";
import Toast from "react-native-toast-message";
import FlashMessage, { showMessage } from "react-native-flash-message";
import { actionGetProfileUser } from "../../redux-store/actions/user";
import { ShimmerProfileUser } from "./shimmerProfileUser/ShimerProfileUser";
import {
  ShimmerEffectCommentComponent
} from "../../components/shimmerEfffect/ShimmerEffectComment/ShimmerEffectCommentComponent";
import { baseUrlAvatarUser } from "../../api/ConstBaseUrl";


const ProFileUserScreen = ({ navigation ,route }) => {

  const dispatch = useDispatch();
  const widthScreen = Dimensions.get('window').width
  const heightScreen = Dimensions.get('window').height
  const [refreshing, setRefreshing] = useState(false);
  const isGetProfileUser = useSelector(state => state.user.isGetProfileUser);
  const dataUser = useSelector(state => state.user.dataProfileUser);
  console.log(dataUser)
  useEffect(()=>{
    console.log(route?.params?.userId)
    dispatch(actionGetProfileUser(route?.params?.userId))
  },[route?.params?.userId])
  const handleGetProfileUser=()=> {
    setRefreshing(true);
    dispatch(actionGetProfileUser(route?.params?.userId))
    setRefreshing(false);
  }
   const RenderContent = (props) =>{
    return(
      <View style={{flexDirection:"row",alignItems:"center",marginTop:10,flex:1}}>
          <View style={{width:14, height:14, borderRadius:14/2, backgroundColor:"#3366CC",marginLeft:10}}/>
          <Text style={{fontSize:15, color:"black",fontFamily:"OpenSans-Regular",marginLeft:10,flex:0.4}}>{props?.title || "số điện thoại"}</Text>
          <Text style={{fontSize:15, color:"black",fontFamily:"OpenSans-Regular",marginLeft:4,flex:0.6}}>{props?.content ||"0337356550"}</Text>
      </View>
    )
   }
  const RenderContactIcon = () =>{
    return(
      <View style={{flexDirection:"row",marginTop:20,marginBottom:40,alignSelf:"center",justifyContent:"space-around"}}>
        <TouchableOpacity onPress={()=>{
          showMessage({
            message: "thanhf cong",
            type: "success",
            duration: 1000,
            icon: { icon: "success", position: 'left' }
          });
        }} style={{marginRight:40}}>
          <IconMessage/>
        </TouchableOpacity>
        <View style={{marginRight:40}}>
          <IconPhone/>
        </View>
        <View style={{marginRight:20}}>
          <IconMail/>
        </View>
      </View>
    )
  }

  return (
    <View style={{backgroundColor:"#F0F0F0",height:'100%'}}>
      <FlashMessage position={"top"}  />
      <HeaderComponent title={"Thông tin thành viên"} navigation={navigation} back/>
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
                <FastImage
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 100 / 2,
                    overflow: "hidden",
                    borderWidth: 1,
                    borderColor: "#99CCFF",
                    alignSelf: "center",
                  }}
                  source={{
                    uri: (baseUrlAvatarUser+dataUser?.avatarUser||'')
                  }}
                  resizeMode={FastImage.resizeMode.stretch}
                />
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});

export default React.memo(ProFileUserScreen);
