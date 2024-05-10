// man hinh trang ca nhan
import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ImageBackground, Dimensions, Image, SafeAreaView, FlatList, ScrollView, RefreshControl, Pressable,
} from "react-native";
import {  actionLogout } from "../../redux-store/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import HeaderComponent from "../../components/header/HeaderComponent";

import FastImage from "react-native-fast-image";

import FlashMessage from "react-native-flash-message";
import { actionGetProfileUser } from "../../redux-store/actions/user";


import { baseUrlAvatarUser } from "../../api/ConstBaseUrl";
import ShimmerPlaceholder from "react-native-shimmer-placeholder";
import LinearGradient from "react-native-linear-gradient";
;
import ImagePicker from "react-native-image-crop-picker";
import Animated, { FadeIn, SlideInDown, SlideInRight, SlideOutLeft, SlideOutRight } from "react-native-reanimated";

const UserPageScreen = ({navigation , route}) => {
  const {userId}=route?.params
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const [listImage, setListImage] = useState([]);
  const dataUser = useSelector(state => state.user?.dataProfileUser);
  const isGetProfileUser = useSelector(state => state.user?.isGetProfileUser);
  const link="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/436200407_815315570624973_1781664654681842378_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=n4Htsj_wW_4Ab7Z64qG&_nc_ht=scontent.fhan2-4.fna&oh=00_AfAdWUwE2Z-tSCAYn9RNJSiA_MyAEjhsICJZW-cDQG_N2Q&oe=6625A6B3"
  const handleGetProfileUser=useCallback(()=> {
    setRefreshing(true);
    dispatch(actionGetProfileUser(userId))
    setRefreshing(false);
  },[userId])

const chooseImage=()=>{
  ImagePicker.openPicker({
    mediaType: 'photo', // Chỉ chọn ảnh
    compressImageQuality: 0.4,
    multiple:true
  }).then(image => {
  //  console.log(image)
    setListImage(image);
  });
}

  return (
    <Animated.View
      entering={SlideInRight.duration(500)} exiting={SlideOutLeft.duration(500)}
      style={{ flex: 1}}
    >
    <View style={{backgroundColor:"white",height:'100%'}}>
      <FlashMessage position={"top"}  />
      <HeaderComponent title={"Trang cá nhân"}  navigation={navigation} back/>
      <ScrollView
                  refreshControl={
                    <RefreshControl
                      refreshing={refreshing}
                      onRefresh={handleGetProfileUser}
                    />
                  }>
        <View>
          <View>
            {isGetProfileUser?(<ShimmerPlaceholder visible={false}
                                                      width={Dimensions.get("screen").width}
                                                      height={160}
                                                      LinearGradient={LinearGradient}>
              </ShimmerPlaceholder>):
              <Pressable onPress={()=>{navigation.navigate("ViewImageScreen",{imgageUrl:link})}}>
                <FastImage
                  style={{
                    width: "100%",
                    height: 160,
                  }}
                  source={{
                    uri: link
                  }}
                  resizeMode={FastImage.resizeMode.stretch}
                />
              </Pressable>
            }
          </View>

     <View style={{marginLeft:20,
       marginTop:-65,
       }}>

       {
         isGetProfileUser?(<ShimmerPlaceholder visible={false} style={{   borderRadius: 100 / 2,}}
                                               width={100}
                                               height={100}
                                               LinearGradient={LinearGradient}>
         </ShimmerPlaceholder>):
           <Pressable onPress={()=>{navigation.navigate("ViewImageScreen",{imgageUrl:baseUrlAvatarUser+dataUser?.avatarUser})}}>

           <FastImage
               style={{
                 width: 100,
                 height: 100,
                 borderRadius: 100 / 2,
                 overflow: "hidden",
                 borderWidth:3,
                 backgroundColor:"white",
                 borderColor:"white",
               }}
               source={{
                 uri: (baseUrlAvatarUser+dataUser?.avatarUser)||'https://img.freepik.com/free-psd/3d-illustration-person_23-2149436192.jpg?w=740&t=st=1712574436~exp=1712575036~hmac=45f0ec209d444e0275361139f242a77a592eab1547c026daedddafe25dd6fe72'
               }}
               resizeMode={FastImage.resizeMode.stretch}
             />
           </Pressable>
         }
     </View>
          <Text style={{fontSize:17, color:"black",fontFamily:"OpenSans-SemiBold",fontWeight:'700',marginLeft:130,marginTop:-30}}>{dataUser?.fullName}</Text>
          <View style={{height:0.6,backgroundColor:"black",marginVertical:10}}/>
            <TouchableOpacity onPress={chooseImage} style={{ borderRadius:16, backgroundColor:"#c7e4ff",alignSelf:"flex-start",paddingHorizontal:10,paddingVertical:5, marginLeft:20,marginTop:20}}>
              <Text style={{fontSize:14, color:"#148eff",fontFamily:"OpenSans-SemiBold",fontWeight:'700',position:'relative'}}>{'Bài viết'}</Text>
            </TouchableOpacity>
          <FlatList
            data={listImage}
           horizontal={true}
            renderItem={({ item }) =>   <FastImage
              style={{
                width: 100,
                height: 150,
                borderRadius:16,
                overflow: "hidden",
                borderWidth:3,
                backgroundColor:"white",
                borderColor:"white",
              }}
              source={{
                uri: item?.path
              }}
              resizeMode={FastImage.resizeMode.stretch}
            />}
            keyExtractor={(item, index) => index.toString()}
          />
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

export default React.memo(UserPageScreen);
