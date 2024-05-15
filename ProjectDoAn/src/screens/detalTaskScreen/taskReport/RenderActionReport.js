import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const RenderActionReport = (props) => {
  const {item,assignUser, targetUser, currentUserId,openAnserReport,openAcceptAnswerReport} = props
  if(item?.type==1)  // là báo cáo công việc
  {
    if(item?.status==0) // trạng thái chờ duyệt
    {
      if(currentUserId==assignUser)// là người giao
      {
        return (
          <View style={{flexDirection:"row",width:"33%",justifyContent:'space-between'}}>
            <TouchableOpacity onPress={()=>{openAcceptAnswerReport(item,0)}} style={{backgroundColor:"#fed5d5",padding:7, borderRadius:8}}>
              <Text style={{ fontSize: 12, color: '#fd1c1c' }}>Từ chối</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{openAcceptAnswerReport(item,1)}} style={{backgroundColor:"#c7e4ff",padding:7,paddingHorizontal:9, borderRadius:8}}>
              <Text style={{ fontSize: 12, color: '#148eff' }}>Duyệt</Text>
            </TouchableOpacity>
          </View>
        )
      }else {
      return (
        <View>
          <Text style={{ fontSize: 12, color: '#FFD700' }}>Chờ duyệt</Text>
        </View>
      )
    }

    }
    else if(item?.status==1) // báo cáo đã dược duyệt
    {
      return(
      <View style={{marginLeft:10}}>
        <Text style={{ fontSize: 12, color: '#00EE00'}}>Đã duyệt</Text>
      </View>
      )
    }
    else if(item?.status==2) // báo cáo đã dược duyệt
    {
      return(
        <View style={{marginLeft:10}}>
          <Text style={{ fontSize: 12, color: '#FF3333'}}>Đã từ chối</Text>
        </View>
      )
    }

  }
  else if (item?.type==0) // yêu cầu báo cáo
  {
    if(item?.status==0){
       if(currentUserId==targetUser) // là người xử lý
       {
         return (
           <TouchableOpacity  onPress={()=>{openAnserReport(item)}} style={{backgroundColor:"#d4eacc",padding:7,paddingHorizontal:11, borderRadius:8}}>
             <Text style={{ fontSize: 12, color: '#68b64d' }}>Trả lời</Text>
           </TouchableOpacity>
         )
       }
       else{
         return (
           <View>
             <Text style={{ fontSize: 12, color: '#1E90FF' }}>Chờ báo cáo</Text>
           </View>
         )
       }
    }
    else if(item?.status==1){
      return null ;
    }
  }
}
export  default React.memo(RenderActionReport)
