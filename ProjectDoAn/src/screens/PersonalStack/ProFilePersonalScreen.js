import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ImageBackground, Dimensions, Image, SafeAreaView, FlatList, ScrollView, RefreshControl, Modal,
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
import IconUser from "../../assets/icons/IconUser";
import IconCardId from "../../assets/icons/IconCardId";
import IconEmail from "../../assets/icons/IconEmail";
import IconPhone2 from "../../assets/icons/IconPhone2";
import IconGiftBox from "../../assets/icons/IconGitBox";
import IconEdit from "../../assets/icons/IconEdit";
import {convertDateDB} from "../../utils/ConverPickerDate";
import IconCam from "../../assets/icons/IconCam";
import { getColorStateProject, getStateProject } from "../../utils/GetPriority";


const ProFilePersonalScreen = ({ navigation ,route }) => {

  const [refreshing, setRefreshing] = useState(false);
    const dataCurrentUser = useSelector(state => state.auth.dataCurrentUser);

  const [isShowOptionAvatar, setIsShowOptionAvatar] = useState(false);

  return (
    <View style={{backgroundColor:"white",height:'100%'}}>
      <HeaderComponent title={"Thông tin cá nhân"} navigation={navigation} back/>
      <ScrollView contentContainerStyle={{marginTop:10}}
                  refreshControl={
                    <RefreshControl
                      refreshing={refreshing}
                    />
                  }>
        <View>
            <View style={{marginHorizontal:20,}}>
                <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                    <Text style={[styles.textInfor,{fontFamily:"OpenSans-SemiBold"}]}>{"Thông tin cá nhân"}</Text>
                    <TouchableOpacity onPress={()=>{navigation.navigate("EditProfilePersonalScreen")}} style={{marginLeft:10,flexDirection:"row",alignItems:"center"}}>
                        <IconEdit height={14} width={14} />
                        <Text style={[styles.textInfor,{color:"#1062dc",marginLeft:4}]}>{"Chỉnh sửa"}</Text>
                    </TouchableOpacity>
                </View>



             <View style={styles.viewItemInfor}>
                 <IconUser/>
                 <View style={{marginLeft:10}}>
                     <Text style={styles.textInfor}>{"Họ và tên:"}</Text>
                     <Text style={styles.textInfor}>{dataCurrentUser?.fullName}</Text>
                 </View>
               <TouchableOpacity onPress={()=>{setIsShowOptionAvatar(true)}} style={{flex:1,alignItems:"flex-end"}}>
                 <FastImage
                   style={{ width: 60, height: 60,borderRadius: 60/2 ,}}
                   source={{
                     uri: (baseUrlAvatarUser+dataCurrentUser?.avatarUser)||'https://raw.githubusercontent.com/gist/vinhjaxt/fa4208fd6902dd8b2f4d944fa6e7f2af/raw/454f58aeac4fdeb459476eae7128dc6ff57df25f/logo-hvktmm.png'
                   }}
                   resizeMode={FastImage.resizeMode.stretch}/>
                 <View style={{width: 25, height: 25,borderRadius: 25/2,marginTop:-20,backgroundColor:"#DDDDDD",alignItems:"center",justifyContent:'center'}}>
                   <IconCam  width={17} height={17}/>
                 </View>

               </TouchableOpacity>

             </View>
            <View style={styles.viewItemInfor}>
                <IconCardId/>
                <View style={{marginLeft:10}}>
                    <Text style={styles.textInfor}>{"Mã nhân viên:"}</Text>
                    <Text style={styles.textInfor}>{dataCurrentUser?.userName}</Text>
                </View>
            </View>
            <View style={styles.viewItemInfor}>
                <IconEmail/>
                <View style={{marginLeft:10}}>
                    <Text style={styles.textInfor}>{"Email:"}</Text>
                    <Text style={styles.textInfor}>{dataCurrentUser?.email}</Text>
                </View>
            </View>
            <View style={styles.viewItemInfor}>
                <IconPhone2/>
                <View style={{marginLeft:10}}>
                    <Text style={styles.textInfor}>{"Số điện thoại:"}</Text>
                    <Text style={styles.textInfor}>{dataCurrentUser?.phoneNumber}</Text>
                </View>
            </View>
            <View style={styles.viewItemInfor}>
                <IconGiftBox/>
                <View style={{marginLeft:10}}>
                    <Text style={styles.textInfor}>{"Ngày sinh:"}</Text>
                    <Text style={styles.textInfor}>{convertDateDB(dataCurrentUser?.birthDay)}</Text>
                </View>
            </View>
            </View>
            <View  style={{height:15, backgroundColor:"#DDDDDD",marginVertical:10}}/>
            <View style={{marginHorizontal:20}}>
                <Text style={[styles.textInfor,{fontFamily:"OpenSans-SemiBold",marginVertical:10}]}>{"Thông tin nội bộ"}</Text>
                <View style={{flexDirection:"row",marginVertical:5}}>
                    <Text style={styles.textInfor}>{"Chức vụ: "}</Text>
                    <Text style={[styles.textInfor,{marginLeft:10, flex:1, flexWrap:"wrap"}]}>{getValuePositionLevel(dataCurrentUser?.positionLevel)}</Text>
                </View>
                <View style={{flexDirection:"row",marginVertical:5,justifyContent:'space-between'}}>
                    <Text style={styles.textInfor}>{"Phòng ban: "}</Text>
                    <Text style={[styles.textInfor,{marginLeft:10, flex:1, flexWrap:"wrap"}]}>{dataCurrentUser?.departmentName}</Text>
                </View>
                <View style={{flexDirection:"row",marginVertical:5,justifyContent:'space-between'}}>
                    <Text style={styles.textInfor}>{"Chuyên môn: "}</Text>
                    <Text style={[styles.textInfor,{marginLeft:10, flex:1, flexWrap:"wrap"}]}>{dataCurrentUser?.jobtitleName}</Text>
                </View>
            </View>

        </View>

      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isShowOptionAvatar}
      >
        <TouchableOpacity  onPress={()=>{setIsShowOptionAvatar(false)}} style={styles.modalContainer} >
          <View  style={styles.modalContent}>
            <TouchableOpacity onPress={()=>{navigation.navigate("ViewImageScreen",{imgageUrl:dataCurrentUser?.avatarUser})}}>
              <Text style={styles.textInfor}>{"Xem ảnh đại diện "}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginVertical:20}}>
              <Text style={styles.textInfor}>{"Thay đổi ảnh đại diện "}</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  } ,
    viewItemInfor:{
        flexDirection:"row", alignSelf:"flex-start",
        marginTop:15
    },
    textInfor:{
        fontSize: 17, color: "black", fontFamily: "OpenSans-Regular"
    },
  modalContainer: {
    height:"100%",
    alignItems: 'center',
    backgroundColor:'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    paddingVertical:15,
    elevation: 5,
    width:"100%",
    position:"absolute",
    height:"15%",
    bottom:0,
    justifyContent:'center',
    alignItems:"center"

  }

});

export default React.memo(ProFilePersonalScreen);
