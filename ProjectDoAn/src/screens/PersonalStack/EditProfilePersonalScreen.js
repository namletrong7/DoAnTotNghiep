import React, {useEffect, useState} from "react";
import {
    View,
    Text,
    Button,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback,
    ImageBackground, Dimensions, Image, SafeAreaView, FlatList, ScrollView, RefreshControl,
} from "react-native";
import {actionLogout} from "../../redux-store/actions/auth";
import {useDispatch, useSelector} from "react-redux";
import HeaderComponent from "../../components/header/HeaderComponent";

import ItemTask from "../../components/itemTask/ItemTask";
import FastImage from "react-native-fast-image";
import {getValuePositionLevel} from "../../utils/GetValuePosition";
import IconMessage from "../../assets/icons/IconMessage";
import IconPhone from "../../assets/icons/IconPhone";
import IconMail from "../../assets/icons/IconMail";
import Toast from "react-native-toast-message";
import FlashMessage, {showMessage} from "react-native-flash-message";
import {actionGetProfileUser} from "../../redux-store/actions/user";
import {ShimmerProfileUser} from "./shimmerProfileUser/ShimerProfileUser";
import {
    ShimmerEffectCommentComponent
} from "../../components/shimmerEfffect/ShimmerEffectComment/ShimmerEffectCommentComponent";
import {baseUrlAvatarUser} from "../../api/ConstBaseUrl";
import IconUser from "../../assets/icons/IconUser";
import IconCardId from "../../assets/icons/IconCardId";
import IconEmail from "../../assets/icons/IconEmail";
import IconPhone2 from "../../assets/icons/IconPhone2";
import IconGiftBox from "../../assets/icons/IconGitBox";
import IconEdit from "../../assets/icons/IconEdit";
import {convertDateDB} from "../../utils/ConverPickerDate";


const EditProfilePersonalScreen = ({navigation, route}) => {

    const [refreshing, setRefreshing] = useState(false);
    const dataCurrentUser = useSelector(state => state.auth.dataCurrentUser);



    return (
        <View style={{backgroundColor: "white", height: '100%'}}>
            <HeaderComponent title={"Chỉnh sửa trang cá nhân"} navigation={navigation} back/>
            <ScrollView contentContainerStyle={{marginTop: 10}}
                        refreshControl={
                            <RefreshControl
                                refreshing={refreshing}
                            />
                        }>
                <View>
                    <View style={{marginHorizontal: 20,}}>

                            <Text style={[styles.textInfor, {fontFamily: "OpenSans-SemiBold"}]}>{"Thông tin cá nhân"}</Text>


                        <View style={styles.viewItemInfor}>
                            <IconUser/>
                            <View style={{marginLeft: 10,flex:1}}>
                                <Text style={styles.textInfor}>{"Họ và tên:"}</Text>
                                <View style={{
                                    marginTop:15,
                                    justifyContent: 'center',
                                    paddingVertical: 5,
                                    borderColor: "#DDDDDD",
                                    borderWidth: 0.5,
                                    borderRadius: 7,
                                    paddingHorizontal: 5
                                }}>
                                    <Text style={styles.textInfor}>{dataCurrentUser?.fullName}</Text>
                                </View>

                            </View>
                        </View>
                        <View style={styles.viewItemInfor}>
                            <IconCardId/>
                            <View style={{marginLeft: 10, flex: 1}}>
                                <Text style={styles.textInfor}>{"Mã nhân viên:"}</Text>
                                <View style={{
                                    marginTop:15,
                                    justifyContent: 'center',
                                    paddingVertical: 5,
                                    borderColor: "#DDDDDD",
                                    borderWidth: 0.5,
                                    borderRadius: 7,
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
                                <View style={{
                                    marginTop:15,
                                    justifyContent: 'center',
                                    paddingVertical: 5,
                                    borderColor: "#DDDDDD",
                                    borderWidth: 0.5,
                                    borderRadius: 7,
                                    paddingHorizontal:5
                                }}>
                                    <Text style={styles.textInfor}>{dataCurrentUser?.email}</Text>
                                </View>

                            </View>
                        </View>
                        <View style={styles.viewItemInfor}>
                            <IconPhone2/>
                            <View style={{marginLeft: 10, flex: 1}}>
                                <Text style={styles.textInfor}>{"Số điện thoại:"}</Text>
                                <View style={{
                                    marginTop:15,
                                    justifyContent: 'center',
                                    paddingVertical: 5,
                                    borderColor: "#DDDDDD",
                                    borderWidth: 0.5,
                                    borderRadius: 7,
                                    paddingHorizontal: 5
                                }}>
                                    <Text style={styles.textInfor}>{dataCurrentUser?.phoneNumber}</Text>
                                </View>

                            </View>
                        </View>
                        <View style={styles.viewItemInfor}>
                            <IconGiftBox/>
                            <View style={{marginLeft: 10, flex: 1}}>
                                <Text style={styles.textInfor}>{"Ngày sinh:"}</Text>
                                <View style={{
                                    marginTop:15,
                                    justifyContent: 'center',
                                    paddingVertical: 5,
                                    borderColor: "#DDDDDD",
                                    borderWidth: 0.5,
                                    borderRadius: 7,
                                    paddingHorizontal: 5
                                }}>
                                    <Text style={styles.textInfor}>{convertDateDB(dataCurrentUser?.birthDay)}</Text>
                                </View>

                            </View>
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
