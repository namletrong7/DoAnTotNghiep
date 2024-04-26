/*
*  Đây là modal hiển thị danh sách user của project sử dụng ở màn hình add Task
* */
import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import FastImage from "react-native-fast-image";
import { useSelector } from "react-redux";

const LoadingComponent = (props) => {
  return (
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <ActivityIndicator size="large" color="#4577ef" />
          <Text style={{
            fontSize: 17,
            color: "#4577ef",
            fontFamily: "OpenSans-SemiBold",
            alignSelf:"center",
            textAlign:"center",
            marginVertical:10
          }}>{props.title}</Text>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 13,
    height:"800",
  },
  modalContent: {
    marginTop: "40%",
    width: "100%",
   alignItems:'center'
  },
  modelButton: {
    flexDirection: "row",
    alignItems: "center",
    display: "flex",
    height: 50,
  },
});

export default React.memo(LoadingComponent);
