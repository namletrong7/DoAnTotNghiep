/**
 * Màn hình chi tiết công việc
 */

import React, { memo, useEffect, useMemo, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,ActivityIndicator,
  ImageBackground, Dimensions, Image, SafeAreaView, FlatList, TextInput, ScrollView, KeyboardAvoidingView,
} from "react-native";
import {
  actionAddComment,
  actionAddDataFake,
  actionChangeTitleTask,
  actionLogout,
} from "../../redux-store/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import HeaderComponent from "../../components/header/HeaderComponent";
import { getColorBackgroundPriority, getColorPriority, getValuePriority } from "../../utils/GetPriority";
import ListCommentComponet from "../../components/listCommentComponent/ListCommentComponet";
import FastImage from "react-native-fast-image";
import IconCalendar from "../../assets/icons/IconCalendar";
import SendCommentComponent from "../../components/sendComentComponet/SendCommentComponent";
import { ListFileAttachComponent } from "../../components/listFileAttachComponent/ListFileAttachComponent";
import FlashMessage, { showMessage } from "react-native-flash-message"
import ModalComponent from "../../components/changeConentComponent/ModalChangeContent";
import ModalChaneConent from "../../components/changeConentComponent/ModalChangeContent";
import IconEdit from "../../assets/icons/IconEdit";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import TabNavigator from "../../navigation/TopTabTask";



export const DetailProjectScreen = React.memo(({navigation})=>{

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  // Lấy thông tin kích thước của màn hình
  const { width: screenWidth, height: screenHeight } = Dimensions.get('window');



  return (
    <View style={{width:screenWidth, height:screenHeight}}>
      <TouchableOpacity onPress={()=>{navigation.navigate("MyTaskNavigator1")}}
        style={{width:100, height:100, backgroundColor:'red'}}></TouchableOpacity>
      <TabNavigator navigation = {navigation} />
    </View>
  );
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


