/**
 * Componet hiển thị bottm tab thay doi  priority cho task
 */

import React, {useCallback, useEffect, useState} from "react";
import {
  Dimensions,
  FlatList,
  SafeAreaView, ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";


import { useDispatch, useSelector } from "react-redux";
import IconArrowDown from "../../../assets/icons/IconArrowDown";
import IconArrowUp from "../../../assets/icons/IconArrowLeft";
import {
    BottomSheetBackdrop,
    BottomSheetModal,
    BottomSheetModalProvider,
    BottomSheetScrollView
} from "@gorhom/bottom-sheet";
import {getColorBackgroundPriority, getColorPriority, getValuePriority} from "../../../utils/GetPriority";


export const BottomChangePriority = React.memo((props) => {
    const {bottomSheetRef,priority} = props
    const renderBackdrop = useCallback(
        (props: any) => {
            return <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />;
        },
        []
    );
    return(
        <BottomSheetModalProvider>
            <BottomSheetModal
                ref={bottomSheetRef}
                enablePanDownToClose={true}
                backdropComponent={renderBackdrop}
                snapPoints={['40%']}>
                <BottomSheetScrollView  >
                    <View style={{paddingHorizontal:10, backgroundColor:"white",alignItems:"center",paddingBottom:200,justifyContent:"center"}}>
                          <TouchableOpacity style={{backgroundColor:priority==0?"#CCCCCC":null,width:"100%",paddingVertical:4}}>
                              <View style={{padding:8,paddingHorizontal:10, borderRadius:16, backgroundColor:getColorBackgroundPriority( 0) ,alignItems:"center",alignSelf:"center"}}>
                                  <Text style={{fontSize:15, color:getColorPriority( 0),fontFamily:"OpenSans-Regular"}}>{getValuePriority(0)}</Text>
                              </View>
                          </TouchableOpacity>
                        <TouchableOpacity style={{backgroundColor:priority==1?"#CCCCCC":null,width:"100%",paddingVertical:4}}>
                           <View style={{padding:8,paddingHorizontal:10, borderRadius:16, backgroundColor:getColorBackgroundPriority( 1) ,alignItems:"center",alignSelf:"center"}}>
                               <Text style={{fontSize:15, color:getColorPriority( 1),fontFamily:"OpenSans-Regular"}}>{getValuePriority(1)}</Text>
                           </View>
                       </TouchableOpacity>

                        <TouchableOpacity style={{backgroundColor:priority==2?"#CCCCCC":null,width:"100%",paddingVertical:5}}>
                            <View style={{padding:8,paddingHorizontal:10, borderRadius:16, backgroundColor:getColorBackgroundPriority( 2) ,alignItems:"center",alignSelf:"center"}}>
                                <Text style={{fontSize:15, color:getColorPriority( 2),fontFamily:"OpenSans-Regular"}}>{getValuePriority(2)}</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={{backgroundColor:priority==3?"#CCCCCC":null,width:"100%",paddingVertical:5}}>
                            <View style={{padding:8,paddingHorizontal:10, borderRadius:16, backgroundColor:getColorBackgroundPriority( 3) ,alignItems:"center",alignSelf:"center"}}>
                                <Text style={{fontSize:15, color:getColorPriority( 3),fontFamily:"OpenSans-Regular"}}>{getValuePriority(3)}</Text>
                            </View>
                        </TouchableOpacity>


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
