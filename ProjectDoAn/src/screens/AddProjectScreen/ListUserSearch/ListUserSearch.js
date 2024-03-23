/**
 * Componet hiển thị danh sách bình luận
 */

import React from "react";
import {
  FlatList,
  StyleSheet,

} from "react-native";
import { ItemUserSearch } from "./ItemUserSearch";
import ItemProject from "../../../components/itemProject/ItemProject";
import { useSelector } from "react-redux";


const ListUserSearch = ({dataUserChoose,handleChooseUser}) => {
  const dataUserSearch = useSelector(state => state.user.dataUserSearch);

  return(
  <FlatList
    data={dataUserSearch}
    renderItem={({item}) => <ItemUserSearch item={item} dataUserChoose={dataUserChoose} handleChooseUser={handleChooseUser}/>}
    scrollEnabled={false}
    keyExtractor={item => item.userId}
  />
  )
};

export default React.memo(ListUserSearch);

