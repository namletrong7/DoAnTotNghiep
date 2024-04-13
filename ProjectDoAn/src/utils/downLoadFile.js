import RNFetchBlob from "rn-fetch-blob";
import {Platform} from "react-native";
import {showMessage} from "react-native-flash-message";
import ReactNativeBlobUtil from "react-native-blob-util";
import { baseUrlLinkFile } from "../api/ConstBaseUrl";
import FileViewer from "react-native-file-viewer";

/**
 * Created by TuanTQd on 21/03/2024
 */
 export const downloadFile = async (url,fileName) => {
    // Get the app's cache directory
    const {config, fs} = RNFetchBlob;
    const cacheDir = fs.dirs.DownloadDir;
    const imagePath = `${cacheDir}/${fileName}`;
  console.log(url)
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

export const taiFile = async (setIsShowProgress,filePathIOS,filePathAndroid,setPercentage,url) => {
  setIsShowProgress(true)
  ReactNativeBlobUtil.config({
    fileCache: true,
    begin:{},
    ios: {
      fileCache: true,
      path: filePathIOS,
    },
    addAndroidDownloads: {
      useDownloadManager: true,
      notification: true,
      path: filePathAndroid,
      description: 'Downloading file...',
    },
  })
    .fetch('GET', baseUrlLinkFile+url)
    .progress((received, total) => {
      setPercentage(((received / total) * 100).toFixed(2))
    })
    .then((res) => {
      setPercentage(100)
      setIsShowProgress(false)
        FileViewer.open(filePathAndroid, { showOpenWithDialog: true });
    })
    .catch((err) => {
      console.log(err)
      setIsShowProgress(false)
      return ;
    });
};
