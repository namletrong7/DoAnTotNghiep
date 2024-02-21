/**
 * Componet hiển thị nội dung từng ngày họp cụ thể
 */
import React, {useState} from 'react';
import {FlatList, SafeAreaView, Text, TouchableOpacity, useWindowDimensions, View} from 'react-native';
import IconArrowDown from "../assets/icons/IconArrowDown";
import RenderHtml from 'react-native-render-html';

const DetailCTKH = (props) => {
    const { width } = useWindowDimensions();
    const [itemStates, setItemStates] = useState({});
    const [isShowContent, setIsShowContent] = useState(true);  // ản hiển nội dung của từng giờ họp
    const [isShowDocument, setIsShowDocument] = useState(true);  // ẩn hiển tài liệu cuả từng giờ họp


    //NamLTc: hỗ trợ dịnh dạng ngày
    function formatTimeFromDate(dateString) {
        const dateObject = new Date(dateString);

        // Lấy giờ và phút
        const hours = dateObject.getHours();
        const minutes = dateObject.getMinutes();

        // Chuyển đổi sang chuỗi định dạng hh:mm
        const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

        return formattedTime;
    }
    //NamLTc: item cho từng nội dung chương trình họp của khung giờ
    const ItemDetailCTKH = ({item}) =>{
        return (
            <View style={{marginVertical:20,marginHorizontal:15,}}>
                  <TouchableOpacity onPress = { () =>setIsShowContent(!isShowContent)} style={{paddingVertical:10, paddingHorizontal: 5,backgroundColor:"#fa8d4c", borderRadius:10, flexDirection:'row', justifyContent: 'space-between',alignItems: 'center'}}>
                        <Text style = {{fontSize: 15, color:"#666666"}}>{formatTimeFromDate(item.TGBD)+" - "+formatTimeFromDate(item.TGKT)}</Text>
                         <IconArrowDown/>
                  </TouchableOpacity>
                {isShowContent?(
                   <View>
                       <Text style = {{fontSize: 15, color:"black"}}>{item.NoiDung}</Text>

                <TouchableOpacity onPress ={() =>{setIsShowDocument(!isShowDocument)}} style={{marginVertical: 15,justifyContent:"center",alignItems: 'center',borderRadius:10,borderWidth:0.5, borderColor: "black", width:"30%",alignSelf: 'center' }}>
                    <Text style = {{fontSize: 15, color:'#e4854c'}}>{"Thu gọn"}</Text>
                </TouchableOpacity>
                       {isShowDocument && (
                               item.TenTL ? (
                <View>
                    <Text style = {{fontSize: 15, color:"#999999"}}>{"Tài liệu"}</Text>
                    <View style={{flexDirection:"row",marginHorizontal:15}}>
                        <Text style = {{alignSelf: 'center',fontSize: 15, color:"black",width:'75%'}}>{item.TenTL}</Text>
                        <TouchableOpacity  style={{marginVertical: 10,justifyContent:"center",alignItems: 'center',borderRadius:20,borderWidth:0.5, borderColor: "black",width:'25%',paddingHorizontal:20,paddingVertical:4,alignSelf: 'center' ,backgroundColor:'#888888'}}>
                            <Text style = {{fontSize: 13, color:'#000000'}}>{"Xem"}</Text>
                        </TouchableOpacity>
                    </View>
                </View>):null
                  )
                       }
                   </View> ):null }
            </View>
        )
    }


    return (
        <SafeAreaView>
            <FlatList
                data={props.data}
                renderItem={({item}) => <ItemDetailCTKH item={item} />}
                keyExtractor={item => item.INDID}
            />
        </SafeAreaView>
    );
};

export default DetailCTKH;
