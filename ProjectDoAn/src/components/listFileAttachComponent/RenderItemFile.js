import {Platform, Text, TouchableOpacity, View} from "react-native";
import {checkFileExists, downloadFile} from "../../utils/downLoadFile";
import RNFetchBlob from "rn-fetch-blob";
import React from "react";
import IconPdf from "../../assets/icons/IconPdf";
import IconDoc from "../../assets/icons/IconDoc";
import IconXLS from "../../assets/icons/IconXLS";
import IconFile from "../../assets/icons/IconFile";
import { Circle, Svg } from "react-native-svg";
import FileViewer from "react-native-file-viewer";


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
   const [percentage, setPercentage] = React.useState(0);
   const [isShowProgress, setIsShowProgress] = React.useState(false);
   const size = 30;
   const strokeWidth = 2;
   const radius = (size - strokeWidth) / 2;
   const circum = radius * 2 * Math.PI;
   const svgProgress = 100 - percentage;
   const filePath = RNFetchBlob.fs.dirs.DownloadDir+"/pmkma/" + props?.item?.fileName;
   const filePathIOS = RNFetchBlob.fs.dirs.DocumentDir + props?.item?.fileName;
   return (
        <TouchableOpacity style={{
            marginTop: 10,
            alignItems: "center",
            justifyContent: "flex-start",
            flex: 1,
        }}
                          onPress={() => {
                                  downloadFile(setIsShowProgress,filePath, filePathIOS,setPercentage,props?.item?.filePath,props?.item?.fileName)
                          }}>

            <View style={{
                flex: 1, alignItems: "center",width:150, borderRadius: 10,
                borderColor: "#1E90FF",borderWidth:1, paddingVertical: 10,
                paddingHorizontal: 5,marginHorizontal:4, borderStyle:"dashed",
              flexDirection:'row'
            }}>
                    <RenderIcon extension={props.item?.extension} />
                <Text numberOfLines={3} style={{
                    fontSize: 12,
                    color: "black",
                    fontFamily: "OpenSans-Regular",
                    flex:1,
                  marginBottom:5,
                }}>{props.item.fileName}</Text>
              {isShowProgress?
              <Svg width={size} height={size}>
                {/* Background Circle */}
                <Circle
                  stroke="#D9D9D9"
                  fill="none"
                  cx={size / 2}
                  cy={size / 2}
                  r={radius}
                  strokeWidth={strokeWidth}
                />
                {/* Progress Circle */}
                <Circle
                  stroke="#6699FF"
                  fill="none"
                  cx={size / 2}
                  cy={size / 2}
                  r={radius}
                  strokeDasharray={`${circum} ${circum}`}
                  strokeDashoffset={radius * Math.PI * 2 * (svgProgress / 100)}
                  strokeLinecap="round"
                  transform={`rotate(-90, ${size / 2}, ${size / 2})`}
                  strokeWidth={strokeWidth}
                />
              </Svg>:null}
            </View>
        </TouchableOpacity>
    );
})
