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
import IconUser from "../../assets/icons/IconUser";
import IconCardId from "../../assets/icons/IconCardId";
import IconEmail from "../../assets/icons/IconEmail";
import IconPhone2 from "../../assets/icons/IconPhone2";
import IconGiftBox from "../../assets/icons/IconGitBox";
import IconEdit from "../../assets/icons/IconEdit";
import {convertDateDB} from "../../utils/ConverPickerDate";


const ProFilePersonalScreen = ({ navigation ,route }) => {

  const [refreshing, setRefreshing] = useState(false);
    const dataCurrentUser = useSelector(state => state.auth.dataCurrentUser);
   console.log(dataCurrentUser)


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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  } ,
    viewItemInfor:{
        flexDirection:"row", alignItems:"flex-start",
        marginTop:15
    },
    textInfor:{
        fontSize: 17, color: "black", fontFamily: "OpenSans-Regular"
    }

});

export default React.memo(ProFilePersonalScreen);
