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

import { actionAddComment, actionLoadMoreComment } from "../../redux-store/actions/auth";
import { connect, useDispatch, useSelector } from "react-redux";
import IconArrowDown from "../../assets/icons/IconArrowDown";
import IconArrowUp from "../../assets/icons/IconArrowLeft";
import { ShimmerEffectCommentComponent } from "../shimmerEfffect/ShimmerEffectComment/ShimmerEffectCommentComponent";
import FlashMessage from "react-native-flash-message";
  class ListCommentComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        see:true,
        edtComment:"", // nội dung của ô nhập comment
      };
    }

  componentDidMount() {// hàm thực hiện sau mỗi lần render
      console.log("render lại list comment")
  }

    // hành động khi lướt xuống dưới cung list thì load thêm comment
    loadMoreComment = async () => {

      try {

        // Dispatch the actionAddComment action
        await this.props.actionLoadMoreComment();
      } catch (error) {
        console.error('Error adding comment:', error);
      }
    }


    RenderItemComment = (props) => {
    return(
      <View style={{marginTop: 20,flexDirection:"row",flex:1,}}>
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate("ProfileUser")}}>
          <FastImage
            style={{ width: 50, height: 50,borderRadius: 50/2 ,overflow: "hidden", borderWidth: 1,borderColor:"#99CCFF"}}
            source={{
              uri: props.item.avatarUser
            }}
            resizeMode={FastImage.resizeMode.stretch}

          />
        </TouchableOpacity>

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
         <TouchableOpacity style={{flexDirection:"row",justifyContent:"space-between"}} onPress= {() => {this.setState({see:!this.state.see})} }>
           <Text style={{fontSize:18, color:"black",fontFamily:"OpenSans-SemiBold"}} numberOfLines={10}>{"Bình luận"}</Text>
           <View>
             {this.state.see? <IconArrowDown/>:<IconArrowUp/>}
           </View>
         </TouchableOpacity>
         {this.state.see?
         this.props?.listCommentTask?.length > 0 ? <FlatList
             data={this.props.listCommentTask}
             ref={this.flatListRef}
             renderItem={this.RenderItemComment}
             keyExtractor={item => item.commentId}
             scrollEnabled={false}
        //    onEndReached={this.loadMoreComment}
           /> :
           <Text style={{ fontSize: 15, color: "black", fontFamily: "OpenSans-Regular", marginTop: 15 }}
                 numberOfLines={10}>{"Không có bình luận nào cho công việc này"}</Text>
         :null}
         <ShimmerEffectCommentComponent/>

       </View>
     )
   }
};
const styles = StyleSheet.create({
  container: {
    display:"flex",
    marginTop: 20,
    marginBottom:100,
  },

});
function mapStateToProps(state) {
  return {
    listComment: state.auth.listComment,
    listCommentTask: state.auth.dataDetailTask?.commentTask||[],

  };
}
// Connect your component to Redux and provide actionAddComment
const mapDispatchToProps = (dispatch) => {
  return {
    actionAddComment: (comment) => dispatch(actionAddComment(comment)),
    actionLoadMoreComment: () => dispatch(actionLoadMoreComment())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,

)(ListCommentComponent);

