/**
 * Componet hiển thị danh sách bình luận
 */

import React from "react";
import {
  FlatList,
  StyleSheet,

} from "react-native";
import { ItemUserChoose } from "./ItemUserChoose";


const ListUserChoose = ({dataUserChoose}) => {
  return(
  <FlatList
    data={dataUserChoose}
    renderItem={({item}) => <ItemUserChoose item={item}  />}
    scrollEnabled={false}
    horizontal={false}
    numColumns={2}
    keyExtractor={item => item.userId}
  />
  )
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginTop: 20,
  },

});
export default React.memo(ListUserChoose);

