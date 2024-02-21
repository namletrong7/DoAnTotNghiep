import React, { useEffect, useState } from "react";
import {
  Dimensions, Image,
  ImageBackground, Platform, ScrollView,
  StyleSheet,
  Text, TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import HeaderComponent from "../../../components/header/HeaderComponent";
import DropDownPicker from 'react-native-dropdown-picker';
import DropDownMenu from "../../../components/DropDownMenu/DropDownMenu";

function ListCanBo({ navigation }) {

  const [isOpen, setIsOpen] = useState(false);
  const [itemSelect, setItemSelect] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [searchResult, setSearchResult] = useState([]);


  const handleSearchTextChange = (text) => {
    setSearchText(text);
  };

  const options = [
    { label: 'Chọn tiêu chí tìm kiếm', value: 'all' },
    { label: 'Họ và tên', value: 'fullname' },
    { label: 'Chức vụ', value: 'position' },
    { label: 'Ngày sinh', value: 'date of birth' },
    { label: 'Năm sinh', value: 'year of Birth' },
    { label: 'Trình độ', value: 'level' },
  ];

  const data = [
    {
      id: 1,
      fullName: 'Âu Thị Hồng Thắm',
      image: 'https://hophdnd.backan.gov.vn/Images/AnhDaiBieu/AnhDaiDien_2023_11_27_17_28_16_Au%20Thi%20Hong%20Tham.jpg',
      position: 'Bí thư Chi Bộ, Hiệu trưởng Trường Chính trị tỉnh',
      lever: 'Trường Chính trị tỉnh',
      yearOfBirth: 1972
    },
    {
      id: 2,
      fullName: 'Âu Thị Hồng Thắm',
      image: 'https://hophdnd.backan.gov.vn/Images/AnhDaiBieu/AnhDaiDien_2023_11_27_17_28_16_Au%20Thi%20Hong%20Tham.jpg',
      position: 'Bí thư Chi Bộ, Hiệu trưởng Trường Chính trị tỉnh',
      lever: 'Trường Chính trị tỉnh',
      yearOfBirth: 1972
    },
    {
      id: 3,
      fullName: 'Âu Thị Hồng Thắm',
      image: 'https://hophdnd.backan.gov.vn/Images/AnhDaiBieu/AnhDaiDien_2023_11_27_17_28_16_Au%20Thi%20Hong%20Tham.jpg',
      position: 'Bí thư Chi Bộ, Hiệu trưởng Trường Chính trị tỉnh',
      lever: 'Trường Chính trị tỉnh',
      yearOfBirth: 1972
    },
    {
      id: 4,
      fullName: 'Âu Thị Hồng Thắm',
      image: 'https://hophdnd.backan.gov.vn/Images/AnhDaiBieu/AnhDaiDien_2023_11_27_17_28_16_Au%20Thi%20Hong%20Tham.jpg',
      position: 'Bí thư Chi Bộ, Hiệu trưởng Trường Chính trị tỉnh',
      lever: 'Trường Chính trị tỉnh',
      yearOfBirth: 1972
    },
    {
      id: 5,
      fullName: 'Âu Thị Hồng Thắm',
      image: '',
      position: 'Bí thư Chi Bộ, Hiệu trưởng Trường Chính trị tỉnh',
      lever: 'Trường Chính trị tỉnh',
      yearOfBirth: 1972
    },
    {
      id: 5,
      fullName: 'Âu Thị Hồng Thắm',
      image: '',
      position: 'Bí thư Chi Bộ, Hiệu trưởng Trường Chính trị tỉnh',
      lever: 'Trường Chính trị tỉnh',
      yearOfBirth: 1972
    },
    {
      id: 5,
      fullName: 'Âu Thị Hồng Thắm',
      image: '',
      position: 'Bí thư Chi Bộ, Hiệu trưởng Trường Chính trị tỉnh',
      lever: 'Trường Chính trị tỉnh',
      yearOfBirth: 1972
    },
    {
      id: 5,
      fullName: 'Âu Thị Hồng Thắm',
      image: '',
      position: 'Bí thư Chi Bộ, Hiệu trưởng Trường Chính trị tỉnh',
      lever: 'Trường Chính trị tỉnh',
      yearOfBirth: 1972
    }
  ]

  const renderItem = (item) => (
    <View style={styles.styleItem}>
      <Image
        source={require('../../../assets/images/AnhDBtmp.jpg')}
        style={{
          marginRight: 15,
          borderRadius: Dimensions.get('window').width,
          width: Dimensions.get('window').width * 0.18,
          height: Dimensions.get('window').width * 0.18,
        }}
      />
      <View style={{ width: '80%' }} >
        <Text style={{ fontSize: 20, marginBottom: 5, color: '#000' }} >{item.fullName}</Text>
        <Text style={{ fontSize: 16, marginBottom: 5, color: '#2196F3' }} >Chức vụ: {item.position}</Text>
        <Text style={{ fontSize: 16, marginBottom: 5, color: '#515151' }} >{item.lever}</Text>
        <Text style={{ fontSize: 16, marginBottom: 5, color: '#515151' }} >Năm sinh: {item.yearOfBirth}</Text>
      </View>
    </View>
  )

  return (
    <ImageBackground
      source={require('../../../assets/images/Background_Img.png')}
      style={{ flex: 1, }}
    >
      <View style={{ zIndex: 1 }}>
        <HeaderComponent navigation={navigation} title={'DANH SÁCH ĐẠI BIỂU'} back />
        <ScrollView
          keyboardShouldPersistTaps='handled'
          style={{ marginBottom: '25%' }}
        >
          <View style={styles.container}>
            <View style={{ zIndex: 100 }}>
              <DropDownMenu
                setOpen={setIsOpen}
                isOpen={isOpen}
                options={options}
                zIndex={100}
                zIndexInverse={100}
              />
            </View>

            <View style={{ alignItems: 'center', justifyContent: 'center', zIndex: 80 }}>
              <TextInput
                style={styles.textInput}
                onChangeText={handleSearchTextChange}
                value={searchText}
                placeholder="Nhập để tìm kiếm"
                placeholderTextColor={'#868282'}
              />

              {data.length ? (<Text style={{ color: "red", marginBottom: 20 }}>{`(Kết quả: ${data.length} đại biểu)`}</Text>)
                : (<Text style={{ color: "red", marginBottom: 20 }}>{`(Không tìm thấy đại biểu nào)`}</Text>)}
            </View>

            <View style={{ zIndex: 80 }}>
              <Text style={{ fontSize: 24, fontWeight: '700' }}>HDND TỈNH BẮN KẠN</Text>

              <View>
                {data.map(item => renderItem(item))}
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  styleItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0,0,0,0.15)',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.8,
        shadowRadius: 12,
      },
      android: {
        elevation: 6,
      },
    }),
    margin: 5,
    padding: 10,
    borderRadius: 10,
  },
  TextItem: {
    marginLeft: 20,
    color: '#ffffff',
    fontSize: 16,
  },
  textInput: {
    marginTop: 10,
    borderRadius: 5,
    paddingLeft: 10,
    borderWidth: 1,
    width: '100%',
    borderColor: '#000',
    height: 45,
    fontSize: 16,
    marginBottom: 15,
  }
});

export default ListCanBo;
