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
                flex: 1, alignItems: "center",width:65, borderRadius: 10,
                borderColor: "rgba(0,0,0,0.3)",borderWidth:1, paddingVertical: 10,
                paddingHorizontal: 5,marginHorizontal:4
            }}>
                    <RenderIcon extension={props.item?.extension} />
                <Text numberOfLines={3} style={{
                    fontSize: 12,
                    color: "black",
                    fontFamily: "OpenSans-Regular",
                    flex:1
                }}>{props.item.fileName}</Text>
            </View>
        </TouchableOpacity>
    );
})
