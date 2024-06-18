/**
 * Componet hiển thị bottm tab thay doi  priority cho task
 */

import React, {useCallback} from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";


import { useDispatch } from "react-redux";

import {
    BottomSheetBackdrop,
    BottomSheetModal,
    BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import {
  getBackgroundStateProject,
  getColorBackgroundPriority,
  getColorPriority, getColorStateProject, getState,getBackgroundStateTask,getColorTextStateTask,
  getValuePriority, get
} from "../../../utils/GetPriority";
import { actionChangePriorityTask, actionChangeStateTask } from "../../../redux-store/actions/task";
import { ScrollView } from "react-native-gesture-handler";


export const BottomChangeState = React.memo((props) => {
    const {state,taskId,bottomSheetRef} = props
  const dispatch = useDispatch();
    const renderBackdrop = useCallback(
        (props) => {
            return <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />;
        },
        []
    );
  const handleChangeState = useCallback(async (state) => {
    await dispatch(actionChangeStateTask(state, taskId));
    bottomSheetRef.current.dismiss();
  }, [ taskId]);
    return(
        <BottomSheetModalProvider>
            <BottomSheetModal
                ref={bottomSheetRef}
                enablePanDownToClose={true}
                backdropComponent={renderBackdrop}
                snapPoints={['40%']}>
                <ScrollView  >
                    <View style={{paddingHorizontal:10, backgroundColor:"white",alignItems:"center",paddingBottom:200,justifyContent:"center"}}>
                          <TouchableOpacity onPress={()=>{handleChangeState(0)}} style={{backgroundColor:state==0?"#CCCCCC":null,width:"100%",paddingVertical:4}}>
                              <View style={{padding:8,paddingHorizontal:10, borderRadius:16, backgroundColor:getBackgroundStateTask( 0) ,alignItems:"center",alignSelf:"center"}}>
                                  <Text style={{fontSize:15, color:getColorTextStateTask( 0),fontFamily:"OpenSans-Regular"}}>{getState(0)}</Text>
                              </View>
                          </TouchableOpacity>
                        <TouchableOpacity  onPress={()=>{handleChangeState(1)}} style={{backgroundColor:state==1?"#CCCCCC":null,width:"100%",paddingVertical:4}}>
                          <View style={{padding:8,paddingHorizontal:10, borderRadius:16, backgroundColor:getBackgroundStateTask( 1) ,alignItems:"center",alignSelf:"center"}}>
                            <Text style={{fontSize:15, color:getColorTextStateTask( 1),fontFamily:"OpenSans-Regular"}}>{getState(1)}</Text>
                          </View>
                       </TouchableOpacity>

                        <TouchableOpacity  onPress={()=>{handleChangeState(2)}} style={{backgroundColor:state==2?"#CCCCCC":null,width:"100%",paddingVertical:5}}>
                          <View style={{padding:8,paddingHorizontal:10, borderRadius:16, backgroundColor:getBackgroundStateTask( 2) ,alignItems:"center",alignSelf:"center"}}>
                            <Text style={{fontSize:15, color:getColorTextStateTask( 2),fontFamily:"OpenSans-Regular"}}>{getState(2)}</Text>
                          </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </BottomSheetModal>
        </BottomSheetModalProvider>
    )
  }
  )

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginTop: 19,
  },

});

// export default React.memo(ListFileAttachComponent);
