import {Platform, Text, TouchableOpacity, View} from "react-native";
import {downloadFile} from "../../utils/downLoadFile";
import {baseUrlLinkFile} from "../../api/ConstBaseUrl";
import RNFetchBlob from "rn-fetch-blob";
import IconDownLoad from "../../assets/icons/IconDownLoad";
import React from "react";
import IconPdf from "../../assets/icons/IconPdf";
import IconDoc from "../../assets/icons/IconDoc";
import IconXLS from "../../assets/icons/IconXLS";
import IconFile from "../../assets/icons/IconFile";

/**
 * Created by TuanTQd on 21/03/2024
 */
const RenderIcon = (props) => {
    var Extension = props.extension.toLowerCase();
    if (Extension === "pdf") {
        return (
            <IconPdf />
        );
    } else if (Extension === "doc" || Extension === "docx") {
        return (
            <IconDoc />
        );
    } else if (Extension === "xls" || Extension === "xlsx") {
        return (
            <IconXLS />
        );
    } else {
        return (
            <IconFile />
        );
    }

};
 export  const RenderItemFile = React.memo((props) => {
    return (
        <TouchableOpacity style={{
            marginTop: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            flex: 1,
        }}
                          onPress={() => {
                              if (Platform.OS === 'android') {
                                  downloadFile(baseUrlLinkFile+props?.item?.filePath,props?.item?.fileName);
                              } else {
                                  downloadFile(baseUrlLinkFile+props?.item?.filePath,props?.item?.fileName).then(res => {
                                      RNFetchBlob.ios.previewDocument(res.path());
                                  });
                              }
                          }}>

            <View style={{
                flex: 0.88, flexDirection: "row", alignItems: "center", borderRadius: 16,
                backgroundColor: "rgba(0,0,0,0.05)", paddingVertical: 5,
                paddingHorizontal: 5,
            }}>
                <View style={{ paddingHorizontal:6 }}>
                    <RenderIcon extension={props.item?.extension} />
                </View>
                <Text numberOfLines={2} style={{
                    fontSize: 15,
                    color: "black",
                    fontFamily: "OpenSans-Regular",
                    textAlign: "left",
                    flex:0.88
                }}>{props.item.fileName}</Text>
            </View>
            <View style={{ flex: 0.12, alignItems:'center' }}>
                <IconDownLoad />
            </View>
        </TouchableOpacity>
    );
})
