/**
 * Componet hiển thị danh sách bình luận
 */

import React, { Component, useState } from "react";
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text, TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";


import FastImage from 'react-native-fast-image'
import IconSend from "../../assets/icons/IconSend";

import { actionAddComment } from "../../redux-store/actions/auth";
import { connect, useDispatch } from "react-redux";
import IconArrowDown from "../../assets/icons/IconArrowDown";
import IconArrowUp from "../../assets/icons/IconArrowLeft";
import { showMessage } from "react-native-flash-message";
class SendCommentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edtComment:"", // nội dung của ô nhập comment
    };
  }
  componentDidMount() {// hàm thực hiện sau mỗi lần render
    console.log("did mount lại SendComponet")
  }


  // hành dộng nhấn vào nút để gửi comment

  sentComment = async () => {
    if(this.state.edtComment.trim().length<5){
      showMessage({
        message: "Nội dung comment quá ngắn",
        type: "warning",
        duration: 1000,
        icon: { icon: "warning", position: 'left' }
      });
      return;
    }else {

      try {
        const comment = {
          commentId: Math.random().toString(36).substr(2, 9),
          userId: "1",
          avatarUser: "https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg",
          fullName: "Vũ đình tuán anh",
          content: this.state.edtComment.trim(),
          createdDate: "10/1/2023"
        };

        // Dispatch the actionAddComment action
        await this.props.actionAddComment(comment);

        // Reset the edtComment state
        this.setState({ edtComment: '' });
      } catch (error) {
        console.error('Error adding comment:', error);
      }
    }
  };

  render() {
    return (
      <View style={styles.container}>


        <View style={{ flexDirection: "row", borderRadius: 15, flex: 0.97 }}>
          <TextInput
            style={{ color: 'black', fontSize: 17, fontFamily: "OpenSans-Regular", flex: 1 }}
            placeholder="Nhập bình luận của bạn"
            onChangeText={(value) =>  this.setState({edtComment:value})}
            value={this.state.edtComment}
          />
        </View>
        <TouchableOpacity onPress={() => {
          this.sentComment()
        }}>
          <IconSend />
        </TouchableOpacity>
      </View>

    )
  }
};
const styles = StyleSheet.create({
  container: {
    flexDirection:"row",
    position: "absolute",
    bottom: 0,
    marginHorizontal: 8, /* hoặc có thể sử dụng right: 0 để nằm ở góc phải */
    flex:1, /* Đảm bảo chiều ngang bằng với màn hình */
    alignItems:"center",
    backgroundColor:"#DDDDDD",
    paddingVertical:6,
    borderRadius:15,
  },

});
function mapStateToProps(state) {
  return {};
}
// Connect your component to Redux and provide actionAddComment
const mapDispatchToProps = (dispatch) => {
  return {
    actionAddComment: (comment) => dispatch(actionAddComment(comment))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,

)(SendCommentComponent);

