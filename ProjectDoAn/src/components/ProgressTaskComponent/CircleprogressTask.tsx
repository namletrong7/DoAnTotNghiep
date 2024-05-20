import { Text, View } from "react-native";
import React from "react";
import { Circle, Svg } from "react-native-svg";
import { getColorBackgroundPriority, getColorPriority } from "../../utils/GetPriority.js";

type Typeprops={
  progress:any;
  priority:number;
}
 export const CircleprogressTask:React.FC<Typeprops>=React.memo((props)=>{
   const {progress,priority} = props
   const size = 45;
   const strokeWidth =3.8;
   const radius = (size - strokeWidth) / 2;
   const circum = radius * 2 * Math.PI;
   const svgProgress = 100 - progress;

   return (
     <View style = {{flexDirection:"row",alignSelf:"flex",flex:1}}>
       <Svg width={size} height={size} >
         {/* Background Circle */}
         <Circle
           stroke={getColorBackgroundPriority(priority)}
           fill="none"
           cx={size / 2}
           cy={size / 2}
           r={radius}
           strokeWidth={strokeWidth}
         />
         <Text style={{fontSize:9, color:getColorPriority(priority),alignSelf:'center',marginTop:14,fontFamily:"OpenSans-SemiBold"}} numberOfLines={2}>{progress+"%"}</Text>
         <Circle
           stroke={getColorPriority(priority)}
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
       </Svg>
     </View>
   )
})
