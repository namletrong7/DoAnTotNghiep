import React, { useCallback, useEffect, useState } from "react";
import {
    View,
    Text,
    Button,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback,
    ImageBackground,
    Dimensions,
    Image,
    SafeAreaView,
    FlatList,
    ScrollView,
    RefreshControl,
    TextInput,
    KeyboardAvoidingView, Pressable,
} from "react-native";

import {useDispatch, useSelector} from "react-redux";
import HeaderComponent from "../../components/header/HeaderComponent";


import IconUser from "../../assets/icons/IconUser";
import IconCardId from "../../assets/icons/IconCardId";
import IconEmail from "../../assets/icons/IconEmail";
import IconPhone2 from "../../assets/icons/IconPhone2";
import IconGiftBox from "../../assets/icons/IconGitBox";
import IconEdit from "../../assets/icons/IconEdit";
import { converPickerDate, convertDateDB } from "../../utils/ConverPickerDate";
import LottieView from "lottie-react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from "moment/moment";
import { actionEditInforUser } from "../../redux-store/actions/user";


const EditProfilePersonalScreen = ({navigation, route}) => {

    const [refreshing, setRefreshing] = useState(false);
    const dispatch  = useDispatch();

    const [email, setEmail] = useState(null);
    const [fullname, setFullname] = useState(null);
    const [phone, setPhone] = useState(null);
    const [birthDay, setBirthDay] = useState(null); // dùng cho hiển thị
    const [ngaySinh, setNgaySinh] = useState(null);   // dùng cho gửi API
    const [isShowChooseBirthDay, setIsShowChooseBirthDay] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const dataCurrentUser = useSelector(state => state.auth.dataCurrentUser);
      useEffect(()=>{
          setFullname(dataCurrentUser?.fullName)
          setEmail(dataCurrentUser?.email)
          setPhone(dataCurrentUser?.phoneNumber)
          setBirthDay(convertDateDB(dataCurrentUser?.birthDay))
          setNgaySinh(dataCurrentUser?.birthDay)
      },[dataCurrentUser])

    const handleCancel=useCallback(()=>{
        setFullname(dataCurrentUser?.fullName)
        setEmail(dataCurrentUser?.email)
        setPhone(dataCurrentUser?.phoneNumber)
        setBirthDay(convertDateDB(dataCurrentUser?.birthDay))
        setNgaySinh(dataCurrentUser?.birthDay)
    },[dataCurrentUser])
    const onConfirmBirthDay = (date)=>{
        setBirthDay(converPickerDate(date));
        setNgaySinh(moment(date).format('YYYY-MM-DD'))
        setIsShowChooseBirthDay(false)
    }
    const handleEditInforUser=async () => {
        setIsLoading(true)
        await dispatch(actionEditInforUser(fullname, email, phone, ngaySinh))
        setTimeout(() => {
            setIsLoading(false)
        }, 2000);

    }
    return (
        <View style={{backgroundColor: "white", height: '100%'}}>
            <HeaderComponent title={"Chỉnh sửa trang cá nhân"} navigation={navigation} back/>
            <KeyboardAvoidingView keyboardVerticalOffset={10} behavior='padding'>
                <ScrollView contentContainerStyle={{marginTop: 10}}
                            refreshControl={
                                <RefreshControl
                                  refreshing={refreshing}
                                />
                            }>
                    <View style={{marginHorizontal: 20,}}>

                            <Text style={[styles.textInfor, {fontFamily: "OpenSans-SemiBold"}]}>{"Thông tin cá nhân"}</Text>


                        <View style={styles.viewItemInfor}>
                            <IconUser/>
                            <View style={{marginLeft: 10,flex:1}}>
                                <Text style={styles.textInfor}>{"Họ và tên:"}</Text>
                                <TextInput
                                  value={fullname}
                                  onChangeText={setFullname}
                                  style={{
                                    marginTop:15,
                                    justifyContent: 'center',
                                    paddingVertical: 5,
                                    borderColor: "#DDDDDD",
                                    borderWidth: 0.5,
                                    borderRadius: 7,
                                    paddingHorizontal: 5,
                                      fontSize:17,
                                }}>

                                </TextInput>

                            </View>
                        </View>
                        <View style={styles.viewItemInfor}>
                            <IconCardId/>
                            <View style={{marginLeft: 10, flex: 1}}>
                                <Text style={styles.textInfor}>{"Mã nhân viên:"}</Text>
                                <View style={{
                                    marginTop:5,
                                    justifyContent: 'center',
                                    paddingHorizontal: 5
                                }}>
                                    <Text style={styles.textInfor}>{dataCurrentUser?.userName}</Text>
                                </View>

                            </View>
                        </View>
                        <View style={styles.viewItemInfor}>
                            <IconEmail/>
                            <View style={{marginLeft: 10, flex: 1}}>
                                <Text style={styles.textInfor}>{"Email:"}</Text>
                                <TextInput
                                  keyboardType={'email-address'}
                                  value={email}
                                  onChangeText={setEmail}
                                  style={{
                                    marginTop:15,
                                    justifyContent: 'center',
                                    paddingVertical: 5,
                                    borderColor: "#DDDDDD",
                                    borderWidth: 0.5,
                                    borderRadius: 7,
                                    paddingHorizontal:5,
                                    fontSize:17
                                }}>
                                </TextInput>

                            </View>
                        </View>
                        <View style={styles.viewItemInfor}>
                            <IconPhone2/>
                            <View style={{marginLeft: 10, flex: 1}}>
                                <Text style={styles.textInfor}>{"Số điện thoại:"}</Text>
                                <TextInput
                                  value={phone}
                                  onChangeText={setPhone}
                                  maxLength={10}
                                  keyboardType={"phone-pad"}
                                  style={{
                                    marginTop:15,
                                    justifyContent: 'center',
                                    paddingVertical: 5,
                                    borderColor: "#DDDDDD",
                                    borderWidth: 0.5,
                                    borderRadius: 7,
                                    paddingHorizontal: 5,
                                    fontSize:17
                                }}>
                                </TextInput>

                            </View>
                        </View>
                        <View style={styles.viewItemInfor}>
                            <IconGiftBox/>
                            <View style={{marginLeft: 10, flex: 1}}>
                                <Text style={styles.textInfor}>{"Ngày sinh:"}</Text>
                                <Pressable onPress={()=>setIsShowChooseBirthDay(true)} style={{
                                    marginTop:15,
                                    justifyContent: 'center',
                                    paddingVertical: 5,
                                    borderColor: "#DDDDDD",
                                    borderWidth: 0.5,
                                    borderRadius: 7,
                                    paddingHorizontal: 5
                                }}>
                                    <Text style={styles.textInfor}>{birthDay}</Text>
                                </Pressable>
                            </View>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:"space-between"}}>
                            <TouchableOpacity onPress={handleEditInforUser} style={{height:40,alignSelf:'center', paddingHorizontal:9, borderRadius:17, backgroundColor:"#daeefd", marginTop:30,alignItems:'center', justifyContent:'center',width:'40%'}}>
                                <Text style={{
                                    fontSize: 15,
                                    color: "#2f88dc",
                                    fontFamily: "OpenSans-SemiBold",
                                }}>{"Thay đổi"}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleCancel} style={{height:40,alignSelf:'center', paddingHorizontal:9, borderRadius:17, backgroundColor:"#C0C0C0", marginTop:30,alignItems:'center', justifyContent:'center',width:'40%'}}>
                                <Text style={{
                                    fontSize: 15,
                                    color: "white",
                                    fontFamily: "OpenSans-SemiBold",
                                }}>{"Hủy"}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
            </ScrollView>
            </KeyboardAvoidingView>
            <DateTimePicker
              isVisible={isShowChooseBirthDay}
              mode="date"
              onCancel={()=>{setIsShowChooseBirthDay(false)}}
              onConfirm={onConfirmBirthDay}
            />
            {isLoading?
            <View style={{top:'30%',position:"absolute",backgroundColor:'rgba(0,0,0,0.1)',alignItems:'center',alignSelf:'center',borderRadius:10}}>
                <LottieView style={{ height:100,width:100}} source={require('../../assets/animation/circlesRotate.json')} autoPlay loop />
            </View>:null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    viewItemInfor: {
        flexDirection: "row", alignItems: "flex-start",
        marginTop: 15
    },
    textInfor: {
        fontSize: 17, color: "black", fontFamily: "OpenSans-Regular"
    }

});

export default React.memo(EditProfilePersonalScreen);
