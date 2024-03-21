

 export  function createListProjectDropDown(data){

  return  data.map(item => ({
    value: item.projectId,  // Giá trị bạn muốn chọn
    label: item.nameProject,   // Nhãn hiển thị trong DropDown
  }))

}
