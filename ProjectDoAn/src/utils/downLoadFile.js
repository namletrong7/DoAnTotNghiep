import RNFetchBlob from "rn-fetch-blob";
import {Platform} from "react-native";
import {showMessage} from "react-native-flash-message";

/**
 * Created by TuanTQd on 21/03/2024
 */
 export const downloadFile = async (url,fileName) => {
    // Get the app's cache directory
    const {config, fs} = RNFetchBlob;
    const cacheDir = fs.dirs.DownloadDir;

    const imagePath = `${cacheDir}/${fileName}`;

    try {
        // Download the file and save it to the cache directory
        const configOptions = Platform.select({
            ios: {
                fileCache: true,
                path: imagePath,
                appendExt: fileName.split('.').pop(),
            },
            android: {
                fileCache: true,
                path: imagePath,
                appendExt: fileName.split('.').pop(),
                addAndroidDownloads: {
                    // Related to the Android only
                    useDownloadManager: true,
                    notification: true,
                    path: imagePath,
                    description: 'File',
                },
            },
        });

        const response = await RNFetchBlob.config(configOptions).fetch('GET', url);
        // Return the path to the downloaded file
        return response;
    } catch (error) {
              showMessage({
                message: "Lỗi khi tải file: "+fileName,
                type: "danger",
                duration: 1000,
                icon: { icon: "danger", position: 'left' }
              });

        return null;
    }
};
