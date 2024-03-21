
var value = ["Tổng giám đốc","Giám dốc","Trưởng phòng","Nhân viên"]

//ham hỗ trợ nhận vào tham số priorty và đưa ra chuỗi
export  function getValuePositionLevel(level){
  return level?value[level]:"Nhân viên";
}

