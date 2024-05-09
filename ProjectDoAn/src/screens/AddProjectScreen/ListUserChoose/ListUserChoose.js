/**
 * Componet hiển thị danh sách bình luận
 */

import React from "react";
import {
  FlatList,
  StyleSheet,

} from "react-native";
import { ItemUserChoose } from "./ItemUserChoose";


const ListUserChoose = ({dataUserChoose,handleItem}) => {
  return(
  <FlatList
    data={dataUserChoose}
    renderItem={({item}) => <ItemUserChoose item={item} handleItem={handleItem}  />}
    scrollEnabled={false}
    horizontal={false}
    numColumns={4}
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

