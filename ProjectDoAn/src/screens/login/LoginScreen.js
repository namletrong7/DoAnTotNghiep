import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import IconEye from "../../assets/icons/IconEye";
import IconEyeSlash from "../../assets/icons/IconEyeSlash";
import IconCheckBox from "../../assets/icons/IconCheckBox";
import IconChecked from "../../assets/icons/IconChecked";
import { useDispatch } from "react-redux";
import { actionLogin } from "../../redux-store/actions/auth";

const LoginScreen = ({ navigation }) => {

  const dispatch = useDispatch();

  const [addServer, setAddServer] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [rememberPassword, setRememberPassword] = useState(false);
  const [isOnPressFrist, setIsOnPressFrist] = useState(false);
  const [isForgotPasswordModalVisible, setForgotPasswordModalVisible] = useState(false);

  const handleLogin = async () => {
    setIsOnPressFrist(true);
    //call API Login
    if(addServer && username && password) {
      dispatch(actionLogin(addServer,{
        "username": username,
        "password": password
      }));
    }
  };

  const toggleShowPassword = () => {
    setIsPasswordVisible(prevState => !prevState);
  };

  const toggleRememberPassword = () => {
    setRememberPassword(prevState => !prevState);
  };

  const toggleForgotPasswordModal = () => {
    setForgotPasswordModalVisible(!isForgotPasswordModalVisible);
  };

  const renderInput = (placeholder, value, onChangeText, leftIconName, isPassword) => (
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
    <View style={styles.container}>

      <Image
        source={require('../../assets/images/ImgLogoLogin.png')}
        style={styles.logo}
      />

      <View>
        {renderInput('Địa chỉ Server', addServer, setAddServer, 'user')}
        {renderInput('Tên đăng nhập', username, setUsername, 'user')}
        {renderInput('Mật khẩu', password, setPassword, 'lock', true)}

        <TouchableOpacity onPress={toggleRememberPassword} style={styles.checkBoxContainer} >
          {rememberPassword ? (<IconCheckBox />) : (<IconChecked />)}
          <Text style={{ marginLeft: 5, color: 'black', fontStyle: 'italic', }}>Ghi nhớ mật khẩu</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.checkBoxContainer} >
        {(addServer && username && password) ? null : (isOnPressFrist && (<Text style={{ color: "red", fontStyle: "italic" }}>
          {`${addServer ? ((username && password) ? null : "Tên đăng nhập hoặc mật khẩu không được để trống") : `Đại biểu cần nhậpđịa chỉ server`}`}
        </Text>))}
      </View>
      <TouchableOpacity style={styles.btlLogin} onPress={handleLogin} >
        <Text style={{ color: "#ffffff", width: '100%', textAlign: 'center' }} >Đăng nhập</Text>
      </TouchableOpacity>

      <Text style={styles.textQMK} onPress={toggleForgotPasswordModal} >Quên mật khẩu</Text>

      {isForgotPasswordModalVisible && (
        <TouchableOpacity style={styles.modalForgotPassword} onPress={toggleForgotPasswordModal} >
          <TouchableWithoutFeedback >
            <View  style={styles.modalContainer} >
              <Text style={styles.modalText}>
                Quý đại biểu vui lòng liên hệ cán bộ phụ trách để được hỗ trợ
              </Text>
              <TouchableOpacity onPress={toggleForgotPasswordModal} style={{ width: '50%', borderWidth: 2, borderColor: 'red', borderRadius: 20, padding: 5, alignItems: 'center'}}>
                <Text style={styles.closeModalText}>Đóng</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: '10%',
    marginTop: '25%',
    borderRadius: 20,
  },
  inputContainer: {
    paddingHorizontal: 10,
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#929292',
    borderRadius: 5,
    marginVertical: 10,
    flexDirection: 'row',
  },
  checkBoxContainer: {
    flexDirection: 'row',
    fontSize: 16,
    alignItems: 'center',
    marginBottom: '6%',
  },
  textQMK: {
    textDecorationLine: 'underline',
    marginBottom: 5,
    color: 'black',
  },
  btlLogin: {
    justifyContent: 'center',
    padding: 10,
    marginBottom: '10%',
    backgroundColor: 'red',
    color: '#ffffff',
    borderRadius: 20,
    width: '50%',
  },
  modalForgotPassword: {
    flex: 1,
    backgroundColor: 'rgba(38,38,38,0.7)',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  modalContainer: {
    backgroundColor: '#ffffff',
    padding: 30,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  modalText: {
    paddingTop: 20,
    fontSize: 18,
    textAlign: 'center',
    color: 'red',
    marginBottom: 40,
  },
  closeModalText: {
    fontSize: 16,
    color: 'red',
  },
});

export default LoginScreen;
