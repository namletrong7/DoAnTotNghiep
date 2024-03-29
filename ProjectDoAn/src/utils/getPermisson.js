import { PermissionsAndroid } from "react-native";
import { Platform } from 'react-native';
import { PERMISSIONS, request } from 'react-native-permissions';
export async function requestStoragePermission() {
    if(Platform.OS==='android'){
        try {
            const granted = await PermissionsAndroid.requestMultiple([
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
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

    }

}

