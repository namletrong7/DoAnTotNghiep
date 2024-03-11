import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ImageBackground, Dimensions, Image, SafeAreaView, FlatList, ScrollView, StatusBar,
} from "react-native";
import {  actionLogout } from "../../redux-store/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import HeaderComponent from "../../components/header/HeaderComponent";


import ItemTask from "../../components/itemTask/ItemTask";
import FastImage from "react-native-fast-image";
import LottieView from "lottie-react-native";
import IconPlus from "../../assets/icons/IconPlus";
import { baseUrlAvatarUser } from "../../api/ConstBaseUrl";

const HomeScreen = ({ navigation }) => {

  const dispatch = useDispatch();
  const dataCurrentUser = useSelector(state => state.auth.dataCurrentUser);
  var fakeDataListTask = [
    {
      "taskId": "T001",
      "status": "Test 3",
      "assignUser": 0,
      "avatarAssignUser":"https://images.baodantoc.vn/uploads/2022/Th%C3%A1ng%208/Ng%C3%A0y_13/Nga/038FF792-D136-480D-8EEE-5D3E90A16085.jpg",
      "priority":0,
      "progress":100,
      "assignFullName":"lê trọng nam",
      "title":"xin chào djkvbjbvv",
      "content":"shjdvbhv",
      "startDay":"10/10/2023",
      "endDay":"10/10/2023",

    },
    {
      "taskId": "T002",
      "status": "Test 3",
      "assignUser": 1,
      "avatarAssignUser":"https://cdn.sforum.vn/sforum/wp-content/uploads/2023/11/avatar-dep-85.jpg",
      "progress":3,"assignFullName":"lê trọng nam",
      "title":"xin chào djkvbjbvv",
      "content":"Đêm chung kết Miss Grand International 2023 đã chính thức khép lại với vương miện thuộc về đại diện Peru Luciana Fuster. Kết quả này đã nhận được sự đồng thuận của đông đảo fan sắc đẹp bởi màn thể hiện quá đỗi xuất sắc, xứng đáng của Tân Hoa hậu. ",
      "startDay":"10/10/2023",
      "endDay":"13/10/2023",


    },
    {
      "taskId": "1430m9x",
      "status": "Test 3",
      "assignUser": 0,
      "avatarAssignUser":"https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/anh-den-ngau-003.jpg",
      "priority":2,
      "progress":10,"assignFullName":"lê trọng nam",
      "title":"xin chào djkvbjbvv",
      "content":"Khu vực cháy có nhiều kho chứa hàng rộng hàng nghìn m2, thuộc quản lý của Ban Chỉ huy quân sự quận Hồng Bàng. Kho hàng cháy rộng 700 m2, kết cấu khung thép, mái tôn, chứa nhiều đồ nhựa và các vật dụng dễ cháy khác. Hiện toàn bộ nhà kho đã đổ sập.",
      "startDay":"10/10/2023",
      "endDay":"10/10/2023",

    },

    {
      "taskId": "25d6lza",
      "status": "Test 3",
      "assignUser": 0,
      "avatarAssignUser":"https://i0.wp.com/top10dienbien.com/wp-content/uploads/2022/10/avatar-cute-11.jpg?w=960&ssl=1",
      "priority":3,"assignFullName":"lê trọng nam",
      "progress":30,
      "title":"xin chào djkvbjbvv",
      "content":"shjdvbhv",
      "startDay":"10/10/2023",
      "endDay":"10/10/2023",

    },
    {
      "taskId": "2bh4fdu",
      "status": "Test 3",
      "assignUser": 3,
      "avatarAssignUser":"https://images.baodantoc.vn/uploads/2022/Th%C3%A1ng%208/Ng%C3%A0y_13/Nga/038FF792-D136-480D-8EEE-5D3E90A16085.jpg",
      "priority":1,
      "progress":90,"assignFullName":"lê trọng nam",
      "title":"xin chào djkvbjbvv",
      "content":"Nhà kho 700 m2 trên đất quốc phòng ở xã An Hồng, huyện An Dương đang cháy dữ dội, lực lượng chức năng huy động nhiều xe và robot chữa cháy đến hiện trường.",
      "startDay":"10/10/2023",
      "endDay":"10/10/2023",
    },
    {
      "taskId": "2cw76es",
      "status": "Test 3",
      "assignUser": 2,
      "avatarAssignUser":"data:image/jpeg;base64,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",
      "priority":0,
      "progress":100,
      "assignFullName":"lê trọng nam",
      "title":"xin chào djkvbjbvv",
      "content":"shjdvbhv",
      "startDay":"10/10/2023",
      "endDay":"10/10/2023",

    },
    {
      "taskId": "30ngyj2",
      "status": "Test 3",
      "assignUser": 1,
      "avatarAssignUser":"data:image/jpeg;base64,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",
      "priority":0,
      "progress":50,
      "assignFullName":"Vũ thị thu hồng",
      "title":"xin chào djkvbjbvv",
      "content":"ận được tin báo, Công an TP Hải Phòng đã điều động 10 xe và robot chữa cháy cùng hàng chục cán bộ, chiến sĩ đến hiện trường dập lửa.",
      "startDay":"10/10/2023",
      "endDay":"10/10/2023",

    },

  ];


  return (
    <View style={{backgroundColor:"#F0F0F0",marginTop:StatusBar.currentHeight}}>
      <ScrollView contentContainerStyle={{ backgroundColor: "white"}}>
        <View style={{backgroundColor:"#F0F0F0"}}>
          <View style={{marginVertical:10,marginHorizontal:10}}>
            <SafeAreaView style={{flexDirection:"row",justifyContent:"space-between",}}>
              <Image
                source={require('../../assets/images/logo.png')}
                style={{  width: 200,
                  height: 60,
                  alignSelf:"flex-start" }}
              />
              <FastImage
                style={{ width: 60, height: 60,borderRadius: 60/2 ,overflow: "hidden",alignSelf:"center"}}
                source={{
                  uri: (baseUrlAvatarUser+dataCurrentUser?.avatarUser)||'https://raw.githubusercontent.com/gist/vinhjaxt/fa4208fd6902dd8b2f4d944fa6e7f2af/raw/454f58aeac4fdeb459476eae7128dc6ff57df25f/logo-hvktmm.png'
                }}
                resizeMode={FastImage.resizeMode.stretch}/>

            </SafeAreaView>
             <View style={{flexDirection:"row", }}>
               <View>
                 <Text style={{fontSize:30, color:"black",fontFamily:"Roboto-Bold",marginLeft:5}}>{"Hello,"}</Text>
                 <Text style={{fontSize:30, color:"black",fontFamily:"Roboto-Bold",marginLeft:5}}>{(dataCurrentUser?.fullName)||''}</Text>
               </View>
               <LottieView style={{width:90, height:90, alignSelf:"center",marginLeft:-80,marginTop:-20}} source={require('../../assets/animation/cat.json')} autoPlay loop />
             </View>

          </View>
            <FlatList
              data={fakeDataListTask}
              renderItem={({item}) => <ItemTask item={item} navigation = {navigation} />}
              scrollEnabled={false}
              keyExtractor={item => item.taskId}
            />
        </View>
      </ScrollView>
      <TouchableOpacity onPress={()=>{navigation.navigate("AddTaskScreen")}} style={{justifyContent:'center', alignItems:'center',position:"absolute",right:20, bottom:80, width:50, height:50, borderRadius:25, backgroundColor:"gray"}}>
         <IconPlus/>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  notification: {
    marginTop: 20,
    marginBottom: 20,
    width: '70%',
    height: Dimensions.get('window').height * 0.14,
    backgroundColor: '#040739',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ffffff',
    borderRadius: 10,
    borderWidth: 1,
  },
  itemMenu: {
    alignItems: 'center',
    marginBottom: 10,
    width: Dimensions.get('window').width * 0.31,
    padding: Dimensions.get('window').width * 0.02,
  },
  IconImg: {
    width: Dimensions.get('window').width * 0.2,
    height: Dimensions.get('window').width * 0.2,
  },
  TextItem: {
    marginTop: 5,
    color: '#ffffff',
    textAlign: 'center',
  }
});

export default HomeScreen;
