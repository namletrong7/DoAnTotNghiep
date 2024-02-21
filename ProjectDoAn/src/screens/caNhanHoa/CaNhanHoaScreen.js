import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  TouchableWithoutFeedback, ImageBackground, Dimensions,
} from "react-native";
import IconEye from "../../assets/icons/IconEye";
import IconEyeSlash from "../../assets/icons/IconEyeSlash";
import { useDispatch } from "react-redux";
import HeaderComponent from "../../components/header/HeaderComponent";
import IconClose from "../../assets/icons/IconClose";

const CaNhanHoaScreen = ({ navigation }) => {

  const dispatch = useDispatch();

  const [passwordCurrent, setPasswordCurrent] = useState('');
  const [passwordNew1, setPasswordNew1] = useState('');
  const [passwordNew2, setPasswordNew2] = useState('');
  const [isPasswordVisibleCurrent, setIsPasswordVisibleCurrent] = useState(false);
  const [isPasswordVisibleNew1, setIsPasswordVisibleNew1] = useState(false);
  const [isPasswordVisibleNew2, setIsPasswordVisibleNew2] = useState(false);
  const [textError, setTextError] = useState('')
  const [isShowError, setIsShowError] = useState(false);

  const handlePasswordChange = () => {
    //call action API thay đổi mật khẩu
    setIsShowError(true);
    if(passwordCurrent && passwordNew1 && passwordNew1.length > 6 && passwordNew2) {
      passwordNew1 !== passwordNew2 ? setTextError('Nhập lại mặt khẩu mới không chính xác') : null
    } else {
      !passwordCurrent ? setTextError('Đại biểu chưa nhập Mật khẩu hiện tại') :
        !passwordNew1 ? setTextError('Đại biểu chưa nhập Mật khẩu mới') :
          passwordNew1.length < 6 ? setTextError('Mật khẩu phải có tối thiểu 6 ký tự') :
            !passwordNew2 ? setTextError('Đại biểu chưa nhập lại Mật khẩu mới') : null
    }
  };

  const toggleShowPasswordCurrent = () => {
    setIsPasswordVisibleCurrent(prevState => !prevState);
  };

  const toggleShowPasswordNew1 = () => {
    setIsPasswordVisibleNew1(prevState => !prevState);
  };

  const toggleShowPasswordNew2 = () => {
    setIsPasswordVisibleNew2(prevState => !prevState);
  };

  const toggleSetIsShowError = () => {
    setIsShowError(false);
  }

  const renderInput = (placeholder, value, onChangeText, leftIconName, isPassword, isPasswordVisible, toggleShowPassword) => (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={'#666565'}
        value={value}
        autoCapitalize="none"
        onChangeText={onChangeText}
        secureTextEntry={isPassword && !isPasswordVisible}
        style={{ width: isPassword ? '85%' : '100%', color: '#000' }}
      />
      {isPassword && (
        <TouchableOpacity onPress={toggleShowPassword} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
          {isPasswordVisible ? (<IconEye />) : (<IconEyeSlash />)}
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <ImageBackground
      source={require('../../assets/images/Background_Img.png')}
      style={styles.container}
    >
      <View style={styles.container}>
        <HeaderComponent navigation={navigation} title={'CÁ NHÂN HOÁ'} back />
        <View style={{ alignItems: 'center' }}>
          <View>
            <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'red', marginTop: 20, marginBottom: 10, textAlign: 'center' }}>ĐỔI MẬT KHẨU</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 14, color: '#000', marginBottom: 5, }}>
              {`Tài khoản: authihongtham`}
            </Text>
            {renderInput('Mật khẩu hiện tại', passwordCurrent, setPasswordCurrent, 'lock', true, isPasswordVisibleCurrent, toggleShowPasswordCurrent)}
            {renderInput('Mật khẩu mới', passwordNew1, setPasswordNew1, 'lock', true, isPasswordVisibleNew1, toggleShowPasswordNew1)}
            {renderInput('Nhật lại mật khẩu mới', passwordNew2, setPasswordNew2, 'lock', true, isPasswordVisibleNew2, toggleShowPasswordNew2)}

          </View>

          <TouchableOpacity style={styles.btlLogin} onPress={handlePasswordChange} >
            <Text style={{ color: "#ffffff", width: '100%', textAlign: 'center' }} >Thực hiện</Text>
          </TouchableOpacity>
        </View>
      </View>

      {isShowError && (
        <TouchableOpacity style={styles.modalForgotPassword} onPress={toggleSetIsShowError} >
          <TouchableWithoutFeedback >
            <View  style={styles.modalContainer} >
              <Text style={styles.modalText}>
                {textError}
              </Text>
              <TouchableOpacity onPress={toggleSetIsShowError} style={styles.modalClose}>
                <IconClose height={18} width={18} />
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      )}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingHorizontal: 10,
    width: '90%',
    height: 40,
    borderWidth: 1,
    borderColor: '#929292',
    borderRadius: 5,
    marginVertical: 10,
    flexDirection: 'row',
  },
  btlLogin: {
    justifyContent: 'center',
    padding: 10,
    marginTop: '5%',
    backgroundColor: 'red',
    color: '#ffffff',
    borderRadius: 20,
    width: '40%',
  },
  modalForgotPassword: {
    flex: 1,
    backgroundColor: 'rgba(7,7,7,0.7)',
    position: 'absolute',
    alignItems: 'center',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  modalClose: {
    position: 'absolute',
    padding: 10,
    top: 5,
    right: 0,
  },
  modalContainer: {
    backgroundColor: '#ffffff',
    padding: 30,
    width: '90%',
    marginTop: Dimensions.get('window').height * 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  modalText: {
    paddingTop: 10,
    fontSize: 16,
    textAlign: 'center',
    color: 'red',
    marginBottom: 10,
  },
  closeModalText: {
    fontSize: 16,
    color: 'red',
  },
});

export default CaNhanHoaScreen;
