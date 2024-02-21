/**
 * Created by TuanTQd on 29/01/2024
 */
// components/YourComponent.js
import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {ActivityIndicator, Button, Text, View} from "react-native";
import Modal from 'react-native-modal';

import {getTemPlate, actionLogin} from "../redux-store/actions/auth";
import * as NetInfo from "@react-native-community/netinfo";
import { StyleSheet } from 'react-native';

//NamLTc: tạo để test call api bất kỳ
const TestScreen = () => {
    const dispatch = useDispatch();
    const authData = useSelector(state => state.auth);
    const [isConnected, setIsConnected] = useState(true);
    const [isVisibleModal, SetIsVisibleModal] = useState(false);

    useEffect(() => {
        console.log("Xin chào việt nam")
            dispatch(actionLogin("https://qlnvsotttt.tayninh.gov.vn/api",{
                "username": "tanduc",
                "password": "123456a@"
            }));


    }, []);
    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            setIsConnected(state.isConnected);
        });

        return () => {
            unsubscribe();
        };
    }, []);
    useEffect(() => {
        if(isConnected){
            SetIsVisibleModal(false)
        }else{
            SetIsVisibleModal(true)
        }
    }, [isConnected]);

    const NoInternetModal = ({show, onRetry, isRetrying}) => {
        return (
            <Modal
                isVisible={isVisibleModal}
                animationIn="zoomIn"
                animationOut="zoomOut"
                animationInTiming={300}
                animationOutTiming={300}
                backdropTransitionInTiming={300}
                backdropTransitionOutTiming={300}
                style={styles.modal}
            >
                <View style={styles.modalContainer}>
                    <Text style={styles.modalTitle}>Connection Error</Text>
                    <Text style={styles.modalText}>
                        Oops! Looks like your device is not connected to the Internet.
                    </Text>
                    <Button onPress={onRetry} disabled={isRetrying} title={"xin chào"}>
                    </Button>
                </View>
            </Modal>
        )
    }
    return (
        <View style={{marginTop:10,backgroundColor: 'black',height:'100%'}}>
            {authData.getTokenLoading?(
                    <ActivityIndicator size="large" color="#0000ff" />):
                (<Text style={{color:"red",justifyContent: 'center', alignItems: 'center'}}>{"Xin chào viêt nam: "+authData.token}</Text>)

            }
            <NoInternetModal/>


        </View>
    );
};
const styles = StyleSheet.create({
    // ...
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    modalContainer: {
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 22,
        fontWeight: '600',
    },
    modalText: {
        fontSize: 18,
        color: '#555',
        marginTop: 14,
        textAlign: 'center',
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#000',
        paddingVertical: 12,
        paddingHorizontal: 16,
        width: '100%',
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
    },
});
export default TestScreen;

