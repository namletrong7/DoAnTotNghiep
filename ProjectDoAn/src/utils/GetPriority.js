
export  const dataPriority=[
  { label: 'Thấp', value: 0 },
  { label: 'Bình thường', value: 1 },
  { label: 'Cao', value: 2 },
  { label: 'Cấp bách', value: 3 },
  // Thêm các mục khác nếu cần
];




var priority = ["Thấp","Bình thường","Cao","Cấp bách"]
var colorPriority = ["#289601","#df8412","#ff1f3a","#1062dc"]
var colorBackgroundPriority = ["#d4eacc","#f9e6d0","#ffccd2","#e7effb"]
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


var listTypeNotifi = ["Đã tạo công việc mới","Đã yêu cầu báo cáo tiến độ trong ",
  "Đã báo cáo tiến độ trong","Đã bình luận vào bài viết","Đã chỉnh sửa thông tin công việc: ","Đã thêm bạn vào công việc: ",
"Đã hoàn thành công việc"]
export  function getTypeNotifi(type){
  return listTypeNotifi?listTypeNotifi[type]:"Thông báo";
}









// láy mã màu bát kỳ
// Hàm để tạo mã màu ngẫu nhiên
 export function getRandomColor() {
  // Chuỗi chứa tất cả các ký tự và số có thể tạo thành mã màu hex
  const characters = '0123456789ABCDEF';

  // Mã màu hex bắt đầu bằng ký tự '#' và sau đó là 6 ký tự ngẫu nhiên
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += characters[Math.floor(Math.random() * 16)];
  }

  return color;
}
//áy 2 chữ cái đầu tiên của chuỗi
 export function getFirstAndLastCharacters(inputString) {
   const words = inputString.split(' ');

   if (words.length >= 2) {
     const firstWord = words[0];
     const secondWord = words[1];

     return (firstWord.charAt(0) + secondWord.charAt(0)).toUpperCase();
   }

   return null;

}
