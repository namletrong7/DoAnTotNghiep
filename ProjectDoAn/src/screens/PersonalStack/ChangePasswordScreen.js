import React, {useCallback, useEffect, useState} from "react";
import {
    View,
    Text,
    Button,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback,
    ImageBackground, Dimensions, Image, SafeAreaView, FlatList, ScrollView, RefreshControl, Modal, TextInput,
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
import {actionChangePassword, actionGetProfileUser} from "../../redux-store/actions/user";
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
import LogoApp from "../../assets/icons/LogoApp";
import IconEye from "../../assets/icons/IconEye";
import IconEyeSlash from "../../assets/icons/IconEyeSlash";
import LottieView from "lottie-react-native";


const ChangePasswordScreen = ({ navigation ,route }) => {

    const [pass, setPass ] = useState(null);
    const [rePass, setRePass ] = useState(null);
    const [error, setError ] = useState({});
  const [isShowPass, setIsShowPass ] = useState(true);
  const [isShowRePass, setIsShowRePass] = useState(true);
    const dispatch = useDispatch();
  const isChangePass = useSelector(state => state.user?.isChangePass);

    const validatePassword = useCallback((password) => {
        const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
        return regex.test(password);
    },[]);
      const handleChangePass=async () => {
          const error = {};
          if (!validatePassword(pass)) {
              error.pass = 'Vui lòng nhập mật khẩu thỏa mãn điều kiện trên!'
              setError(error)
          }
          if (!validatePassword(rePass)) {
              error.rePass = 'Vui lòng nhập mật khẩu thỏa mãn điều kiện trên!'
              setError(error)
          } else if (rePass !== pass) {
              error.rePass = 'Nhập lại mật khẩu không khớp!'
              setError(error)
          } else {
              setError(error)
              await dispatch(actionChangePassword(pass))
              setPass(null)
              setRePass(null)
          }
      }
  return (
    <View style={{backgroundColor:"white",height:'100%'}}>
      <HeaderComponent title={"Đổi mật khẩu"} navigation={navigation} back/>
      <ScrollView contentContainerStyle={{marginTop:10}}>
        <View style={styles.container}>
            <View style={{marginTop:"10%",alignItems:"center"}}>
                <LogoApp/>
                <Text style={{ fontSize: 12, color: "#888888", fontFamily: "OpenSans-SemiBold",marginTop:15,flexWrap:"wrap",paddingHorizontal:90 }}>Xin vui lòng nhập mật khẩu mới với điều kiện: Có ít nhất 8 ký tự, bao gồm ít nhất 1 chữ hoa, bao gồm 1 ký tự đặc biệt </Text>
            </View>
            <View  style={styles.textInput}>
                <View style={{width:3, backgroundColor:"blue",borderRadius:5,paddingRight:4,marginRight:10}}/>
                <TextInput
                    placeholder={"Nhập mật khẩu mới"}
                    value={pass}
                    onChangeText={setPass}
                    placeholderTextColor={'#666565'}
                    autoCapitalize="none"
                    secureTextEntry={isShowPass}
                    style={{ width: '95%', color: '#000',paddingRight:10 }}
                />
                    <TouchableOpacity onPress={()=>setIsShowPass(!isShowPass)}  style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
                        {isShowPass ? (<IconEye />) : (<IconEyeSlash />)}
                    </TouchableOpacity>

            </View>
            {error.pass?
            <Text style={{
                fontSize: 10,
                alignSelf:'flex-start',
                color: "red",
                marginLeft:"10%",
                fontFamily: "OpenSans-SemiBold",
            }}>{error.pass}</Text>:null}
            <View style={styles.textInput}>
                <View style={{width:3, backgroundColor:"green",borderRadius:5,paddingRight:4,marginRight:10}}/>
                <TextInput
                    value={rePass}
                    onChangeText={setRePass}
                    placeholder={"Nhập lại mật khẩu mới"}
                    placeholderTextColor={'#666565'}
                    autoCapitalize="none"
                    secureTextEntry={isShowRePass}
                    style={{ width: '95%', color: '#000',paddingRight:10 }}
                />
                <TouchableOpacity onPress={()=>setIsShowRePass(!isShowRePass)}  style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
                    {isShowRePass ? (<IconEye />) : (<IconEyeSlash />)}
                </TouchableOpacity>
            </View>
            {error.rePass?
            <Text style={{
                fontSize: 10,
                alignSelf:'flex-start',
                color: "red",
                marginLeft:"10%",
                fontFamily: "OpenSans-SemiBold",
            }}>{error.rePass}</Text>:null}
            <TouchableOpacity onPress={handleChangePass} style={{height:50,alignSelf:'center', paddingHorizontal:9, borderRadius:17, backgroundColor:"#daeefd", marginTop:30,alignItems:'center', justifyContent:'center',width:'40%'}}>
              {
                isChangePass?
                  <LottieView style={{ height:90,width:90}} source={require('../../assets/animation/circlesRotate.json')} autoPlay loop />:
                  <Text style={{
                    fontSize: 15,
                    color: "#2f88dc",
                    fontFamily: "OpenSans-SemiBold",
                  }}>{"Đổi mật khẩu"}</Text>
              }

            </TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
      alignItems:'center'
  } ,
    viewItemInfor:{
        flexDirection:"row", alignSelf:"flex-start",
        marginTop:15
    },
    textInfor:{
        fontSize: 17, color: "black", fontFamily: "OpenSans-Regular"
    },
    textInput:{
        paddingHorizontal: 20,
        paddingLeft:0,
        width: '80%',
        height: 50,
        borderWidth: 1,
        borderColor: '#178cf9',
        borderRadius: 5,
        marginVertical: 10,
        flexDirection: 'row'
    }

});

export default React.memo(ChangePasswordScreen);
