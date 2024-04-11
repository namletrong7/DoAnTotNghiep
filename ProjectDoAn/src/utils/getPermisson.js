import { PermissionsAndroid } from "react-native";
import { Platform } from 'react-native';
import { PERMISSIONS, request } from 'react-native-permissions';
import messaging, { firebase } from "@react-native-firebase/messaging";
import notifee from '@notifee/react-native';
export async function requestStoragePermission() {
    await notifee.requestPermission()
    if(Platform.OS==='android'){
        try {
            const granted = await PermissionsAndroid.requestMultiple([
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
                PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
            ]);

            if (
                granted['android.permission.READ_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED &&
                granted['android.permission.WRITE_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED
            ) {
              return ;
            } else {
                return ;
            }
        } catch (err) {
            return ;
        }
        try {
            await firebase.messaging().requestPermission();
        } catch (error) {
            // User has rejected permissions
            console.log('quyền bị từ chối');
        }

    }

}

export async function requestUserPermission() {
    if (Platform.OS === 'android' && Platform.Version >= 33) {
        await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);

        /* Bkav TuanTQd: Xin quyền Notify trên Android 13 Tham khảo https://notifee.app/react-native/docs/ios/permissions */
        const settings = await notifee.requestPermission();
    } else {
        const authStatus = await messaging().requestPermission();
        const enabled =
            authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
            authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    }
}
