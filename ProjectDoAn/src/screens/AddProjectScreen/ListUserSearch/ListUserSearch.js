/**
 * Componet hiển thị danh sách bình luận
 */

import React from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet, View,

} from "react-native";
import { ItemUserSearch } from "./ItemUserSearch";
import { useSelector } from "react-redux";


const ListUserSearch = ({dataUserChoose,handleChooseUser}) => {
  const dataUserSearch = useSelector(state => state.user.dataUserSearch);
  const isSearchUser = useSelector(state => state.user.isSearchUser);

  return(
    <View>

  <FlatList
    data={dataUserSearch}
    renderItem={({item}) => <ItemUserSearch item={item} dataUserChoose={dataUserChoose} handleChooseUser={handleChooseUser}/>}
    scrollEnabled={false}
    keyExtractor={item => item.userId}
  />
      {isSearchUser?  <ActivityIndicator size="large" color="#4577ef" style={{position:"absolute", justifyContent:'center', alignSelf:'center'}}/>:null}
    </View>
  )
};

export default React.memo(ListUserSearch);

