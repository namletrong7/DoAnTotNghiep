
export  const dataPriority=[
  { label: 'Thấp', value: 0 },
  { label: 'Bình thường', value: 1 },
  { label: 'Cao', value: 2 },
  { label: 'Cấp bách', value: 3 },
  // Thêm các mục khác nếu cần
];




var priority = ["Low","Medium","Hight","Urgent"]
var colorPriority = ["#289601","#df8412","#ff1f3a","#2f3033"]
var colorBackgroundPriority = ["#d4eacc","#f9e6d0","#ffccd2","#d4d4d5"]
//ham hỗ trợ nhận vào tham số priorty và đưa ra chuỗi
export  function getValuePriority(Priority){
  return Priority?priority[Priority]:"Low";
}
export  function getColorPriority(Priority){
  return Priority?colorPriority[Priority]:"#289601";
}
export  function getColorBackgroundPriority(Priority){
  return Priority?colorBackgroundPriority[Priority]:"#d4eacc";
}
// render ra state cua nhiệm vụ bao
var stateList = ["Cần làm","Đang làm","Hoàn thành"]
export  function getState(state){
  return state?stateList[state]:"Cần làm";
}


