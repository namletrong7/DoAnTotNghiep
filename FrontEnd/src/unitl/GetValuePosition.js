
var value = ["Tổng giám đốc","Giám dốc","Trưởng phòng","Nhân viên"]
//ham hỗ trợ nhận vào tham số priorty và đưa ra chuỗi
export  function getValuePositionLevel(level){
  return level?value[level]:"Nhân viên";
}
 export const dataListPosititon = [
  {
    id: 0,
    name: 'Tổng giám đốc',
  },
  {
    id: 1,
    name: 'Giám đốc',
  },
   {
     id: 2,
     name: 'Trưởng phòng',
   },
   {
     id: 3,
     name: 'Nhân viên',
   }
]
