import RNFetchBlob from "rn-fetch-blob";
import {Platform} from "react-native";
import {showMessage} from "react-native-flash-message";
import { baseUrlLinkFile } from "../api/ConstBaseUrl";
import FileViewer from "react-native-file-viewer";
/**
 * Created by TuanTQd on 21/03/2024
 */
 export const downloadFile = async (setIsShowProgress,filePath,filePathIOS,setPercentage,url,fileName) => {
        const configOptions = Platform.select({
            ios: {
                fileCache: true,
                path: filePathIOS,
                appendExt: fileName.split('.').pop(),
            },
            android: {
                fileCache: true,
                path: filePath,
                appendExt: fileName.split('.').pop(),
                addAndroidDownloads: {
                    // Related to the Android only
                    useDownloadManager: true,
                    notification: true,
                    path: filePath,
                    description: 'File',
                },
            },
        });
    setIsShowProgress(true)
         RNFetchBlob.config(configOptions).fetch('GET', baseUrlLinkFile+url)
           .progress((received, total) => {
             setPercentage(((received / total) * 100).toFixed(2))
         })
           .then((res) => {
             setPercentage(100)
             setIsShowProgress(false)
             if(Platform.OS==='ios'){
               FileViewer.open(filePathIOS, { showOpenWithDialog: true });
             }else{
               FileViewer.open(res.path(), { showOpenWithDialog: true });
             }

         })
             .catch((err) => {
                 setIsShowProgress(false)
                 return ;
             });
};

 export  const checkFileExists = async (filePath) => {
     RNFetchBlob.fs.exists(filePath)
         .then((exists) => {
             if (exists) {
               return false
             } else {
                return true
             }
         })
         .catch((error) => {
             return false
             console.error('Lỗi kiểm tra sự tồn tại của tệp:', error);
         });
};
