/**
 * Componet hiển thị bottm tab thay doi  priority cho task
 */

import React, {useCallback, useEffect, useState} from "react";
import {
  Dimensions,
  FlatList, KeyboardAvoidingView, Platform,
  SafeAreaView, ScrollView,
  StyleSheet,
  Text, TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View
} from "react-native";


import { useDispatch, useSelector } from "react-redux";

import {
    BottomSheetBackdrop,
    BottomSheetModal,
    BottomSheetModalProvider,
    BottomSheetScrollView
} from "@gorhom/bottom-sheet";
import {getColorBackgroundPriority, getColorPriority, getValuePriority} from "../../../utils/GetPriority";
import { actionChangePriorityTask } from "../../../redux-store/actions/task";
import { isValidNumber } from "react-native-gesture-handler/lib/typescript/web_hammer/utils";
import IconArrowLeft from "../../../assets/icons/IconArrowLeft.js";
import IconBack from "../../../assets/icons/IconBack.js";
import IconArrowRight from "../../../assets/icons/IconArrowRigth.js";
import { baseUrlAvatarUser } from "../../../api/ConstBaseUrl";
import FastImage from "react-native-fast-image";
import IconSearch from "../../../assets/icons/IconSearch.js";
import { actionsearchUser } from "../../../redux-store/actions/user";
import { ItemUserSearch } from "../../AddProjectScreen/ListUserSearch/ItemUserSearch.js";
import { ItemUser } from "./itemUser.tsx";



export const BottomEditUserTask:React.FC = React.memo((props:any) => {
    const {bottomSheetRef,taskId,type} = props
  const dataUserSearch = useSelector((state:any) => state.user.dataUserSearch);
  const [userSelected, setUserSelected] = useState<object|null>(null);
  const [textSearch, setTextSearch] = useState<string>("");
  const dispatch = useDispatch();
    const renderBackdrop = useCallback(
        (props:any) => {
            return <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />;
        },
        []
    );
    useEffect(()=>{
      console.log("mout lai")
    },[])
    const handleEditUser=async (priority:any):Promise<void> => {
      await dispatch(actionChangePriorityTask(priority, taskId))
      bottomSheetRef.current.dismiss();
    }
   const handleSearchUser=(value:string)=>{
      setTextSearch(value)
     dispatch(actionsearchUser(value))
   }
   const handleChooseUser=(item:object)=>{
      setUserSelected(item)
   }
  return(
        <BottomSheetModalProvider>
            <BottomSheetModal
                ref={bottomSheetRef}
                enablePanDownToClose={true}
                backdropComponent={renderBackdrop}
                snapPoints={['80%']}>
                <BottomSheetScrollView  >
                    <View style={{paddingHorizontal:10, backgroundColor:"white",marginBottom:200}}>
                          <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center",width:'100%'}}>
                                <TouchableOpacity>
                                  <IconBack/>
                                </TouchableOpacity>
                            <Text style={{
                              fontSize: 17,
                              color: "black",
                              fontFamily: "Roboto-Bold",
                              textAlign: "left",
                            }}>{type==0?"Người giao việc":"Giao xử lý"}</Text>
                            <TouchableOpacity>
                              <Text style={{
                                fontSize: 17,
                                color: "#3399FF",
                                fontFamily: "Roboto-Bold",
                                textAlign: "left",
                              }}>{"Lưu"}</Text>
                            </TouchableOpacity>
                          </View>
                         <View style={{marginLeft:"10%",alignItems:"center", alignSelf:"flex-start"}}>
                           <FastImage
                             style={{ width: 50, height: 50,borderRadius: 50/2 ,overflow: "hidden"}}
                             source={{
                               uri:  (baseUrlAvatarUser+userSelected?.avatarUser)||''
                             }}
                             resizeMode={FastImage.resizeMode.stretch}

                           />
                           <Text style={{
                             fontSize: 15,
                             color: "black",
                             fontFamily: "OpenSans-Regular",
                             textAlign: "left",
                           }}>{userSelected?.userName}</Text>
                         </View>
                      <KeyboardAvoidingView keyboardVerticalOffset={10} behavior='padding' >
                        <SafeAreaView style={{ flexDirection: "row",alignItems:'center', borderRadius: 15,marginVertical:10 ,  backgroundColor:"#EEEEEE",paddingHorizontal:10, paddingVertical:Platform.OS==='ios'?5:0,marginLeft:5}}>
                          <IconSearch/>
                          <TextInput
                            multiline={true}
                            value={textSearch}
                            onChangeText={handleSearchUser}
                            style={{ color: 'black', fontSize: 15, fontFamily: "OpenSans-Regular", flex: 1 }}
                            placeholder="Tim kiếm thành viên..."
                            placeholderTextColor={"#888888"}
                          />
                        </SafeAreaView>
                      </KeyboardAvoidingView>
                      <FlatList
                        data={dataUserSearch}
                        renderItem={({item}) => <ItemUser item={item} handleChooseUser={handleChooseUser}/>}
                        scrollEnabled={false}
                        keyExtractor={item => item.userId}
                      />
                    </View>
                </BottomSheetScrollView>
            </BottomSheetModal>
        </BottomSheetModalProvider>
    )
  },
);
const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginTop: 19,
  },

});

// export default React.memo(ListFileAttachComponent);
