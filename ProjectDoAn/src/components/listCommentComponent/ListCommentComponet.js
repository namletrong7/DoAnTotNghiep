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
  class ListCommentComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        edtComment:"", // nội dung của ô nhập comment
        seeAll:true , // biến xác định có nen xem toàn bọ comment hay ko
      };
    }
  componentDidMount() {// hàm thực hiện sau mỗi lần render
      console.log("Đã render lại componet listComment")
  }


    // hành dộng nhấn vào nút để gửi comment

    sentComment = async () => {
      try {
        const comment = {
          commentId: Math.random().toString(36).substr(2, 9),
          userId: "1",
          avatarUser: "https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg",
          fullName: "Vũ đình tuán anh",
          content: this.state.edtComment,
          createdDate: "10/1/2023"
        };

        // Dispatch the actionAddComment action
        await this.props.actionAddComment(comment);

        // Reset the edtComment state
        this.setState({ edtComment: '' });
      } catch (error) {
        console.error('Error adding comment:', error);
      }
    };
    RenderItemComment = (props) => {
    return(
      <View style={{marginTop: 20,flexDirection:"row",flex:1,}}>
        <FastImage
          style={{ width: 50, height: 50,borderRadius: 50/2 ,overflow: "hidden", borderWidth: 1,borderColor:"#99CCFF"}}
          source={{
            uri: props.item.avatarUser
          }}
          resizeMode={FastImage.resizeMode.stretch}

        />
        <View style={{marginLeft:10,flex:0.8}}>

          <View style={{flexDirection:"row",}}>
            <Text  numberOfLines={1} style={{fontSize:15, color:"black",fontFamily:"OpenSans-SemiBold"}}>{props.item.fullName}</Text>
            <View  style={{width:7,height:7,borderRadius:7/2, backgroundColor:"#888888", margin:9,alignSelf:"center"}}/>
            <Text style={{fontSize:14, color:"black",fontFamily:"OpenSans-SemiBold"}}>{props.item.createdDate}</Text>
          </View>
          <Text style={{fontSize:14, color:"black",fontFamily:"OpenSans-Regular"}}>{props.item.content}</Text>
          <FastImage
            style={{ width: 70, height: 100,borderRadius: 15 ,overflow: "hidden"}}
            source={{
              uri: props.item.avatarUser
            }}
            resizeMode={FastImage.resizeMode.stretch}

          />
        </View>

      </View>
    )
  };
   render() {
     return (
       <View style={styles.container}>
         <TouchableOpacity style={{flexDirection:"row",justifyContent:"space-between"}} onPress= {() => {this.setState({seeAll:!this.state.seeAll})} }>
           <Text style={{fontSize:18, color:"black",fontFamily:"OpenSans-SemiBold"}} numberOfLines={10}>{"Bình luận"}</Text>
           <View>
             {this.state.seeAll? <IconArrowDown/>:<IconArrowUp/>}
           </View>
         </TouchableOpacity>
         {this.state.seeAll?
         this.props?.data?.length > 0 ? <FlatList
             data={this.props.data}
             renderItem={this.RenderItemComment}
             keyExtractor={item => item.commentId}
           /> :
           <Text style={{ fontSize: 15, color: "black", fontFamily: "OpenSans-Regular", marginTop: 15 }}
                 numberOfLines={10}>{"Không có bình luận nào cho công việc này"}</Text>
         :null}


       </View>
     )
   }
};
const styles = StyleSheet.create({
  container: {
    display:"flex",
    marginTop: 20,
    marginBottom:100
  },

});
function mapStateToProps(state) {
  return {
  };
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

)(ListCommentComponent);

