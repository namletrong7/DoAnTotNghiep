

 export  function createListProjectDropDown(data){

  return  data.map(comment => ({
    value: comment.commentId,  // Giá trị bạn muốn chọn
    label: comment.fullName,   // Nhãn hiển thị trong DropDown
  }))

}
