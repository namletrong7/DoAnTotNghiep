
import {Dimensions, StyleSheet, Text, View} from "react-native";
import IconLoadMore from "../../../assets/icons/IconLoadMorer";
import React, { useCallback, useEffect, useMemo, useState } from "react";
export const ItemBoard = React.memo(() =>{
    return (
        <View style={styles.container}>
                <IconLoadMore/>
                <View >
                    <Text style={{ fontSize: 17, color: "black",marginLeft:5, fontFamily: "OpenSans-SemiBold" }}>{"Dang lam"}</Text>
                    <Text style={{ fontSize: 15, color: "black",marginLeft:5, fontFamily: "OpenSans-Regular" }}>{"Dang lam"}</Text>
                </View>
        </View>
    )
});

const styles = StyleSheet.create({
    container: {
        flex:0.48,borderRadius:10,flexDirection:'row',paddingHorizontal:5, paddingVertical:5,backgroundColor:"red"
    },


});
