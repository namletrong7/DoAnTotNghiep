import { BottomSheetModal, BottomSheetModalProvider, BottomSheetScrollView } from "@gorhom/bottom-sheet";
import {
  Dimensions,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView, StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import React, { useCallback, useEffect, useState } from "react";
import ListUserChoose from "../../AddProjectScreen/ListUserChoose/ListUserChoose";
import IconSearch from "../../../assets/icons/IconSearch";
import { actionEditUserProject, actionsearchUser } from "../../../redux-store/actions/user";
import { useDispatch, useSelector } from "react-redux";
import ListUserSearch from "../../AddProjectScreen/ListUserSearch/ListUserSearch";
import { checkMember } from "../../AddProjectScreen/Utils/CheckMember";

import { showMessage } from "react-native-flash-message";
import { ScrollView } from "react-native-gesture-handler";
import { ItemUserSearch } from "../../AddProjectScreen/ListUserSearch/ItemUserSearch";
import { ItemMember } from "./ItemMember";
import IconTick from "../../../assets/icons/IconTick";
import IconUnTick from "../../../assets/icons/IconUnTick";
import FastImage from "react-native-fast-image";
import { baseUrlAvatarUser } from "../../../api/ConstBaseUrl";

export const BottomFilterTaskProject=React.memo((props)=>{
  const {bottomSheetRef,renderBackdrop,snapPoints}= props








  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomSheetRef}
        index={0}
        enablePanDownToClose={true}
        backdropComponent={renderBackdrop}
        snapPoints={snapPoints}>
          <ScrollView style={{backgroundColor:"white",marginBottom:"10%"}} >
            <Text style={{fontSize:18,alignSelf:'center',marginVertical:10, color:"black",fontFamily:"OpenSans-SemiBold",fontWeight:'700',marginRight:10}}>{"Lọc công việc"}</Text>

          </ScrollView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  )
})
const styles = StyleSheet.create({
  container: {
    textStyle: 1,
  },

});
