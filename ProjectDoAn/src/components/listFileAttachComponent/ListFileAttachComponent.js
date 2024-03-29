/**
 * Componet hiển thị danh sách file đính kèm của 1 công việc nhiệm vụ được giao
 */

import React, { useEffect, useState } from "react";
import RNFetchBlob from 'rn-fetch-blob';
import {
  Dimensions,
  FlatList, Platform,
  SafeAreaView, ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";

import AppNavigator from "../../navigation/AppNavigator";
import IconFlag from "../../assets/icons/IconArrowDown";
import FastImage from "react-native-fast-image";
import { getColorBackgroundPriority, getColorPriority, getValuePriority } from "../../utils/GetPriority";
import IconPdf from "../../assets/icons/IconPdf";
import IconDoc from "../../assets/icons/IconDoc";
import IconXLS from "../../assets/icons/IconXLS";
import IconFile from "../../assets/icons/IconFile";
import IconDownLoad from "../../assets/icons/IconDownLoad";
import IconArrowDown from "../../assets/icons/IconArrowDown";
import IconArrowUp from "../../assets/icons/IconArrowLeft";
import { ShimmerEffectCommentComponent } from "../shimmerEfffect/ShimmerEffectComment/ShimmerEffectCommentComponent";
import { useDispatch, useSelector } from "react-redux";
import { actionGetFileAttach } from "../../redux-store/actions/task";
import { baseUrlLinkFile } from "../../api/ConstBaseUrl";
import { showMessage } from "react-native-flash-message";
import {downloadFile} from "../../utils/downLoadFile";
import {RenderItemFile} from "./RenderItemFile";


export const ListFileAttachComponent = React.memo((props) => {

      const dispatch = useDispatch();
    const [seeAll, setSeeAll] = useState(true); // xem có nên xem hết file hay không
    const dataListFileTask = useSelector(state => state.task.dataFileAttach || []);


    useEffect(() => {
      dispatch(actionGetFileAttach(props.taskId))
    }, [props.taskId]);


  // const downloadFile = (fileUrl, fileName) => {
  //   const { config, fs } = RNFetchBlob;
  //   const { DownloadDir } = fs.dirs;
  //
  //   const pathToFile = `${DownloadDir+"/"+'PMKMA'}/${fileName}`;
  //
  //   return config({
  //     fileCache: true,
  //     addAndroidDownloads: {
  //       useDownloadManager: true,
  //       notification: true,
  //       path: pathToFile,
  //     },
  //   })
  //     .fetch('GET', fileUrl)
  //     .then(res => {
  //       // Tải tập tin thành công
  //       showMessage({
  //         message: "Tải thành công file: "+fileName,
  //         type: "success",
  //         duration: 1000,
  //         icon: { icon: "success", position: 'left' }
  //       });
  //       return res.path();
  //     })
  //     .catch(error => {
  //       // Xử lý lỗi khi tải tập tin
  //       showMessage({
  //         message: "Lỗi khi tải file: "+fileName,
  //         type: "danger",
  //         duration: 1000,
  //         icon: { icon: "danger", position: 'left' }
  //       });
  //     });
  // };


    return (
      <View style={styles.container}>

        <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between" }} onPress={() => {
          setSeeAll(!seeAll);
        }}>
          <Text style={{ fontSize: 18, color: "black", fontFamily: "OpenSans-SemiBold" }}
                numberOfLines={10}>{"File đính kèm"}</Text>
          <View>
            {seeAll ? <IconArrowDown /> : <IconArrowUp />}
          </View>
        </TouchableOpacity>
        {seeAll ? (
          dataListFileTask?.length > 0 ? <FlatList
              data={dataListFileTask}
              scrollEnabled={false}
              renderItem={({ item }) => <RenderItemFile item={item} />}
              keyExtractor={(item, index) => index.toString()}
            /> :
            <Text style={{ fontSize: 15, color: "black", fontFamily: "OpenSans-Regular", marginTop: 15 }}
                  numberOfLines={10}>{"Không có file đính kèm cho công việc này"}</Text>
        ) : null}

      </View>
    );
  },
);
const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginTop: 19,
  },

});

// export default React.memo(ListFileAttachComponent);
