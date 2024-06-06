import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  TouchableWithoutFeedback, ScrollView, SafeAreaView, KeyboardAvoidingView, ActivityIndicator,
} from "react-native";
import LottieView from 'lottie-react-native';
import IconEye from "../../assets/icons/IconEye";
import IconEyeSlash from "../../assets/icons/IconEyeSlash";
import IconCheckBox from "../../assets/icons/IconCheckBox";
import IconChecked from "../../assets/icons/IconChecked";
import { useDispatch } from "react-redux";
import { actionLogin } from "../../redux-store/actions/auth";
import FlashMessage, { showMessage } from "react-native-flash-message";
import ModalLoadingSuccess from "./loadingSuccess/ModalLoadingSuccess";

const LoginScreen = ({ navigation }) => {

  const dispatch = useDispatch();

  const [addServer, setAddServer] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [rememberPassword, setRememberPassword] = useState(false);
  const [isOnPressFrist, setIsOnPressFrist] = useState(false);
  const [isForgotPasswordModalVisible, setForgotPasswordModalVisible] = useState(false);

  const handleLogin = async () => {

    if( username && password) {
      setIsLogin(true)
     await dispatch(actionLogin(username, password))
      setIsLogin(false)
    }else {
      showMessage({
        message: "Vui lòng nhập đầy đủ thông tin ",
        type: "warning",
        duration: 2000,
        icon: { icon: "warning", position: 'left' }
      });
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
    <View style={{height:"100%", flex:1,backgroundColor:"white"}}>
      <KeyboardAvoidingView keyboardVerticalOffset={5} behavior='padding'>
    <ScrollView contentContainerStyle={{backgroundColor:"white"}}>
      <View style={styles.container}>
      <LottieView style={{width:'80%', height:200,marginTop:40}} source={require('../../assets/animation/work_space.json')} autoPlay loop />
        <View style={{flexDirection:"row",alignSelf:'center',marginTop:-40}}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.logo}
          />
          <View style={{height:40, width:1,backgroundColor:"#178cf9",alignSelf:"center"}}/>
          <View style={{justifyContent:"center",alignSelf:"center",marginLeft:10}}>
            <Text style={{ fontSize: 18, color: "#178cf9", fontFamily: "OpenSans-SemiBold" }}>{"Project Manager"}</Text>
            <Text style={{ fontSize: 18, color: "#178cf9", fontFamily: "OpenSans-SemiBold" }}>{"KMA"}</Text>
          </View>
        </View>


      <SafeAreaView>
        {/*{renderInput('Địa chỉ Server', addServer, setAddServer, 'user')}*/}
        {renderInput('Tên đăng nhập', username, setUsername, 'user')}
        {renderInput('Mật khẩu', password, setPassword, 'lock', true)}

        <TouchableOpacity onPress={toggleRememberPassword} style={styles.checkBoxContainer} >
          {rememberPassword ? (<IconCheckBox />) : (<IconChecked />)}
          <Text style={{ marginLeft: 5, color: 'black', fontStyle: 'italic', }}>Ghi nhớ mật khẩu</Text>
        </TouchableOpacity>
      </SafeAreaView>

      <View style={styles.checkBoxContainer} >
        {(addServer && username && password) ? null : (isOnPressFrist && (<Text style={{ color: "red", fontStyle: "italic" }}>
          {`${addServer ? ((username && password) ? null : "Tên đăng nhập hoặc mật khẩu không được để trống") : `Bạn cần nhập địa chỉ server`}`}
        </Text>))}
      </View>
      <TouchableOpacity style={styles.btlLogin} onPress={handleLogin} >
        {isLogin? <ActivityIndicator size='small' color="white" />:
        <Text style={{ color: "white", width: '100%', textAlign: 'center',fontSize:17 }} >Đăng nhập</Text>}
      </TouchableOpacity>

      <Text style={styles.textQMK} onPress={toggleForgotPasswordModal} >Quên mật khẩu</Text>

      {isForgotPasswordModalVisible && (
        <TouchableOpacity style={styles.modalForgotPassword} onPress={toggleForgotPasswordModal} >
          <TouchableWithoutFeedback >
            <View  style={styles.modalContainer} >
              <Text style={styles.modalText}>
                Hãy liên hệ bộ phận kỹ thuật để được cấp lại mật khẩu
              </Text>
              <TouchableOpacity onPress={toggleForgotPasswordModal} style={{ width: '50%', borderWidth: 2, borderColor: 'red', borderRadius: 20, padding: 5, alignItems: 'center'}}>
                <Text style={styles.closeModalText}>Đóng</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      )}
      </View>
      <LottieView style={{ height:100,marginTop:10}} source={require('../../assets/animation/tree_2.json')} autoPlay loop />
    </ScrollView>
      </KeyboardAvoidingView>
      <ModalLoadingSuccess/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"center",
    height:"100%",
    backgroundColor:"white"
  },
  logo: {
    width: 200,
    height: 100,
    alignSelf:"flex-start"
  },
  inputContainer: {
    paddingHorizontal: 10,
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: '#178cf9',
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
    backgroundColor: '#178cf9',
    color: '#c7e4ff',
    borderRadius: 20,
    width: '50%',
  },
  modalForgotPassword: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    height:"100%",
    right: 0,
    bottom: 0
  },
  modalContainer: {
    backgroundColor: '#ffffff',
    padding: 30,
    borderColor:"#111111",
    borderWidth:1,
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
